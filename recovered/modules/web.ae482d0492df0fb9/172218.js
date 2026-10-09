/* Recovered shipped factory. Module 172218.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11654206..11655054
 * Raw property SHA-256: f6da2984e7befb752cb1177187d1b91d4e61324c1aafbaaf806900cf3d788774
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { B: () => l, K: () => d });
  var i = n(582128),
    r = n(66455),
    a = n(206692);
  let s = {};
  function l(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      l = (0, i.useRef)(null),
      o = (0, r.A)(t ?? s),
      d = (0, i.useRef)(null);
    return (
      (0, i.useLayoutEffect)(() => {
        if (!n) return;
        null == d.current && (d.current = (0, a.e)(o.current));
        let t = l.current,
          i = d.current;
        null != t && null != i && (0, a.wB)(i, t, e);
      }, [n, e, o]),
      (0, i.useEffect)(() => {
        if (!n) return;
        let e = l.current,
          t = d.current;
        if (null != e && null != t)
          return () => {
            (0, a.$v)(t, e);
          };
      }, [n, t]),
      l
    );
  }
  let o = new Map([[1, { threshold: 1 }]]);
  function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      a = (0, r.A)((t) => {
        e(t.isIntersecting);
      }),
      s = (0, i.useMemo)(() => {
        let e;
        return (null != (e = o.get(t)) || ((e = { threshold: t }), o.set(t, e)), e);
      }, [t]);
    return l(a.current, s, n);
  }
}
