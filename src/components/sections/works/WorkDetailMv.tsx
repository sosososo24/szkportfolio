interface Props {
  company: string;
  title: string;
}

export function WorkDetailMv({ company, title }: Props) {
  return (
    <section className="flex items-center justify-center px-10 w-full">
      <div className="flex flex-1 flex-col items-center justify-center py-8">
        <div className="inner-md w-full">
          <div className="pb-5 border-b border-black">
            <p className="font-noto font-medium text-[16px] text-black leading-normal">
              {company}
            </p>
            <h1 className="font-noto font-black text-[clamp(22px,2.5vw,36px)] text-black leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
