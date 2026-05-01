import Link from "next/link";

interface Props {
  href?: string;
  external?: boolean;
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
  external = false,
  variant = "outline-white",
  children,
  className = "",
}: Props) {
  const colorClasses =
    variant === "outline-white"
      ? "border-white text-white"
      : "border-black text-black hover:bg-black hover:text-white transition-colors duration-300";

  const inner = (
    <>
      <span className="font-syne font-extrabold text-[16px] md:text-[20px] leading-none">
        {children}
      </span>
      <ArrowIcon />
    </>
  );

  const cls = `inline-flex items-center gap-4 md:gap-6 border px-6 py-5 md:px-12 md:py-[30px] ${colorClasses} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {inner}
        </a>
      );
    }
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
