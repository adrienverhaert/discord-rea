/* Recovered shipped factory. Module 268988.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7403651..7404267
 * Raw property SHA-256: ef8f89b23f9ea483e1d6ebc0351bfaf5adfb9caf3400a59050ecf9f538090189
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => c }), n(321073));
  var i = n(17928),
    r = n(73153),
    a = n(320095);
  let s = new Map();
  function l() {
    s = new Map();
  }
  let o = [];
  class d extends i.Ay.Store {
    static displayName = "SearchRecentMessageStore";
    getRecentMessageAuthorIds(e) {
      return s.get(e) ?? o;
    }
  }
  let c = new d(r.h, {
    SEARCH_MESSAGES_SUCCESS: function (e) {
      let { guildId: t, data: n } = e;
      if (null == t) return !1;
      let i = !1,
        r = [...(s.get(t) ?? [])],
        l = new Set(r);
      return (
        n.forEach((e) => {
          e.messages.forEach((e) => {
            let [t] = e,
              n = (0, a.rh)(t);
            !l.has(n.author.id) &&
              l.size < 15 &&
              (l.add(n.author.id), r.push(n.author.id), (i = !0));
          });
        }),
        i && s.set(t, r),
        i
      );
    },
    SEARCH_RECENT_MESSAGES_CLEAR: l,
    CONNECTION_OPEN: l,
  });
}
