import { Locale, uiTexts } from "@/lib/uiTexts";

export const AiDisclaimer = ({ locale }: { locale: Locale }) => {
  const texts = uiTexts[locale].disclaimer;
  
  return (
    <div className="border-b border-amber-100 bg-amber-50/40 px-4 py-1.5 text-xs text-amber-900/70">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-1.5 text-center whitespace-nowrap overflow-hidden text-ellipsis">
        <span className="shrink-0 text-sm opacity-80">🤖</span>
        <p className="truncate">
          <span className="font-semibold">{texts.title}</span> · {texts.text}
        </p>
      </div>
    </div>
  );
};

