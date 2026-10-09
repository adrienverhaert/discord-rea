/* Recovered shipped factory. Module 428644.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 20321..20877
 * Raw property SHA-256: 711ee5c81245e79babe05a93404687a35146fef77a8cb0ccbf5f581888c8d69f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => r });
  var l = n(582128),
    i = n(38405);
  let r = function (e, t, n, r, a) {
    let s = (0, l.useRef)(!1),
      o = { componentName: e, sentryErrorOptions: a, stateToCapture: r },
      u = (0, l.useRef)(o);
    ((0, l.useEffect)(() => {
      u.current = o;
    }),
      (0, l.useEffect)(() => {
        let { componentName: e, sentryErrorOptions: l, stateToCapture: r } = u.current;
        if (t && !s.current) {
          s.current = !0;
          let t = setTimeout(() => {
            let t = Error(`${e} is taking too long to load.`);
            (i.A.setExtra({ loadingState: r, loadingTimeSeconds: n }),
              i.A.captureException(t, { ...l, tags: { ...l?.tags } }));
          }, 1e3 * n);
          return () => {
            clearTimeout(t);
          };
        }
      }, [t, n]));
  };
}
