import { TitleMark } from "@/components/ui/TitleMark";

interface Props {
  title: string;
  description?: string;
}

export function SubPageMv({ title, description }: Props) {
  return (
    <section className="flex items-center justify-center px-10 w-full">
      <div className="bg-thin-orange flex flex-1 flex-col items-center justify-center overflow-clip py-14 rounded-[20px]">
        <div className="inner-md w-full">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-[clamp(3rem,_11.5vw,_220px)] md:justify-center">
            <div className="flex flex-col gap-4 shrink-0">
              <TitleMark fill="#f8a450" className="w-[70px] h-auto" />
              <h1 className="text-statement-title font-syne font-extrabold leading-none text-black">
                {title}
              </h1>
            </div>
            {description && (
              <p className="md:flex-1 font-noto font-normal text-statement-body text-black leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
