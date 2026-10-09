/* Recovered shipped factory. Module 566566.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8332393..8333181
 * Raw property SHA-256: 2e09639225f56780deebbccdc61e2f80fff8390cb98016932b518541e695ec05
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(477900),
    r = n(205693),
    a = n(827343),
    s = n(37965),
    l = n(487329),
    o = n(975571),
    d = n(200749),
    c = n(652215),
    u = n(660183);
  let _ = n(745652);
  function E(e) {
    let { userId: t, width: n, avError: E, selected: A = !1, noArt: h = !1 } = e,
      f = (0, l.B1)(E)?.errorCode;
    return (0, i.jsx)(d.A, {
      artURL: _,
      header: u.intl.string(u.t["z+mxvo"]),
      size: (0, d.J)(n),
      noArt: h,
      selected: A,
      description: u.intl.format(u.t.d486Wm, {
        helpUrl: o.A.getArticleURL(c.MVz.VOICE_VIDEO_TROUBLESHOOTING),
      }),
      errorCodeMessage: u.intl.formatToPlainString(u.t.ejOT95, { errorCode: f }),
      onCTAClick: function () {
        ((0, s.W)(r.x.DEFAULT, t),
          a.default.setDisableLocalVideo(t, c.bb8.DISABLED, r.x.DEFAULT, !1),
          setTimeout(() => {
            a.default.setDisableLocalVideo(t, c.bb8.MANUAL_ENABLED, r.x.DEFAULT, !1);
          }, 1e3));
      },
      callToAction: u.intl.string(u.t["hxmQ/e"]),
    });
  }
}
