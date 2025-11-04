import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Element, Root } from "hast";
import type { Parent } from "unist";

const wrapTables = () => (tree: Root) => {
  visit(tree, "element", (node, index, parent) => {
    if (!parent || typeof index !== "number") {
      return;
    }

    const element = node as Element;

    if (element.tagName !== "table") {
      return;
    }

    const wrapper: Element = {
      type: "element",
      tagName: "div",
      properties: { className: ["blog-table"] },
      children: [element],
    };

    const parentNode = parent as Parent;
    parentNode.children.splice(index, 1, wrapper);
  });
};

const markdownToHtml = async (markdown: string) => {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "append",
      properties: {
        className: ["blog-heading-anchor"],
        "aria-label": "Permalink for this heading",
      },
      content: () => ({
        type: "element",
        tagName: "span",
        properties: {
          className: ["blog-heading-anchor__icon"],
          "aria-hidden": "true",
        },
        children: [{ type: "text", value: "#" }],
      }),
    })
    .use(wrapTables)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return result.toString();
};

export default markdownToHtml;
