/* Recovered shipped factory. Module 956753.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6223219..6223671
 * Raw property SHA-256: b97333c15933f66117491a68081e7930b0f575a335fd3699271aacbd88e7089b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { U5: () => l, v$: () => s });
  var i = n(291445),
    r = n(206885),
    a = n(589051);
  function s(e, t) {
    return function () {
      for (var n = arguments.length, s = Array(n), l = 0; l < n; l++) s[l] = arguments[l];
      let o = (r.O || r.e) && (0, a.NI)(t).hasFriendList,
        d = i.z.getConfig({ location: t }).hasFriendList;
      return (!!o || !!d) && e(...s);
    };
  }
  function l(e, t) {
    return function () {
      for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
      return !!(0, a.NI)(t).hasChat && e(...i);
    };
  }
}
