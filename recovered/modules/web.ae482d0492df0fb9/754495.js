/* Recovered shipped factory. Module 754495.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8116679..8117633
 * Raw property SHA-256: 23eec1aad931f40b7cb94acd180f807d6923648bff46dad386ac54d239e47416
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { W: () => u, s: () => _ });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(192308),
    s = n(477782),
    l = n(20805),
    o = n(287809),
    d = n(301736),
    c = n(660183);
  function u(e) {
    return (0, l.zD)(e)
      ? c.intl.string(c.t["4f8iut"])
      : (0, l.Lf)(e)
        ? c.intl.string(c.t.yX2hNy)
        : (0, l.fe)(e)
          ? c.intl.string(c.t.oSs8eg)
          : c.intl.string(c.t.bK9GT1);
  }
  function _(e) {
    let { user: t, entry: c, display: _, onAction: E } = e,
      A = (0, d.A)(),
      h = (0, r.bG)([o.default], () => o.default.getCurrentUser());
    return t.id === h?.id && "recent" === _ && (0, l.$R)(c)
      ? (0, i.jsx)(s.Dr, {
          id: "delete-entry-history",
          label: u(c),
          action: () => {
            (E?.({ action: "PRESS_DELETE_HISTORY_MENU_ITEM" }),
              (0, l.$R)(c) &&
                (0, a.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                    n.e("677624"),
                    n.e("165291"),
                    n.e("796668"),
                    n.e("492936"),
                    n.e("350949"),
                    n.e("114633"),
                    n.e("842775"),
                    n.e("819119"),
                    n.e("69658"),
                    n.e("436946"),
                  ]).then(n.bind(n, 839785));
                  return (n) =>
                    (0, i.jsx)(e, { entry: c, user: t, onAction: E, onOpenGameSettings: A, ...n });
                }));
          },
          color: "danger",
        })
      : null;
  }
}
