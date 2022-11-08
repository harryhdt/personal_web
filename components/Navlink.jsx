import Link from "next/link";
import { useRouter } from "next/router";

export function Navlink({ url, children }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Link href={url}>
      <span
        className={
          (currentRoute === url
            ? "text-zinc-800 hover:text-zinc-800 dark:text-zinc-200 dark:hover:text-zinc-200"
            : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200") +
          " text-sm font-medium transition-colors"
        }
      >
        {children}
      </span>
    </Link>
  );
}
