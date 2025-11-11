import type { Metadata } from "next";

export const siteConfig = {
  siteName: "Eatibo",
  siteUrl: "https://www.eatibo.com",
  defaultDescription:
    "Your Lifelong Nutrition Partner. Point your camera at a meal or ingredient list and Eatibo reveals calories, macros, additives, allergens and health risks within seconds, tailored to your dietary rules.",
  defaultKeywords: [
    "Eatibo",
    "nutrition app",
    "calorie tracker",
    "AI diet coach",
    "allergen scanner",
    "health tech",
    "food logging",
    "AI nutrition assistant",
    "meal tracking",
  ],
  socialImage: "/assets/images/media/img_07.jpg",
};

type CreateMetadataOptions = {
  title: string;
  description?: string;
  keywords?: string[];
  path?: string;
  imagePath?: string;
  robots?: Metadata["robots"];
};

export const createMetadata = ({
  title,
  description = siteConfig.defaultDescription,
  keywords = siteConfig.defaultKeywords,
  path = "/",
  imagePath,
  robots = {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}: CreateMetadataOptions): Metadata => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${siteConfig.siteUrl}${normalizedPath}`;
  const imageUrl = imagePath
    ? `${siteConfig.siteUrl}${imagePath}`
    : `${siteConfig.siteUrl}${siteConfig.socialImage}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.siteName} social share image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots,
  };
};
