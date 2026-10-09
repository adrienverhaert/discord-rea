/* Recovered shipped factory. Module 195588.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 282992..283595
 * Raw property SHA-256: 9e6b3ad26e7ba5a13875808acc160df7ad9aa465ef971c85c0005b722fb42bfc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { _: () => a });
  var r = n(743154),
    i = n(835869),
    o = n(504585);
  function a(e, t = (0, r.qd)("fetch")) {
    let n = 0,
      s = 0;
    return (0, o.o)(e, function (o) {
      let a = o.body.length;
      ((n += a), s++);
      let l = {
        body: o.body,
        method: "POST",
        referrerPolicy: "origin",
        headers: e.headers,
        keepalive: n <= 6e4 && s < 15,
        ...e.fetchOptions,
      };
      if (!t) return ((0, r.y7)("fetch"), (0, i.xg)("No fetch implementation available"));
      try {
        return t(e.url, l).then(
          (e) => (
            (n -= a),
            s--,
            {
              statusCode: e.status,
              headers: {
                "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": e.headers.get("Retry-After"),
              },
            }
          ),
        );
      } catch (e) {
        return ((0, r.y7)("fetch"), (n -= a), s--, (0, i.xg)(e));
      }
    });
  }
}
