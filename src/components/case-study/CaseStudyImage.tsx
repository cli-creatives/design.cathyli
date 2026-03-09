interface Props {
  /** Short descriptive label shown while the image is a placeholder */
  label: string;
  /** CSS aspect-ratio value, e.g. "16/9" (default) or "4/3" */
  aspectRatio?: string;
  className?: string;
}

/**
 * Image placeholder for case study pages.
 * Swap in a real <img> or <Image> by replacing this component —
 * the `label` prop becomes the alt text.
 */
export default function CaseStudyImage({
  label,
  aspectRatio = "16/9",
  className = "",
}: Props) {
  return (
    <figure
      className={`w-full rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-cream)] flex items-center justify-center ${className}`}
      style={{ aspectRatio }}
      aria-label={label}
    >
      <figcaption className="font-mono text-xs text-[var(--color-light-grey)] tracking-wide px-6 text-center">
        {label}
      </figcaption>
    </figure>
  );
}
