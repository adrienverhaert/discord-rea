/* Recovered shipped factory. Module 494903.
 * Source: recovered/web/assets/822f1ff553758a00.js
 * UTF-16 property offsets: 6646..7117
 * Raw property SHA-256: 35d84d3336bb029dbc8f5d306c541ae6b3c21c9d988240c70357c7569ddfac27
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { B: () => c });
  var r = n(477900);
  n(582128);
  var i = n(683071),
    a = n(642639),
    l = n(740053);
  let s = { info: "info", warning: "warning", critical: "critical" },
    u = ["info", "warning", "critical"];
  function c() {
    let e = (0, a.t4)((e) => e.getPaymentSourceNotices());
    return 0 === e.length
      ? null
      : (0, r.jsx)("div", {
          className: l.k,
          children: (0, r.jsx)(i.w, {
            type: s[
              u[
                e.reduce((e, t) => {
                  let { severity: n } = t;
                  return Math.max(e, u.indexOf(n));
                }, 0)
              ]
            ],
            children: e
              .map((e) => {
                let { message: t } = e;
                return t;
              })
              .join(" "),
          }),
        });
  }
}
