import { TitleMark } from "@/components/ui/TitleMark";

interface Props {
  lines: string[];
  markFill?: string;
  textColor?: string;
  className?: string;
}

export function SectionTitle({
  lines,
  markFill,
  textColor = "text-black",
  className = "",
}: Props) {
  return (
    <div className={`flex flex-col gap-4 shrink-0 ${className}`}>
      <TitleMark fill={markFill} className="w-[70px] h-auto" />
      <h2
        className={`text-statement-title font-syne font-extrabold leading-none ${textColor}`}
      >
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    </div>
  );
}
