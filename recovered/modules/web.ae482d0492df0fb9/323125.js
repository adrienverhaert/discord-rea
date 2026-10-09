/* Recovered shipped factory. Module 323125.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11742024..11743133
 * Raw property SHA-256: 077269408221d149b61687af92ce4bc8de4cf55e65f097c1ec2c8b56e29d9a63
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return (function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        r = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : "",
        a = null != t ? `?redirect_to=${encodeURIComponent(t)}` : "";
      return (
        0 !== i.length && (i = 0 === a.length ? `?${i}` : `&${i}`),
        `${n ? r : ""}/${e}${a}${i}`
      );
    })("login", e, t, n);
  }
  n.d(t, { T2: () => i, dN: () => a, x: () => r });
  class r {
    value;
    constructor(e) {
      this.value = e;
    }
    toString() {
      return this.value;
    }
  }
  function a(e, t) {
    let n = {};
    for (let i of Object.keys(e)) {
      let a = e[i];
      if ("function" != typeof a) {
        n[i] = a;
        continue;
      }
      n[i] = function () {
        for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
        return a(
          ...(function (e, t) {
            return e.map((e) =>
              null == e
                ? e
                : e instanceof r
                  ? e.toString()
                  : null == t
                    ? encodeURIComponent(e)
                    : String(e)
                        .split("")
                        .map((e) => (null != t && t.includes(e) ? e : encodeURIComponent(e)))
                        .join(""),
            );
          })(n, t),
        );
      };
    }
    return n;
  }
}
