/* Recovered shipped factory. Module 321987.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6190631..6191681
 * Raw property SHA-256: 8a30702307b4e5d9c85c32b3c848e91e441e43a983b9314a6c906063911361f8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => T, f: () => m });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(43990),
    d = n(224640),
    c = n(20742),
    u = n(430993),
    _ = n(364840),
    E = n(696208),
    A = n(726249),
    h = n(540999),
    f = n(652215),
    I = n(660183),
    p = n(467793);
  function T(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: r } = e;
    (0, A.HU)({ location: I.intl.string(I.t["3S2494"]) });
    let a = (0, l.bG)([h.A], () => h.A.isDeveloper) ? "92px" : void 0;
    return (0, i.jsx)(o.N, {
      theme: f.NJ8.DARK,
      children: (e) =>
        (0, i.jsx)("div", {
          className: s()(e, p.Y, r),
          style: { marginBottom: a },
          children: !0 === n ? t : (0, i.jsx)("div", { className: p.Q, children: t }),
        }),
    });
  }
  function m(e) {
    let { hideHeader: t, "aria-label": n, ...a } = e,
      s = (0, i.jsx)(r.Fragment, {}, "controls");
    return (0, i.jsxs)(d.d, {
      ...a,
      onClose: () => Promise.resolve(a.onClose?.()),
      "aria-label": n ?? a.title,
      children: [
        t ? null : (0, i.jsx)(c.rQ, { title: a.title ?? "", subtitle: a.subtitle }),
        (0, i.jsx)(u.c, { controls: s, children: a.children }),
        (0, i.jsx)(_.j, { children: a.preview }),
        (0, i.jsx)(E.H, {
          leading: a.actionBarInput,
          actions: a.actions ?? [],
          actionsFullWidth: null == a.actionBarInput,
        }),
      ],
    });
  }
}
