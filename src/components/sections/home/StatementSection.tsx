import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollTicker } from "@/components/ui/ScrollTicker";

const SKILLS_TICKER_ITEMS = [
  { text: "FRONTEND ENGINEERING", color: "#ffffff" },
  { text: "WEB DESIGN", color: "#f8a450" },
];

export function StatementSection() {
  return (
    <section className="relative bg-white pb-35">
      <div className="inner-md pt-20">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-[81px]">
          {/* Left: Logo + Title */}
          <SectionTitle lines={["MY", "STATE", "MENT"]} />

          {/* Right: Catchcopy + Body */}
          <div className="flex flex-1 flex-col gap-8 min-w-0">
            <p className="text-statement-lead font-noto font-bold text-orange leading-[2]">
              「作る」のその先へ。
              <br />
              事業と共に成長するWebサイトを育てる。
            </p>
            <div className="flex flex-col gap-6 text-statement-body font-noto font-normal text-black leading-normal">
              <p>はじめまして。Webデザイナー・コーダーの鈴木翔梧と申します。</p>
              <p>
                実務において私が最も大切にしているのは、「ユーザーを迷わせないシンプルなデザイン」と「将来の更新を見据えたコンポーネント設計」です。
                <br />
                「作って終わり」ではなく、継続的な改善を通じてサービスを育てたいという思いから、現在はReactやNext.jsなどの技術も習得中です。
              </p>
              <p>
                「作る」から「運用・改善」まで伴走し、ビジネスの成長とユーザー体験の向上に貢献します。
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollTicker
        items={SKILLS_TICKER_ITEMS}
        bgColor="#282828"
        fontSize="3rem"
        speed={0.7}
        className="absolute bottom-0 left-0 w-full translate-y-[-50%]"
      />
    </section>
  );
}
