import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import CodeBlock from './components/CodeBlock';
import {
  display,
  flex_direction,
  flex_wrap,
  flex_flow,
  justify_content,
  align_items,
  align_content,
  gap,
  order,
  flex_grow,
  flex_shrink,
  flex_basis,
  flex,
  align_self,
} from './constants';

const issuePath = '/issues/flexbox';

function Masthead({ current }) {
  return (
    <header className="masthead">
      <div className="rail masthead-row">
        <a className="nameplate" href="/">CSS Garden</a>
        <nav className="masthead-links" aria-label="Primary navigation">
          <a className={current === 'issues' ? 'current' : ''} href="/">Issues</a>
          <a className={current === 'about' ? 'current' : ''} href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="site-footer">
      <span>CSS Garden</span>
      <span>Written slowly. Tested in the browser. Supervised by dogs.</span>
    </footer>
  );
}

function IssuesIndex() {
  return (
    <>
      <Masthead current="issues" />
      <main className="rail page-main">
        <section className="opener archive-opener">
          <div className="kicker">A small magazine about CSS</div>
          <h1 className="headline">Issues</h1>
          <p className="deck">One concept at a time, explained properly and paired with something you can try yourself.</p>
        </section>

        <section className="issue-list" aria-label="Published issues">
          <article className="issue-card">
            <a href={issuePath}>
              <div className="issue-number">Issue 1 · Flexbox</div>
              <h2>How to stop fighting your layout</h2>
              <p>One axis, a short list of properties, and most of the tricks the float era needed just aren’t necessary anymore.</p>
              <span className="read-link">Read Issue 1</span>
            </a>
          </article>
        </section>

        <PageFooter />
      </main>
    </>
  );
}

function Property({ name, children, code }) {
  return (
    <section className="prop">
      <h3>{name}</h3>
      {children}
      <CodeBlock code={code} />
    </section>
  );
}

