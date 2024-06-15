import { Article } from "@/types/category";
import { getBgThemeColor } from "@/utils/category/color";

export default function ArticleCard({
  title,
  category,
}: Pick<Article, "title" | "category">) {
  const categoryBgColor = getBgThemeColor(category);
  return (
    <div>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className={`${categoryBgColor} w-fit p-1`}>{category}</p>
    </div>
  );
}
