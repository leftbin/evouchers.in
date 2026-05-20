import { cn } from "@/lib/utils";
import { IconResolver } from "@/components/sections/icon-resolver";
import type { CodeSnippet, FeatureItem } from "@/types/content";

interface CodeBlockProps {
  snippet: CodeSnippet;
  features: FeatureItem[];
}

export function CodeBlock({ snippet, features }: CodeBlockProps) {
  return (
    <section className="py-4xl px-md">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-start">
        {/* Code panel */}
        <div className="bg-[#0D1117] rounded-xl p-xl overflow-x-auto">
          <div className="flex items-center gap-sm mb-md pb-md border-b border-white/10">
            <div className="flex gap-xs">
              <span className="w-3 h-3 rounded-full bg-error/60" />
              <span className="w-3 h-3 rounded-full bg-warning/60" />
              <span className="w-3 h-3 rounded-full bg-success/60" />
            </div>
            {snippet.language && (
              <span className="text-label-sm text-on-surface-muted ml-sm">
                {snippet.language}
              </span>
            )}
          </div>
          <pre className="text-body-sm text-on-surface-variant leading-relaxed">
            <code className="font-mono whitespace-pre">{snippet.code}</code>
          </pre>
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-lg">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-md">
              {feature.icon && (
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                    feature.accentColor === "gold"
                      ? "bg-gold/15"
                      : "bg-primary-subtle"
                  )}
                >
                  <IconResolver
                    name={feature.icon}
                    size={20}
                    className={
                      feature.accentColor === "gold"
                        ? "text-gold"
                        : "text-primary"
                    }
                  />
                </div>
              )}
              <div>
                <h3 className="text-headline-sm text-white mb-xs">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-on-surface-variant">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
