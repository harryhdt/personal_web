import Head from "next/head";
import Footer from "./Footer";
import { Header } from "./Header";

export default function Layout({ title, children }) {
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-400 min-h-screen transition-colors">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
