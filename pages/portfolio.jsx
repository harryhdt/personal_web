import { IconCode } from "@supabase/ui";
import { Head } from "next/document";
import Layout from "../components/_Layout";
export default function Portfolio() {
  return (
    <Layout title="Portfolio - Harry Hidayat">
      <div className="px-4 sm:px-8 md:px-16 lg:px-4 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="w-full max-w-5xl mx-auto">
          <div className="h-[calc(100vh-111px)] min-h-[500px] py-4">
            Portfolio
          </div>
        </div>
      </div>
    </Layout>
  );
}
