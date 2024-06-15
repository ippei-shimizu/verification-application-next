// 記事のカテゴリーをリテラル型で定義
export type Category = "technology" | "health" | "finance" | "lifestyle";

export type Article = {
  id: number;
  title: string;
  content: string;
  category: Category;
};

// Enumを用いた型定義
export const CategoryEnum = {
  TECHNOLOGY: "technology",
  HEALTH: "health",
  FINANCE: "finance",
  LIFESTYLE: "lifestyle",
} as const;

export type CategoryEnum = (typeof CategoryEnum)[keyof typeof CategoryEnum];
