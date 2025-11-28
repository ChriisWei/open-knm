import { Metadata } from "next";
import { Locale } from "@/lib/uiTexts";
import { getArticleBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Not Found',
    };
  }

  const title = article.titles[locale];
  const description = article.descriptions[locale];

  return {
    title: `${title} | Open KNM`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      publishedTime: new Date().toISOString(), // In a real app, this would come from the article data
      authors: ['Open KNM Team'],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
    },
    alternates: {
      canonical: `/${locale}/articles/${slug}`,
      languages: {
        'en': `/en/articles/${slug}`,
        'zh': `/zh/articles/${slug}`,
      },
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const isZh = locale === "zh";

  return (
    <article className="max-w-3xl mx-auto py-8 sm:py-12 space-y-8">
        <div className="space-y-4 border-b border-slate-100 pb-8">
            <div className="flex gap-2">
                <Link 
                  href={`/${locale}/${article.category}`} 
                  className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest hover:text-orange-700 transition-colors"
                >
                    {article.category === 'knm' ? (isZh ? 'KNM 考试专区' : 'KNM Exam Zone') : (isZh ? '荷兰社会' : 'Dutch Society')}
                </Link>
                {article.tags?.map(tag => (
                  <span key={tag} className="text-xs font-semibold text-slate-400">
                    / {tag}
                  </span>
                ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
                {article.titles[locale]}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
                {article.descriptions[locale]}
            </p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none">
            {/* Placeholder for MDX content */}
            <div className="bg-slate-50 p-8 sm:p-12 rounded-2xl border-2 border-dashed border-slate-200 text-center space-y-4">
                <div className="inline-block p-3 rounded-full bg-slate-100 mb-2">
                   <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {isZh ? '内容正在撰写中' : 'Content Writing in Progress'}
                </h3>
                <p className="text-slate-500 max-w-md mx-auto">
                    {isZh 
                      ? '本文的大纲已确认，正文内容正在编写和校对中。我们很快就会上线详细的 KNM 考点解析。' 
                      : 'The outline is confirmed, and the full content is being written and proofread. Detailed KNM explanations will be online soon.'}
                </p>
                <div className="pt-4">
                  <Link href={`/${locale}/knm`} className="text-sm font-bold text-[var(--primary)] hover:underline">
                    ← {isZh ? '返回列表' : 'Back to list'}
                  </Link>
                </div>
            </div>
        </div>
    </article>
  );
}
