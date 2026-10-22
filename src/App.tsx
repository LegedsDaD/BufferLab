import { useEffect, useMemo, useRef, useState } from "react";
import {
  Search,
  Code2,
  Copy,
  Check,
  X,
  Palette,
  Sparkles,
  Layers,
  Zap,
  ArrowUpRight,
  Shuffle,
} from "lucide-react";
import { LOADERS, CATEGORIES, LOADER_COUNT, fullSnippet } from "./loaders";
import type { Loader, Category } from "./loaders";
import { cn } from "./utils/cn";

const GITHUB_URL = "https://github.com/LegedsDaD";

function Github({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

const PRESETS: { name: string; c1: string; c2: string }[] = [
  { name: "Lagoon", c1: "#5eead4", c2: "#fb7185" },
  { name: "Voltage", c1: "#22d3ee", c2: "#e879f9" },
  { name: "Citrus", c1: "#a3e635", c2: "#38bdf8" },
  { name: "Ember", c1: "#fbbf24", c2: "#ef4444" },
  { name: "Orchid", c1: "#c084fc", c2: "#fb923c" },
  { name: "Glacier", c1: "#e0f2fe", c2: "#60a5fa" },
  { name: "Toxic", c1: "#4ade80", c2: "#facc15" },
  { name: "Rosewood", c1: "#fda4af", c2: "#f472b6" },
];

type Surface = "dark" | "light" | "gradient";
type Tab = "full" | "html" | "css";

const ALL_CSS = LOADERS.map((l) => l.css).join("\n");

function useCopy(): [string | null, (text: string, key: string) => void] {
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const copy = (text: string, key: string) => {
    const done = () => {
      setCopied(key);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(null), 1800);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(done);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      done();
    }
  };
  return [copied, copy];
}

function Preview({
  loader,
  c1,
  c2,
  surface,
  className,
}: {
  loader: Loader;
  c1: string;
  c2: string;
  surface: Surface;
  className?: string;
}) {
  return (
    <div
      className={cn("relative flex items-center justify-center overflow-hidden", className)}
      style={{
        ["--c1" as string]: c1,
        ["--c2" as string]: c2,
        background:
          surface === "gradient"
            ? `linear-gradient(135deg, color-mix(in srgb, ${c1} 26%, #0c0f1e), color-mix(in srgb, ${c2} 26%, #0c0f1e))`
            : surface === "light"
              ? "#eef1f6"
              : "#0c0f1e",
      }}
      dangerouslySetInnerHTML={{ __html: loader.html }}
    />
  );
}

function CodeModal({
  loader,
  c1,
  c2,
  surface,
  onClose,
}: {
  loader: Loader;
  c1: string;
  c2: string;
  surface: Surface;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<Tab>("full");
  const [copied, copy] = useCopy();

  const code = useMemo(() => {
    if (tab === "html")
      return `<!-- ${loader.name} · by @LegedsDaD · ${GITHUB_URL} -->\n<div style="--c1:${c1}; --c2:${c2};">\n${loader.html
        .split("\n")
        .map((l) => "  " + l)
        .join("\n")}\n</div>`;
    if (tab === "css") return `/* ${loader.name} · by @LegedsDaD · ${GITHUB_URL} */\n${loader.css}`;
    return fullSnippet(loader, c1, c2);
  }, [tab, loader, c1, c2]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-[#12152a] shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-white/40 uppercase">
              #{String(loader.id).padStart(3, "0")} · {loader.category}
            </p>
            <h3 className="font-display text-xl font-bold text-white">{loader.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-0 overflow-y-auto sm:grid-cols-[220px_1fr]">
          <div className="border-b border-white/10 p-4 sm:border-r sm:border-b-0">
            <Preview
              loader={loader}
              c1={c1}
              c2={c2}
              surface={surface}
              className="h-40 rounded-xl border border-white/10 sm:h-44"
            />
            <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
              <span className="h-4 w-4 rounded-full border border-white/20" style={{ background: c1 }} />
              <span className="font-mono">{c1}</span>
              <span className="h-4 w-4 rounded-full border border-white/20" style={{ background: c2 }} />
              <span className="font-mono">{c2}</span>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-white/40">
              Pure HTML + CSS. No JS, no libraries. Colors are driven by <code className="text-white/60">--c1</code> /{" "}
              <code className="text-white/60">--c2</code>.
            </p>
          </div>

          <div className="flex min-h-0 flex-col p-4">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex gap-1 rounded-lg bg-white/5 p-1">
                {(["full", "html", "css"] as Tab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={cn(
                      "rounded-md px-3 py-1.5 font-mono text-xs uppercase transition",
                      tab === t ? "bg-white/15 text-white" : "text-white/45 hover:text-white/80",
                    )}
                  >
                    {t === "full" ? "Snippet" : t}
                  </button>
                ))}
              </div>
              <button
                onClick={() => copy(code, "modal")}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-[#0c0f1e] transition hover:brightness-110"
                style={{ background: `linear-gradient(90deg, ${c1}, ${c2})` }}
              >
                {copied === "modal" ? <Check size={14} /> : <Copy size={14} />}
                {copied === "modal" ? "Copied!" : "Copy code"}
              </button>
            </div>
            <pre className="min-h-0 flex-1 overflow-auto rounded-xl border border-white/10 bg-[#0a0d1a] p-4 font-mono text-[11.5px] leading-relaxed whitespace-pre text-emerald-100/90">
              {code}
            </pre>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs text-white/40">
          <span>
            Crafted by{" "}
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-white/70 underline-offset-2 hover:underline">
              @LegedsDaD
            </a>
          </span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-white/80"
          >
            <Github size={13} /> github.com/LegedsDaD
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const [c1, setC1] = useState(PRESETS[0].c1);
  const [c2, setC2] = useState(PRESETS[0].c2);
  const [surface, setSurface] = useState<Surface>("dark");
  const [selected, setSelected] = useState<Loader | null>(null);
  const [copied, copy] = useCopy();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LOADERS.filter(
      (l) =>
        (category === "All" || l.category === category) &&
        (q === "" || l.name.toLowerCase().includes(q) || l.category.toLowerCase().includes(q) || String(l.id) === q),
    );
  }, [query, category]);

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    LOADERS.forEach((l) => m.set(l.category, (m.get(l.category) ?? 0) + 1));
    return m;
  }, []);

  const heroIds = [5, 50, 39, 81, 63, 27, 99, 91];
  const shuffle = () => {
    const p = PRESETS[Math.floor(Math.random() * PRESETS.length)];
    setC1(p.c1);
    setC2(p.c2);
  };

  return (
    <div className="min-h-screen bg-[#0c0f1e] font-body text-white antialiased">
      {/* injected loader styles */}
      <style>{ALL_CSS}</style>

      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full opacity-[0.13] blur-3xl"
          style={{ background: c1 }}
        />
        <div
          className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full opacity-[0.10] blur-3xl"
          style={{ background: c2 }}
        />
      </div>

      {/* header */}
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#0c0f1e]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
            >
              <span
                className="h-4 w-4 animate-spin rounded-full border-2 border-[#0c0f1e]/30 border-t-[#0c0f1e]"
                style={{ animationDuration: "0.9s" }}
              />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              Buffer<span style={{ color: c1 }}>Lab</span>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-white/50 sm:block">
              {LOADER_COUNT} loaders · pure CSS
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium transition hover:border-white/30 hover:bg-white/10"
            >
              <Github size={15} />
              <span>@LegedsDaD</span>
              <ArrowUpRight size={13} className="text-white/40" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* hero */}
        <section className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: c1 }}>
              <Sparkles size={12} /> Loading-state museum
            </p>
            <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
              {LOADER_COUNT} ways to make
              <br />
              waiting look{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${c1}, ${c2})` }}
              >
                gorgeous.
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/55">
              A hand-built gallery of buffering &amp; loading animations. Every card is a live preview —
              grab the HTML + CSS in one click, recolor everything with the gradient lab, and ship it.
              No JavaScript required in any loader.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#gallery"
                className="rounded-xl px-5 py-2.5 text-sm font-bold text-[#0c0f1e] transition hover:brightness-110"
                style={{ background: `linear-gradient(90deg, ${c1}, ${c2})` }}
              >
                Browse the gallery
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/5"
              >
                <Github size={16} /> Official GitHub
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-wide text-white/40">
              <span className="flex items-center gap-1.5"><Layers size={12} /> {CATEGORIES.length} categories</span>
              <span className="flex items-center gap-1.5"><Zap size={12} /> zero dependencies</span>
              <span className="flex items-center gap-1.5"><Code2 size={12} /> copy-paste ready</span>
            </div>
          </div>

          {/* hero live strip */}
          <div className="grid grid-cols-4 gap-3">
            {heroIds.map((id) => {
              const l = LOADERS[id - 1];
              return (
                <button
                  key={id}
                  onClick={() => setSelected(l)}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 transition hover:border-white/30"
                  title={l.name}
                >
                  <Preview loader={l} c1={c1} c2={c2} surface={surface} className="h-24 sm:h-28" />
                  <span className="absolute inset-x-0 bottom-0 truncate bg-black/50 px-2 py-1 text-left font-mono text-[9px] text-white/70 opacity-0 transition group-hover:opacity-100">
                    {l.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* color lab */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Palette size={16} style={{ color: c1 }} />
              <h2 className="font-display text-base font-bold">Gradient Color Lab</h2>
              <span className="hidden text-xs text-white/40 sm:inline">— recolors every loader live</span>
            </div>
            <div
              className="h-3 w-40 rounded-full border border-white/10 sm:w-56"
              style={{ background: `linear-gradient(90deg, ${c1}, ${c2})` }}
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4">
            <label className="flex items-center gap-3 text-sm text-white/70">
              <span className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white/20" style={{ background: c1 }}>
                <input
                  type="color"
                  value={c1}
                  onChange={(e) => setC1(e.target.value)}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
              </span>
              <span>
                Color 1 <span className="block font-mono text-[11px] text-white/40">{c1}</span>
              </span>
            </label>
            <label className="flex items-center gap-3 text-sm text-white/70">
              <span className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white/20" style={{ background: c2 }}>
                <input
                  type="color"
                  value={c2}
                  onChange={(e) => setC2(e.target.value)}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
              </span>
              <span>
                Color 2 <span className="block font-mono text-[11px] text-white/40">{c2}</span>
              </span>
            </label>

            <div className="flex flex-wrap items-center gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.name}
                  title={p.name}
                  onClick={() => {
                    setC1(p.c1);
                    setC2(p.c2);
                  }}
                  className={cn(
                    "h-7 w-11 rounded-full border-2 transition hover:scale-110",
                    c1 === p.c1 && c2 === p.c2 ? "border-white" : "border-white/15",
                  )}
                  style={{ background: `linear-gradient(90deg, ${p.c1}, ${p.c2})` }}
                />
              ))}
              <button
                onClick={shuffle}
                title="Random palette"
                className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white/15 text-white/60 transition hover:scale-110 hover:text-white"
              >
                <Shuffle size={12} />
              </button>
            </div>

            <div className="flex items-center gap-1 rounded-lg bg-white/5 p-1">
              {(["dark", "light", "gradient"] as Surface[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setSurface(s)}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-xs font-medium capitalize transition",
                    surface === s ? "bg-white/15 text-white" : "text-white/45 hover:text-white/80",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* filters */}
        <section id="gallery" className="scroll-mt-24 pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search size={15} className="absolute top-1/2 left-3.5 -translate-y-1/2 text-white/35" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search loaders… (name, category, #id)"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pr-4 pl-10 text-sm placeholder-white/30 outline-none transition focus:border-white/30"
              />
            </div>
            <p className="font-mono text-xs text-white/40">
              showing <span className="text-white/80">{filtered.length}</span> / {LOADER_COUNT}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {(["All", ...CATEGORIES] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
                  category === c
                    ? "border-transparent text-[#0c0f1e]"
                    : "border-white/12 text-white/55 hover:border-white/30 hover:text-white",
                )}
                style={category === c ? { background: `linear-gradient(90deg, ${c1}, ${c2})` } : undefined}
              >
                {c}
                <span className={cn("ml-1.5 font-mono text-[10px]", category === c ? "opacity-70" : "text-white/30")}>
                  {c === "All" ? LOADER_COUNT : counts.get(c)}
                </span>
              </button>
            ))}
          </div>

          {/* grid */}
          {filtered.length === 0 ? (
            <div className="py-24 text-center text-white/40">
              <p className="font-display text-xl font-bold text-white/60">Nothing buffers here…</p>
              <p className="mt-2 text-sm">Try a different search or category.</p>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {filtered.map((l) => (
                <div
                  key={l.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:-translate-y-0.5 hover:border-white/25"
                >
                  <button className="block w-full cursor-pointer" onClick={() => setSelected(l)} title="Open code">
                    <Preview loader={l} c1={c1} c2={c2} surface={surface} className="h-36 w-full" />
                  </button>
                  <div className="flex items-center justify-between gap-2 px-4 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{l.name}</p>
                      <p className="font-mono text-[10px] tracking-wide text-white/35">
                        #{String(l.id).padStart(3, "0")} · {l.category}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-1.5">
                      <button
                        onClick={() => copy(fullSnippet(l, c1, c2), `card-${l.id}`)}
                        title="Copy full snippet"
                        className="rounded-lg border border-white/10 p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
                      >
                        {copied === `card-${l.id}` ? <Check size={14} style={{ color: c1 }} /> : <Copy size={14} />}
                      </button>
                      <button
                        onClick={() => setSelected(l)}
                        title="View HTML / CSS"
                        className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-bold text-[#0c0f1e] transition hover:brightness-110"
                        style={{ background: `linear-gradient(90deg, ${c1}, ${c2})` }}
                      >
                        <Code2 size={13} /> Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* credit banner */}
        <section className="my-16 overflow-hidden rounded-2xl border border-white/10">
          <div
            className="flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10"
            style={{
              background: `linear-gradient(120deg, color-mix(in srgb, ${c1} 14%, #12152a), color-mix(in srgb, ${c2} 14%, #12152a))`,
            }}
          >
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-white/45 uppercase">Built &amp; maintained by</p>
              <h2 className="font-display mt-1 text-3xl font-extrabold">@LegedsDaD</h2>
              <p className="mt-2 max-w-md text-sm text-white/55">
                All {LOADER_COUNT} buffering animations were hand-crafted by @LegedsDaD. Star the official
                GitHub profile for more front-end experiments and drops.
              </p>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#0c0f1e] transition hover:scale-[1.03]"
            >
              <Github size={18} /> github.com/LegedsDaD <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-white/35 sm:flex-row sm:px-6">
          <p>
            BufferLab · {LOADER_COUNT} pure-CSS loaders · crafted with patience by{" "}
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-white/70 hover:underline">
              @LegedsDaD
            </a>
          </p>
          <p className="font-mono">while(waiting) {"{ enjoy(); }"}</p>
        </div>
      </footer>

      {selected && (
        <CodeModal loader={selected} c1={c1} c2={c2} surface={surface} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}