/* Recovered shipped factory. Module 688796.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6923016..6923883
 * Raw property SHA-256: e09ba44a222003a9323c7c8bceba2f17a090f7644bd792988e27a3d1e5ffde1e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { G: () => u, default: () => _ });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(87719),
    s = n(81456),
    l = n(831318),
    o = n(202541),
    d = n(339984),
    c = n(660183);
  function u(e) {
    let { uploadType: t } = e;
    return (
      (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 688796));
        return (n) => (0, i.jsx)(e, { uploadType: t, onSecondaryClick: r.closeAllModals, ...n });
      }),
      !0
    );
  }
  function _(e) {
    let { uploadType: t, onClose: n, onSecondaryClick: r, ...u } = e,
      _ = t === d.HL.AVATAR || t === d.HL.BANNER,
      E = (0, s.A)(
        t === d.HL.AVATAR ? o.e.ANIMATED_AVATAR_MODAL_UPSELL : o.e.ANIMATED_BANNER_MODAL_UPSELL,
      );
    return _
      ? (0, i.jsx)(l.A, {
          title: t === d.HL.AVATAR ? c.intl.string(c.t.X7tO60) : c.intl.string(c.t.zXPa2C),
          subtitle: t === d.HL.AVATAR ? c.intl.string(c.t.ifCRdB) : c.intl.string(c.t.yQAnf4),
          graphic: E,
          onSecondaryClick: () => {
            (r?.(), (0, a.x)(n));
          },
          secondaryCTA: c.intl.string(c.t.PcTCB7),
          onClose: n,
          ...u,
        })
      : null;
  }
}
