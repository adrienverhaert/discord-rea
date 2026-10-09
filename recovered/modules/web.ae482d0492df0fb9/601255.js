/* Recovered shipped factory. Module 601255.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3825026..3825501
 * Raw property SHA-256: 4462e840eda0ae4d12cdf02732e9cd1d0efcaa6db2f0059ca970c9d536d47faa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(582128),
    r = n(451988),
    a = n(821956),
    s = n(652215);
  function l(e) {
    let [t, n] = i.useState(!1),
      l = i.useRef(null);
    return (
      i.useEffect(
        () => (
          !(function t() {
            if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void n(!1);
            let i = (0, a.bS)(e);
            n(i);
            let o = 1e3 * e.expiresAt - Date.now();
            if (!i && o > 0) {
              let e = new r.Ep();
              (e.start(Math.min(s.mnr, o), () => t()), (l.current = e));
            }
          })(),
          () => l.current?.stop()
        ),
        [e],
      ),
      i.useEffect(() => {
        t && l.current?.stop();
      }, [t]),
      t ? void 0 : e
    );
  }
}
