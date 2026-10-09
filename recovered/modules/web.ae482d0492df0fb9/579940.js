/* Recovered shipped factory. Module 579940.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3309799..3310165
 * Raw property SHA-256: 15b71196ab02c644783db9b1f0536d85983d76f88d6a984dcf806873fbf1bb01
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Y0: () => l, gf: () => o, nQ: () => d });
  var i = n(582128),
    r = n(196765),
    a = n(121894);
  let s = Object.freeze({ id: null, activeDescendant: null }),
    l = (0, r.v)(() => s);
  function o(e, t, n) {
    (0, i.useEffect)(() => {
      (0, a.r)(() => {
        t
          ? l.setState({ id: e, activeDescendant: n })
          : l.setState({ id: null, activeDescendant: null });
      });
    }, [e, t, n]);
  }
  function d() {
    (0, a.r)(() => l.setState(() => s));
  }
}
