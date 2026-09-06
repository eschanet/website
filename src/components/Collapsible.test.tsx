import { describe, expect, it } from 'vitest';

import { Collapsible } from './Collapsible';
import { render, screen, userEvent } from '@/test/render';

describe('Collapsible', () => {
  it('renders the label as a level-2 heading so the outline survives', () => {
    render(<Collapsible label="Experience">body</Collapsible>);
    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument();
  });

  it('is closed by default', () => {
    const { container } = render(<Collapsible label="Skills">body</Collapsible>);
    expect(container.querySelector('details')).not.toHaveAttribute('open');
  });

  it('honours defaultOpen', () => {
    const { container } = render(
      <Collapsible label="Experience" defaultOpen>
        body
      </Collapsible>,
    );
    expect(container.querySelector('details')).toHaveAttribute('open');
  });

  it('keeps content in the DOM while collapsed, for crawlers', () => {
    render(<Collapsible label="Education">Summa cum laude</Collapsible>);
    expect(screen.getByText('Summa cum laude')).toBeInTheDocument();
  });

  it('toggles open on click', async () => {
    const user = userEvent.setup();
    const { container } = render(<Collapsible label="Skills">body</Collapsible>);
    const details = container.querySelector('details');
    await user.click(screen.getByText('Skills'));
    expect(details).toHaveAttribute('open');
  });

  it('renders optional meta text', () => {
    render(
      <Collapsible label="Experience" meta="3">
        body
      </Collapsible>,
    );
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('omits meta when not provided', () => {
    const { container } = render(<Collapsible label="Experience">body</Collapsible>);
    expect(container.querySelectorAll('summary .label')).toHaveLength(1);
  });
});
