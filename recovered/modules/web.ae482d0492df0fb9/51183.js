/* Recovered shipped factory. Module 51183.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2708742..2709483
 * Raw property SHA-256: 0a0c2c6133f5bf0f7b077d0c713360ad64c2ba15672aebc5c3bf2f1801803163
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(866665),
    o = n(565645),
    d = n(7584),
    c = n(885386),
    u = n(350593);
  n(851883);
  var _ = n(607013);
  function E(e) {
    let { emoji: t, className: n, animate: a = !0, hideTooltip: E = !1, tooltipDelay: A = 150 } = e,
      h = c.Sf.useSetting(),
      f = r.useRef(null),
      I = null != t.id ? `:${t.name}:` : d.Ay.translateSurrogatesToInlineEmoji(t.name);
    if (null == t.id && u.V.has(t.name))
      return (0, i.jsx)("span", { className: s()(_.Zg, n), children: t.name });
    let p = {
      className: s()(_.Zg, n),
      emojiId: t.id,
      emojiName: t.name,
      alt: I,
      autoplay: !0,
      animated: !!(t.animated && h && a),
      registerInnerRef: (e) => {
        f.current = e;
      },
    };
    return E
      ? (0, i.jsx)(o.A, { ...p })
      : (0, i.jsx)(l.m, {
          targetElementRef: f,
          text: I,
          delay: A,
          ariaHidden: !0,
          children: (0, i.jsx)(o.A, { ...p }),
        });
  }
}
