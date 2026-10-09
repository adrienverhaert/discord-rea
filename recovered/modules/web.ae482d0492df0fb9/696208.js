/* Recovered shipped factory. Module 696208.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10365347..10366350
 * Raw property SHA-256: 1afcfd6eaac717044c0f5efe35f112afcc6195568cc9bbfb006e6d70a6ebcc44
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { H: () => u, e: () => _ }), n(30146));
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(821609),
    l = n(825484),
    o = n(150934),
    d = n(460890),
    c = n(592551);
  function u(e) {
    let { leading: t, actions: n = [], actionsFullWidth: r = !1, leadingLayout: o = "default" } = e;
    if (null == t && n.length < 1) return null;
    let d = ["primary", "critical-primary", "expressive"],
      u = n.findLastIndex((e) => null != e.variant && d.includes(e.variant));
    return (0, i.jsxs)("footer", {
      className: a()(c.actionBar, c.section, { [c.actionBarLayoutChatInput]: "chat-input" === o }),
      children: [
        null != t && (0, i.jsx)("div", { className: c.actionBarLeading, children: t }),
        (0, i.jsx)("div", {
          className: a()(c.actionBarTrailing, { [c.actionBarTrailingFullWidth]: r }),
          children: (0, i.jsx)(l.e, {
            fullWidth: r,
            children: n?.map((e, t) =>
              (0, i.jsx)(s.$, { autoFocus: e.autoFocus ?? u === t, ...e }, t),
            ),
          }),
        }),
      ],
    });
  }
  function _(e) {
    let { label: t, ...n } = e,
      { i18n: r } = (0, d.G9)();
    return (0, i.jsx)("div", {
      className: c.actionBarCheckbox,
      children: (0, i.jsx)(o.S, {
        ...n,
        label: t ?? r.MODAL_DONT_SHOW_AGAIN,
        labelType: "secondary",
      }),
    });
  }
}
