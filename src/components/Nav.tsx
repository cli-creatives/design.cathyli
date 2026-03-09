"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/projects", label: "Work" },
    { href: "/about", label: "About" },
    { href: "mailto:hello@cathyli.design", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12">
      <Link
        href="/"
        className="text-[1.1rem] italic text-[var(--color-charcoal)] hover:opacity-70 transition-opacity duration-200" style={{ fontFamily: "var(--font-instrument)" }}
      >
        Cathy Chenxu Li
      </Link>

      <ul className="flex items-center gap-8">
        {links.map(({ href, label }) => {
          const isActive =
            href.startsWith("mailto") ? false : pathname === href || pathname.startsWith(href + "/");
          return (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm tracking-wide transition-opacity duration-200 ${
                  isActive
                    ? "opacity-100 text-[var(--color-charcoal)]"
                    : "opacity-60 hover:opacity-100 text-[var(--color-charcoal)]"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
