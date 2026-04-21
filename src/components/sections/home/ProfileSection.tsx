import Image from "next/image";

import { TitleMark } from "@/components/ui/TitleMark";

const PROFILE_IMAGE = "/images/profile_portrait.png";

interface CareerItem {
  year: string;
  isPresent?: boolean;
  imageSrc: string;
  title: string;
  body: string;
}

const CAREER_ITEMS: CareerItem[] = [
  {
    year: "2015",
    imageSrc: "/images/profile_career2015.png",
    title: "拓殖大学卒業後、\nミサワホーム株式会社に新卒入社。",
    body: "住宅展示場での接客をはじめ、飛び込み営業やテレアポなど幅広い顧客対応を経験し、社会人としての基礎を身につける。",
  },
  {
    year: "2016",
    imageSrc: "/images/profile_career2016.png",
    title:
      "学生時代に3年間アルバイトとして勤務した\nスターバックスコーヒージャパンへ入社。",
    body: "早期に正社員登用され副店長に就任。繁忙店・オフィスビル店など異なる特性を持つ5店舗を経験し、新店舗立ち上げやKPI達成率エリア1位を獲得。多様な環境でチームを動かすリーダーシップを培う。",
  },
  {
    year: "2019",
    imageSrc: "/images/profile_career2019.png",
    title: "「手に職をつけたい」という\n思いからIT業界へ転身。",
    body: "テックキャンプでWeb開発を学び制作会社へ入社。デザイン・コーディング・クライアント対応を一気通貫で担い、現在に至る。",
  },
  {
    year: "2026",
    isPresent: true,
    imageSrc: "/images/profile_career2026.png",
    title: "「作る」から「育てる」へ。",
    body: "「作って終わり」から一歩踏み出し、データドリブンな視点で運用・改善まで携わりたいと考え転職を決意。デザインからコーディング、ディレクションまで幅広く対応できる強みを活かし、Webの力で事業成長に貢献したいと考えています。",
  },
];

interface StrengthItem {
  iconSrc: string;
  title: string;
  items: string[];
}

const STRENGTH_ITEMS: StrengthItem[] = [
  {
    iconSrc: "/images/profile-icon1.svg",
    title: "ユーザーに寄り添う視点",
    items: [
      "対人業務で培った顧客心理への想像力",
      "迷いのないUI / UX 設計",
      "心地よいWeb体験へのこだわり",
    ],
  },
  {
    iconSrc: "/images/profile-icon2.svg",
    title: "相談しやすい対話と傾聴力",
    items: [
      "丁寧なヒアリングと認識のすり合わせ",
      "要件やスケジュールの現実的なバランス設計",
      "プロジェクトを円滑に推進する調整力",
    ],
  },
  {
    iconSrc: "/images/profile-icon3.svg",
    title: "モダン技術の自走と探求",
    items: [
      "最新技術を積極的にキャッチアップ",
      "変化の早い領域でも自ら学び、形にする実装力",
    ],
  },
];

export function ProfileSection() {
  return (
    <>
      {/* プロフィール + キャリア */}
      <section id="profile" className="bg-white py-16 px-4 md:px-10 md:py-20">
        <div className="inner-md">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            {/* 左: プロフィールカード（デスクトップで sticky 固定）*/}
            <div className="flex flex-col gap-2.5 shrink-0 self-start mx-auto md:mx-0 md:sticky md:top-28">
              <div className="relative w-[280px] md:w-[320px] lg:w-[402px] aspect-square rounded-br-[60px] rounded-tl-[60px] overflow-hidden">
                <Image
                  src={PROFILE_IMAGE}
                  alt="Shogo Suzuki"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-3 left-2">
                  <TitleMark fill="white" className="w-[51px] mb-0.5" />
                  <p className="font-syne font-extrabold text-[40px] text-white leading-[1.2]">
                    PROFILE
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-noto font-medium text-[28px] text-black leading-[1.5]">
                  SHOGO SUZUKI
                </p>
                <p className="font-noto font-normal text-[14px] text-black leading-[1.5]">
                  1991年生まれ、千葉県出身、大阪府在住
                </p>
              </div>
            </div>

            {/* 右: キャリア（縦積み、通常スクロール）*/}
            <div className="flex flex-col gap-6 flex-1 min-w-0">
              {CAREER_ITEMS.map((item) => (
                <div key={item.year} className="flex flex-col gap-3">
                  <p className="font-syne font-extrabold text-orange text-[40px] leading-[1.5]">
                    {item.year}
                    {item.isPresent && (
                      <span className="font-noto font-bold"> ~</span>
                    )}
                  </p>
                  <div className="flex flex-col md:flex-row gap-3 md:items-center">
                    <div className="relative w-full md:flex-1 h-[218px] rounded-br-[30px] rounded-tl-[30px] overflow-hidden">
                      <Image
                        src={item.imageSrc}
                        alt=""
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="flex flex-col gap-1.5 text-black md:flex-1">
                      <p className="font-noto font-bold text-[18px] leading-[1.5] whitespace-pre-line">
                        {item.title}
                      </p>
                      <p className="font-noto font-normal text-[15px] leading-[1.5]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 強みカード */}
      <section className="bg-white pb-20 md:pb-35 px-4 md:px-10">
        <div className="inner-md">
          <div className="flex flex-col md:flex-row gap-8">
            {STRENGTH_ITEMS.map((s) => (
              <div
                key={s.title}
                className="flex flex-1 flex-col gap-8 items-center border-[3px] border-orange rounded-2xl px-8 md:px-12 py-6"
              >
                <div className="relative h-[120px] w-[160px] shrink-0">
                  <Image
                    src={s.iconSrc}
                    alt=""
                    aria-hidden={true}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="flex flex-col gap-6 w-full">
                  <p className="font-noto font-bold text-[17px] text-center text-black leading-[1.5]">
                    {s.title}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {s.items.map((text) => (
                      <p
                        key={text}
                        className="font-noto font-normal text-[14px] text-black leading-[1.5]"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
