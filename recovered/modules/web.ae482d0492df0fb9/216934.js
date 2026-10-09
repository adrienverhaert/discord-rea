/* Recovered shipped factory. Module 216934.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7151529..7151847
 * Raw property SHA-256: 91a1a40fdff68ec526373c22ae94ff4697c37eee915b84b4d46745b93fc5ea52
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { m: () => o });
  var i = n(976860),
    r = n(830543),
    a = n(814793),
    s = n(369189),
    l = n(652215);
  function o(e) {
    let { fromContent: t, questId: n } = e;
    (0, a.jQ)({ questId: n, fromContent: t });
    let o = (0, s.p)() ? (0, i.JK)().location.search : "",
      d = null != n ? `#${n}` : "";
    ((0, r.default)(), (0, i.pX)(l.BVt.QUEST_HOME, { search: o, hash: d }));
  }
}
