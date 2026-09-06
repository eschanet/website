import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface CollapsibleProps {
  readonly label: string;
  readonly children: ReactNode;
  /** Open on first paint. Content is in the DOM either way, so SEO is unaffected. */
  readonly defaultOpen?: boolean;
  /** Optional right-aligned metadata, e.g. a count. */
  readonly meta?: string;
}

/**
 * Built on native <details>/<summary> rather than a JS disclosure widget:
 * it works with JavaScript disabled (which the prerender e2e specs rely on),
 * ships correct keyboard and screen-reader semantics for free, and needs no
 * aria-expanded bookkeeping of our own.
 */
export function Collapsible({ label, children, defaultOpen = false, meta }: CollapsibleProps) {
  return (
    <details className="group border-b border-[var(--rule)] py-5" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2">
          <ChevronRight
            size={13}
            strokeWidth={2}
            aria-hidden="true"
            className="text-[var(--muted)] transition-transform duration-200 group-open:rotate-90"
          />
          {/* A real heading inside the summary keeps the document outline
              intact for screen readers and crawlers. */}
          <h2 className="label">{label}</h2>
        </span>
        {meta !== undefined && <span className="label">{meta}</span>}
      </summary>
      <div className="pt-6 pl-[21px]">{children}</div>
    </details>
  );
}
