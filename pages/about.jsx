import Layout from "../components/_Layout";
export default function About() {
  return (
    <Layout title="About - Harry Hidayat">
      <div className="px-4 sm:px-8 md:px-16 lg:px-4 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="w-full max-w-5xl mx-auto">
          <div className="h-[calc(100vh-111px)] min-h-[500px] py-4">About</div>
        </div>
      </div>
    </Layout>
  );
}
