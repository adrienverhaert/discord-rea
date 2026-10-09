/* Recovered shipped factory. Module 702904.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8334467..8335485
 * Raw property SHA-256: c7d15be49752ad15f1bc61403d94c05c025e838d6bcdd12e25c74d919b4774fa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(834730),
    s = n(625075),
    l = n(660183);
  function o() {
    if (!s.k.getConfig({ location: "handleScreenshareUnavailable" }).videoEnabled)
      return void (0, r.openModalLazy)(async () => {
        let { default: e } = await n.e("11487").then(n.bind(n, 792866));
        return (t) =>
          (0, i.jsx)(e, {
            ...t,
            header: l.intl.string(l.t.GFr0GR),
            body: l.intl.string(l.t["OkWAc/"]),
            confirmText: l.intl.string(l.t.BddRzS),
            children: (0, i.jsx)(a.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: l.intl.format(l.t.BPDKoA, { helpdeskArticle: s.M }),
            }),
          });
      });
    function e() {
      (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("915082"), n.e("944602"), n.e("825280")]).then(
          n.bind(n, 987482),
        );
        return (t) => (0, i.jsx)(e, { source: "Screenshare Unavailable", ...t });
      });
    }
    (0, r.openModalLazy)(async () => {
      let { default: t } = await n.e("11487").then(n.bind(n, 792866));
      return (n) =>
        (0, i.jsx)(t, {
          ...n,
          header: l.intl.string(l.t.GFr0GR),
          body: l.intl.string(l.t.QSk6E8),
          confirmText: l.intl.string(l.t["BK8LK+"]),
          onConfirm: e,
        });
    });
  }
}
