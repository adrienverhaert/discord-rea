/* Recovered shipped factory. Module 804524.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 12106..12965
 * Raw property SHA-256: aac3d8ea32a834b7612193259daa090c4c598e1aa4db2cc3e2ece7f7be8469e4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, {
    LV: () =>
      function e(t, n = {}) {
        if ("function" != typeof t) return t;
        try {
          let e = t.__sentry_wrapped__;
          if (e)
            if ("function" == typeof e) return e;
            else return t;
          if ((0, i.sp)(t)) return t;
        } catch (e) {
          return t;
        }
        let r = function (...r) {
          try {
            let i = r.map((t) => e(t, n));
            return t.apply(this, i);
          } catch (e) {
            throw (
              c++,
              setTimeout(() => {
                c--;
              }),
              (0, o.v4)((t) => {
                (t.addEventProcessor(
                  (e) => (
                    n.mechanism && ((0, a.gO)(e, void 0, void 0), (0, a.M6)(e, n.mechanism)),
                    (e.extra = { ...e.extra, arguments: r }),
                    e
                  ),
                ),
                  (0, s.Cp)(e));
              }),
              e
            );
          }
        };
        try {
          for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
        } catch (e) {}
        ((0, i.pO)(r, t), (0, i.my)(t, "__sentry_wrapped__", r));
        try {
          Object.getOwnPropertyDescriptor(r, "name").configurable &&
            Object.defineProperty(r, "name", { get: () => t.name });
        } catch (e) {}
        return r;
      },
    jN: () => u,
    jf: () => l,
  });
  var r = n(978862),
    i = n(690094),
    o = n(630449),
    a = n(231577),
    s = n(871186);
  let l = r.O,
    c = 0;
  function u() {
    return c > 0;
  }
}
