import { IconHeart } from "@supabase/ui";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-4 border-t border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="w-full max-w-5xl mx-auto text-center py-4 text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <Link href="/">
          <span className="font-medium text-green-600 dark:text-green-500 hover:underline transition-colors">
            &#123; harryhdt.dev &#125;
          </span>
        </Link>{" "}
        made with{" "}
        <IconHeart className="stroke-2 text-red-600 inline w-[14px] h-[14px]" />{" "}
        Love.
      </div>
    </div>
  );
}
