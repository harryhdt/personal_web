import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import "../styles/globals.css";

export default function App(props) {
  const { Component, pageProps } = props;
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <>
      <NextNProgress color="#0d9488" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  );
}
