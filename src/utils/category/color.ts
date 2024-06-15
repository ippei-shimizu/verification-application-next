import { Category } from "@/types/category";

// テーマカラーを設定する関数
export function getBgThemeColor(category: Category): string {
  switch (category) {
    case "technology":
      return "bg-green-400"; // 緑
    case "health":
      return "bg-amber-500"; // オレンジ
    case "finance":
      return "bg-cyan-400"; // 青
    case "lifestyle":
      return "bg-yellow-500"; // 黄
    default:
      return "bg-rose-500"; // デフォルトカラー
  }
}
