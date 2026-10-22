/* ============================================================
   BufferLab — 112 pure CSS/HTML buffering & loading animations
   Crafted by @LegedsDaD · https://github.com/LegedsDaD
   Every loader reads --c1 / --c2 so any palette can be applied.
   ============================================================ */

export const CATEGORIES = [
  "Spinners",
  "Dots",
  "Bars",
  "Pulse & Waves",
  "Shapes & 3D",
  "Orbits",
  "Progress",
  "Text",
  "Gradients",
  "Creative",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Loader {
  id: number;
  name: string;
  category: Category;
  html: string;
  css: string;
}

let n = 0;
const L = (name: string, category: Category, html: string, css: string): Loader => {
  n += 1;
  const t = (s: string) => s.split("{i}").join(String(n));
  return { id: n, name, category, html: t(html.trim()), css: t(css.trim()) };
};

const sp = (k: number) => "<span></span>".repeat(k);
const letters = (word: string) =>
  word
    .split("")
    .map((c) => `<span>${c}</span>`)
    .join("");

export const LOADERS: Loader[] = [
  /* ------------------------------ SPINNERS ------------------------------ */
  L("Classic Ring", "Spinners", `<div class="l{i}"></div>`, `
.l{i}{width:44px;height:44px;border-radius:50%;border:4px solid color-mix(in srgb,var(--c1,#5eead4) 20%,transparent);border-top-color:var(--c1,#5eead4);animation:k{i} .9s linear infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Dual Ring", "Spinners", `<div class="l{i}"></div>`, `
.l{i}{width:44px;height:44px;border-radius:50%;border:4px solid transparent;border-top-color:var(--c1,#5eead4);border-bottom-color:var(--c2,#fb7185);animation:k{i} 1s linear infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Dashed Ring", "Spinners", `<div class="l{i}"></div>`, `
.l{i}{width:44px;height:44px;border-radius:50%;border:4px dashed var(--c1,#5eead4);animation:k{i} 3s linear infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Dotted Ring", "Spinners", `<div class="l{i}"></div>`, `
.l{i}{width:44px;height:44px;border-radius:50%;border:5px dotted var(--c2,#fb7185);animation:k{i} 1.6s cubic-bezier(.6,.15,.35,.85) infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Gradient Ring", "Spinners", `<div class="l{i}"></div>`, `
.l{i}{width:46px;height:46px;border-radius:50%;background:conic-gradient(var(--c1,#5eead4),var(--c2,#fb7185),var(--c1,#5eead4));-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 6px),#000 calc(100% - 5px));mask:radial-gradient(farthest-side,transparent calc(100% - 6px),#000 calc(100% - 5px));animation:k{i} 1s linear infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Segmented Dial", "Spinners", `<div class="l{i}"></div>`, `
.l{i}{width:46px;height:46px;border-radius:50%;background:repeating-conic-gradient(var(--c1,#5eead4) 0 18deg,transparent 18deg 45deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 8px),#000 calc(100% - 7px));mask:radial-gradient(farthest-side,transparent calc(100% - 8px),#000 calc(100% - 7px));animation:k{i} 1.2s steps(8) infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Comet Tail", "Spinners", `<div class="l{i}"></div>`, `
.l{i}{width:46px;height:46px;position:relative;border-radius:50%;background:conic-gradient(transparent 15%,var(--c1,#5eead4));-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 6px),#000 calc(100% - 5px));mask:radial-gradient(farthest-side,transparent calc(100% - 6px),#000 calc(100% - 5px));animation:k{i} .9s linear infinite}
.l{i}::after{content:"";position:absolute;top:0;left:50%;width:6px;height:6px;margin-left:-3px;border-radius:50%;background:var(--c1,#5eead4)}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Triple Arc", "Spinners", `<div class="l{i}"><span></span><span></span><span></span></div>`, `
.l{i}{width:48px;height:48px;position:relative}
.l{i} span{position:absolute;border-radius:50%;border:3px solid transparent}
.l{i} span:nth-child(1){inset:0;border-top-color:var(--c1,#5eead4);animation:k{i} 1s linear infinite}
.l{i} span:nth-child(2){inset:7px;border-right-color:var(--c2,#fb7185);animation:k{i} 1.4s linear infinite reverse}
.l{i} span:nth-child(3){inset:14px;border-bottom-color:var(--c1,#5eead4);animation:k{i} .8s linear infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Gyro Ring", "Spinners", `<div class="l{i}"></div>`, `
.l{i}{width:46px;height:46px;border-radius:50%;border:4px solid var(--c1,#5eead4);border-left-color:var(--c2,#fb7185);animation:k{i} 1.2s linear infinite}
@keyframes k{i}{from{transform:perspective(160px) rotateX(58deg) rotateZ(0)}to{transform:perspective(160px) rotateX(58deg) rotateZ(360deg)}}`),

  L("Quarter Snap", "Spinners", `<div class="l{i}"></div>`, `
.l{i}{width:42px;height:42px;border-radius:50%;border:5px solid transparent;border-top-color:var(--c2,#fb7185);animation:k{i} 1s cubic-bezier(.7,0,.3,1) infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Turbine", "Spinners", `<div class="l{i}"></div>`, `
.l{i}{width:46px;height:46px;border-radius:50%;background:repeating-conic-gradient(var(--c2,#fb7185) 0 8deg,transparent 8deg 30deg);-webkit-mask:radial-gradient(circle,transparent 30%,#000 31%,#000 100%);mask:radial-gradient(circle,transparent 30%,#000 31%,#000 100%);animation:k{i} 1.4s steps(12) infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Material Dash", "Spinners", `<svg class="l{i}" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none"/></svg>`, `
.l{i}{width:46px;height:46px;animation:k{i}a 2s linear infinite}
.l{i} circle{stroke:var(--c1,#5eead4);stroke-width:5;stroke-linecap:round;stroke-dasharray:126;animation:k{i}b 1.5s ease-in-out infinite}
@keyframes k{i}a{to{transform:rotate(360deg)}}
@keyframes k{i}b{0%{stroke-dashoffset:120}50%{stroke-dashoffset:32}100%{stroke-dashoffset:120}}`),

  /* -------------------------------- DOTS -------------------------------- */
  L("Bouncing Trio", "Dots", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{display:flex;gap:8px}
.l{i} span{width:12px;height:12px;border-radius:50%;background:var(--c1,#5eead4);animation:k{i} .6s ease-in-out infinite alternate}
.l{i} span:nth-child(2){animation-delay:.2s;background:color-mix(in srgb,var(--c1,#5eead4) 50%,var(--c2,#fb7185))}
.l{i} span:nth-child(3){animation-delay:.4s;background:var(--c2,#fb7185)}
@keyframes k{i}{to{transform:translateY(-14px)}}`),

  L("Wave Dots", "Dots", `<div class="l{i}">${sp(5)}</div>`, `
.l{i}{display:flex;gap:6px}
.l{i} span{width:9px;height:9px;border-radius:50%;background:var(--c1,#5eead4);animation:k{i} 1s ease-in-out infinite}
.l{i} span:nth-child(2){animation-delay:.1s}.l{i} span:nth-child(3){animation-delay:.2s}.l{i} span:nth-child(4){animation-delay:.3s}.l{i} span:nth-child(5){animation-delay:.4s}
@keyframes k{i}{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px);background:var(--c2,#fb7185)}}`),

  L("Pulse Dots", "Dots", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{display:flex;gap:9px}
.l{i} span{width:13px;height:13px;border-radius:50%;background:var(--c2,#fb7185);animation:k{i} 1.2s ease-in-out infinite}
.l{i} span:nth-child(2){animation-delay:.2s}.l{i} span:nth-child(3){animation-delay:.4s}
@keyframes k{i}{0%,100%{transform:scale(.4);opacity:.35}50%{transform:scale(1);opacity:1}}`),

  L("Typing Bubble", "Dots", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{display:flex;gap:6px;padding:14px 16px;background:color-mix(in srgb,var(--c1,#5eead4) 14%,transparent);border:1px solid color-mix(in srgb,var(--c1,#5eead4) 35%,transparent);border-radius:18px 18px 18px 4px}
.l{i} span{width:8px;height:8px;border-radius:50%;background:var(--c1,#5eead4);animation:k{i} 1.2s infinite}
.l{i} span:nth-child(2){animation-delay:.15s}.l{i} span:nth-child(3){animation-delay:.3s}
@keyframes k{i}{0%,60%,100%{transform:translateY(0);opacity:.4}30%{transform:translateY(-6px);opacity:1}}`),

  L("Elastic Merge", "Dots", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{display:flex;gap:6px;align-items:center}
.l{i} span{width:12px;height:12px;border-radius:50%;background:var(--c1,#5eead4)}
.l{i} span:first-child{animation:k{i}a 1s ease-in-out infinite}
.l{i} span:last-child{animation:k{i}b 1s ease-in-out infinite;background:var(--c2,#fb7185)}
.l{i} span:nth-child(2){animation:k{i}c 1s ease-in-out infinite}
@keyframes k{i}a{0%,100%{transform:translateX(0)}50%{transform:translateX(15px)}}
@keyframes k{i}b{0%,100%{transform:translateX(0)}50%{transform:translateX(-15px)}}
@keyframes k{i}c{0%,100%{transform:scale(1)}50%{transform:scale(1.5,.6)}}`),

  L("Flash Sequence", "Dots", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{display:flex;gap:10px}
.l{i} span{width:12px;height:12px;border-radius:50%;background:var(--c2,#fb7185);animation:k{i} 1.4s infinite}
.l{i} span:nth-child(2){animation-delay:.25s}.l{i} span:nth-child(3){animation-delay:.5s}
@keyframes k{i}{0%,70%,100%{opacity:.15}20%{opacity:1;box-shadow:0 0 12px var(--c2,#fb7185)}}`),

  L("Dot Carousel", "Dots", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{position:relative;width:56px;height:14px}
.l{i} span{position:absolute;top:0;left:22px;width:13px;height:13px;border-radius:50%;background:var(--c1,#5eead4);animation:k{i} 1.5s linear infinite}
.l{i} span:nth-child(2){animation-delay:-.5s}.l{i} span:nth-child(3){animation-delay:-1s}
@keyframes k{i}{0%{transform:translateX(-24px) scale(.4);opacity:0}25%{opacity:1}50%{transform:translateX(0) scale(1)}75%{opacity:1}100%{transform:translateX(24px) scale(.4);opacity:0}}`),

  L("Fading Circle", "Dots", `<div class="l{i}">${sp(8)}</div>`, `
.l{i}{position:relative;width:48px;height:48px}
.l{i} span{position:absolute;top:0;left:21px;width:7px;height:7px;border-radius:50%;background:var(--c1,#5eead4);transform-origin:3.5px 24px;animation:k{i} 1s linear infinite}
.l{i} span:nth-child(2){transform:rotate(45deg);animation-delay:-.875s}
.l{i} span:nth-child(3){transform:rotate(90deg);animation-delay:-.75s}
.l{i} span:nth-child(4){transform:rotate(135deg);animation-delay:-.625s}
.l{i} span:nth-child(5){transform:rotate(180deg);animation-delay:-.5s}
.l{i} span:nth-child(6){transform:rotate(225deg);animation-delay:-.375s}
.l{i} span:nth-child(7){transform:rotate(270deg);animation-delay:-.25s}
.l{i} span:nth-child(8){transform:rotate(315deg);animation-delay:-.125s}
@keyframes k{i}{0%{opacity:1}100%{opacity:.12}}`),

  L("Newton's Cradle", "Dots", `<div class="l{i}">${sp(5)}</div>`, `
.l{i}{display:flex;padding-top:20px}
.l{i} span{width:12px;height:12px;border-radius:50%;background:var(--c1,#5eead4);transform-origin:50% -18px}
.l{i} span:first-child{animation:k{i}a 1.1s ease-out infinite;background:var(--c2,#fb7185)}
.l{i} span:last-child{animation:k{i}b 1.1s ease-out infinite;background:var(--c2,#fb7185)}
@keyframes k{i}a{0%,50%,100%{transform:rotate(0)}25%{transform:rotate(52deg)}}
@keyframes k{i}b{0%,50%,100%{transform:rotate(0)}75%{transform:rotate(-52deg)}}`),

  L("Grid Bloom", "Dots", `<div class="l{i}">${sp(9)}</div>`, `
.l{i}{display:grid;grid-template-columns:repeat(3,12px);gap:6px}
.l{i} span{width:12px;height:12px;border-radius:3px;background:var(--c1,#5eead4);animation:k{i} 1.3s ease-in-out infinite}
.l{i} span:nth-child(2),.l{i} span:nth-child(4){animation-delay:.12s}
.l{i} span:nth-child(3),.l{i} span:nth-child(5),.l{i} span:nth-child(7){animation-delay:.24s}
.l{i} span:nth-child(6),.l{i} span:nth-child(8){animation-delay:.36s}
.l{i} span:nth-child(9){animation-delay:.48s}
@keyframes k{i}{0%,70%,100%{transform:scale(1);opacity:1}35%{transform:scale(.3) rotate(45deg);opacity:.4;background:var(--c2,#fb7185)}}`),

  L("Collider", "Dots", `<div class="l{i}">${sp(2)}</div>`, `
.l{i}{display:flex;gap:32px}
.l{i} span{width:14px;height:14px;border-radius:50%}
.l{i} span:first-child{background:var(--c1,#5eead4);animation:k{i}a .8s ease-in infinite alternate}
.l{i} span:last-child{background:var(--c2,#fb7185);animation:k{i}b .8s ease-in infinite alternate}
@keyframes k{i}a{to{transform:translateX(17px) scale(1.25,.8)}}
@keyframes k{i}b{to{transform:translateX(-17px) scale(1.25,.8)}}`),

  L("Falling Dots", "Dots", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{display:flex;gap:10px;height:44px;align-items:flex-end}
.l{i} span{width:11px;height:11px;border-radius:50%;background:var(--c2,#fb7185);animation:k{i} 1.2s cubic-bezier(.3,0,.7,1) infinite}
.l{i} span:nth-child(2){animation-delay:.2s}.l{i} span:nth-child(3){animation-delay:.4s}
@keyframes k{i}{0%{transform:translateY(-34px);opacity:0}30%{opacity:1}55%{transform:translateY(0)}70%{transform:translateY(-9px)}85%,100%{transform:translateY(0);opacity:1}}`),

  L("Bloom Circle", "Dots", `<div class="l{i}">${sp(8)}</div>`, `
.l{i}{position:relative;width:48px;height:48px}
.l{i} span{position:absolute;top:0;left:20px;width:9px;height:9px;border-radius:50%;background:var(--c2,#fb7185);transform-origin:4.5px 24px;animation:k{i} 1.1s ease-in-out infinite}
.l{i} span:nth-child(2){transform:rotate(45deg);animation-delay:.14s}
.l{i} span:nth-child(3){transform:rotate(90deg);animation-delay:.28s}
.l{i} span:nth-child(4){transform:rotate(135deg);animation-delay:.42s}
.l{i} span:nth-child(5){transform:rotate(180deg);animation-delay:.56s}
.l{i} span:nth-child(6){transform:rotate(225deg);animation-delay:.7s}
.l{i} span:nth-child(7){transform:rotate(270deg);animation-delay:.84s}
.l{i} span:nth-child(8){transform:rotate(315deg);animation-delay:.98s}
@keyframes k{i}{0%,100%{scale:1}50%{scale:.25;background:var(--c1,#5eead4)}}`),

  L("Gradient Surf", "Dots", `<div class="l{i}">${sp(5)}</div>`, `
.l{i}{display:flex;gap:7px}
.l{i} span{width:11px;height:11px;border-radius:50%;background:linear-gradient(135deg,var(--c1,#5eead4),var(--c2,#fb7185));animation:k{i} 1.1s ease-in-out infinite}
.l{i} span:nth-child(2){animation-delay:.12s}.l{i} span:nth-child(3){animation-delay:.24s}.l{i} span:nth-child(4){animation-delay:.36s}.l{i} span:nth-child(5){animation-delay:.48s}
@keyframes k{i}{0%,100%{transform:translateY(6px) scale(.8)}50%{transform:translateY(-8px) scale(1.15)}}`),

  /* -------------------------------- BARS -------------------------------- */
  L("Equalizer", "Bars", `<div class="l{i}">${sp(5)}</div>`, `
.l{i}{display:flex;gap:5px;align-items:center;height:40px}
.l{i} span{width:7px;height:100%;border-radius:4px;background:var(--c1,#5eead4);animation:k{i} 1s ease-in-out infinite}
.l{i} span:nth-child(2){animation-delay:.15s}.l{i} span:nth-child(3){animation-delay:.3s;background:var(--c2,#fb7185)}.l{i} span:nth-child(4){animation-delay:.45s}.l{i} span:nth-child(5){animation-delay:.6s}
@keyframes k{i}{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}`),

  L("Bar Wave", "Bars", `<div class="l{i}">${sp(7)}</div>`, `
.l{i}{display:flex;gap:5px;align-items:center}
.l{i} span{width:6px;height:28px;border-radius:3px;background:var(--c2,#fb7185);animation:k{i} 1.2s ease-in-out infinite}
.l{i} span:nth-child(2){animation-delay:.1s}.l{i} span:nth-child(3){animation-delay:.2s}.l{i} span:nth-child(4){animation-delay:.3s}.l{i} span:nth-child(5){animation-delay:.4s}.l{i} span:nth-child(6){animation-delay:.5s}.l{i} span:nth-child(7){animation-delay:.6s}
@keyframes k{i}{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px);background:var(--c1,#5eead4)}}`),

  L("Barber Pole", "Bars", `<div class="l{i}"></div>`, `
.l{i}{width:120px;height:14px;border-radius:7px;background:repeating-linear-gradient(45deg,var(--c1,#5eead4) 0 10px,var(--c2,#fb7185) 10px 20px);background-size:28px 28px;animation:k{i} .7s linear infinite}
@keyframes k{i}{to{background-position:28px 0}}`),

  L("Indeterminate Slide", "Bars", `<div class="l{i}"><span></span></div>`, `
.l{i}{width:130px;height:6px;border-radius:3px;background:color-mix(in srgb,var(--c1,#5eead4) 18%,transparent);overflow:hidden;position:relative}
.l{i} span{position:absolute;top:0;bottom:0;width:40%;border-radius:3px;background:var(--c1,#5eead4);animation:k{i} 1.3s cubic-bezier(.45,0,.55,1) infinite}
@keyframes k{i}{0%{left:-40%}100%{left:100%}}`),

  L("Fill & Reset", "Bars", `<div class="l{i}"><span></span></div>`, `
.l{i}{width:130px;height:10px;border-radius:5px;border:2px solid var(--c1,#5eead4);padding:2px}
.l{i} span{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,var(--c1,#5eead4),var(--c2,#fb7185));animation:k{i} 2.2s ease-in-out infinite}
@keyframes k{i}{0%{width:0}70%,85%{width:100%}100%{width:0}}`),

  L("Battery Charge", "Bars", `<div class="l{i}">${sp(4)}</div>`, `
.l{i}{display:flex;gap:4px;padding:5px;border:2px solid var(--c1,#5eead4);border-radius:6px;position:relative}
.l{i}::after{content:"";position:absolute;right:-7px;top:50%;transform:translateY(-50%);width:4px;height:12px;border-radius:0 2px 2px 0;background:var(--c1,#5eead4)}
.l{i} span{width:11px;height:20px;border-radius:2px;background:var(--c1,#5eead4);opacity:.15;animation:k{i} 1.8s infinite}
.l{i} span:nth-child(2){animation-delay:.35s}.l{i} span:nth-child(3){animation-delay:.7s}.l{i} span:nth-child(4){animation-delay:1.05s}
@keyframes k{i}{0%{opacity:.15}20%,75%{opacity:1}100%{opacity:.15}}`),

  L("Staircase", "Bars", `<div class="l{i}">${sp(5)}</div>`, `
.l{i}{display:flex;gap:5px;align-items:flex-end;height:36px}
.l{i} span{width:8px;height:100%;border-radius:3px 3px 0 0;background:var(--c1,#5eead4);transform-origin:bottom;animation:k{i} 2s ease-in-out infinite}
.l{i} span:nth-child(2){animation-delay:.15s}.l{i} span:nth-child(3){animation-delay:.3s}.l{i} span:nth-child(4){animation-delay:.45s}.l{i} span:nth-child(5){animation-delay:.6s;background:var(--c2,#fb7185)}
@keyframes k{i}{0%{transform:scaleY(.1)}40%,60%{transform:scaleY(1)}100%{transform:scaleY(.1)}}`),

  L("Symmetric Sound", "Bars", `<div class="l{i}">${sp(7)}</div>`, `
.l{i}{display:flex;gap:4px;align-items:center;height:44px}
.l{i} span{width:5px;height:100%;border-radius:3px;background:linear-gradient(180deg,var(--c1,#5eead4),var(--c2,#fb7185));animation:k{i} 1s ease-in-out infinite}
.l{i} span:nth-child(1),.l{i} span:nth-child(7){animation-delay:.4s}
.l{i} span:nth-child(2),.l{i} span:nth-child(6){animation-delay:.3s}
.l{i} span:nth-child(3),.l{i} span:nth-child(5){animation-delay:.15s}
@keyframes k{i}{0%,100%{transform:scaleY(.2)}50%{transform:scaleY(1)}}`),

  L("Domino Fall", "Bars", `<div class="l{i}">${sp(5)}</div>`, `
.l{i}{display:flex;gap:8px;align-items:flex-end;height:34px}
.l{i} span{width:7px;height:32px;border-radius:2px;background:var(--c2,#fb7185);transform-origin:bottom right;animation:k{i} 1.8s ease-in infinite}
.l{i} span:nth-child(2){animation-delay:.12s}.l{i} span:nth-child(3){animation-delay:.24s}.l{i} span:nth-child(4){animation-delay:.36s}.l{i} span:nth-child(5){animation-delay:.48s}
@keyframes k{i}{0%,10%{transform:rotate(0);opacity:1}40%,70%{transform:rotate(68deg);opacity:1}85%{opacity:0;transform:rotate(68deg)}100%{transform:rotate(0);opacity:0}}`),

  L("Sliding Blocks", "Bars", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{display:flex;gap:6px}
.l{i} span{width:14px;height:14px;border-radius:4px;background:var(--c1,#5eead4);animation:k{i} 1.2s ease-in-out infinite}
.l{i} span:nth-child(2){animation-delay:.15s;background:color-mix(in srgb,var(--c1,#5eead4) 50%,var(--c2,#fb7185))}
.l{i} span:nth-child(3){animation-delay:.3s;background:var(--c2,#fb7185)}
@keyframes k{i}{0%,100%{transform:translateX(0) rotate(0)}50%{transform:translateX(8px) rotate(90deg)}}`),

  L("Gradient Sweep", "Bars", `<div class="l{i}"></div>`, `
.l{i}{width:130px;height:8px;border-radius:4px;background:linear-gradient(90deg,transparent,var(--c1,#5eead4),var(--c2,#fb7185),transparent);background-size:200% 100%;animation:k{i} 1.4s linear infinite}
@keyframes k{i}{0%{background-position:200% 0}100%{background-position:-200% 0}}`),

  L("Zip Bars", "Bars", `<div class="l{i}">${sp(2)}</div>`, `
.l{i}{display:flex;flex-direction:column;gap:8px;width:90px}
.l{i} span{height:8px;border-radius:4px;background:var(--c1,#5eead4);animation:k{i} 1.4s ease-in-out infinite}
.l{i} span:first-child{transform-origin:left}
.l{i} span:last-child{transform-origin:right;background:var(--c2,#fb7185);animation-delay:.7s}
@keyframes k{i}{0%,100%{transform:scaleX(.15)}50%{transform:scaleX(1)}}`),

  /* ---------------------------- PULSE & WAVES ---------------------------- */
  L("Ripple", "Pulse & Waves", `<div class="l{i}"><span></span><span></span></div>`, `
.l{i}{position:relative;width:52px;height:52px}
.l{i} span{position:absolute;inset:0;border:3px solid var(--c1,#5eead4);border-radius:50%;animation:k{i} 1.6s cubic-bezier(0,.2,.8,1) infinite}
.l{i} span:last-child{animation-delay:-.8s;border-color:var(--c2,#fb7185)}
@keyframes k{i}{0%{transform:scale(.1);opacity:1}100%{transform:scale(1);opacity:0}}`),

  L("Heartbeat Pulse", "Pulse & Waves", `<div class="l{i}"></div>`, `
.l{i}{width:36px;height:36px;border-radius:50%;background:radial-gradient(circle at 35% 35%,var(--c1,#5eead4),var(--c2,#fb7185));animation:k{i} 1.2s ease-in-out infinite}
@keyframes k{i}{0%,100%{transform:scale(.85)}14%{transform:scale(1.1)}28%{transform:scale(.9)}42%{transform:scale(1.15)}70%{transform:scale(.85)}}`),

  L("Sonar Ping", "Pulse & Waves", `<div class="l{i}"></div>`, `
.l{i}{width:14px;height:14px;border-radius:50%;background:var(--c1,#5eead4);position:relative}
.l{i}::before,.l{i}::after{content:"";position:absolute;inset:-14px;border:2px solid var(--c1,#5eead4);border-radius:50%;animation:k{i} 1.8s ease-out infinite}
.l{i}::after{animation-delay:.9s}
@keyframes k{i}{0%{transform:scale(.3);opacity:1}100%{transform:scale(1.6);opacity:0}}`),

  L("Radar Sweep", "Pulse & Waves", `<div class="l{i}"></div>`, `
.l{i}{width:56px;height:56px;border-radius:50%;border:2px solid color-mix(in srgb,var(--c1,#5eead4) 45%,transparent);background:repeating-radial-gradient(circle,transparent 0 12px,color-mix(in srgb,var(--c1,#5eead4) 25%,transparent) 12px 13px);position:relative;overflow:hidden}
.l{i}::after{content:"";position:absolute;inset:0;border-radius:50%;background:conic-gradient(var(--c1,#5eead4) 0 60deg,transparent 60deg);opacity:.7;animation:k{i} 1.8s linear infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Breathing Square", "Pulse & Waves", `<div class="l{i}"></div>`, `
.l{i}{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--c1,#5eead4),var(--c2,#fb7185));animation:k{i} 2s ease-in-out infinite}
@keyframes k{i}{0%,100%{transform:scale(.7) rotate(0);border-radius:10px}50%{transform:scale(1) rotate(90deg);border-radius:50%}}`),

  L("Blob Pulse", "Pulse & Waves", `<div class="l{i}"></div>`, `
.l{i}{width:48px;height:48px;background:linear-gradient(135deg,var(--c1,#5eead4),var(--c2,#fb7185));animation:k{i} 3s ease-in-out infinite}
@keyframes k{i}{0%,100%{border-radius:60% 40% 55% 45%/45% 60% 40% 55%;transform:rotate(0) scale(.9)}50%{border-radius:40% 60% 45% 55%/60% 40% 55% 45%;transform:rotate(180deg) scale(1.05)}}`),

  L("Signal Arcs", "Pulse & Waves", `<div class="l{i}">${sp(3)}<span></span></div>`, `
.l{i}{position:relative;width:56px;height:56px}
.l{i} span{position:absolute;left:50%;bottom:6px;border:4px solid transparent;border-top-color:var(--c1,#5eead4);border-radius:50%;transform:translateX(-50%);animation:k{i} 1.5s infinite}
.l{i} span:nth-child(1){width:20px;height:20px}
.l{i} span:nth-child(2){width:38px;height:38px;animation-delay:.2s}
.l{i} span:nth-child(3){width:56px;height:56px;animation-delay:.4s}
.l{i} span:nth-child(4){width:8px;height:8px;border:none;background:var(--c2,#fb7185);bottom:2px;animation:none}
@keyframes k{i}{0%,100%{opacity:.15}35%{opacity:1}}`),

  L("Concentric Rings", "Pulse & Waves", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{position:relative;width:54px;height:54px}
.l{i} span{position:absolute;border:3px solid var(--c2,#fb7185);border-radius:50%;animation:k{i} 1.5s ease-in-out infinite}
.l{i} span:nth-child(1){inset:18px}
.l{i} span:nth-child(2){inset:9px;animation-delay:.15s;border-color:color-mix(in srgb,var(--c1,#5eead4) 50%,var(--c2,#fb7185))}
.l{i} span:nth-child(3){inset:0;animation-delay:.3s;border-color:var(--c1,#5eead4)}
@keyframes k{i}{0%,100%{transform:scale(.8);opacity:.4}50%{transform:scale(1);opacity:1}}`),

  L("Shockwave", "Pulse & Waves", `<div class="l{i}"></div>`, `
.l{i}{width:48px;height:48px;border-radius:50%;border:8px solid var(--c1,#5eead4);animation:k{i} 1.1s ease-out infinite}
@keyframes k{i}{0%{transform:scale(.2);opacity:1;border-width:12px}100%{transform:scale(1.15);opacity:0;border-width:2px}}`),

  L("Droplet", "Pulse & Waves", `<div class="l{i}"><span></span></div>`, `
.l{i}{position:relative;width:52px;height:52px}
.l{i}::before{content:"";position:absolute;left:50%;top:2px;width:12px;height:12px;margin-left:-6px;background:var(--c1,#5eead4);border-radius:50% 50% 50% 0;transform:rotate(-45deg);animation:k{i}a 1.4s ease-in infinite}
.l{i} span{position:absolute;left:50%;bottom:4px;width:34px;height:12px;margin-left:-17px;border:3px solid var(--c2,#fb7185);border-radius:50%;animation:k{i}b 1.4s ease-out infinite}
@keyframes k{i}a{0%{transform:rotate(-45deg) translate(0);opacity:1}45%{transform:rotate(-45deg) translate(-24px,24px);opacity:1}55%,100%{transform:rotate(-45deg) translate(-26px,26px);opacity:0}}
@keyframes k{i}b{0%,45%{transform:scale(.2);opacity:0}55%{opacity:1}100%{transform:scale(1.1);opacity:0}}`),

  /* ----------------------------- SHAPES & 3D ----------------------------- */
  L("Flipping Square", "Shapes & 3D", `<div class="l{i}"></div>`, `
.l{i}{width:36px;height:36px;background:linear-gradient(135deg,var(--c1,#5eead4),var(--c2,#fb7185));animation:k{i} 1.2s ease-in-out infinite}
@keyframes k{i}{0%{transform:perspective(140px) rotateX(0) rotateY(0)}50%{transform:perspective(140px) rotateX(-180deg) rotateY(0)}100%{transform:perspective(140px) rotateX(-180deg) rotateY(-180deg)}}`),

  L("3D Cube", "Shapes & 3D", `<div class="l{i}">${sp(6)}</div>`, `
.l{i}{width:36px;height:36px;position:relative;transform-style:preserve-3d;animation:k{i} 3s linear infinite}
.l{i} span{position:absolute;inset:0;border:2px solid var(--c1,#5eead4);background:color-mix(in srgb,var(--c2,#fb7185) 22%,transparent)}
.l{i} span:nth-child(1){transform:translateZ(18px)}
.l{i} span:nth-child(2){transform:rotateY(180deg) translateZ(18px)}
.l{i} span:nth-child(3){transform:rotateY(90deg) translateZ(18px)}
.l{i} span:nth-child(4){transform:rotateY(-90deg) translateZ(18px)}
.l{i} span:nth-child(5){transform:rotateX(90deg) translateZ(18px)}
.l{i} span:nth-child(6){transform:rotateX(-90deg) translateZ(18px)}
@keyframes k{i}{from{transform:rotateX(-20deg) rotateY(0)}to{transform:rotateX(-20deg) rotateY(360deg)}}`),

  L("Folding Cube", "Shapes & 3D", `<div class="l{i}">${sp(4)}</div>`, `
.l{i}{width:40px;height:40px;position:relative;transform:rotate(45deg)}
.l{i} span{position:relative;float:left;width:50%;height:50%;transform:scale(1.05)}
.l{i} span::before{content:"";position:absolute;inset:0;background:var(--c1,#5eead4);animation:k{i} 2.4s linear infinite;transform-origin:100% 100%}
.l{i} span:nth-child(2){transform:scale(1.05) rotateZ(90deg)}
.l{i} span:nth-child(3){transform:scale(1.05) rotateZ(270deg)}
.l{i} span:nth-child(4){transform:scale(1.05) rotateZ(180deg)}
.l{i} span:nth-child(2)::before{animation-delay:.3s;background:color-mix(in srgb,var(--c1,#5eead4) 60%,var(--c2,#fb7185))}
.l{i} span:nth-child(3)::before{animation-delay:.9s;background:color-mix(in srgb,var(--c1,#5eead4) 60%,var(--c2,#fb7185))}
.l{i} span:nth-child(4)::before{animation-delay:.6s;background:var(--c2,#fb7185)}
@keyframes k{i}{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}90%,100%{transform:perspective(140px) rotateY(180deg);opacity:0}}`),

  L("Morphing Blob", "Shapes & 3D", `<div class="l{i}"></div>`, `
.l{i}{width:46px;height:46px;background:var(--c1,#5eead4);animation:k{i} 2.4s ease-in-out infinite}
@keyframes k{i}{0%,100%{border-radius:50%;transform:rotate(0)}25%{border-radius:20% 50% 50% 50%;background:var(--c2,#fb7185)}50%{border-radius:50% 20% 50% 20%;transform:rotate(180deg)}75%{border-radius:50% 50% 20% 50%;background:var(--c2,#fb7185)}}`),

  L("Triangle Spin", "Shapes & 3D", `<div class="l{i}"></div>`, `
.l{i}{width:44px;height:40px;background:linear-gradient(180deg,var(--c1,#5eead4),var(--c2,#fb7185));clip-path:polygon(50% 0,100% 100%,0 100%);animation:k{i} 1.6s cubic-bezier(.65,0,.35,1) infinite}
@keyframes k{i}{0%{transform:rotate(0)}50%{transform:rotate(180deg) scale(.8)}100%{transform:rotate(360deg)}}`),

  L("Hexagon Orbit", "Shapes & 3D", `<div class="l{i}"></div>`, `
.l{i}{width:44px;height:44px;background:conic-gradient(var(--c1,#5eead4),var(--c2,#fb7185),var(--c1,#5eead4));clip-path:polygon(25% 5%,75% 5%,100% 50%,75% 95%,25% 95%,0 50%);animation:k{i} 1.8s linear infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Diamond Bounce", "Shapes & 3D", `<div class="l{i}"></div>`, `
.l{i}{width:28px;height:28px;background:linear-gradient(135deg,var(--c1,#5eead4),var(--c2,#fb7185));transform:rotate(45deg);animation:k{i} .9s cubic-bezier(.5,0,.5,1) infinite alternate}
@keyframes k{i}{from{transform:rotate(45deg) translate(0)}to{transform:rotate(225deg) translate(-10px,-10px)}}`),

  L("Yin Yang", "Shapes & 3D", `<div class="l{i}"></div>`, `
.l{i}{width:48px;height:24px;background:var(--c1,#5eead4);border-style:solid;border-color:var(--c2,#fb7185);border-width:2px 2px 26px 2px;border-radius:50%;position:relative;animation:k{i} 1.4s linear infinite}
.l{i}::before,.l{i}::after{content:"";position:absolute;top:50%;border-radius:50%;width:8px;height:8px}
.l{i}::before{left:0;background:var(--c1,#5eead4);border:8px solid var(--c2,#fb7185)}
.l{i}::after{right:0;background:var(--c2,#fb7185);border:8px solid var(--c1,#5eead4)}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Coin Flip", "Shapes & 3D", `<div class="l{i}"></div>`, `
.l{i}{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--c1,#5eead4),var(--c2,#fb7185));box-shadow:inset 0 0 0 4px rgba(255,255,255,.25);animation:k{i} 1.2s ease-in-out infinite}
@keyframes k{i}{0%{transform:perspective(160px) rotateY(0)}100%{transform:perspective(160px) rotateY(360deg)}}`),

  L("Hourglass", "Shapes & 3D", `<div class="l{i}"></div>`, `
.l{i}{width:36px;height:44px;background:linear-gradient(180deg,var(--c1,#5eead4),var(--c2,#fb7185));clip-path:polygon(0 0,100% 0,58% 50%,100% 100%,0 100%,42% 50%);animation:k{i} 2s cubic-bezier(.7,0,.3,1) infinite}
@keyframes k{i}{0%,35%{transform:rotate(0)}50%,85%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}`),

  L("Pac-Man", "Shapes & 3D", `<div class="l{i}"><span></span><span></span><i></i></div>`, `
.l{i}{position:relative;width:44px;height:44px}
.l{i} span{position:absolute;left:0;width:44px;height:22px;background:var(--c1,#5eead4)}
.l{i} span:first-child{top:0;border-radius:22px 22px 0 0;transform-origin:50% 100%;animation:k{i}a .5s ease-in-out infinite alternate}
.l{i} span:nth-child(2){bottom:0;border-radius:0 0 22px 22px;transform-origin:50% 0;animation:k{i}b .5s ease-in-out infinite alternate}
.l{i} i{position:absolute;right:-16px;top:50%;width:8px;height:8px;margin-top:-4px;border-radius:50%;background:var(--c2,#fb7185);animation:k{i}c .5s linear infinite}
@keyframes k{i}a{from{transform:rotate(0)}to{transform:rotate(-32deg)}}
@keyframes k{i}b{from{transform:rotate(0)}to{transform:rotate(32deg)}}
@keyframes k{i}c{from{transform:translateX(0);opacity:1}to{transform:translateX(-34px);opacity:0}}`),

  L("Infinity Loop", "Shapes & 3D", `<svg class="l{i}" viewBox="0 0 100 50"><defs><linearGradient id="g{i}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="var(--c1,#5eead4)"/><stop offset="1" stop-color="var(--c2,#fb7185)"/></linearGradient></defs><path d="M25 25 C25 8 45 8 50 25 C55 42 75 42 75 25 C75 8 55 8 50 25 C45 42 25 42 25 25 Z" fill="none"/></svg>`, `
.l{i}{width:88px;height:44px}
.l{i} path{stroke:url(#g{i});stroke-width:6;stroke-linecap:round;stroke-dasharray:60 140;animation:k{i} 1.8s linear infinite}
@keyframes k{i}{to{stroke-dashoffset:-200}}`),

  L("Squircle Morph", "Shapes & 3D", `<div class="l{i}"></div>`, `
.l{i}{width:42px;height:42px;border:5px solid var(--c2,#fb7185);animation:k{i} 1.6s ease-in-out infinite}
@keyframes k{i}{0%,100%{border-radius:12%;transform:rotate(0)}50%{border-radius:50%;transform:rotate(180deg);border-color:var(--c1,#5eead4)}}`),

  L("Book Flip", "Shapes & 3D", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{display:flex;gap:4px;perspective:200px}
.l{i} span{width:14px;height:38px;border-radius:3px;background:linear-gradient(180deg,var(--c1,#5eead4),var(--c2,#fb7185));transform-origin:left;animation:k{i} 1.5s ease-in-out infinite}
.l{i} span:nth-child(2){animation-delay:.2s}.l{i} span:nth-child(3){animation-delay:.4s}
@keyframes k{i}{0%,60%,100%{transform:rotateY(0);opacity:1}30%{transform:rotateY(-160deg);opacity:.4}}`),

  /* ------------------------------- ORBITS ------------------------------- */
  L("Atom", "Orbits", `<div class="l{i}">${sp(3)}<i></i></div>`, `
.l{i}{position:relative;width:56px;height:56px}
.l{i} span{position:absolute;inset:0;border:2px solid var(--c1,#5eead4);border-radius:50%;transform:rotateY(65deg)}
.l{i} span:nth-child(1){animation:k{i} 1.4s linear infinite}
.l{i} span:nth-child(2){transform:rotateY(65deg) rotateX(60deg);animation:k{i} 1.8s linear infinite reverse;border-color:var(--c2,#fb7185)}
.l{i} span:nth-child(3){transform:rotateY(65deg) rotateX(-60deg);animation:k{i} 2.2s linear infinite}
.l{i} i{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px;border-radius:50%;background:var(--c2,#fb7185);box-shadow:0 0 10px var(--c2,#fb7185)}
@keyframes k{i}{to{transform:rotateY(65deg) rotateZ(360deg)}}`),

  L("Solar System", "Orbits", `<div class="l{i}"><span></span></div>`, `
.l{i}{width:56px;height:56px;border:1px dashed color-mix(in srgb,var(--c1,#5eead4) 45%,transparent);border-radius:50%;position:relative;animation:k{i} 2s linear infinite}
.l{i}::before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-9px;border-radius:50%;background:radial-gradient(circle at 35% 35%,var(--c1,#5eead4),var(--c2,#fb7185))}
.l{i} span{position:absolute;top:-5px;left:50%;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:var(--c2,#fb7185)}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Binary Stars", "Orbits", `<div class="l{i}">${sp(2)}</div>`, `
.l{i}{position:relative;width:52px;height:52px;animation:k{i} 1.4s linear infinite}
.l{i} span{position:absolute;width:14px;height:14px;border-radius:50%}
.l{i} span:first-child{top:0;left:19px;background:var(--c1,#5eead4);box-shadow:0 0 12px var(--c1,#5eead4)}
.l{i} span:last-child{bottom:0;left:19px;background:var(--c2,#fb7185);box-shadow:0 0 12px var(--c2,#fb7185)}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Saturn Wobble", "Orbits", `<div class="l{i}"></div>`, `
.l{i}{width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 35% 30%,var(--c1,#5eead4),var(--c2,#fb7185));position:relative;animation:k{i} 2.2s ease-in-out infinite}
.l{i}::after{content:"";position:absolute;inset:-6px -16px;border:3px solid var(--c1,#5eead4);border-radius:50%;transform:rotateX(72deg)}
@keyframes k{i}{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}`),

  L("Electron Paths", "Orbits", `<div class="l{i}">${sp(2)}</div>`, `
.l{i}{position:relative;width:60px;height:36px}
.l{i} span{position:absolute;inset:0;border:2px solid color-mix(in srgb,var(--c1,#5eead4) 40%,transparent);border-radius:50%}
.l{i} span::before{content:"";position:absolute;top:-4px;left:50%;width:8px;height:8px;border-radius:50%;background:var(--c1,#5eead4)}
.l{i} span:first-child{transform:rotate(30deg)}
.l{i} span:first-child::before{animation:k{i}a 1.2s linear infinite}
.l{i} span:last-child{transform:rotate(-30deg)}
.l{i} span:last-child::before{background:var(--c2,#fb7185);animation:k{i}a 1.2s linear infinite reverse}
@keyframes k{i}a{0%{offset-distance:0%}100%{offset-distance:100%}}
.l{i} span::before{offset-path:ellipse(50% 50% at 50% 50%)}`),

  L("Galaxy Swirl", "Orbits", `<div class="l{i}"></div>`, `
.l{i}{width:52px;height:52px;border-radius:50%;background:conic-gradient(from 0deg,transparent,var(--c1,#5eead4),transparent 55%,var(--c2,#fb7185),transparent);filter:blur(2px);animation:k{i} 1.6s linear infinite;position:relative}
.l{i}::after{content:"";position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px;border-radius:50%;background:#fff;filter:blur(1px)}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Orbit Trail", "Orbits", `<div class="l{i}"></div>`, `
.l{i}{width:12px;height:12px;border-radius:50%;background:var(--c1,#5eead4);position:relative;animation:k{i} 1.1s linear infinite;box-shadow:14px 6px 0 -2px color-mix(in srgb,var(--c1,#5eead4) 70%,transparent),22px 16px 0 -4px color-mix(in srgb,var(--c2,#fb7185) 50%,transparent),26px 28px 0 -5px color-mix(in srgb,var(--c2,#fb7185) 30%,transparent)}
@keyframes k{i}{from{transform:rotate(0) translateX(20px)}to{transform:rotate(360deg) translateX(20px)}}`),

  L("Moon Phases", "Orbits", `<div class="l{i}"></div>`, `
.l{i}{width:42px;height:42px;border-radius:50%;background:var(--c1,#5eead4);animation:k{i} 2.4s ease-in-out infinite alternate}
@keyframes k{i}{0%{box-shadow:inset -22px 0 0 0 rgba(10,12,24,.92)}50%{box-shadow:inset 0 0 0 0 rgba(10,12,24,.92)}100%{box-shadow:inset 22px 0 0 0 rgba(10,12,24,.92)}}`),

  /* ------------------------------ PROGRESS ------------------------------ */
  L("Striped Progress", "Progress", `<div class="l{i}"><span></span></div>`, `
.l{i}{width:140px;height:14px;border-radius:7px;background:color-mix(in srgb,var(--c1,#5eead4) 15%,transparent);overflow:hidden}
.l{i} span{display:block;height:100%;border-radius:7px;background:repeating-linear-gradient(45deg,var(--c1,#5eead4) 0 8px,var(--c2,#fb7185) 8px 16px);background-size:23px 23px;animation:k{i}a 2.5s ease-in-out infinite,k{i}b .6s linear infinite}
@keyframes k{i}a{0%{width:8%}80%,90%{width:100%}100%{width:8%}}
@keyframes k{i}b{to{background-position:23px 0}}`),

  L("Step Tracker", "Progress", `<div class="l{i}">${sp(3)}<i></i></div>`, `
.l{i}{position:relative;display:flex;gap:28px}
.l{i} i{position:absolute;left:6px;right:6px;top:5px;height:3px;background:linear-gradient(90deg,var(--c1,#5eead4),var(--c2,#fb7185));transform-origin:left;animation:k{i}a 2.4s ease-in-out infinite;z-index:0}
.l{i} span{width:13px;height:13px;border-radius:50%;background:var(--c1,#5eead4);position:relative;z-index:1;animation:k{i}b 2.4s infinite}
.l{i} span:nth-child(2){animation-delay:.8s}.l{i} span:nth-child(3){animation-delay:1.6s}
@keyframes k{i}a{0%{transform:scaleX(0)}70%,90%{transform:scaleX(1)}100%{transform:scaleX(0)}}
@keyframes k{i}b{0%,10%{transform:scale(1);box-shadow:none}20%,80%{transform:scale(1.3);box-shadow:0 0 10px var(--c2,#fb7185)}100%{transform:scale(1)}}`),

  L("Percent Counter", "Progress", `<div class="l{i}"></div>`, `
@property --p{i}{syntax:"<integer>";initial-value:0;inherits:false}
.l{i}{animation:k{i} 3s steps(100) infinite;counter-reset:num var(--p{i});font:700 26px/1 ui-monospace,monospace;color:var(--c1,#5eead4)}
.l{i}::after{content:counter(num) "%"}
@keyframes k{i}{to{--p{i}:100}}`),

  L("Skeleton Card", "Progress", `<div class="l{i}"><i></i><div><span></span><span></span></div></div>`, `
.l{i}{display:flex;gap:10px;width:150px;padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,.12)}
.l{i} i{width:34px;height:34px;border-radius:50%;flex-shrink:0}
.l{i} div{flex:1;display:flex;flex-direction:column;gap:8px;justify-content:center}
.l{i} span{height:9px;border-radius:4px}
.l{i} span:last-child{width:65%}
.l{i} i,.l{i} span{background:linear-gradient(90deg,color-mix(in srgb,var(--c1,#5eead4) 14%,transparent) 25%,color-mix(in srgb,var(--c2,#fb7185) 32%,transparent) 50%,color-mix(in srgb,var(--c1,#5eead4) 14%,transparent) 75%);background-size:200% 100%;animation:k{i} 1.3s linear infinite}
@keyframes k{i}{to{background-position:-200% 0}}`),

  L("Skeleton Lines", "Progress", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{display:flex;flex-direction:column;gap:9px;width:150px}
.l{i} span{height:11px;border-radius:5px;background:linear-gradient(90deg,color-mix(in srgb,var(--c2,#fb7185) 15%,transparent) 25%,color-mix(in srgb,var(--c1,#5eead4) 35%,transparent) 50%,color-mix(in srgb,var(--c2,#fb7185) 15%,transparent) 75%);background-size:200% 100%;animation:k{i} 1.2s linear infinite}
.l{i} span:nth-child(2){width:85%}.l{i} span:nth-child(3){width:60%}
@keyframes k{i}{to{background-position:-200% 0}}`),

  L("Circular Progress", "Progress", `<svg class="l{i}" viewBox="0 0 50 50"><circle class="tr" cx="25" cy="25" r="20"/><circle class="pr" cx="25" cy="25" r="20"/></svg>`, `
.l{i}{width:50px;height:50px;transform:rotate(-90deg)}
.l{i} circle{fill:none;stroke-width:5;stroke-linecap:round}
.l{i} .tr{stroke:color-mix(in srgb,var(--c1,#5eead4) 18%,transparent)}
.l{i} .pr{stroke:var(--c2,#fb7185);stroke-dasharray:126;animation:k{i} 2.2s ease-in-out infinite}
@keyframes k{i}{0%{stroke-dashoffset:126}60%,80%{stroke-dashoffset:0}100%{stroke-dashoffset:126}}`),

  L("Gauge Sweep", "Progress", `<div class="l{i}"></div>`, `
.l{i}{width:64px;height:32px;border-radius:64px 64px 0 0;border:5px solid color-mix(in srgb,var(--c1,#5eead4) 30%,transparent);border-bottom:none;position:relative;overflow:hidden}
.l{i}::after{content:"";position:absolute;left:50%;bottom:0;width:4px;height:28px;margin-left:-2px;border-radius:2px;background:var(--c2,#fb7185);transform-origin:bottom;animation:k{i} 1.6s ease-in-out infinite alternate}
@keyframes k{i}{from{transform:rotate(-78deg)}to{transform:rotate(78deg)}}`),

  L("Download Arrow", "Progress", `<div class="l{i}"><span></span></div>`, `
.l{i}{width:36px;height:40px;position:relative}
.l{i}::before{content:"";position:absolute;left:50%;top:0;width:6px;height:20px;margin-left:-3px;border-radius:3px;background:var(--c1,#5eead4);animation:k{i}a 1s ease-in infinite}
.l{i}::after{content:"";position:absolute;left:50%;top:12px;width:14px;height:14px;margin-left:-7px;border-right:5px solid var(--c1,#5eead4);border-bottom:5px solid var(--c1,#5eead4);transform:rotate(45deg);animation:k{i}a 1s ease-in infinite}
.l{i} span{position:absolute;bottom:0;left:0;right:0;height:6px;border:3px solid var(--c2,#fb7185);border-top:none;border-radius:0 0 6px 6px}
@keyframes k{i}a{0%{transform:translateY(-6px) rotate(var(--r,0));opacity:0}30%{opacity:1}100%{transform:translateY(6px) rotate(var(--r,0));opacity:0}}
.l{i}::after{--r:45deg}`),

  L("Dotted Track", "Progress", `<div class="l{i}">${sp(6)}</div>`, `
.l{i}{display:flex;gap:8px}
.l{i} span{width:10px;height:10px;border-radius:50%;background:color-mix(in srgb,var(--c1,#5eead4) 22%,transparent);animation:k{i} 1.8s infinite}
.l{i} span:nth-child(2){animation-delay:.2s}.l{i} span:nth-child(3){animation-delay:.4s}.l{i} span:nth-child(4){animation-delay:.6s}.l{i} span:nth-child(5){animation-delay:.8s}.l{i} span:nth-child(6){animation-delay:1s}
@keyframes k{i}{0%{background:var(--c2,#fb7185);transform:scale(1.25)}35%,100%{background:color-mix(in srgb,var(--c1,#5eead4) 22%,transparent);transform:scale(1)}}`),

  L("Liquid Fill", "Progress", `<div class="l{i}"><span></span></div>`, `
.l{i}{width:52px;height:52px;border:3px solid var(--c1,#5eead4);border-radius:50%;position:relative;overflow:hidden}
.l{i} span{position:absolute;left:-50%;top:32%;width:200%;height:200%;border-radius:40%;background:color-mix(in srgb,var(--c2,#fb7185) 75%,transparent);animation:k{i} 3.5s linear infinite}
@keyframes k{i}{from{transform:rotate(0)}to{transform:rotate(360deg)}}`),

  /* -------------------------------- TEXT -------------------------------- */
  L("Classic Ellipsis", "Text", `<div class="l{i}">Loading</div>`, `
.l{i}{font:600 20px/1 ui-monospace,monospace;color:var(--c1,#5eead4);letter-spacing:.05em}
.l{i}::after{content:"";animation:k{i} 1.5s steps(4) infinite}
@keyframes k{i}{0%{content:""}25%{content:"."}50%{content:".."}75%{content:"..."}}`),

  L("Typewriter", "Text", `<div class="l{i}">LOADING</div>`, `
.l{i}{font:700 22px/1.2 ui-monospace,monospace;color:var(--c2,#fb7185);letter-spacing:.12em;overflow:hidden;white-space:nowrap;border-right:3px solid var(--c1,#5eead4);width:7ch;animation:k{i}a 2.4s steps(7) infinite,k{i}b .6s step-end infinite}
@keyframes k{i}a{0%{width:0}60%,80%{width:7ch}100%{width:0}}
@keyframes k{i}b{50%{border-color:transparent}}`),

  L("Glitch Text", "Text", `<div class="l{i}" data-text="LOADING">LOADING</div>`, `
.l{i}{position:relative;font:800 24px/1 ui-monospace,monospace;color:#fff;letter-spacing:.1em}
.l{i}::before,.l{i}::after{content:attr(data-text);position:absolute;inset:0}
.l{i}::before{color:var(--c1,#5eead4);animation:k{i}a 1.2s steps(2) infinite;clip-path:inset(0 0 55% 0)}
.l{i}::after{color:var(--c2,#fb7185);animation:k{i}b 1.4s steps(2) infinite;clip-path:inset(55% 0 0 0)}
@keyframes k{i}a{0%,100%{transform:translate(0)}25%{transform:translate(-3px,-2px)}50%{transform:translate(2px,1px)}75%{transform:translate(-1px,2px)}}
@keyframes k{i}b{0%,100%{transform:translate(0)}25%{transform:translate(3px,2px)}50%{transform:translate(-2px,-1px)}75%{transform:translate(1px,-2px)}}`),

  L("Jumping Letters", "Text", `<div class="l{i}">${letters("LOADING")}</div>`, `
.l{i}{display:flex;font:800 20px/1 sans-serif;color:var(--c1,#5eead4);letter-spacing:.06em}
.l{i} span{animation:k{i} 1.2s ease-in-out infinite}
.l{i} span:nth-child(2){animation-delay:.08s}.l{i} span:nth-child(3){animation-delay:.16s}.l{i} span:nth-child(4){animation-delay:.24s}.l{i} span:nth-child(5){animation-delay:.32s}.l{i} span:nth-child(6){animation-delay:.4s}.l{i} span:nth-child(7){animation-delay:.48s}
@keyframes k{i}{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-10px);color:var(--c2,#fb7185)}}`),

  L("Flipping Letters", "Text", `<div class="l{i}">${letters("LOADING")}</div>`, `
.l{i}{display:flex;font:800 20px/1.4 sans-serif;color:var(--c2,#fb7185);letter-spacing:.08em;perspective:200px}
.l{i} span{animation:k{i} 2s ease-in-out infinite;transform-origin:50% 100%}
.l{i} span:nth-child(2){animation-delay:.1s}.l{i} span:nth-child(3){animation-delay:.2s}.l{i} span:nth-child(4){animation-delay:.3s}.l{i} span:nth-child(5){animation-delay:.4s}.l{i} span:nth-child(6){animation-delay:.5s}.l{i} span:nth-child(7){animation-delay:.6s}
@keyframes k{i}{0%,55%,100%{transform:rotateX(0);opacity:1}25%{transform:rotateX(90deg);opacity:.2;color:var(--c1,#5eead4)}}`),

  L("Neon Flicker", "Text", `<div class="l{i}">LOADING</div>`, `
.l{i}{font:800 22px/1 sans-serif;letter-spacing:.18em;color:var(--c1,#5eead4);text-shadow:0 0 6px var(--c1,#5eead4),0 0 18px var(--c1,#5eead4),0 0 36px var(--c2,#fb7185);animation:k{i} 2s linear infinite}
@keyframes k{i}{0%,18%,22%,54%,58%,100%{opacity:1}20%,56%{opacity:.25;text-shadow:none}80%{opacity:.85}}`),

  L("Shimmer Text", "Text", `<div class="l{i}">LOADING</div>`, `
.l{i}{font:800 24px/1 sans-serif;letter-spacing:.14em;background:linear-gradient(90deg,var(--c1,#5eead4),var(--c2,#fb7185),var(--c1,#5eead4));background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:k{i} 1.6s linear infinite}
@keyframes k{i}{to{background-position:-200% 0}}`),

  L("Binary Blink", "Text", `<div class="l{i}">${sp(6)}</div>`, `
.l{i}{display:flex;gap:6px;font:700 22px/1 ui-monospace,monospace;color:var(--c1,#5eead4)}
.l{i} span::after{content:"0";animation:k{i} 1s steps(1) infinite}
.l{i} span:nth-child(2)::after{animation-delay:.15s}.l{i} span:nth-child(3)::after{animation-delay:.35s}.l{i} span:nth-child(4)::after{animation-delay:.5s}.l{i} span:nth-child(5)::after{animation-delay:.7s}.l{i} span:nth-child(6)::after{animation-delay:.85s}
@keyframes k{i}{0%{content:"0";color:var(--c1,#5eead4)}50%{content:"1";color:var(--c2,#fb7185)}}`),

  /* ------------------------------ GRADIENTS ------------------------------ */
  L("Conic Swirl", "Gradients", `<div class="l{i}"></div>`, `
.l{i}{width:50px;height:50px;border-radius:50%;background:conic-gradient(var(--c1,#5eead4),var(--c2,#fb7185),var(--c1,#5eead4));animation:k{i} 1.4s linear infinite}
@keyframes k{i}{0%{transform:rotate(0);border-radius:50%}50%{border-radius:38%}100%{transform:rotate(360deg);border-radius:50%}}`),

  L("Aurora Blobs", "Gradients", `<div class="l{i}">${sp(2)}</div>`, `
.l{i}{position:relative;width:64px;height:48px;filter:blur(6px)}
.l{i} span{position:absolute;width:34px;height:34px;border-radius:50%}
.l{i} span:first-child{background:var(--c1,#5eead4);left:0;top:0;animation:k{i}a 2s ease-in-out infinite alternate}
.l{i} span:last-child{background:var(--c2,#fb7185);right:0;bottom:0;animation:k{i}b 2s ease-in-out infinite alternate}
@keyframes k{i}a{to{transform:translate(26px,12px) scale(1.2)}}
@keyframes k{i}b{to{transform:translate(-26px,-12px) scale(1.2)}}`),

  L("Rainbow Ring", "Gradients", `<div class="l{i}"></div>`, `
.l{i}{width:48px;height:48px;border-radius:50%;background:conic-gradient(#f43f5e,#f59e0b,#84cc16,#06b6d4,#8b5cf6,#f43f5e);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 7px),#000 calc(100% - 6px));mask:radial-gradient(farthest-side,transparent calc(100% - 7px),#000 calc(100% - 6px));animation:k{i} 1.6s linear infinite}
@keyframes k{i}{to{transform:rotate(360deg);filter:hue-rotate(360deg)}}`),

  L("Gradient Satellites", "Gradients", `<div class="l{i}">${sp(2)}</div>`, `
.l{i}{position:relative;width:48px;height:48px;animation:k{i} 1.3s cubic-bezier(.6,.1,.4,.9) infinite}
.l{i} span{position:absolute;width:16px;height:16px;border-radius:50%;background:linear-gradient(135deg,var(--c1,#5eead4),var(--c2,#fb7185))}
.l{i} span:first-child{top:0;left:16px}
.l{i} span:last-child{bottom:0;left:16px;transform:scale(.65)}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Plasma Ball", "Gradients", `<div class="l{i}"></div>`, `
.l{i}{width:46px;height:46px;border-radius:50%;background:radial-gradient(circle at 32% 32%,var(--c1,#5eead4),var(--c2,#fb7185) 70%);filter:blur(1px);animation:k{i} 2s ease-in-out infinite}
@keyframes k{i}{0%,100%{transform:scale(.85);filter:blur(1px) hue-rotate(0)}50%{transform:scale(1.1);filter:blur(3px) hue-rotate(90deg)}}`),

  L("Gradient Equalizer", "Gradients", `<div class="l{i}">${sp(5)}</div>`, `
.l{i}{display:flex;gap:5px;align-items:center;height:42px}
.l{i} span{width:8px;height:100%;border-radius:4px;background:linear-gradient(180deg,var(--c1,#5eead4),var(--c2,#fb7185),var(--c1,#5eead4));background-size:100% 300%;animation:k{i}a .9s ease-in-out infinite,k{i}b 1.8s linear infinite}
.l{i} span:nth-child(2){animation-delay:.12s,0s}.l{i} span:nth-child(3){animation-delay:.24s,0s}.l{i} span:nth-child(4){animation-delay:.36s,0s}.l{i} span:nth-child(5){animation-delay:.48s,0s}
@keyframes k{i}a{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
@keyframes k{i}b{to{background-position:0 300%}}`),

  L("Rainbow Wave", "Gradients", `<svg class="l{i}" viewBox="0 0 120 40"><defs><linearGradient id="g{i}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="var(--c1,#5eead4)"/><stop offset="1" stop-color="var(--c2,#fb7185)"/></linearGradient></defs><path d="M0 20 Q15 2 30 20 T60 20 T90 20 T120 20" fill="none"/></svg>`, `
.l{i}{width:110px;height:38px}
.l{i} path{stroke:url(#g{i});stroke-width:5;stroke-linecap:round;stroke-dasharray:40 90;animation:k{i} 1.4s linear infinite}
@keyframes k{i}{to{stroke-dashoffset:-130}}`),

  L("Color Swap", "Gradients", `<div class="l{i}">${sp(2)}</div>`, `
.l{i}{position:relative;width:60px;height:24px}
.l{i} span{position:absolute;top:0;width:24px;height:24px;border-radius:7px}
.l{i} span:first-child{left:0;background:var(--c1,#5eead4);animation:k{i}a 1.2s ease-in-out infinite}
.l{i} span:last-child{right:0;background:var(--c2,#fb7185);animation:k{i}b 1.2s ease-in-out infinite}
@keyframes k{i}a{0%,100%{transform:translateX(0) scale(1);z-index:1}50%{transform:translateX(36px) scale(.7)}}
@keyframes k{i}b{0%,100%{transform:translateX(0) scale(1)}50%{transform:translateX(-36px) scale(1.2)}}`),

  L("Aurora Arc", "Gradients", `<div class="l{i}"></div>`, `
.l{i}{width:50px;height:50px;border-radius:50%;background:conic-gradient(from 90deg,transparent 10%,var(--c1,#5eead4) 45%,var(--c2,#fb7185) 80%,transparent 95%);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 8px),#000 calc(100% - 7px));mask:radial-gradient(farthest-side,transparent calc(100% - 8px),#000 calc(100% - 7px));animation:k{i} 1.1s cubic-bezier(.55,.15,.45,.85) infinite;filter:drop-shadow(0 0 6px color-mix(in srgb,var(--c1,#5eead4) 60%,transparent))}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Mesh Mixer", "Gradients", `<div class="l{i}">${sp(2)}</div>`, `
.l{i}{position:relative;width:54px;height:54px;border-radius:50%;overflow:hidden;border:2px solid rgba(255,255,255,.2)}
.l{i} span{position:absolute;width:38px;height:38px;border-radius:50%;filter:blur(8px)}
.l{i} span:first-child{background:var(--c1,#5eead4);top:-6px;left:-6px;animation:k{i} 2.2s linear infinite}
.l{i} span:last-child{background:var(--c2,#fb7185);bottom:-6px;right:-6px;animation:k{i} 2.2s linear infinite reverse}
@keyframes k{i}{0%{transform:translate(0,0)}25%{transform:translate(26px,6px)}50%{transform:translate(20px,26px)}75%{transform:translate(-4px,20px)}100%{transform:translate(0,0)}}`),

  /* ------------------------------- CREATIVE ------------------------------- */
  L("Beating Heart", "Creative", `<div class="l{i}"></div>`, `
.l{i}{width:26px;height:26px;background:var(--c2,#fb7185);transform:rotate(45deg);position:relative;animation:k{i} 1.1s ease-in-out infinite}
.l{i}::before,.l{i}::after{content:"";position:absolute;width:26px;height:26px;border-radius:50%;background:var(--c2,#fb7185)}
.l{i}::before{left:-13px}.l{i}::after{top:-13px}
@keyframes k{i}{0%,100%{transform:rotate(45deg) scale(.8)}25%{transform:rotate(45deg) scale(1.05)}40%{transform:rotate(45deg) scale(.9)}60%{transform:rotate(45deg) scale(1.1)}}`),

  L("Wi-Fi Search", "Creative", `<div class="l{i}">${sp(3)}<i></i></div>`, `
.l{i}{position:relative;width:54px;height:44px}
.l{i} span{position:absolute;left:50%;bottom:0;border:5px solid transparent;border-top-color:var(--c1,#5eead4);border-radius:50%;transform:translateX(-50%);opacity:.15;animation:k{i} 1.6s infinite}
.l{i} span:nth-child(1){width:24px;height:24px;animation-delay:.3s}
.l{i} span:nth-child(2){width:42px;height:42px;animation-delay:.55s}
.l{i} span:nth-child(3){width:60px;height:60px;animation-delay:.8s}
.l{i} i{position:absolute;left:50%;bottom:-2px;width:9px;height:9px;margin-left:-4.5px;border-radius:50%;background:var(--c2,#fb7185)}
@keyframes k{i}{0%,100%{opacity:.15}30%,55%{opacity:1}}`),

  L("Coffee Break", "Creative", `<div class="l{i}">${sp(3)}<i></i></div>`, `
.l{i}{position:relative;width:40px;height:32px;border:4px solid var(--c1,#5eead4);border-radius:0 0 14px 14px;margin-top:16px}
.l{i} i{position:absolute;right:-14px;top:2px;width:12px;height:16px;border:4px solid var(--c1,#5eead4);border-left:none;border-radius:0 8px 8px 0}
.l{i} span{position:absolute;bottom:100%;width:4px;height:12px;border-radius:2px;background:var(--c2,#fb7185);opacity:0;animation:k{i} 1.6s ease-in infinite}
.l{i} span:nth-child(1){left:6px}.l{i} span:nth-child(2){left:16px;animation-delay:.4s}.l{i} span:nth-child(3){left:26px;animation-delay:.8s}
@keyframes k{i}{0%{transform:translateY(0) scaleY(.5);opacity:0}30%{opacity:.9}100%{transform:translateY(-16px) scaleY(1.2);opacity:0}}`),

  L("Clockwork", "Creative", `<div class="l{i}"></div>`, `
.l{i}{width:46px;height:46px;border:4px solid var(--c1,#5eead4);border-radius:50%;position:relative}
.l{i}::before,.l{i}::after{content:"";position:absolute;left:50%;bottom:50%;background:var(--c2,#fb7185);border-radius:2px;transform-origin:50% 100%}
.l{i}::before{width:3px;height:15px;margin-left:-1.5px;animation:k{i} 1s linear infinite}
.l{i}::after{width:3px;height:10px;margin-left:-1.5px;background:var(--c1,#5eead4);animation:k{i} 6s linear infinite}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("DNA Helix", "Creative", `<div class="l{i}">${sp(6)}</div>`, `
.l{i}{display:flex;gap:8px;height:36px;align-items:center}
.l{i} span{position:relative;width:8px;height:100%}
.l{i} span::before,.l{i} span::after{content:"";position:absolute;left:0;width:8px;height:8px;border-radius:50%}
.l{i} span::before{background:var(--c1,#5eead4);animation:k{i}a 1.2s ease-in-out infinite}
.l{i} span::after{background:var(--c2,#fb7185);animation:k{i}b 1.2s ease-in-out infinite}
.l{i} span:nth-child(2)::before,.l{i} span:nth-child(2)::after{animation-delay:.12s}
.l{i} span:nth-child(3)::before,.l{i} span:nth-child(3)::after{animation-delay:.24s}
.l{i} span:nth-child(4)::before,.l{i} span:nth-child(4)::after{animation-delay:.36s}
.l{i} span:nth-child(5)::before,.l{i} span:nth-child(5)::after{animation-delay:.48s}
.l{i} span:nth-child(6)::before,.l{i} span:nth-child(6)::after{animation-delay:.6s}
@keyframes k{i}a{0%,100%{top:0;transform:scale(1)}50%{top:calc(100% - 8px);transform:scale(.6)}}
@keyframes k{i}b{0%,100%{top:calc(100% - 8px);transform:scale(.6)}50%{top:0;transform:scale(1)}}`),

  L("Bouncing Ball", "Creative", `<div class="l{i}"><span></span><i></i></div>`, `
.l{i}{position:relative;width:40px;height:56px}
.l{i} span{position:absolute;top:0;left:8px;width:24px;height:24px;border-radius:50%;background:radial-gradient(circle at 32% 30%,var(--c1,#5eead4),var(--c2,#fb7185));animation:k{i}a .7s cubic-bezier(.5,0,1,1) infinite alternate}
.l{i} i{position:absolute;bottom:0;left:6px;width:28px;height:6px;border-radius:50%;background:rgba(255,255,255,.2);animation:k{i}b .7s cubic-bezier(.5,0,1,1) infinite alternate}
@keyframes k{i}a{from{transform:translateY(0)}90%{transform:translateY(26px) scale(1)}to{transform:translateY(28px) scale(1.15,.8)}}
@keyframes k{i}b{from{transform:scale(.5);opacity:.3}to{transform:scale(1);opacity:.7}}`),

  L("Jumping Cube", "Creative", `<div class="l{i}"></div>`, `
.l{i}{width:24px;height:24px;border-radius:5px;background:linear-gradient(135deg,var(--c1,#5eead4),var(--c2,#fb7185));animation:k{i} 1s cubic-bezier(.55,0,.45,1) infinite}
@keyframes k{i}{0%{transform:translateY(0) rotate(0) scale(1.1,.85)}30%{transform:translateY(-24px) rotate(45deg) scale(1)}50%{transform:translateY(-26px) rotate(90deg)}80%{transform:translateY(0) rotate(90deg) scale(1)}100%{transform:translateY(0) rotate(90deg) scale(1.1,.85)}}`),

  L("Watching Eye", "Creative", `<div class="l{i}"><span></span></div>`, `
.l{i}{width:52px;height:52px;border:4px solid var(--c1,#5eead4);border-radius:70% 15%;transform:rotate(45deg);display:flex;align-items:center;justify-content:center;overflow:hidden;animation:k{i}a 3.2s infinite}
.l{i} span{width:18px;height:18px;border-radius:50%;background:var(--c2,#fb7185);animation:k{i}b 3.2s ease-in-out infinite}
@keyframes k{i}a{0%,44%,56%,100%{scale:1 1}50%{scale:1 .08}}
@keyframes k{i}b{0%,100%{transform:translate(0)}25%{transform:translate(-7px,7px)}65%{transform:translate(7px,-7px)}}`),

  L("Gear Works", "Creative", `<div class="l{i}"></div>`, `
.l{i}{width:44px;height:44px;position:relative;animation:k{i} 2.4s linear infinite}
.l{i}::before{content:"";position:absolute;inset:0;border-radius:50%;background:repeating-conic-gradient(var(--c1,#5eead4) 0 16deg,transparent 16deg 60deg);-webkit-mask:radial-gradient(circle,transparent 55%,#000 56%);mask:radial-gradient(circle,transparent 55%,#000 56%)}
.l{i}::after{content:"";position:absolute;inset:7px;border:6px solid var(--c2,#fb7185);border-radius:50%}
@keyframes k{i}{to{transform:rotate(360deg)}}`),

  L("Rocket Launch", "Creative", `<div class="l{i}"><span>🚀</span><i></i></div>`, `
.l{i}{position:relative;width:52px;height:52px}
.l{i} span{position:absolute;font-size:32px;left:8px;top:2px;animation:k{i}a .8s ease-in-out infinite alternate}
.l{i} i{position:absolute;left:2px;bottom:4px;width:14px;height:14px;border-radius:50%;background:radial-gradient(circle,var(--c1,#5eead4),var(--c2,#fb7185) 60%,transparent 75%);filter:blur(2px);animation:k{i}b .4s ease-in-out infinite alternate}
@keyframes k{i}a{from{transform:translate(0,0)}to{transform:translate(5px,-5px)}}
@keyframes k{i}b{from{transform:scale(.7);opacity:.6}to{transform:scale(1.25);opacity:1}}`),

  L("Traffic Light", "Creative", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{display:flex;flex-direction:column;gap:5px;padding:7px;border-radius:10px;border:2px solid color-mix(in srgb,var(--c1,#5eead4) 50%,transparent)}
.l{i} span{width:13px;height:13px;border-radius:50%;background:var(--c1,#5eead4);opacity:.15;animation:k{i} 2.4s infinite}
.l{i} span:nth-child(2){animation-delay:.8s;background:color-mix(in srgb,var(--c1,#5eead4) 50%,var(--c2,#fb7185))}
.l{i} span:nth-child(3){animation-delay:1.6s;background:var(--c2,#fb7185)}
@keyframes k{i}{0%,28%{opacity:1;box-shadow:0 0 10px currentColor}38%,100%{opacity:.15;box-shadow:none}}`),

  L("Rising Bubbles", "Creative", `<div class="l{i}">${sp(4)}</div>`, `
.l{i}{position:relative;width:50px;height:50px;border:3px solid var(--c1,#5eead4);border-radius:50%;overflow:hidden}
.l{i} span{position:absolute;bottom:-10px;border-radius:50%;background:color-mix(in srgb,var(--c2,#fb7185) 80%,transparent);animation:k{i} 1.8s ease-in infinite}
.l{i} span:nth-child(1){left:8px;width:8px;height:8px}
.l{i} span:nth-child(2){left:20px;width:6px;height:6px;animation-delay:.5s}
.l{i} span:nth-child(3){left:30px;width:9px;height:9px;animation-delay:1s}
.l{i} span:nth-child(4){left:15px;width:5px;height:5px;animation-delay:1.4s}
@keyframes k{i}{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-56px);opacity:0}}`),

  L("Chasing Trio", "Creative", `<div class="l{i}">${sp(3)}</div>`, `
.l{i}{position:relative;width:46px;height:46px;animation:k{i}a 1.6s linear infinite}
.l{i} span{position:absolute;left:17px;top:0;width:12px;height:12px;border-radius:50%;transform-origin:6px 23px;animation:k{i}b 1.6s ease-in-out infinite}
.l{i} span:nth-child(1){background:var(--c1,#5eead4)}
.l{i} span:nth-child(2){background:color-mix(in srgb,var(--c1,#5eead4) 50%,var(--c2,#fb7185));transform:rotate(120deg);animation-delay:.2s}
.l{i} span:nth-child(3){background:var(--c2,#fb7185);transform:rotate(240deg);animation-delay:.4s}
@keyframes k{i}a{to{transform:rotate(360deg)}}
@keyframes k{i}b{0%,100%{scale:1}50%{scale:.5}}`),

  L("Pinwheel", "Creative", `<div class="l{i}">${sp(4)}</div>`, `
.l{i}{position:relative;width:44px;height:44px;animation:k{i} 1.2s cubic-bezier(.6,.1,.4,.9) infinite}
.l{i} span{position:absolute;width:22px;height:22px;clip-path:polygon(0 0,100% 0,0 100%)}
.l{i} span:nth-child(1){top:0;left:0;background:var(--c1,#5eead4)}
.l{i} span:nth-child(2){top:0;right:0;background:var(--c2,#fb7185);transform:rotate(90deg)}
.l{i} span:nth-child(3){bottom:0;right:0;background:var(--c1,#5eead4);transform:rotate(180deg)}
.l{i} span:nth-child(4){bottom:0;left:0;background:var(--c2,#fb7185);transform:rotate(270deg)}
@keyframes k{i}{to{transform:rotate(360deg)}}`),
];

export const LOADER_COUNT = LOADERS.length;

/** Full copy-paste snippet: HTML + scoped CSS with the chosen palette baked in. */
export function fullSnippet(loader: Loader, c1: string, c2: string): string {
  const indented = loader.html
    .split("\n")
    .map((line) => "  " + line)
    .join("\n");
  return `<!-- ${loader.name} · BufferLab by @LegedsDaD -->
<!-- https://github.com/LegedsDaD -->
<div class="loader-stage" style="--c1:${c1}; --c2:${c2};">
${indented}
</div>

<style>
.loader-stage{display:flex;align-items:center;justify-content:center;min-height:160px}
${loader.css}
</style>`;
}