function FlexboxPost() {
  return (
    <>
      <Masthead current="issues" />
      <main className="rail page-main">
        <article className="post">
          <header className="opener">
            <div className="kicker"><a href="/">Issues</a> / Issue 1 · Flexbox</div>
            <h1 className="headline">How to stop fighting your layout</h1>
            <p className="deck">One axis, a short list of properties, and most of the tricks the float era needed just aren’t necessary anymore. Here’s the whole model — and a box below you can push around yourself.</p>
          </header>

          <FlexboxPlayground />

          <p className="lede">Before flexbox, centering something vertically was a small ordeal involving table display hacks or absolute positioning and negative margins. Flexbox fixed that by giving the browser an actual model for distributing space along one direction at a time. Set a container to <code>display: flex</code>, and every rule below starts working together instead of against each other.</p>

          <p>The properties split cleanly into two groups. One set lives on the parent and decides how space gets divided up. The other lives on the children, who can accept that division or ask for something different.</p>

          <h2 className="section-head">The container sets the rules</h2>
          <p className="section-intro">Everything here goes on the parent element — the thing you turn into a flex context.</p>

          <Property name="display" code={display}>
            <p>This is the switch. <code>flex</code> turns the element into a block-level flex container; <code>inline-flex</code> does the same but keeps the container itself inline. Either way, every direct child becomes a flex item the moment you set this.</p>
          </Property>

          <Property name="flex-direction" code={flex_direction}>
            <p>This decides the main axis — the direction items are laid out before anything else gets involved. Everything else on this page is defined relative to whatever you set here.</p>
            <ul>
              <li><code>row</code> (default) — left to right</li>
              <li><code>row-reverse</code> — right to left</li>
              <li><code>column</code> — top to bottom</li>
              <li><code>column-reverse</code> — bottom to top</li>
            </ul>
          </Property>

          <Property name="flex-wrap" code={flex_wrap}>
            <p>By default every item tries to fit on a single line, shrinking if it has to. This property lets them give up and wrap instead — which matters the moment your content is more flexible than your container’s width.</p>
            <ul>
              <li><code>nowrap</code> (default) — one line, shrink to fit</li>
              <li><code>wrap</code> — wraps top to bottom</li>
              <li><code>wrap-reverse</code> — wraps bottom to top</li>
            </ul>
          </Property>

          <Property name="flex-flow" code={flex_flow}>
            <p>This shorthand sets <code>flex-direction</code> and <code>flex-wrap</code> together in one declaration.</p>
          </Property>

          <Property name="justify-content" code={justify_content}>
            <p>Distributes leftover space along the main axis — whichever axis <code>flex-direction</code> pointed at. This is the property that answers “why won’t my items spread out?”</p>
            <ul>
              <li><code>flex-start</code> (default), <code>flex-end</code>, <code>center</code></li>
              <li><code>space-between</code> — first and last items flush to the edges</li>
              <li><code>space-around</code> — equal space around each item</li>
              <li><code>space-evenly</code> — equal space between and around every item</li>
            </ul>
          </Property>

          <Property name="align-items" code={align_items}>
            <p>The cross-axis equivalent of <code>justify-content</code>. <code>stretch</code> is the value that surprises people: with no height set, items stretch to fill the container unless you tell them otherwise.</p>
            <ul>
              <li><code>stretch</code> (default) — fills the cross axis</li>
              <li><code>flex-start</code>, <code>flex-end</code>, <code>center</code></li>
              <li><code>baseline</code> — aligns by text baseline</li>
            </ul>
          </Property>

          <Property name="align-content" code={align_content}>
            <p>Easy to confuse with <code>align-items</code>, but this only does anything once wrapping has produced more than one line. It distributes space between the lines themselves, not the items within a line.</p>
          </Property>

          <Property name="gap" code={gap}>
            <p>Puts fixed space between items without touching the outer edges of the container — no more margin hacks with a rule to cancel out the last item. <code>row-gap</code> and <code>column-gap</code> control each axis separately.</p>
          </Property>

          <h2 className="section-head">The items get a say too</h2>
          <p className="section-intro">These go on the children. A child can override almost anything the container decided for it individually.</p>

          <Property name="order" code={order}>
            <p>Items lay out in source order by default, but this reassigns it. It is visual order only; screen readers and tab order still follow the markup, so use it for cosmetics, not restructuring.</p>
          </Property>

          <Property name="flex-grow" code={flex_grow}>
            <p>A unitless number that sets how much of the leftover space an item should claim relative to its siblings. If every item has <code>flex-grow: 1</code>, remaining space splits evenly.</p>
          </Property>

          <Property name="flex-shrink" code={flex_shrink}>
            <p>The inverse of <code>flex-grow</code>: how willing an item is to shrink below its starting size when the container is too small. A value of 0 makes an item refuse to shrink.</p>
          </Property>

          <Property name="flex-basis" code={flex_basis}>
            <p>Sets an item’s starting size along the main axis before grow or shrink gets applied. Think of it as width’s replacement when you’re thinking in the flex direction.</p>
          </Property>

          <Property name="flex" code={flex}>
            <p>The shorthand for grow, shrink, and basis, in that order — and the one you should usually reach for. It fills in sensible defaults for whichever values you omit.</p>
          </Property>

          <Property name="align-self" code={align_self}>
            <p>Lets one item opt out of the container’s <code>align-items</code> value and pick its own cross-axis alignment instead.</p>
          </Property>

          <footer className="post-footer">
            <div><span className="tag">CSS basics</span><span className="tag">layout</span></div>
            <div>Next issue: Grid, and when to reach for it instead.</div>
          </footer>
        </article>
      </main>
    </>
  );
}

