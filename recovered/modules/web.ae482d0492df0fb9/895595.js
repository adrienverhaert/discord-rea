/* Recovered shipped factory. Module 895595.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2754309..2754842
 * Raw property SHA-256: 15d4208230610056002b0236b48be482ebf6f7af2e70ce6e2ea5b3514180850a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L: () => d });
  var i = n(73153),
    r = n(393033),
    a = n(462714),
    s = n(482876),
    l = n(757319);
  let o = null;
  function d(e) {
    return (0, l._)(e)
      ? null != o
        ? o
        : (o = (async () => {
            try {
              let e = (0, r.qn)() ? await (0, s.j)() : await (0, s.J)();
              if (
                (i.h.dispatch({
                  type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                  methods: e.methods,
                  footerMessage: e.footerMessage,
                  outageBannerMessage: e.outageBannerMessage,
                }),
                null != e.outageBannerMessage)
              )
                return !1;
              let t = await (0, a.Y)(e.methods);
              return 0 === t.length;
            } catch {
              return !1;
            }
          })().finally(() => {
            o = null;
          }))
      : Promise.resolve(!1);
  }
}
