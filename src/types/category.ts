// 記事のカテゴリーをリテラル型で定義
export type Category = "technology" | "health" | "finance" | "lifestyle";

export type Article = {
  id: number;
  title: string;
  content: string;
  category: Category;
};
