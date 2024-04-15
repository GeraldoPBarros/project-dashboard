import React from "react";
import GlobalStyles from "../styles/global";
import { Header } from "../components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <Header />
      </header>
      <body>{children}</body>
      <GlobalStyles />
    </html>
  );
}
