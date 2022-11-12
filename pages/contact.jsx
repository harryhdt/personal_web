import Layout from "../components/_Layout";
export default function Contact() {
  return (
    <Layout
      title="Contact - Harry Hidayat"
      description=" We can discuss about projects, work or somethings like that, for
              the first, please to contact me using email form below."
    >
      <div className="px-4 sm:px-8 md:px-16 lg:px-4 dark:border-zinc-800 transition-colors">
        <div className="w-full max-w-5xl mx-auto">
          <div className="min-h-[calc(100vh-111px)] py-4 sm:py-8 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Contact</h2>
            <p className="text-base sm:text-lg">
              We can discuss about projects, work or somethings like that, for
              the first, please to contact me using email form below.
              <br />
              <span className="italic opacity-50">(Not ready yet)</span>
            </p>
            <form
              action="#"
              method="POST"
              className="space-y-4 w-full max-w-lg"
            >
              <div className="relative">
                <label htmlFor="name" className="text-sm font-semibold">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="block w-8/12 mt-2 py-2.5 px-3 rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-base transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="block w-8/12 mt-2 py-2.5 px-3 rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-base transition-colors"
                  placeholder="john@doe.com"
                />
              </div>
              <div className="relative">
                <label htmlFor="subject" className="text-sm font-semibold">
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="block w-8/12 mt-2 py-2.5 px-3 rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-base transition-colors"
                  placeholder="About Work"
                />
              </div>
              <div className="relative">
                <label htmlFor="body" className="text-sm font-semibold">
                  Body <span className="text-red-600">*</span>
                </label>
                <textarea
                  className="block resize-none w-full mt-2 py-2.5 px-3 rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-base transition-colors"
                  placeholder="Your message here..."
                  rows={6}
                ></textarea>
              </div>
              <button className="bg-green-600 dark:bg-green-700 py-2.5 px-6 rounded-md hover:bg-green-700 dark:hover:bg-green-600 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-700 transition-colors">
                <span className="font-medium text-white">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
