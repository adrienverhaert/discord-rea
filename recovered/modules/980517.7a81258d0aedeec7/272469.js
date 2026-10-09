/* Recovered shipped factory. Module 272469.
 * Source: recovered/web/assets/980517.7a81258d0aedeec7.js
 * UTF-16 property offsets: 50516..51080
 * Raw property SHA-256: b74189eae92e1721c87c2db8f474432b1808dabb15f6ee67fee588232d8edd6e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { pq: () => s, vF: () => l });
  var n = r(780755),
    a = r(978862);
  let o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    i = {};
  function s(e) {
    if (!("console" in a.O)) return e();
    let t = a.O.console,
      r = {},
      n = Object.keys(i);
    n.forEach((e) => {
      let n = i[e];
      ((r[e] = t[e]), (t[e] = n));
    });
    try {
      return e();
    } finally {
      n.forEach((e) => {
        t[e] = r[e];
      });
    }
  }
  let l = (0, a.B)("logger", function () {
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
      n.T
        ? o.forEach((r) => {
            t[r] = (...t) => {
              e &&
                s(() => {
                  a.O.console[r](`Sentry Logger [${r}]:`, ...t);
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
