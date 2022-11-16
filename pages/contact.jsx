import { X } from "react-feather";
import { useState } from "react";
import Layout from "../components/_Layout";
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState("");
  const [successAlert, setSuccessAlert] = useState("");
  const [errors, setErrors] = useState({});
  //
  const sendEmailForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessAlert("");
    setErrorAlert("");
    setErrors({});
    //
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      body: e.target.body.value,
    };
    //
    let token = "Rc5apIkjdH3jRBy1668573018tlmYRvnLbku1lFk";
    let email_sender_api =
      "https://mailer.harryhdt.dev/api/send-email/" + token;
    //
    const res = await fetch(email_sender_api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (String(res.status)[0] != 2) {
      setErrorAlert(result.message);
      //
      if (result.errors) {
        Object.keys(result.errors).forEach((key) => {
          result.errors[key] = result.errors[key][0];
        });
        setErrors(result.errors);
      }
    } else {
      setSuccessAlert(result.message);
      e.target.reset();
    }
    setLoading(false);
  };
  //
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
            </p>
            <form
              onSubmit={sendEmailForm}
              method="POST"
              className="space-y-4 w-full max-w-lg"
            >
              {errorAlert && (
                <div className="relative">
                  <div className="error-alert relative bg-red-200 dark:bg-red-700 text-red-800 dark:text-red-200 rounded-md py-3 pl-4 pr-8">
                    <button
                      className="absolute right-3 top-2 hover:bg-red-500 dark:hover:bg-red-600 transition-colors"
                      onClick={() => setErrorAlert(false)}
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <span>{errorAlert}</span>
                  </div>
                </div>
              )}
              {successAlert && (
                <div className="relative">
                  <div className="error-alert relative bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 rounded-md py-3 pl-4 pr-8">
                    <button
                      className="absolute right-3 top-2 hover:bg-green-500 dark:hover:bg-green-600 transition-colors"
                      onClick={() => setSuccessAlert(false)}
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <span>{successAlert}</span>
                  </div>
                </div>
              )}
              <div className="relative">
                <label htmlFor="name" className="text-sm font-semibold">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-8/12 mt-2 py-2.5 px-3 rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-base transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <span className="text-sm text-red-600 dark:text-red-700 font-medium block mt-2">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="relative">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-8/12 mt-2 py-2.5 px-3 rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-base transition-colors"
                  placeholder="john@doe.com"
                />
                {errors.email && (
                  <span className="text-sm text-red-600 dark:text-red-700 font-medium block mt-2">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="relative">
                <label htmlFor="subject" className="text-sm font-semibold">
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block w-8/12 mt-2 py-2.5 px-3 rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-base transition-colors"
                  placeholder="About Work"
                />
                {errors.subject && (
                  <span className="text-sm text-red-600 dark:text-red-700 font-medium block mt-2">
                    {errors.subject}
                  </span>
                )}
              </div>
              <div className="relative">
                <label htmlFor="body" className="text-sm font-semibold">
                  Body <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="body"
                  className="block resize-none w-full mt-2 py-2.5 px-3 rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-base transition-colors"
                  placeholder="Your message here..."
                  rows={6}
                ></textarea>
                {errors.body && (
                  <span className="text-sm text-red-600 dark:text-red-700 font-medium block mt-2">
                    {errors.body}
                  </span>
                )}
              </div>
              <button className="bg-green-600 dark:bg-green-700 py-2.5 px-6 rounded-md hover:bg-green-700 dark:hover:bg-green-600 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-700 transition-colors">
                <span className="font-medium text-white">
                  {loading ? "Sending..." : "Submit"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
