/* Recovered shipped factory. Module 38910.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4635146..4635539
 * Raw property SHA-256: 4780c7ceba115f99f719f45264909458e7c127dc41c5929b8d5a2cdb5d645c7a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(636537),
    r = n(73153),
    a = n(652215);
  let s = {
    async fetch() {
      try {
        let e = await i.Bo.get({ url: a.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
        r.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
      } catch (e) {
        r.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
      }
    },
    ignore(e) {
      i.Bo.del({ url: a.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
    },
  };
}
