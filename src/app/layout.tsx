import type React from "react";
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajutmomen | Platform Undangan Pernikahan Digital",
  description: "Platform undangan pernikahan digital yang praktis dan modern",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className} cz-shortcut-listen="true">
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
