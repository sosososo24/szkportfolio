interface Props {
  company: string;
  title: string;
}

export function WorkDetailMv({ company, title }: Props) {
  return (
    <section className="flex items-center justify-center px-10 w-full">
      <div className="bg-thin-orange flex flex-1 flex-col items-center justify-center overflow-clip py-8 rounded-[20px]">
        <div className="inner-md w-full">
          <div className="pb-5 border-b border-black">
            <p className="font-noto font-medium text-[21px] text-black leading-normal">
              {company}
            </p>
            <h1 className="font-noto font-black text-[clamp(28px,3.3vw,48px)] text-black leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
