/* Recovered shipped factory. Module 768088.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8329997..8330838
 * Raw property SHA-256: ebc6bb7b26127981b4752f6ca8e3a601b8e589b3da0bdbf30f160eb49422acd2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(477900);
  n(582128);
  var r = n(205693),
    a = n(37965),
    s = n(487329),
    l = n(338771),
    o = n(975571),
    d = n(200749),
    c = n(652215),
    u = n(660183);
  function _(e) {
    let { stream: t, width: n, avError: _, avErrorContext: E, selected: A = !1, noArt: h = !1 } = e,
      f = (function (e) {
        switch (e?.type) {
          case s.iy.SCREENSHARE_OS_ERROR:
            return u.intl.format(u.t.e9LMuh, { errorMessage: e.errorMessage });
          case s.iy.STREAM_FAILED_TO_START:
          default:
            return u.intl.string(u.t.rSlOep);
        }
      })(E),
      I = (0, s.B1)(_ ?? s.iy.STREAM_FAILED_TO_START)?.errorCode;
    return (0, i.jsx)(d.A, {
      header: f,
      size: (0, d.J)(n),
      noArt: h,
      selected: A,
      description: u.intl.format(u.t.sXsgsP, { helpUrl: o.A.getArticleURL(c.MVz.STREAM_FAILED) }),
      errorCodeMessage: u.intl.formatToPlainString(u.t.ejOT95, { errorCode: I }),
      onCTAClick: () => {
        ((0, a.W)(r.x.STREAM, t.ownerId), (0, l.A)(t));
      },
      callToAction: u.intl.string(u.t["4EGMWL"]),
    });
  }
}
