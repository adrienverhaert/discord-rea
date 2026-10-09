/* Recovered shipped factory. Module 565058.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9306636..9307491
 * Raw property SHA-256: 03d64ef50906ecaafb77ebb7b15f0258f8bba78247ce1ee185b0263b090dc100
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i, r;
  n.d(t, { A: () => u });
  var a = n(477900);
  n(582128);
  var s = n(192308),
    l = n(73153);
  (n(277984), n(166403));
  var o = n(652215);
  let d = null;
  function c(e) {
    (null != i && e ? i() : null != r && r(), (i = null), (r = null));
  }
  let u = {
    init() {
      (l.h.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
        let t;
        (c(!1),
          (d = e.context),
          (i = e.resolve),
          (r = e.reject),
          o.QCW === e.context &&
            ((t = !1),
            (0, s.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  n.e("671464"),
                  n.e("112206"),
                  n.e("709998"),
                  n.e("577821"),
                ]).then(n.bind(n, 633772));
                return (n) => {
                  let { onClose: i, ...r } = n;
                  return (0, a.jsx)(e, {
                    ...r,
                    onClose: (e) => {
                      ((t = e), i());
                    },
                  });
                };
              },
              {
                onCloseCallback: () => {
                  var e;
                  ((e = t),
                    l.h.dispatch({ type: "PREMIUM_REQUIRED_MODAL_CLOSE", shouldContinue: e }));
                },
              },
            )));
      }),
        l.h.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
          let { shouldContinue: t } = e;
          ((d = null), c(t));
        }),
        l.h.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
          let { locked: t } = e;
          t && null != d && ((d = null), c(!1));
        }));
    },
  };
}
