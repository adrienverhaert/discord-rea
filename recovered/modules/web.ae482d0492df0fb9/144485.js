/* Recovered shipped factory. Module 144485.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7305353..7306408
 * Raw property SHA-256: 066e2d748c16b6bcf9ad8a17e47e4c0dacefb2e84ef9f6a799071a290258a47c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900);
  n(582128);
  var r = n(314116),
    a = n(192308),
    s = n(231723),
    l = n(652215),
    o = n(660183);
  let d = {
    openSecureFramesStreamVerification: function (e, t) {
      (0, a.openModalLazy)(async () => {
        let r = (
          await Promise.all([
            n.e("91446"),
            n.e("545610"),
            n.e("563510"),
            n.e("930049"),
            n.e("146115"),
          ]).then(n.bind(n, 773262))
        ).default;
        return (n) => (0, i.jsx)(r, { streamKey: e, channelId: t, ...n });
      });
    },
    openSecureFramesUserVerificationModal: function (e, t, r, o) {
      r() &&
        (0, a.openModalLazy)(
          async () => {
            let r = (
              await Promise.all([
                n.e("91446"),
                n.e("545610"),
                n.e("44264"),
                n.e("563510"),
                n.e("425592"),
                n.e("930049"),
                n.e("250046"),
              ]).then(n.bind(n, 591757))
            ).default;
            return (n) => (0, i.jsx)(r, { userId: e, channelId: t, ...n });
          },
          { contextKey: o === l.BRT.POPOUT ? s.KX : s.SY },
        );
    },
    openSecureFramesUpdateConfirmation: function (e) {
      let {
        title: t,
        subtitle: n,
        confirmText: i = o.intl.string(o.t["cY+Oob"]),
        onConfirm: a,
      } = e;
      (0, r.A)({ title: t, subtitle: n, confirmText: i, onConfirm: a });
    },
    handleSecureFramesUserVerificationLink: function (e) {
      throw Error("handleSecureFramesUserVerificationLink not implemented");
    },
  };
}
