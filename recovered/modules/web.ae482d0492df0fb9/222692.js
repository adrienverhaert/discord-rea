/* Recovered shipped factory. Module 222692.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8333182..8334466
 * Raw property SHA-256: 647da7a525fecaf27ef6bbd2682003b32a101b9903ced6a45b32c83fcdf6dbe3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(834730),
    s = n(625075),
    l = n(192820),
    o = n(731854),
    d = n(660183);
  function c(e) {
    s.k.getConfig({ location: "handleCameraUnavailable" }).videoEnabled
      ? l.Ay.supports(o.O5.VIDEO)
        ? (0, r.openModalLazy)(async () => {
            let { default: t } = await n.e("11487").then(n.bind(n, 792866));
            return (n) =>
              (0, i.jsx)(t, {
                ...n,
                header: d.intl.string(d.t["8jSzSe"]),
                body: d.intl.string(d.t.bhqSWl),
                confirmText: d.intl.string(d.t.BddRzS),
                onConfirm: e,
              });
          })
        : (0, r.openModalLazy)(async () => {
            let { default: t } = await n.e("11487").then(n.bind(n, 792866));
            return (a) =>
              (0, i.jsx)(t, {
                ...a,
                header: d.intl.string(d.t.XLw6FF),
                body: d.intl.string(d.t.wVjKGi),
                confirmText: d.intl.string(d.t["BK8LK+"]),
                onConfirm: () => {
                  (e?.(),
                    (0, r.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                        n.e("915082"),
                        n.e("944602"),
                        n.e("825280"),
                      ]).then(n.bind(n, 987482));
                      return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                    }));
                },
              });
          })
      : (0, r.openModalLazy)(async () => {
          let { default: e } = await n.e("11487").then(n.bind(n, 792866));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              header: d.intl.string(d.t["8jSzSe"]),
              body: d.intl.string(d.t.UoW002),
              confirmText: d.intl.string(d.t.BddRzS),
              children: (0, i.jsx)(a.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: d.intl.format(d.t.BPDKoA, { helpdeskArticle: s.M }),
              }),
            });
        });
  }
}
