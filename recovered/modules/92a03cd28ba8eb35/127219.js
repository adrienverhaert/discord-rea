/* Recovered shipped factory. Module 127219.
 * Source: recovered/web/assets/92a03cd28ba8eb35.js
 * UTF-16 property offsets: 1871..2275
 * Raw property SHA-256: 361abe67e1fac4acd6b44ea6a07fe70b9f751e7af8d4110a89da4bb0b7e89786
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, s) {
  s.d(e, { l: () => u, o: () => c });
  var n,
    i = s(477900);
  s(582128);
  var a = s(738822),
    l = s(160185),
    r = s(190107),
    o = s(660183),
    c = (((n = {}).NOT_FOUND = "not_found"), (n.MOBILE_ONLY = "mobile_only"), n);
  function u(t) {
    let { questId: e, reason: s = "not_found" } = t;
    return (0, i.jsx)(l.i, {
      questId: e,
      fallbackReason: r.eA.UNKNOWN_QUEST,
      bodyText: o.intl.string("mobile_only" === s ? o.t.Pag1gS : o.t.c9275Z),
      questContent: a.uF.INVALID_QUEST_EMBED,
    });
  }
}
