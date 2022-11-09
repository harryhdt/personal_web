import Head from "next/head";
import Footer from "./Footer";
import { Header } from "./Header";

export default function Layout({
  title = "Harry Hidayat",
  description = "Junior Fullstack Software Engineer",
  children,
}) {
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 min-h-screen transition-colors">
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#0f766e" />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
