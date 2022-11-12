import Layout from "../components/_Layout";
export default function About() {
  return (
    <Layout
      title="About - Harry Hidayat"
      description="I am Harry Hidayat, a Junior Fullstack Software Engineer with 2 years experience."
    >
      <div className="px-4 sm:px-8 md:px-16 lg:px-4 dark:border-zinc-800 transition-colors">
        <div className="w-full max-w-5xl mx-auto">
          <div className="min-h-[calc(100vh-111px)] py-4 sm:py-8 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">About</h2>
            <p className="text-base sm:text-lg">
              Hello There,
              <br />
              I am Harry Hidayat, a Junior Fullstack Software Engineer. I have
              been programming since 2019. Especially on Web and Mobile
              Development.
              <br />
              Currently (Nov, 2022), I am Confident to become a Frontend
              Engineer, not only using common frontend tools, but also using
              most of the coder tools.
              <br />I learn every day, to make me grow and gain more experience.
            </p>
            <p className="text-base sm:text-lg">
              I have some skill, here is,
              <br />
              <br />
              1. Fullstack Web
              <br />
              - PHP Laravel
              <br />
              - Inertia js
              <br />
              - Svelte js
              <br />
              - Alpine js
              <br />
              - Tailwind css
              <br />
              - IBM Carbon Design System
              <br />
              - MySQL
              <br />
              <br />
              2. Frontend Web
              <br />
              - Svelte (& Kit)
              <br />
              - React (& Next)
              <br />
              - Alpine js
              <br />
              - Tailwind css
              <br />
              - Some UI Library
              <br />
              <br />
              3. Frontend Mobile
              <br />
              - Flutter (Dart)
              <br />
              <br />
              4. Backend Developemnt
              <br />
              - Laravel
              <br />
              - Node js (Express, Adonis)
              <br />
              <br />
              5. Cloud
              <br />
              - Digitalocean (VPS)
              <br />
              - Domainesia (Hosting & Domain)
              <br />- Supabase & Firebase
            </p>
            <p className="text-base sm:text-lg">
              And i always open to learn new technology if it needed.
            </p>
            <p className="text-base sm:text-lg">
              My current setup is Lenovo Ideapad Slim 3, with 512 GB SSD, 8 GB
              RAM, AMD Ryzen 5 4000 Series, Then, I am using Pop OS from
              System76, is a Linux distribution.
              <br />
              For doing code, i am using Visual Studio Code, then Firefox or
              Chrome for browser.
            </p>
            <p className="text-base sm:text-lg">
              You can connect with me, below is my social media
              <br />- Linkedin{" "}
              <a
                className="font-medium text-green-700 dark:text-green-500 hover:underline transition-colors"
                href="https://linkedin.com/in/harryhdt"
                target="_blank"
                rel="noreferrer"
              >
                @harryhdt
              </a>
              <br />- Telegram{" "}
              <a
                className="font-medium text-green-700 dark:text-green-500 hover:underline transition-colors"
                href="https://t.me/harryhdt"
                target="_blank"
                rel="noreferrer"
              >
                @harryhdt
              </a>
              <br />- Github{" "}
              <a
                className="font-medium text-green-700 dark:text-green-500 hover:underline transition-colors"
                href="https://github.com/harryhdt"
                target="_blank"
                rel="noreferrer"
              >
                @harryhdt
              </a>
              <br />
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
