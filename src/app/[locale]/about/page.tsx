import { Locale } from "@/lib/i18n";
import Link from "next/link";

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isZh = locale === "zh";

  // Replace this with your actual GitHub repository URL
  const GITHUB_REPO = "https://github.com/xvllinihao/open-knm"; 

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {isZh ? '关于 Open KNM' : 'About Open KNM'}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
          {isZh 
            ? '一个由社区驱动的开源项目，致力于让每一位在荷兰生活的人都能轻松获取融入所需的知识。'
            : 'A community-driven open source project dedicated to making integration knowledge accessible to everyone living in the Netherlands.'}
        </p>
      </div>

      {/* Mission Section */}
      <section className="bg-orange-50 rounded-3xl p-8 sm:p-10 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <span>🚀</span>
          {isZh ? '我们的愿景' : 'Our Mission'}
        </h2>
        <p className="text-slate-700 leading-relaxed text-lg">
          {isZh 
            ? '官方的 IND 网站和各种移民文件往往晦涩难懂。Open KNM 希望通过清晰的结构、通俗的语言和中英双语对照，帮助新移民、留学生和外籍人士跨越语言障碍，从容面对 KNM 考试与日常生活。'
            : 'Official IND websites and immigration documents can be obscure. Open KNM aims to bridge the language gap with clear structures, plain language, and bilingual content, helping newcomers and expats face the KNM exam and daily life with confidence.'}
        </p>
      </section>

      {/* Contribution Guide */}
      <section className="space-y-8">
        <div className="border-b border-slate-100 pb-4">
            <h2 className="text-3xl font-bold text-slate-900">
            {isZh ? '如何参与贡献' : 'How to Contribute'}
            </h2>
            <p className="text-slate-500 mt-2">
            {isZh ? '这个项目属于每一个人。我们需要你的帮助！' : 'This project belongs to everyone. We need your help!'}
            </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
            {/* Way 1: Report Issues */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl">
                    🐛
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                    {isZh ? '发现错误 / 提出建议' : 'Report Issues / Suggestions'}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed h-20">
                    {isZh 
                    ? '如果你发现文章中有错别字、信息过时，或者有想看但没找到的内容，请直接在 GitHub 上提交 Issue。'
                    : 'Found a typo? Outdated info? Or missing content you want to see? Please open an Issue on GitHub.'}
                </p>
                <a 
                    href={`${GITHUB_REPO}/issues`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-bold text-blue-600 hover:underline"
                >
                    {isZh ? '去提 Issue' : 'Open an Issue'} →
                </a>
            </div>

            {/* Way 2: Submit Code/Content */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-2xl">
                    💻
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                    {isZh ? '贡献代码 / 内容' : 'Contribute Code / Content'}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed h-20">
                    {isZh 
                    ? '你可以直接 Fork 仓库，修改或添加 MDX 文档，然后提交 Pull Request。我们会尽快审核合并！'
                    : 'Fork the repo, edit or add MDX files, and submit a Pull Request. We will review and merge it ASAP!'}
                </p>
                <a 
                    href={`${GITHUB_REPO}/pulls`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-bold text-green-600 hover:underline"
                >
                    {isZh ? '提交 PR' : 'Submit PR'} →
                </a>
            </div>
        </div>

        {/* GitHub Link Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 text-center space-y-6">
            <h3 className="text-2xl font-bold">
                {isZh ? '准备好加入了吗？' : 'Ready to join us?'}
            </h3>
            <p className="text-slate-300 max-w-lg mx-auto">
                {isZh 
                 ? '访问我们的 GitHub 仓库，给项目点一颗 ⭐ Star，让更多人看到这个项目。'
                 : 'Visit our GitHub repository, give us a ⭐ Star, and help more people find this project.'}
            </p>
            <a 
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Repo
            </a>
        </div>
      </section>
    </div>
  );
}
