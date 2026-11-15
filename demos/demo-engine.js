/* Milehighwebplug demo engine — control bar + renderer.
   Vanilla ES6, zero dependencies. Requires demo-data.js and demo-styles.css. */

(function () {
  "use strict";

  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // ---------- markup renderers per service mode ----------
  function servicesBlock(t) {
    if (t.mode === "table") {
      return `
        <div class="wrap">
          <h2 class="sect">${esc(t.servicesTitle)}</h2>
          <table class="pricetbl">
            <thead><tr><th>Program</th><th>Details</th><th>Rate</th></tr></thead>
            <tbody>
              ${t.services.map(s => `<tr><td><strong>${s.name}</strong></td><td style="color:var(--pv-text-muted)">${s.desc}</td><td class="pr">${s.price}<small style="color:var(--pv-text-muted);font-weight:600"> ${s.unit}</small></td></tr>`).join("")}
            </tbody>
          </table>
        </div>`;
    }
    if (t.mode === "list") {
      return `
        <div class="wrap">
          <h2 class="sect">${esc(t.servicesTitle)}</h2>
          <div class="plist">
            ${t.services.map(s => `
              <div class="pitem">
                <div><h4>${s.name}</h4><p>${s.desc}</p></div>
                <div class="pr">${s.price} <small style="font-size:0.7rem">${s.unit}</small></div>
              </div>`).join("")}
          </div>
        </div>`;
    }
    return `
      <div class="wrap">
        <h2 class="sect">${esc(t.servicesTitle)}</h2>
        <div class="cards">
          ${t.services.map(s => `
            <div class="card">
              <h4>${s.name}</h4>
              <p>${s.desc}</p>
              <div class="pr">${s.price} <small>${s.unit}</small></div>
            </div>`).join("")}
        </div>
      </div>`;
  }

  function polaroidsBlock(t) {
    if (t.id !== "wag-collective") return "";
    return `
      <div class="polaroids">
        ${t.gallery.slice(0, 3).map(g => `<div class="pol"><div class="ph">${esc(g)}</div>${esc(g)}</div>`).join("")}
      </div>`;
  }

  function aboutBlock(t) {
    return `
      <div class="wrap">
        <h2 class="sect">${esc(t.aboutTitle)}</h2>
        <div class="about-row">
          <div class="bio-photo">bio.jpg<br>[your headshot<br>with a client pet]</div>
          <div>
            <p>${t.aboutP1}</p>
            <p>${t.aboutP2}</p>
            <div class="creds">${t.creds.map(c => `<span>${c}</span>`).join("")}</div>
          </div>
        </div>
      </div>`;
  }

  function faqBlock(t) {
    return `
      <div class="wrap">
        <h2 class="sect">Questions Owners Ask</h2>
        ${t.faq.map(f => `<div class="qa"><h5>${f.q}</h5><p>${f.a}</p></div>`).join("")}
      </div>`;
  }

  function galleryBlock(t) {
    return `
      <div class="wrap">
        <h2 class="sect">Gallery</h2>
        <div class="gal">
          ${t.gallery.map((g, i) => `<div class="cell">gallery-0${i + 1}.jpg<br>${esc(g)}</div>`).join("")}
        </div>
      </div>`;
  }


  function bookingBlock(t) {
    const opts = t.services.map(sv => `<option>${esc(sv.name)}</option>`).join("");
    return `
      <div class="wrap">
        <h2 class="sect">Book a Visit</h2>
        <div class="bookform">
          <div class="bf-row">
            <label>Your name<input type="text" placeholder="Jordan Miller" disabled></label>
            <label>Pet's name<input type="text" placeholder="Biscuit" disabled></label>
          </div>
          <div class="bf-row">
            <label>Service<select disabled><option>Choose a service\u2026</option>${opts}</select></label>
            <label>Dates<input type="text" placeholder="Dec 23 \u2013 Dec 27" disabled></label>
          </div>
          <label>Anything we should know?<textarea rows="2" placeholder="Meds, vet info, quirks \u2014 it all lands in the pet profile." disabled></textarea></label>
          <span class="pvbtn">Send Booking Request</span>
          <p class="bf-note">Demo preview \u2014 on your live site, this form delivers straight to your inbox.</p>
        </div>
      </div>`;
  }

  function ctaBlock(t) {
    return `
      <div class="ctaband">
        <h3>${t.id === "metro-k9" ? "Intake evaluation first. Always." : "Ready when you are."}</h3>
        <p>${esc(t.tagline)}. Booking replies within one business day.</p>
        <span class="pvbtn alt">${t.heroCta}</span>
      </div>`;
  }

  function heroBlock(t) {
    return `
      <div class="wrap hero">
        <span class="pill">${esc(t.pill)}</span>
        <h1>${t.heroH1}</h1>
        <p>${t.heroLede}</p>
        <span class="pvbtn">${t.heroCta}</span>
        ${polaroidsBlock(t)}
      </div>
      ${t.id === "alpine-paws" ? '<div class="ridge"></div>' : ""}`;
  }

  function topbar(t, activePage, tier, showNav) {
    const nav = showNav
      ? `<nav>
           <span class="pgtab ${activePage === "home" ? "active" : ""}" data-page="home">Home</span>
           <span class="pgtab ${activePage === "services" ? "active" : ""}" data-page="services">Services</span>
           <span class="pgtab ${activePage === "about" ? "active" : ""}" data-page="about">About</span>
         </nav>`
      : `<nav><span style="font-size:0.75rem">${tier === "single" ? "One-page site" : "Three pages included"}</span></nav>`;
    return `
      <div class="topbar">
        <span class="logo">${esc(t.brand)}</span>
        ${nav}
      </div>`;
  }

  // ---------- page composition ----------
  function renderSingle(t) {
    return `<div class="pv-inner">${topbar(t, "home", "single", false)}
      ${heroBlock(t)}${servicesBlock(t)}${aboutBlock(t)}${faqBlock(t)}${galleryBlock(t)}${bookingBlock(t)}${ctaBlock(t)}
      <div class="foot">${esc(t.footer)}</div></div>`;
  }

  function renderPack(t, page) {
    if (page === "services") {
      return `<div class="pv-inner">${topbar(t, "services", "pack", true)}
        ${servicesBlock(t)}${galleryBlock(t)}${bookingBlock(t)}${ctaBlock(t)}
        <div class="foot">${esc(t.footer)}</div></div>`;
    }
    if (page === "about") {
      return `<div class="pv-inner">${topbar(t, "about", "pack", true)}
        ${aboutBlock(t)}${faqBlock(t)}
        <div class="wrap"><h2 class="sect">Service Area &amp; Hours</h2>
          <div class="plist">
            <div class="pitem"><div><h4>Booking windows</h4><p>Morning routes 7:00–10:30 AM · Midday 11:30–2:30 PM · Evening 4:00–7:00 PM</p></div><div class="pr">Mon–Sat</div></div>
            <div class="pitem"><div><h4>Holiday coverage</h4><p>Thanksgiving, 4th of July, and Christmas-week visits available with 10 days' notice.</p></div><div class="pr">Included</div></div>
          </div></div>
        ${ctaBlock(t)}<div class="foot">${esc(t.footer)}</div></div>`;
    }
    // home page of pack
    return `<div class="pv-inner">${topbar(t, "home", "pack", true)}
      ${heroBlock(t)}${servicesBlock(t)}${aboutBlock(t)}
      <div class="wrap" style="text-align:center;padding-top:0.5rem">
        <span class="pill">Full FAQ &amp; gallery live on the About &amp; Services pages</span>
      </div>
      ${bookingBlock(t)}${ctaBlock(t)}<div class="foot">${esc(t.footer)}</div></div>`;
  }

  // ---------- engine ----------
  const state = {
    template: "urban-leash",
    palette: "Signature",
    tier: window.MHWP_TIER || "single",
    packPage: "home"
  };

  const sandbox = document.getElementById("pvSandbox"); // outer shell (not restyled)
  const preview = document.getElementById("pv");        // inner .pv element
  const hexReadout = document.getElementById("hexReadout");
  const tplBtns = Array.from(document.querySelectorAll("[data-tpl]"));
  const palBtns = Array.from(document.querySelectorAll("[data-pal]"));
  const tierBtns = Array.from(document.querySelectorAll("[data-tier]"));
  const tierPrice = document.getElementById("tierPrice");
  const tierDesc = document.getElementById("tierDesc");

  function activePalette() {
    return MHWP_TEMPLATES[state.template].palettes[state.palette];
  }

  // ---------- contrast helpers (keep every palette readable) ----------
  function _rgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  function _lum(hex) {
    const [r, g, b] = _rgb(hex).map(v => {
      const s = v / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  function _ratio(a, b) {
    const [hi, lo] = [_lum(a), _lum(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
  }
  function _blend(hex, target, amt) {
    const c = _rgb(hex), t = _rgb(target);
    return "#" + c.map((v, i) => Math.round(v + (t[i] - v) * amt).toString(16).padStart(2, "0")).join("");
  }
  function _onColor(hex) {
    return _ratio(hex, "#FFFFFF") >= _ratio(hex, "#000000") ? "#FFFFFF" : "#000000";
  }
  function _fitText(hex, bg) {
    const target = _lum(bg) > 0.35 ? "#000000" : "#FFFFFF";
    let c = hex;
    for (let i = 0; i < 24 && _ratio(c, bg) < 4.5; i++) c = _blend(c, target, 0.14);
    return c;
  }

  function applyPalette() {
    const p = activePalette();
    preview.style.setProperty("--primary", p.primary);
    preview.style.setProperty("--bg-neutral", p.bgNeutral);
    preview.style.setProperty("--accent", p.accent);
    // Readable foregrounds for this palette: body text flips dark on light
    // backgrounds, button labels pick black/white by contrast, and
    // primary/accent used as text are blended until they reach 4.5:1.
    const bg = p.bgNeutral;
    preview.style.setProperty("--pv-text", _ratio("#F8F9FA", bg) >= _ratio("#191C1F", bg) ? "#F8F9FA" : "#191C1F");
    preview.style.setProperty("--pv-on-primary", _onColor(p.primary));
    preview.style.setProperty("--pv-on-accent", _onColor(p.accent));
    preview.style.setProperty("--pv-primary-text", _fitText(p.primary, bg));
    preview.style.setProperty("--pv-accent-text", _fitText(p.accent, bg));
    hexReadout.textContent = `--primary ${p.primary}  ·  --bg-neutral ${p.bgNeutral}  ·  --accent ${p.accent}`;
  }

  function render() {
    const t = MHWP_TEMPLATES[state.template];
    preview.className = `pv ${t.layoutClass}`;
    preview.innerHTML = state.tier === "single"
      ? renderSingle(t)
      : renderPack(t, state.packPage);
    applyPalette();

    // pack page tabs (3-page tier only)
    preview.querySelectorAll(".pgtab").forEach(tab => {
      tab.addEventListener("click", () => {
        state.packPage = tab.dataset.page;
        render();
      });
    });

    // tier badges
    if (tierPrice) tierPrice.textContent = state.tier === "single" ? "$195 · one page" : "$345 · three pages";
    if (tierDesc) tierDesc.textContent = state.tier === "single"
      ? "Single-page landing: hero, services, about, FAQ, gallery, booking form, contact band."
      : "3-Page Pack: separate Home, Services, and About pages. Switch via the nav in the preview.";
  }

  tplBtns.forEach(btn => btn.addEventListener("click", () => {
    state.template = btn.dataset.tpl;
    state.palette = "Signature";
    tplBtns.forEach(b => b.classList.toggle("active", b === btn));
    palBtns.forEach(b => {
      b.classList.toggle("active", b.dataset.pal === "Signature");
      b.textContent = b.dataset.pal;
    });
    render();
  }));

  palBtns.forEach(btn => btn.addEventListener("click", () => {
    state.palette = btn.dataset.pal;
    palBtns.forEach(b => b.classList.toggle("active", b === btn));
    applyPalette();
  }));

  tierBtns.forEach(btn => btn.addEventListener("click", () => {
    if (btn.dataset.tier === state.tier && btn.dataset.page === undefined) return;
    if (btn.dataset.page) state.packPage = btn.dataset.page;
    state.tier = btn.dataset.tier;
    tierBtns.forEach(b => {
      const same = (btn.dataset.page && b.dataset.page === btn.dataset.page) ||
                   (!btn.dataset.page && !b.dataset.page && b.dataset.tier === btn.dataset.tier);
      b.classList.toggle("active", same);
    });
    render();
  }));

  render();
})();
