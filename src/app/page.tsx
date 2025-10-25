import { redirect } from "next/navigation";

import { defaultLocale } from "@/i18n/config";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow | Salon Excellence for Every Hair Journey",
  description:
    "Hairwow delivers professional hair services, innovative treatments, and stylist expertise that empower you to express your best self.",
  path: "/",
});

const Page = () => {
  redirect(`/${defaultLocale}`);
};

export default Page;
