import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chief Chamuka VI — Official Portfolio | Preserving Lenje Heritage, Advancing Modern Equity",
  description:
    "Official website of His Royal Highness Chief Chamuka VI, traditional leader of the Lenje people in Chisamba District, Zambia. Champion of gender equality, land rights, and customary law reform.",
  keywords: [
    "Chief Chamuka VI",
    "Lenje",
    "Chisamba",
    "Zambia",
    "traditional leader",
    "gender equality",
    "HeForShe",
    "land rights",
    "customary law",
  ],
  openGraph: {
    title: "Chief Chamuka VI — Official Portfolio",
    description: "Preserving Lenje Heritage. Advancing Modern Equity.",
    type: "website",
    locale: "en_ZM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme) {
                  document.documentElement.setAttribute('data-theme', theme);
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen" style={{ fontFamily: "var(--font-body)" }}>
        {children}
      </body>
    </html>
  );
}
