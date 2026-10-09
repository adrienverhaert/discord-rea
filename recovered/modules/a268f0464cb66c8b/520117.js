/* Recovered shipped factory. Module 520117.
 * Source: recovered/web/assets/a268f0464cb66c8b.js
 * UTF-16 property offsets: 95..547
 * Raw property SHA-256: 76a1046da747be19d7271113da8fd88bc295ad2a85fd5372145f0470df9fce60
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (u, r, e) {
  e.d(r, { A: () => c });
  var n = e(582128),
    t = e(172218);
  function c(u) {
    let { onVisible: r, threshold: e, minTimeVisibleMs: c } = u,
      l = n.useRef(!1),
      i = n.useRef(null);
    return (
      n.useEffect(
        () => () => {
          null != i.current && (clearTimeout(i.current), (i.current = null));
        },
        [],
      ),
      (0, t.K)(function (u) {
        function e() {
          (r(), (l.current = !0), (i.current = null));
        }
        (null == i.current ||
          u ||
          !1 !== l.current ||
          (clearTimeout(i.current), (i.current = null)),
          u && !0 !== l.current && (null != c ? (i.current = setTimeout(e, c)) : e()));
      }, e)
    );
  }
}
