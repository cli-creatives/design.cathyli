import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] px-8 py-10 md:px-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif italic text-[var(--color-charcoal)] text-[1rem]">
          Cathy Chenxu Li
        </p>

        <ul className="flex items-center gap-6 text-sm text-[var(--color-warm-grey)]">
          <li>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-charcoal)] transition-colors duration-200"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://read.cv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-charcoal)] transition-colors duration-200"
            >
              Read.cv
            </Link>
          </li>
          <li>
            <Link
              href="mailto:hello@cathyli.design"
              className="hover:text-[var(--color-charcoal)] transition-colors duration-200"
            >
              Email
            </Link>
          </li>
        </ul>

        <p className="text-xs text-[var(--color-light-grey)]">
          © {year} Cathy Chenxu Li
        </p>
      </div>
    </footer>
  );
}
