/* Recovered shipped factory. Module 157444.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 317410..318045
 * Raw property SHA-256: 87b77d31325fa547640a4b1fe4c507822b85d1fb7ec910bff3e4cc883e4990d6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  function r(e, t = Date.now()) {
    let n = parseInt(`${e}`, 10);
    if (!isNaN(n)) return 1e3 * n;
    let i = Date.parse(`${e}`);
    return isNaN(i) ? 6e4 : i - t;
  }
  function i(e, t, n = Date.now()) {
    return (e[t] || e.all || 0) > n;
  }
  function o(e, { statusCode: t, headers: n }, i = Date.now()) {
    let a = { ...e },
      s = n && n["x-sentry-rate-limits"],
      l = n && n["retry-after"];
    if (s)
      for (let e of s.trim().split(",")) {
        let [t, n, , , r] = e.split(":", 5),
          o = parseInt(t, 10),
          s = (isNaN(o) ? 60 : o) * 1e3;
        if (n)
          for (let e of n.split(";"))
            "metric_bucket" === e
              ? (!r || r.split(";").includes("custom")) && (a[e] = i + s)
              : (a[e] = i + s);
        else a.all = i + s;
      }
    else l ? (a.all = i + r(l, i)) : 429 === t && (a.all = i + 6e4);
    return a;
  }
  n.d(t, { FA: () => r, Jz: () => i, wq: () => o });
}
