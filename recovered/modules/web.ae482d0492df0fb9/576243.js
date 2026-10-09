/* Recovered shipped factory. Module 576243.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6915297..6916020
 * Raw property SHA-256: 6526227da7ccaa59dae360cea986fdcda2830a8e86db191004de94d643906f19
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r);
  function s(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: a, width: s = 64, height: l = 64 } = e;
    return (0, i.jsx)("img", {
      style: { width: s, height: l },
      src: "https://cdn.discordapp.com/assets/content/1da56878f12f10b79b5ef130d0a55e5ded8c8dc5dc29723c27059772a3e42670.svg",
      alt: t,
      "aria-label": n,
      "aria-hidden": r,
      role: a ?? "img",
    });
  }
  var l = n(403581),
    o = n(512376);
  function d(e) {
    let { size: t, iconSize: n, color: r, className: d } = e;
    return (0, i.jsxs)("div", {
      className: a()(o.j, d),
      "aria-hidden": !0,
      children: [
        (0, i.jsx)("div", {
          className: o.q,
          children: (0, i.jsx)(s, { alt: "", ariaHidden: !0, width: t, height: t }),
        }),
        (0, i.jsx)(l.t, { size: "custom", width: n, height: n, color: r, className: o.q }),
      ],
    });
  }
}
