interface Props {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: Props) {
  return (
    <div className="flex flex-col gap-3 px-8 py-7 border border-[var(--color-border)] rounded-2xl bg-[var(--color-warm-white)]">
      <span
        className="font-serif leading-none text-[var(--color-charcoal)]"
        style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
      >
        {value}
      </span>
      <span className="text-sm text-[var(--color-warm-grey)] leading-relaxed">
        {label}
      </span>
    </div>
  );
}
