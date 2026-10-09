/* Recovered shipped factory. Module 592288.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1084856..1085548
 * Raw property SHA-256: aec9957859ff8fea9c47d4f9ec7c8788a6018948d3d1ae7b70ebcf9c311e09f8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { p: () => i });
  var n = r(582128);
  function i(e) {
    let { children: t, items: r, idScope: i, addIdAndValue: o, dependencies: a = [] } = e,
      s = (0, n.useMemo)(() => void 0, [t]),
      l = (0, n.useMemo)(() => new WeakMap(), [...a, s]);
    return (0, n.useMemo)(() => {
      if (r && "function" == typeof t) {
        let e = [];
        for (let a of r) {
          let r = !(function (e) {
              switch (typeof e) {
                case "object":
                  return null != e;
                case "function":
                case "symbol":
                  return !0;
                default:
                  return !1;
              }
            })(a)
              ? null
              : a,
            s = r ? l.get(r) : null;
          if (!s) {
            let u = (s = t(a)).props.id ?? a?.key ?? a?.id;
            null != i && null == s.props.id && null != u && (u = i + ":" + u);
            let c = u ?? e.length;
            ((s = (0, n.cloneElement)(s, o ? { key: c, id: u, value: a } : { key: c })),
              r && l.set(r, s));
          }
          e.push(s);
        }
        return e;
      }
      if ("function" != typeof t) return t;
    }, [t, r, l, i, o]);
  }
}
