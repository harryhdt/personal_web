import Layout from "../components/_Layout";
export default function About() {
  return (
    <Layout
      title="About - Harry Hidayat"
      description="I am Harry Hidayat, a Junior Fullstack Software Engineer with 2 years experience."
    >
      <div className="px-4 sm:px-8 md:px-16 lg:px-4 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="w-full max-w-5xl mx-auto">
          <div className="h-[calc(100vh-111px)] min-h-[500px] py-4 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">About</h2>
            <p className="text-base sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              consequuntur vel maiores nam assumenda id praesentium doloremque
              dolorum, suscipit dolore asperiores veniam, quos possimus repellat
              ducimus error culpa exercitationem deserunt.
            </p>
            <p className="text-base sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto a assumenda quasi rerum itaque? Rem vitae vero nam
              nihil excepturi consequuntur harum illo assumenda blanditiis error
              doloribus, eum optio suscipit!
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
