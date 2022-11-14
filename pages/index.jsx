import { Code } from "react-feather";
import Layout from "../components/_Layout";
export default function Home() {
  return (
    <Layout
      title="Harry Hidayat"
      description="a Junior Full Stack Software Engineer, focused on Web and Mobile development. With more than 2 years experience"
    >
      <div className="px-4 sm:px-8 md:px-16 lg:px-4 transition-colors">
        <div className="w-full max-w-5xl mx-auto">
          <div className="h-[calc(100vh-111px)] min-h-[500px] flex items-center justify-center">
            <div className="flex flex-col items-center -mt-20 relative">
              <Code className="stroke-1 w-60 sm:w-80 h-auto absolute text-green-400 -mr-6" />
              <Code className="stroke-1 w-60 sm:w-80 h-auto text-amber-400 -ml-6" />
              <h2 className="text-3xl sm:text-4xl font-semibold">
                <span className="bg-green-300 dark:bg-green-500 py-px px-2 text-zinc-900">
                  Harry
                </span>{" "}
                <span className="bg-amber-300 dark:bg-amber-500 py-px px-2 text-zinc-900">
                  Hidayat
                </span>
              </h2>
              <p className="max-w-xl text-center mt-4">
                a Junior Full Stack Software Engineer, focused on Web and Mobile
                development. With more than{" "}
                {new Date().getFullYear() - 2019 - 1} years experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
