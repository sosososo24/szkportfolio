import Link from "next/link";

interface Props {
  href?: string;
  variant?: "outline-white" | "outline-black";
  children: React.ReactNode;
  className?: string;
}

function ArrowIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 13H22M22 13L15 6M22 13L15 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  href,
  variant = "outline-white",
  children,
  className = "",
}: Props) {
  const colorClasses =
    variant === "outline-white"
      ? "border-white text-white"
      : "border-black text-black";

  const inner = (
    <>
      <span className="font-syne font-extrabold text-[20px] leading-none whitespace-nowrap">
        {children}
      </span>
      <ArrowIcon />
    </>
  );

  const cls = `inline-flex items-center gap-6 border px-12 py-[30px] ${colorClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" className={cls}>
      {inner}
    </button>
  );
}
