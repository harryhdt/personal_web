import Layout from "../components/_Layout";
export default function About() {
  return (
    <Layout
      title="Portofolio - Harry Hidayat"
      description="Here is some project i was build, is a web and mobile application."
    >
      <div className="px-4 sm:px-8 md:px-16 lg:px-4 dark:border-zinc-800 transition-colors">
        <div className="w-full max-w-5xl mx-auto">
          <div className="min-h-[calc(100vh-111px)] py-4 sm:py-8 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Portofolio</h2>
            <p className="text-base sm:text-lg">
              Here is some project i was build, is a web and mobile application.
            </p>
            <p className="text-base sm:text-lg italic opacity-50">
              Under construction...
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
