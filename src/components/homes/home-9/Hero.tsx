import Image from "next/image";
import Link from "next/link";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";

import thumb from "@/assets/images/assets/ils_24.svg";

type HeroProps = {
  hero: LocaleDictionary["hero"];
  anchors: { download: string; features: string } & Record<string, string>;
};

const Hero = ({ hero, anchors }: HeroProps) => {
  const title = [hero.title, hero.highlight, hero.titleSuffix]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className="hero-banner-nine z-1 position-relative pt-225 md-pt-150 pb-225 xl-pb-200 md-pb-120"
      id={anchors.home ?? "home"}
    >
      <div className="container lg">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <p className="badge text-uppercase letter-spacing-2 text-white-50">
              {hero.badge}
            </p>
            <h1 className="hero-heading font-Playfair">
              {title}
            </h1>
            <p className="fs-24 pt-35 lg-pt-30 pb-30 pe-xxl-5">{hero.description}</p>
            <div className="d-flex flex-wrap align-items-center gap-3">
              <Link href={`#${anchors.download}`} className="btn-eighteen">
                {hero.primaryCta}
              </Link>
              <Link
                href={`#${anchors.features}`}
                className="btn-transparent text-white text-decoration-underline"
              >
                {hero.secondaryCta}
              </Link>
            </div>
            <p className="fs-22 pt-40 lg-pt-20">
              {hero.note}
            </p>
            <div className="d-flex align-items-center gap-3 text-white-50">
              <div className="display-6 fw-600 text-white">{hero.rating.value}</div>
              <div>
                <div className="fw-500 text-white">{hero.rating.label}</div>
                <div className="small text-white-50">{hero.rating.caption}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="illustration">
          <Image src={thumb} alt={hero.visual.title} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
