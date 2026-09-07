import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface CollapsibleProps {
  readonly label: string;
  readonly children: ReactNode;
  /** Open on first paint. Content is in the DOM either way, so SEO is unaffected. */
  readonly defaultOpen?: boolean;
  /** Optional right-aligned metadata, e.g. a count or a date range. */
  readonly meta?: string;
  /** Heading level, so nested disclosures keep a valid document outline. */
  readonly level?: 2 | 3;
  /**
   * `section` is a top-level band with a mono label and a full-width rule.
   * `entry` is a nested item inside a section: normal-weight label, lighter
   * rule, tighter rhythm.
   */
  readonly variant?: 'section' | 'entry';
  /**
   * Shared name turns sibling disclosures into an exclusive accordion. This is
   * the native <details name> behaviour, so opening one closes the others with
   * no JavaScript at all.
   */
  readonly name?: string;
}

/**
 * Built on native <details>/<summary> rather than a JS disclosure widget:
 * it works with JavaScript disabled (which the prerender e2e specs rely on),
 * ships correct keyboard and screen-reader semantics for free, and needs no
 * aria-expanded bookkeeping of our own. Nesting is supported natively.
 */
export function Collapsible({
  label,
  children,
  defaultOpen = false,
  meta,
  level = 2,
  variant = 'section',
  name,
}: CollapsibleProps) {
  const Heading = level === 2 ? 'h2' : 'h3';
  const isSection = variant === 'section';

  return (
    <details
      className={
        isSection
          ? 'group/section border-b border-[var(--rule)] py-5'
          : 'group/entry border-b border-[var(--rule)]/60 py-3 transition-colors last:border-b-0 open:-mx-3 open:rounded-lg open:border-transparent open:bg-[var(--highlight)] open:px-3'
      }
      open={defaultOpen}
      name={name}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded [&::-webkit-details-marker]:hidden">
        <span className="flex min-w-0 items-center gap-2">
          <ChevronRight
            size={isSection ? 13 : 12}
            strokeWidth={2}
            aria-hidden="true"
            className={`shrink-0 text-[var(--muted)] transition-transform duration-200 ${
              isSection ? 'group-open/section:rotate-90' : 'group-open/entry:rotate-90'
            }`}
          />
          {/* A real heading inside the summary keeps the document outline
              intact for screen readers and crawlers. */}
          <Heading className={isSection ? 'label' : 'truncate text-[15px] font-medium'}>
            {label}
          </Heading>
        </span>
        {meta !== undefined && <span className="label shrink-0">{meta}</span>}
      </summary>
      <div className={isSection ? 'pt-6 pl-[21px]' : 'pt-3 pb-2 pl-[20px]'}>{children}</div>
    </details>
  );
}
