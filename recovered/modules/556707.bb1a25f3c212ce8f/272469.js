/* Recovered shipped factory. Module 272469.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 311389..311958
 * Raw property SHA-256: ee8bcac56f24739f26ff843822eb3c73fa4a8b6ae980f0242e894126988e2a18
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Ow: () => o, Z9: () => a, pq: () => s, vF: () => l });
  var r = n(780755),
    i = n(978862);
  let o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    a = {};
  function s(e) {
    if (!("console" in i.O)) return e();
    let t = i.O.console,
      n = {},
      r = Object.keys(a);
    r.forEach((e) => {
      let r = a[e];
      ((n[e] = t[e]), (t[e] = r));
    });
    try {
      return e();
    } finally {
      r.forEach((e) => {
        t[e] = n[e];
      });
    }
  }
  let l = (0, i.B)("logger", function () {
    let e = !1,
      t = {
        enable: () => {
          e = !0;
        },
        disable: () => {
          e = !1;
        },
        isEnabled: () => e,
      };
    return (
      r.T
        ? o.forEach((n) => {
            t[n] = (...t) => {
              e &&
                s(() => {
                  i.O.console[n](`Sentry Logger [${n}]:`, ...t);
                });
            };
          })
        : o.forEach((e) => {
            t[e] = () => void 0;
          }),
      t
    );
  });
}
