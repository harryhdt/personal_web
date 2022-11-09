import Layout from "../components/_Layout";
export default function Portfolio() {
  return (
    <Layout title="Portfolio - Harry Hidayat">
      <div className="px-4 sm:px-8 md:px-16 lg:px-4 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="w-full max-w-5xl mx-auto">
          <div className="h-[calc(100vh-111px)] min-h-[500px] py-4 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Portfolio</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus ipsa non consectetur ullam sed magni debitis labore qui,
              iure, asperiores quasi, nam autem numquam placeat aperiam dolores
              aspernatur at illum.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
