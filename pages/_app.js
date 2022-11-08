import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import "../styles/globals.css";

export default function App(props) {
  const { Component, pageProps } = props;
  useEffect(() => {
    if (
      localStorage.theme === "light" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <>
      <NextNProgress color="#2563eb" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  );
}
