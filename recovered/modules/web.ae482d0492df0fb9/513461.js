/* Recovered shipped factory. Module 513461.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5147148..5147644
 * Raw property SHA-256: 3367bb560a1aedf3a09131ec34366d9d6d02458732a25aed1d6de458caccade2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { B5: () => o, _e: () => l, i7: () => d, j5: () => c, rX: () => s });
  var i,
    r,
    a,
    s =
      (((i = {}).TERMS = "TERMS"),
      (i.TEXT_INPUT = "TEXT_INPUT"),
      (i.PARAGRAPH = "PARAGRAPH"),
      (i.MULTIPLE_CHOICE = "MULTIPLE_CHOICE"),
      (i.VERIFICATION = "VERIFICATION"),
      i),
    l = (((r = {}).TIMESTAMP_DESC = "NEWEST"), (r.TIMESTAMP_ASC = "OLDEST"), r),
    o =
      (((a = {}).STARTED = "STARTED"),
      (a.SUBMITTED = "SUBMITTED"),
      (a.REJECTED = "REJECTED"),
      (a.APPROVED = "APPROVED"),
      a);
  function d(e) {
    return null != e && "TERMS" === e.field_type;
  }
  function c(e) {
    return null != e && e.some((e) => !d(e));
  }
}
