/* Recovered shipped factory. Module 302223.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4142696..4143346
 * Raw property SHA-256: 585121a477e8d855b9dea81c650d588ddfca14f681813d610834e21cf1ccd543
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(51183),
    l = n(208971),
    o = n(224437);
  function d(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: r,
        textClassName: d,
        placeholderText: c,
        soloEmojiClassName: u,
        animate: _ = !0,
        hideTooltip: E = !1,
        hideEmoji: A = !1,
        children: h,
      } = e,
      f = (0, l.G)(t?.state);
    if (null == t) return null;
    let { emoji: I } = t,
      p = null != f && "" !== f ? f : c;
    return (0, i.jsxs)("div", {
      className: a()(o.__invalid_container, n),
      children: [
        A || null == I
          ? null
          : (0, i.jsx)(s.A, {
              emoji: I,
              className: a()(o.Z, r, null != u ? { [u]: null == p || "" === p } : null),
              animate: _,
              hideTooltip: E,
            }),
        null != p && p.length > 0 ? (0, i.jsx)("span", { className: d, children: p }) : null,
        h,
      ],
    });
  }
}
