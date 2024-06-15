import ArticleCard from "@/app/literal/_components/article-card";
import { articlesData } from "@/testData/articles";

export default function Page() {
  const articles = articlesData;
  return (
    <div className="px-4 grid gap-y-4">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          category={article.category}
        />
      ))}
    </div>
  );
}
