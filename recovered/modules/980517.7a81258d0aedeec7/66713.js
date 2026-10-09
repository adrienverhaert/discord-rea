/* Recovered shipped factory. Module 66713.
 * Source: recovered/web/assets/980517.7a81258d0aedeec7.js
 * UTF-16 property offsets: 8775..20689
 * Raw property SHA-256: a1117256ac8ec11ea7679fb71cc83253086838171fd9fab8ceac9ccd2ef05df4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  let n;
  r.d(t, { ZR: () => X });
  let a =
    ((n = 0),
    () => ((n += 1), `u${`0000${((1679616 * Math.random()) | 0).toString(36)}`.slice(-4)}${n}`));
  function o(e) {
    let t = [];
    for (let r = 0, n = e.length; r < n; r++) t.push(e[r]);
    return t;
  }
  function i(e, t) {
    let r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
    return r ? parseFloat(r.replace("px", "")) : 0;
  }
  function s(e, t = {}) {
    let r, n, a, o;
    return {
      width:
        t.width ||
        ((r = i(e, "border-left-width")), (n = i(e, "border-right-width")), e.clientWidth + r + n),
      height:
        t.height ||
        ((a = i(e, "border-top-width")), (o = i(e, "border-bottom-width")), e.clientHeight + a + o),
    };
  }
  function l(e) {
    return new Promise((t, r) => {
      let n = new Image();
      ((n.decode = () => t(n)),
        (n.onload = () => t(n)),
        (n.onerror = r),
        (n.crossOrigin = "anonymous"),
        (n.decoding = "async"),
        (n.src = e));
    });
  }
  async function c(e) {
    return Promise.resolve()
      .then(() => new XMLSerializer().serializeToString(e))
      .then(encodeURIComponent)
      .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
  }
  async function u(e, t, r) {
    let n = "http://www.w3.org/2000/svg",
      a = document.createElementNS(n, "svg"),
      o = document.createElementNS(n, "foreignObject");
    return (
      a.setAttribute("width", `${t}`),
      a.setAttribute("height", `${r}`),
      a.setAttribute("viewBox", `0 0 ${t} ${r}`),
      o.setAttribute("width", "100%"),
      o.setAttribute("height", "100%"),
      o.setAttribute("x", "0"),
      o.setAttribute("y", "0"),
      o.setAttribute("externalResourcesRequired", "true"),
      a.appendChild(o),
      o.appendChild(e),
      c(a)
    );
  }
  let h = (e, t) => {
    if (e instanceof t) return !0;
    let r = Object.getPrototypeOf(e);
    return null !== r && (r.constructor.name === t.name || h(r, t));
  };
  function d(e, t, r) {
    let n,
      i,
      s,
      l = window.getComputedStyle(e, r),
      c = l.getPropertyValue("content");
    if ("" === c || "none" === c) return;
    let u = a();
    try {
      t.className = `${t.className} ${u}`;
    } catch (e) {
      return;
    }
    let h = document.createElement("style");
    (h.appendChild(
      ((n = `.${u}:${r}`),
      (s = l.cssText
        ? ((i = l.getPropertyValue("content")), `${l.cssText} content: '${i.replace(/'|"/g, "")}';`)
        : o(l)
            .map((e) => {
              let t = l.getPropertyValue(e),
                r = l.getPropertyPriority(e);
              return `${e}: ${t}${r ? " !important" : ""};`;
            })
            .join(" ")),
      document.createTextNode(`${n}{${s}}`)),
    ),
      t.appendChild(h));
  }
  let f = "application/font-woff",
    p = "image/jpeg",
    m = {
      woff: f,
      woff2: f,
      ttf: "application/font-truetype",
      eot: "application/vnd.ms-fontobject",
      png: "image/png",
      jpg: p,
      jpeg: p,
      gif: "image/gif",
      tiff: "image/tiff",
      svg: "image/svg+xml",
      webp: "image/webp",
    };
  function g(e) {
    let t;
    return m[((t = /\.([^./]*?)$/g.exec(e)) ? t[1] : "").toLowerCase()] || "";
  }
  function y(e) {
    return -1 !== e.search(/^(data:)/);
  }
  function b(e, t) {
    return `data:${t};base64,${e}`;
  }
  async function w(e, t, r) {
    let n = await fetch(e, t);
    if (404 === n.status) throw Error(`Resource "${n.url}" not found`);
    let a = await n.blob();
    return new Promise((e, t) => {
      let o = new FileReader();
      ((o.onerror = t),
        (o.onloadend = () => {
          try {
            e(r({ res: n, result: o.result }));
          } catch (e) {
            t(e);
          }
        }),
        o.readAsDataURL(a));
    });
  }
  let v = {};
  async function M(e, t, r) {
    var n, a, o;
    let i,
      s,
      l =
        ((n = e),
        (a = t),
        (o = r.includeQueryParams),
        (s = n.replace(/\?.*/, "")),
        o && (s = n),
        /ttf|otf|eot|woff2?/i.test(s) && (s = s.replace(/.*\//, "")),
        a ? `[${a}]${s}` : s);
    if (null != v[l]) return v[l];
    r.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
    try {
      let n = await w(
        e,
        r.fetchRequestInit,
        ({ res: e, result: r }) => (
          t || (t = e.headers.get("Content-Type") || ""),
          r.split(/,/)[1]
        ),
      );
      i = b(n, t);
    } catch (n) {
      i = r.imagePlaceholder || "";
      let t = `Failed to fetch resource: ${e}`;
      (n && (t = "string" == typeof n ? n : n.message), t && console.warn(t));
    }
    return ((v[l] = i), i);
  }
  async function x(e) {
    let t = e.toDataURL();
    return "data:," === t ? e.cloneNode(!1) : l(t);
  }
  async function _(e, t) {
    if (e.currentSrc) {
      let t = document.createElement("canvas"),
        r = t.getContext("2d");
      return (
        (t.width = e.clientWidth),
        (t.height = e.clientHeight),
        null == r || r.drawImage(e, 0, 0, t.width, t.height),
        l(t.toDataURL())
      );
    }
    let r = e.poster,
      n = g(r);
    return l(await M(r, n, t));
  }
  async function C(e) {
    var t;
    try {
      if (null == (t = null == e ? void 0 : e.contentDocument) ? void 0 : t.body)
        return await A(e.contentDocument.body, {}, !0);
    } catch (e) {}
    return e.cloneNode(!1);
  }
  async function S(e, t) {
    return h(e, HTMLCanvasElement)
      ? x(e)
      : h(e, HTMLVideoElement)
        ? _(e, t)
        : h(e, HTMLIFrameElement)
          ? C(e)
          : e.cloneNode(!1);
  }
  async function E(e, t, r) {
    var n, a;
    let i = [];
    return (
      0 ===
        (i =
          null != e.tagName && "SLOT" === e.tagName.toUpperCase() && e.assignedNodes
            ? o(e.assignedNodes())
            : h(e, HTMLIFrameElement) && (null == (n = e.contentDocument) ? void 0 : n.body)
              ? o(e.contentDocument.body.childNodes)
              : o((null != (a = e.shadowRoot) ? a : e).childNodes)).length ||
        h(e, HTMLVideoElement) ||
        (await i.reduce(
          (e, n) =>
            e
              .then(() => A(n, r))
              .then((e) => {
                e && t.appendChild(e);
              }),
          Promise.resolve(),
        )),
      t
    );
  }
  async function R(e, t) {
    let r = e.querySelectorAll ? e.querySelectorAll("use") : [];
    if (0 === r.length) return e;
    let n = {};
    for (let a = 0; a < r.length; a++) {
      let o = r[a].getAttribute("xlink:href");
      if (o) {
        let r = e.querySelector(o),
          a = document.querySelector(o);
        r || !a || n[o] || (n[o] = await A(a, t, !0));
      }
    }
    let a = Object.values(n);
    if (a.length) {
      let t = "http://www.w3.org/1999/xhtml",
        r = document.createElementNS(t, "svg");
      (r.setAttribute("xmlns", t),
        (r.style.position = "absolute"),
        (r.style.width = "0"),
        (r.style.height = "0"),
        (r.style.overflow = "hidden"),
        (r.style.display = "none"));
      let n = document.createElementNS(t, "defs");
      r.appendChild(n);
      for (let e = 0; e < a.length; e++) n.appendChild(a[e]);
      e.appendChild(r);
    }
    return e;
  }
  async function A(e, t, r) {
    return r || !t.filter || t.filter(e)
      ? Promise.resolve(e)
          .then((e) => S(e, t))
          .then((r) => E(e, r, t))
          .then((t) =>
            (function (e, t) {
              if (
                h(t, Element) &&
                (!(function (e, t) {
                  let r = t.style;
                  if (!r) return;
                  let n = window.getComputedStyle(e);
                  n.cssText
                    ? ((r.cssText = n.cssText), (r.transformOrigin = n.transformOrigin))
                    : o(n).forEach((a) => {
                        let o = n.getPropertyValue(a);
                        if ("font-size" === a && o.endsWith("px")) {
                          let e = Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1;
                          o = `${e}px`;
                        }
                        (h(e, HTMLIFrameElement) &&
                          "display" === a &&
                          "inline" === o &&
                          (o = "block"),
                          "d" === a && t.getAttribute("d") && (o = `path(${t.getAttribute("d")})`),
                          r.setProperty(a, o, n.getPropertyPriority(a)));
                      });
                })(e, t),
                d(e, t, ":before"),
                d(e, t, ":after"),
                h(e, HTMLTextAreaElement) && (t.innerHTML = e.value),
                h(e, HTMLInputElement) && t.setAttribute("value", e.value),
                h(e, HTMLSelectElement))
              ) {
                let r = Array.from(t.children).find((t) => e.value === t.getAttribute("value"));
                r && r.setAttribute("selected", "");
              }
              return t;
            })(e, t),
          )
          .then((e) => R(e, t))
      : null;
  }
  let P = /url\((['"]?)([^'"]+?)\1\)/g,
    T = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    k = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
  async function D(e, t, r, n, a) {
    try {
      let o,
        i,
        s = r
          ? (function (e, t) {
              if (e.match(/^[a-z]+:\/\//i)) return e;
              if (e.match(/^\/\//)) return window.location.protocol + e;
              if (e.match(/^[a-z]+:/i)) return e;
              let r = document.implementation.createHTMLDocument(),
                n = r.createElement("base"),
                a = r.createElement("a");
              return (
                r.head.appendChild(n),
                r.body.appendChild(a),
                t && (n.href = t),
                (a.href = e),
                a.href
              );
            })(t, r)
          : t,
        l = g(t);
      if (a) {
        let e = await a(s);
        o = b(e, l);
      } else o = await M(s, l, n);
      return e.replace(
        ((i = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")),
        RegExp(`(url\\(['"]?)(${i})(['"]?\\))`, "g")),
        `$1${o}$3`,
      );
    } catch (e) {}
    return e;
  }
  function L(e) {
    return -1 !== e.search(P);
  }
  async function N(e, t, r) {
    let n;
    if (!L(e)) return e;
    let a = (function (e, { preferredFontFormat: t }) {
      return t
        ? e.replace(k, (e) => {
            for (;;) {
              let [r, , n] = T.exec(e) || [];
              if (!n) return "";
              if (n === t) return `src: ${r};`;
            }
          })
        : e;
    })(e, r);
    return ((n = []), a.replace(P, (e, t, r) => (n.push(r), e)), n.filter((e) => !y(e))).reduce(
      (e, n) => e.then((e) => D(e, n, t, r)),
      Promise.resolve(a),
    );
  }
  async function I(e, t, r) {
    var n;
    let a = null == (n = t.style) ? void 0 : n.getPropertyValue(e);
    if (a) {
      let n = await N(a, null, r);
      return (t.style.setProperty(e, n, t.style.getPropertyPriority(e)), !0);
    }
    return !1;
  }
  async function B(e, t) {
    ((await I("background", e, t)) || (await I("background-image", e, t)),
      (await I("mask", e, t)) || (await I("mask-image", e, t)));
  }
  async function $(e, t) {
    let r = h(e, HTMLImageElement);
    if (!(r && !y(e.src)) && !(h(e, SVGImageElement) && !y(e.href.baseVal))) return;
    let n = r ? e.src : e.href.baseVal,
      a = await M(n, g(n), t);
    await new Promise((t, n) => {
      ((e.onload = t),
        (e.onerror = n),
        e.decode && (e.decode = t),
        "lazy" === e.loading && (e.loading = "eager"),
        r ? ((e.srcset = ""), (e.src = a)) : (e.href.baseVal = a));
    });
  }
  async function O(e, t) {
    let r = o(e.childNodes).map((e) => j(e, t));
    await Promise.all(r).then(() => e);
  }
  async function j(e, t) {
    h(e, Element) && (await B(e, t), await $(e, t), await O(e, t));
  }
  let z = {};
  async function q(e) {
    let t = z[e];
    if (null != t) return t;
    let r = await fetch(e);
    return ((t = { url: e, cssText: await r.text() }), (z[e] = t), t);
  }
  async function U(e, t) {
    let r = e.cssText,
      n = /url\(["']?([^"')]+)["']?\)/g;
    return Promise.all(
      (r.match(/url\([^)]+\)/g) || []).map(async (a) => {
        let o = a.replace(n, "$1");
        return (
          o.startsWith("https://") || (o = new URL(o, e.url).href),
          w(o, t.fetchRequestInit, ({ result: e }) => ((r = r.replace(a, `url(${e})`)), [a, e]))
        );
      }),
    ).then(() => r);
  }
  function F(e) {
    if (null == e) return [];
    let t = [],
      r = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ""),
      n = RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    for (;;) {
      let e = n.exec(r);
      if (null === e) break;
      t.push(e[0]);
    }
    r = r.replace(n, "");
    let a = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
      o = RegExp(
        "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
        "gi",
      );
    for (;;) {
      let e = a.exec(r);
      if (null === e) {
        if (null === (e = o.exec(r))) break;
        a.lastIndex = o.lastIndex;
      } else o.lastIndex = a.lastIndex;
      t.push(e[0]);
    }
    return t;
  }
  async function H(e, t) {
    let r = [],
      n = [];
    return (
      e.forEach((r) => {
        if ("cssRules" in r)
          try {
            o(r.cssRules || []).forEach((e, a) => {
              if (e.type === CSSRule.IMPORT_RULE) {
                let o = a + 1,
                  i = e.href,
                  s = q(i)
                    .then((e) => U(e, t))
                    .then((e) =>
                      F(e).forEach((e) => {
                        try {
                          r.insertRule(e, e.startsWith("@import") ? (o += 1) : r.cssRules.length);
                        } catch (t) {
                          console.error("Error inserting rule from remote css", {
                            rule: e,
                            error: t,
                          });
                        }
                      }),
                    )
                    .catch((e) => {
                      console.error("Error loading remote css", e.toString());
                    });
                n.push(s);
              }
            });
          } catch (o) {
            let a = e.find((e) => null == e.href) || document.styleSheets[0];
            (null != r.href &&
              n.push(
                q(r.href)
                  .then((e) => U(e, t))
                  .then((e) =>
                    F(e).forEach((e) => {
                      a.insertRule(e, r.cssRules.length);
                    }),
                  )
                  .catch((e) => {
                    console.error("Error loading remote stylesheet", e);
                  }),
              ),
              console.error("Error inlining remote css file", o));
          }
      }),
      Promise.all(n).then(
        () => (
          e.forEach((e) => {
            if ("cssRules" in e)
              try {
                o(e.cssRules || []).forEach((e) => {
                  r.push(e);
                });
              } catch (t) {
                console.error(`Error while reading CSS rules from ${e.href}`, t);
              }
          }),
          r
        ),
      )
    );
  }
  async function W(e, t) {
    if (null == e.ownerDocument) throw Error("Provided element is not within a Document");
    let r = o(e.ownerDocument.styleSheets);
    return (await H(r, t))
      .filter((e) => e.type === CSSRule.FONT_FACE_RULE)
      .filter((e) => L(e.style.getPropertyValue("src")));
  }
  async function V(e, t) {
    let r = await W(e, t);
    return (
      await Promise.all(
        r.map((e) => {
          let r = e.parentStyleSheet ? e.parentStyleSheet.href : null;
          return N(e.cssText, r, t);
        }),
      )
    ).join("\n");
  }
  async function G(e, t) {
    let r = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await V(e, t);
    if (r) {
      let t = document.createElement("style"),
        n = document.createTextNode(r);
      (t.appendChild(n), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t));
    }
  }
  async function Y(e, t = {}) {
    let { width: r, height: n } = s(e, t),
      a = await A(e, t, !0);
    return (
      await G(a, t),
      await j(a, t),
      !(function (e, t) {
        let { style: r } = e;
        (t.backgroundColor && (r.backgroundColor = t.backgroundColor),
          t.width && (r.width = `${t.width}px`),
          t.height && (r.height = `${t.height}px`));
        let n = t.style;
        null != n &&
          Object.keys(n).forEach((e) => {
            r[e] = n[e];
          });
      })(a, t),
      await u(a, r, n)
    );
  }
  async function J(e, t = {}) {
    let { width: r, height: n } = s(e, t),
      a = await Y(e, t),
      o = await l(a),
      i = document.createElement("canvas"),
      c = i.getContext("2d"),
      u =
        t.pixelRatio ||
        (function () {
          let e, t;
          try {
            t = process;
          } catch (e) {}
          let r = t && t.env ? t.env.devicePixelRatio : null;
          return (
            r && Number.isNaN((e = parseInt(r, 10))) && (e = 1),
            e || window.devicePixelRatio || 1
          );
        })(),
      h = t.canvasWidth || r,
      d = t.canvasHeight || n;
    return (
      (i.width = h * u),
      (i.height = d * u),
      !t.skipAutoScale &&
        (i.width > 16384 || i.height > 16384) &&
        (i.width > 16384 && i.height > 16384
          ? i.width > i.height
            ? ((i.height *= 16384 / i.width), (i.width = 16384))
            : ((i.width *= 16384 / i.height), (i.height = 16384))
          : i.width > 16384
            ? ((i.height *= 16384 / i.width), (i.width = 16384))
            : ((i.width *= 16384 / i.height), (i.height = 16384))),
      (i.style.width = `${h}`),
      (i.style.height = `${d}`),
      t.backgroundColor && ((c.fillStyle = t.backgroundColor), c.fillRect(0, 0, i.width, i.height)),
      c.drawImage(o, 0, 0, i.width, i.height),
      i
    );
  }
  async function X(e, t = {}) {
    let r = await J(e, t);
    return await (function (e, t = {}) {
      return new Promise(
        e.toBlob
          ? (r) => {
              e.toBlob(r, t.type ? t.type : "image/png", t.quality ? t.quality : 1);
            }
          : (r) => {
              let n = window.atob(
                  e
                    .toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0)
                    .split(",")[1],
                ),
                a = n.length,
                o = new Uint8Array(a);
              for (let e = 0; e < a; e += 1) o[e] = n.charCodeAt(e);
              r(new Blob([o], { type: t.type ? t.type : "image/png" }));
            },
      );
    })(r);
  }
}
