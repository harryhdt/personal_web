import { IconSun, IconMoon, IconMenu, IconX } from "@supabase/ui";
import Link from "next/link";
import { use, useEffect, useState, useTransition } from "react";
import { Navlink } from "./Navlink";
export function Header() {
  const [mode, setMode] = useState("");
  //
  const toggleDarkMode = () => {
    if (
      localStorage.theme === "light" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };
  //
  const [showMenu, setShowMenu] = useState(false);
  //
  useEffect(() => {
    setShowMenu(window.innerWidth < 640 ? false : true);
    window.addEventListener("resize", () => {
      setShowMenu(window.innerWidth < 640 ? false : true);
    });
  }, []);
  //
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-zinc-900 bg-opacity-75 dark:bg-opacity-75 backdrop-blur-sm px-4 sm:px-8 md:px-16 lg:px-4 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between h-14">
        <div>
          <Link href="/">
            <h1 className="font-semibold rounded-md bg-amber-200 dark:bg-amber-400 text-zinc-800 py-px px-2 transform hover:-rotate-6 transition-transform">
              harryhdt.dev
            </h1>
          </Link>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="block ml-auto sm:hidden hover:bg-zinc-200 dark:hover:bg-zinc-800 py-1.5 px-2 rounded-md transition-colors"
        >
          {!showMenu ? (
            <IconMenu className="stroke-2" />
          ) : (
            <IconX className="stroke-2" />
          )}
        </button>
        <div
          className={
            (showMenu ? "max-h-[182px]" : "max-h-0") +
            " overflow-hidden fixed left-0 top-[56px] right-0 sm:static transition-[max-height] sm:transition-none duration-300"
          }
        >
          <div
            className="flex
            bg-white dark:bg-zinc-900 flex-col items-start border border-zinc-200 dark:border-zinc-800 p-2 px-4 space-y-2 bg-opacity-75 dark:bg-opacity-75 backdrop-blur-sm transition-colors
              sm:border-0 sm:bg-transparent sm:flex-row sm:items-center sm:space-x-8 lg:space-x-16 sm:space-y-0 sm:bg-opacity-100 sm:dark:bg-opacity-100 sm:backdrop-blur-none"
          >
            <Navlink url="/">Home</Navlink>
            <Navlink url="/about">About</Navlink>
            <Navlink url="/portfolio">Portfolio</Navlink>
            <Navlink url="/contact">Contact</Navlink>
            <button
              onClick={toggleDarkMode}
              className="hover:bg-zinc-200 dark:hover:bg-zinc-800 p-2 rounded-md transition-colors"
            >
              {mode === "dark" ? (
                <IconSun className="w-5 h-5 stroke-2" />
              ) : (
                <IconMoon className="w-5 h-5 stroke-2" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
