/* Recovered shipped factory. Module 426983.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5065802..5066241
 * Raw property SHA-256: 129ea734e65e01502eef28a17289eb31aea67652039c53f474c9a23f95e7b307
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => s, _: () => a });
  var i,
    r = n(176128),
    a =
      (((i = {})[(i.PARTNERED = 0)] = "PARTNERED"),
      (i[(i.VERIFIED = 1)] = "VERIFIED"),
      (i[(i.VERIFIED_AND_PARTNERED = 2)] = "VERIFIED_AND_PARTNERED"),
      (i[(i.COMMUNITY = 3)] = "COMMUNITY"),
      (i[(i.DISCOVERABLE = 4)] = "DISCOVERABLE"),
      (i[(i.STAFF = 5)] = "STAFF"),
      (i[(i.NONE = 6)] = "NONE"),
      i);
  function s(e) {
    return e.staff
      ? 5
      : e.verified && e.partnered
        ? 2
        : e.verified
          ? 1
          : e.partnered
            ? 0
            : e.community && e.visibility === r.qo.PUBLIC
              ? 4
              : e.community
                ? 3
                : 6;
  }
}
