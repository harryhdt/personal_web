import Layout from "../components/_Layout";
import LumenIcon from "../components/Icons/Lumen";
import MysqlIcon from "../components/Icons/Mysql";
import SvelteIcon from "../components/Icons/Svelte";
import LaravelIcon from "../components/Icons/Laravel";
import AlpineIcon from "../components/Icons/Alpine";
import TailwindIcon from "../components/Icons/Tailwind";
import IBMIcon from "../components/Icons/IBM";

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
            <div className="flex flex-wrap items-stretch justify-center sm:justify-start gap-4">
              <div className="space-y-4 flex flex-col justify-between py-2.5 px-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 transition-colors w-full max-w-[360px] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)]">
                <div className="space-y-4">
                  <div className="aspect-video">
                    <img
                      src="/m2fleet.png"
                      alt="M2Fleet"
                      className="w-full h-auto shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">M2Fleet</h3>
                    <p className="text-sm">
                      Is a website for company profile, with elegant UI. With
                      blogging features.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <MysqlIcon />
                  <LumenIcon />
                  <SvelteIcon />
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-between py-2.5 px-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 transition-colors w-full max-w-[360px] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)]">
                <div className="space-y-4">
                  <div className="aspect-video">
                    <img
                      src="/rfidsolutions.png"
                      alt="RFIDSolutions"
                      className="w-full h-auto shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">RFIDSolutions</h3>
                    <p className="text-sm">
                      Is a website for company profile, with elegant and luxury
                      UI. With blogging features.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <MysqlIcon />
                  <LumenIcon />
                  <SvelteIcon />
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-between py-2.5 px-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 transition-colors w-full max-w-[360px] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)]">
                <div className="space-y-4">
                  <div className="aspect-video">
                    <img
                      src="/spbe-kabupaten-tanah-bumbu.png"
                      alt="SPBE Kabupaten Tanah Bumbu"
                      className="w-full h-auto shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      SPBE Kabupaten Tanah Bumbu
                    </h3>
                    <p className="text-sm">
                      Is a System Information Web Based, for management data,
                      With QR features, Excel Export & Import.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <MysqlIcon />
                  <LaravelIcon />
                  <SvelteIcon />
                  <AlpineIcon />
                  <IBMIcon />
                  <TailwindIcon />
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-between py-2.5 px-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 transition-colors w-full max-w-[360px] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)]">
                <div className="space-y-4">
                  <div className="aspect-video">
                    <img
                      src="/itechpoliban.png"
                      alt="iTech Poliban"
                      className="w-full h-auto shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">iTech Poliban</h3>
                    <p className="text-sm">
                      Is a website Community Profile, with management data like
                      members, and etc. With blogging, auth, and many more
                      features.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <MysqlIcon />
                  <LaravelIcon />
                  <SvelteIcon />
                  <AlpineIcon />
                  <IBMIcon />
                  <TailwindIcon />
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-between py-2.5 px-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 transition-colors w-full max-w-[360px] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)]">
                <div className="space-y-4">
                  <div className="aspect-video">
                    <img
                      src="/itechpoliban-competition-1.png"
                      alt="iTech Poliban Competition #1"
                      className="w-full h-auto shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      iTech Poliban Competition #1
                    </h3>
                    <p className="text-sm">
                      Is a website for show information about competition, With
                      google docs embedded features.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <MysqlIcon />
                  <LaravelIcon />
                  <AlpineIcon />
                  <TailwindIcon />
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-between py-2.5 px-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 transition-colors w-full max-w-[360px] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)]">
                <div className="space-y-4">
                  <div className="aspect-video">
                    <img
                      src="/baas-harry-hidayat.png"
                      alt="BaaS Harry Hidayat"
                      className="w-full h-auto shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      BaaS Harry Hidayat
                    </h3>
                    <p className="text-sm">
                      Is a Backend Service with dashboard, used for frontend web
                      like personal web and etc. With email delivery,{" "}
                      <s>content reactions, comment box</s> features.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <MysqlIcon />
                  <LaravelIcon />
                  <SvelteIcon />
                  <IBMIcon />
                  <TailwindIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
