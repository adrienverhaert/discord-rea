/* Recovered shipped factory. Module 453322.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6524282..6524772
 * Raw property SHA-256: 277e992d1d04422859be45a656bd9eb6d169d502d72d11e7a7bf4fe10da23ae3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(582128),
    r = n(17928),
    a = n(964486),
    s = n(899847),
    l = n(695515),
    o = n(834981);
  function d(e) {
    let t = (0, o.VT)(),
      n = (0, r.bG)([l.A], () => l.A.getAreLinkedUsersProcessed());
    (0, a.Ay)(() => {
      l.A.getAreLinkedUsersProcessed() || s.Ay.fetchLinkedUsers().catch(() => {});
    });
    let d = i.useRef(e);
    i.useEffect(() => {
      d.current = e;
    }, [e]);
    let c = i.useRef(null);
    i.useEffect(() => {
      if (!n) return;
      if (null == c.current) {
        c.current = t;
        return;
      }
      let e = t > c.current;
      ((c.current = t), e && d.current());
    }, [n, t]);
  }
}
