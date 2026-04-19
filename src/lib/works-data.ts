export interface Work {
  id: string;
  company: string;
  title: string;
  role: string;
  tags: string[];
  imageSrc: string;
  thumbnailSrc: string;
  featured?: boolean;
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
  },
  {
    id: "2",
    company: "クリスピークリームドーナツ",
    title: "20周年サイト",
    role: "Web Design / Development",
    tags: ["HTML / CSS", "JavaScript", "Vite / EJS", "Figma", "Adobe Photoshop"],
    imageSrc: "/images/works/work-02.jpg",
    thumbnailSrc: "/images/works/work-02-thumb.jpg",
  },
  {
    id: "3",
    company: "株式会社OAGグローバルソリューションズ",
    title: "コーポレートサイト",
    role: "Web Design / Development",
    tags: ["HTML / CSS", "JavaScript", "Vite / EJS", "Figma", "Adobe Photoshop"],
    imageSrc: "/images/works/work-03.jpg",
    thumbnailSrc: "/images/works/work-03-thumb.jpg",
  },
];