const controlGroups = [
  { key: 'direction', label: 'flex-direction', values: ['row', 'row-reverse', 'column', 'column-reverse'] },
  { key: 'wrap', label: 'flex-wrap', values: ['nowrap', 'wrap', 'wrap-reverse'] },
  { key: 'justify', label: 'justify-content', values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'] },
  { key: 'alignItems', label: 'align-items', values: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'] },
  { key: 'alignContent', label: 'align-content', values: ['normal', 'flex-start', 'center', 'space-between', 'space-around'] },
];

function FlexboxPlayground() {
  const [state, setState] = useState({
    direction: 'row',
    wrap: 'nowrap',
    justify: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'normal',
    gap: 0,
  });

  const stageStyle = {
    flexDirection: state.direction,
    flexWrap: state.wrap,
    justifyContent: state.justify,
    alignItems: state.alignItems,
    alignContent: state.alignContent,
    gap: `${state.gap}px`,
  };

  const output = useMemo(() => {
    const lines = ['.container {', '  display: flex;'];
    if (state.direction !== 'row') lines.push(`  flex-direction: ${state.direction};`);
    if (state.wrap !== 'nowrap') lines.push(`  flex-wrap: ${state.wrap};`);
    if (state.justify !== 'flex-start') lines.push(`  justify-content: ${state.justify};`);
    if (state.alignItems !== 'stretch') lines.push(`  align-items: ${state.alignItems};`);
    if (state.alignContent !== 'normal') lines.push(`  align-content: ${state.alignContent};`);
    if (state.gap > 0) lines.push(`  gap: ${state.gap}px;`);
    lines.push('}');
    return lines.join('\n');
  }, [state]);

  return (
        <section className="playground" aria-labelledby="playground-title">
          <h2 className="playground-label" id="playground-title">Try it — change the container, watch the items respond</h2>
          <div className="editor-stage" style={stageStyle} aria-live="polite">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => <div className="editor-item" key={item}>{item}</div>)}
          </div>

          <div className="controls">
            {controlGroups.map((group) => (
              <React.Fragment key={group.key}>
                <div className="row-label" id={`${group.key}-label`}>{group.label}</div>
                <div className="pillset" aria-labelledby={`${group.key}-label`}>
                  {group.values.map((value) => (
                    <button
                      className={`pill ${state[group.key] === value ? 'active' : ''}`}
                      type="button"
                      aria-pressed={state[group.key] === value}
                      onClick={() => setState((current) => ({ ...current, [group.key]: value }))}
                      key={value}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </React.Fragment>
            ))}

            <label className="row-label" htmlFor="gap-slider">gap</label>
            <div className="gap-row">
              <input
                id="gap-slider"
                type="range"
                min="0"
                max="32"
                value={state.gap}
                onChange={(event) => setState((current) => ({ ...current, gap: Number(event.target.value) }))}
              />
              <output className="gap-value" htmlFor="gap-slider">{state.gap}px</output>
            </div>
          </div>

          <pre className="live-output" aria-label="Generated CSS"><code>{output}</code></pre>
        </section>
  );
}

function About() {
  return (
    <>
      <Masthead current="about" />
      <main className="rail page-main">
        <article className="about-page">
          <header className="opener">
            <div className="kicker">Behind the hedges</div>
            <h1 className="headline">About CSS Garden</h1>
          </header>

          <p className="lede">CSS Garden started the way most gardens do: badly, with too many ideas planted too close together and no idea what half of them would grow into. What’s left is a small magazine about CSS, tended by one person and supervised, loosely, by two dogs who have never once respected the concept of a deadline.</p>
          <p>The name isn’t just cute. CSS has always felt more like landscaping than engineering to us — you’re not building a machine, you’re arranging things in space so they grow into each other the way you meant them to. Some properties are hedges. Some are trellises. Flexbox, frankly, is a really good trellis, and we said so at length in Issue 1.</p>
          <p>Every issue picks one concept and gives it room to actually breathe — no listicles, no “20 CSS hacks that will blow your mind,” just a proper explanation and a demo you can get your hands dirty in, because reading about a garden and walking through one are different experiences entirely. The dogs do not review the code, but they do sleep under the desk while it’s written, which we count as moral support.</p>
          <p>We’re not trying to cover everything CSS has ever done. We’re trying to cover a few things well, at a pace that lets the writing stay good and the demos stay honest — which also happens to be the only pace compatible with two dogs who insist on a walk at 7am regardless of what’s due.</p>
          <p>New issues arrive whenever something’s ready, not on a schedule, the same way nothing in an actual garden shows up exactly on time either. Flexbox bloomed first. Grid is next up, weather — and dog cooperation — permitting.</p>
        </article>
        <PageFooter />
      </main>
    </>
  );
}

function NotFound() {
  return (
    <>
      <Masthead />
      <main className="rail page-main not-found">
        <p className="kicker">404</p>
        <h1 className="headline">Nothing planted here yet.</h1>
        <p><a href="/">Return to the issues.</a></p>
      </main>
    </>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  useEffect(() => {
    const titles = {
      '/': 'CSS Garden — Issues',
      '/issues': 'CSS Garden — Issues',
      [issuePath]: 'How to stop fighting your layout — CSS Garden',
      '/about': 'About — CSS Garden',
    };
    document.title = titles[path] || 'CSS Garden';
  }, [path]);

  if (path === '/' || path === '/issues') return <IssuesIndex />;
  if (path === issuePath) return <FlexboxPost />;
  if (path === '/about') return <About />;
  return <NotFound />;
}

export default App;
