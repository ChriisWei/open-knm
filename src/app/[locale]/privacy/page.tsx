import { Locale, isLocale } from "@/lib/uiTexts";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Open KNM",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isZh = locale === "zh";

  return (
    <div className="max-w-3xl mx-auto py-12 space-y-8">
      <h1 className="text-3xl font-bold text-slate-900">
        {isZh ? "隐私政策" : "Privacy Policy"}
      </h1>

      <div className="prose prose-slate max-w-none text-slate-600">
        {isZh ? (
          <>
            <p>最后更新日期：2025年12月14日</p>
            <p>
              Open KNM 是一个开源项目。我们尊重您的隐私，并承诺保护您的个人数据。
              本隐私政策说明了我们如何收集、使用和保护您的信息。
            </p>

            <h3>1. 数据收集</h3>
            <p>
              我们本身不存储任何用户的个人身份信息（如姓名、邮箱、地址等）。
              作为一个静态网站，我们没有后端数据库来保存用户账户数据。
            </p>

            <h3>2. 第三方分析工具</h3>
            <p>为了优化网站体验和了解用户需求，我们使用了以下第三方分析工具：</p>
            <ul>
              <li>
                <strong>Google Analytics 4 (GA4)</strong>:
                用于收集匿名的访问统计数据，如页面浏览量、访问来源和停留时间。
                Google Analytics 可能会使用 Cookies 来识别唯一的（匿名）用户。
              </li>
              <li>
                <strong>PostHog</strong>:
                用于产品分析，帮助我们改进功能。我们已配置 PostHog
                以尽量减少数据收集，并且不记录敏感个人信息。
              </li>
            </ul>

            <h3>3. Cookies 的使用</h3>
            <p>
              本网站使用 Cookies 主要是为了上述的分析功能以及记住您的语言偏好（如您手动切换了语言）。
              您可以通过浏览器设置随时清除或禁用 Cookies。
            </p>

            <h3>4. 外部链接</h3>
            <p>
              本网站包含指向第三方网站（如 IND, Rijksoverheid, GitHub
              等）的链接。我们对这些外部网站的内容或隐私做法不承担责任。
            </p>

            <h3>5. 联系我们</h3>
            <p>
              如果您对本隐私政策有任何疑问，请通过 GitHub Issues 或 Discord
              社区联系我们。
            </p>
          </>
        ) : (
          <>
            <p>Last Updated: December 14, 2025</p>
            <p>
              Open KNM is an open-source project. We respect your privacy and are
              committed to protecting your personal data. This Privacy Policy
              explains how we collect, use, and safeguard your information.
            </p>

            <h3>1. Data Collection</h3>
            <p>
              We do not store any personally identifiable information (PII) such
              as names, emails, or addresses. As a static website, we do not
              have a backend database to hold user account data.
            </p>

            <h3>2. Third-Party Analytics</h3>
            <p>
              To improve the website experience and understand user needs, we use
              the following third-party analytics tools:
            </p>
            <ul>
              <li>
                <strong>Google Analytics 4 (GA4)</strong>: Used to collect
                anonymous traffic statistics, such as page views, traffic
                sources, and session duration. Google Analytics may use Cookies
                to identify unique (anonymous) users.
              </li>
              <li>
                <strong>PostHog</strong>: Used for product analytics to help us
                improve features. We have configured PostHog to minimize data
                collection and do not record sensitive personal information.
              </li>
            </ul>

            <h3>3. Use of Cookies</h3>
            <p>
              This website uses Cookies primarily for the analytics functions
              mentioned above and to remember your language preference. You can
              clear or disable Cookies at any time through your browser
              settings.
            </p>

            <h3>4. External Links</h3>
            <p>
              This website contains links to third-party websites (e.g., IND,
              Rijksoverheid, GitHub). We are not responsible for the content or
              privacy practices of these external sites.
            </p>

            <h3>5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us via GitHub Issues or our Discord community.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

