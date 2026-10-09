/* Recovered shipped factory. Module 295551.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1188371..1189711
 * Raw property SHA-256: c134fb7ea9475f1a4f28e55bf0d46270d0e44c44f28ad0e44502e4006adec666
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  let n;
  r.d(t, { X1: () => p, Tw: () => f, Bi: () => c });
  var i = r(361854),
    o = r(447502),
    a = r(582128);
  let s = !!("u" > typeof window && window.document && window.document.createElement),
    l = new Map();
  "u" > typeof FinalizationRegistry &&
    (n = new FinalizationRegistry((e) => {
      l.delete(e);
    }));
  let u = new WeakMap();
  function c(e) {
    let [t, r] = (0, a.useState)(e),
      c = (0, a.useRef)(null),
      f = (0, o.Cc)(t),
      p = (0, a.useRef)(null),
      d = u.get(p);
    if ((n && d !== f && (null != d && n.unregister(p), n.register(p, f, p), u.set(p, f)), s)) {
      let e = l.get(f);
      e && !e.includes(c) ? e.push(c) : l.set(f, [c]);
    }
    return (
      (0, i.N)(
        () => () => {
          (n && (n.unregister(p), u.delete(p)), l.delete(f));
        },
        [f],
      ),
      (0, a.useEffect)(() => {
        let e = c.current;
        return (
          e && r(e),
          () => {
            e && (c.current = null);
          }
        );
      }),
      f
    );
  }
  function f(e, t) {
    if (e === t) return e;
    let r = l.get(e);
    if (r) return (r.forEach((e) => (e.current = t)), t);
    let n = l.get(t);
    return n ? (n.forEach((t) => (t.current = e)), e) : t;
  }
  function p(e = []) {
    let t = c(),
      [r, n] = (function (e) {
        let [t, r] = (0, a.useState)(e),
          n = (0, a.useRef)(t),
          o = (0, a.useRef)(null),
          s = (0, a.useRef)(() => {
            if (!o.current) return;
            let e = o.current.next();
            if (e.done) {
              o.current = null;
              return;
            }
            n.current === e.value ? s.current() : r(e.value);
          });
        return (
          (0, i.N)(() => {
            ((n.current = t), o.current && s.current());
          }),
          [
            t,
            (0, a.useCallback)(
              (e) => {
                ((o.current = e(n.current)), s.current());
              },
              [s],
            ),
          ]
        );
      })(t),
      o = (0, a.useCallback)(() => {
        n(function* () {
          (yield t, yield document.getElementById(t) ? t : void 0);
        });
      }, [t, n]);
    return ((0, i.N)(o, [t, o, ...e]), r);
  }
}
