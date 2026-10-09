/* Recovered shipped factory. Module 386171.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8254889..8255434
 * Raw property SHA-256: cd063caad75855fa6ecd0a100bd8e385a26d87e88de711fa0f0cec750b666e97
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { S9: () => _, hT: () => c, tI: () => u });
  var i = n(687123),
    r = n(36149),
    a = n(207560),
    s = n(287809),
    l = n(885386),
    o = n(96607);
  function d(e, t, n, i) {
    return (!t || !!i) && !1 !== n && (e ?? !1);
  }
  function c() {
    let e = l.Qe.useSetting(),
      t = (0, r.b8)(),
      n = (0, o.A)();
    return d(e, (0, a.aX)(i.t.COMMANDS_TOGGLE), n, t);
  }
  function u() {
    let e = l.Kg.useSetting(),
      t = (0, r.b8)(),
      n = (0, o.A)();
    return d(e, (0, a.aX)(i.t.COMMANDS_TOGGLE), n, t);
  }
  function _() {
    let e = l.Qe.getSetting(),
      t = (0, r.Q9)(),
      n = s.default.getCurrentUser();
    return d(e, (0, a.d6)(i.t.COMMANDS_TOGGLE), n?.nsfwAllowed, t);
  }
}
