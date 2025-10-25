import type { Metadata } from "next";

export const siteConfig = {
  siteName: "Hairwow",
  siteUrl: "https://hairwow.org",
  defaultDescription:
    "Hairwow delivers premium hair care solutions, styling expertise, and salon-grade treatments designed to help clients look and feel confident every day.",
  defaultKeywords: [
    "hair care",
    "hair styling",
    "salon",
    "beauty services",
    "Hairwow",
  ],
  socialImage: "/assets/images/media/img_07.jpg",
};

type CreateMetadataOptions = {
  title: string;
  description?: string;
  keywords?: string[];
  path?: string;
  imagePath?: string;
};

export const createMetadata = ({
  title,
  description = siteConfig.defaultDescription,
  keywords = siteConfig.defaultKeywords,
  path = "/",
  imagePath,
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
  };
};
