export interface WorkSection {
  heading: string;
  body: string;
}

export interface Work {
  id: string;
  company: string;
  title: string;
  role: string;
  tags: string[];
  imageSrc: string;
  thumbnailSrc: string;
  featured?: boolean;
  siteUrl?: string;
  duration?: string;
  sections?: WorkSection[];
}

// TODO: microCMS から取得するデータに置き換える
export const WORKS: Work[] = [
  {
    id: "1",
    company: "赤城乳業株式会社",
    title: "スペシャルパフェ ブランドサイト",
    role: "Web Design / Development",
    tags: ["HTML / CSS", "JavaScript", "Vite / EJS", "Figma", "Adobe Photoshop"],
    imageSrc: "/images/works/work-01.jpg",
    thumbnailSrc: "/images/works/work-01-thumb.jpg",
    featured: true,
    siteUrl: "https://example.com",
    duration: "10営業日",
    sections: [
      {
        heading: "日本のおもてなしで、非日常な癒しのひとときを",
        body: "親族の結婚式で訪れた実在のホテルを参考に、総合型ラグジュアリーホテルのWebサイトをデザインしました。「日本のおもてなしで、非日常な癒しのひとときを。」というスローガンを軸に、都会の喧騒を忘れさせる圧倒的な安らぎと、グローバルブランドとしての品格を表現しました。世界中のゲストが「人生の大切な瞬間」を安心して託せるような、信頼感に満ちた上質なビジュアルを追求しました。",
      },
    ],
  },
  {
    id: "2",
    company: "クリスピークリームドーナツ",
    title: "20周年サイト",
    role: "Web Design / Development",
    tags: ["HTML / CSS", "JavaScript", "Vite / EJS", "Figma", "Adobe Photoshop"],
    imageSrc: "/images/works/work-02.jpg",
    thumbnailSrc: "/images/works/work-02-thumb.jpg",
    duration: "15営業日",
    sections: [
      {
        heading: "20年の歴史を祝うアニバーサリーサイト",
        body: "クリスピークリームドーナツ日本上陸20周年を記念したスペシャルサイトです。ブランドの歴史とファンへの感謝を伝えるビジュアルデザインを担当しました。",
      },
    ],
  },
  {
    id: "3",
    company: "株式会社OAGグローバルソリューションズ",
    title: "コーポレートサイト",
    role: "Web Design / Development",
    tags: ["HTML / CSS", "JavaScript", "Vite / EJS", "Figma", "Adobe Photoshop"],
    imageSrc: "/images/works/work-03.jpg",
    thumbnailSrc: "/images/works/work-03-thumb.jpg",
    duration: "20営業日",
    sections: [
      {
        heading: "グローバルな信頼を可視化するコーポレートサイト",
        body: "国際的な会計・コンサルティングファームのコーポレートサイトをデザイン・実装しました。グローバルブランドとしての信頼感と、日本市場向けの親しみやすさを両立するデザインを追求しました。",
      },
    ],
  },
];
