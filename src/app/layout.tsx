import "../styles/index.scss";
import "../../public/assets/css/responsive.css";

import { Manrope } from "next/font/google";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GoogleAnalytics } from '@next/third-parties/google'

const manrope = Manrope({ subsets: ["latin"], display: "swap", weight: ["200", "300", "400", "500", "600", "700", "800"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <body className={manrope.className} suppressHydrationWarning>
        {children}
      </body>
      <GoogleAnalytics gaId="G-2JZ62NPM2N" />
    </html>
  );
}
