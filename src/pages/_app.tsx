import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import Footer from "@/components/footer/footer";
import "../styles/globals.scss";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const navLinks = [
  { name: "About", path: "about" },
  { name: "Projects", path: "projects" },
  { name: "Get Involved", path: "get-involved" },
];

function getTheme(path: string) {
  if (path === "/about" || path === "/projects" || path === "/get-involved") {
    return "dark";
  } else {
    return "light";
  }
}

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();
  const theme = getTheme(router.pathname);

  return (
    <div className={`${inter.variable}`} style={{ position: "relative" }}>
      <Component {...pageProps} />
      <Footer nav={navLinks} theme={theme} />
    </div>
  );
}
