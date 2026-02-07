import Image from "next/image";
import Link from "next/link";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";

import thumb from "@/assets/images/assets/main-image.png";
import { buildAppEntryUrl } from "@/lib/marketing";

type HeroProps = {
  hero: LocaleDictionary["hero"];
  anchors: { download: string; features: string } & Record<string, string>;
};

const Hero = ({ hero, anchors }: HeroProps) => {
  const appHref = buildAppEntryUrl("hero_start_for_free");
  const title = [hero.title, hero.highlight, hero.titleSuffix]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className="hero-banner-nine hero-banner-nine--enhanced z-1 position-relative pt-225 md-pt-150 pb-225 xl-pb-200 md-pb-120"
      id={anchors.home ?? "home"}
    >
      <div className="container lg">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <p className="badge hero-badge--animated text-uppercase letter-spacing-2 text-white-50">
              {hero.badge}
            </p>
            <h1 className="hero-heading hero-heading--animated font-Playfair">
              {title}
            </h1>
            <p className="hero-description--animated fs-24 pt-35 lg-pt-30 pb-30 pe-xxl-5">{hero.description}</p>
            <div className="hero-cta--animated d-flex flex-wrap align-items-center gap-3">
              <Link href={appHref} className="btn-eighteen hero-primary-cta">
                Start for Free
              </Link>
              <Link
                href={`#${anchors.download}`}
                className="btn-eighteen-secondary hero-secondary-cta"
              >
                Download APP
              </Link>
            </div>
            {/* <p className="fs-22 pt-40 lg-pt-20">
              {hero.note}
            </p> */}
            <div className="hero-rating--animated d-flex pt-40 align-items-center gap-3 text-white-50">
              <div className="display-6 fw-600 text-white">{hero.rating.value}</div>
              <div>
                <div className="fw-500 text-white">{hero.rating.label}</div>
                <div className="small text-white-50">{hero.rating.caption}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="illustration hero-visual--animated">
          <Image src={thumb} alt={hero.visual.title} className="hero-visual-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
