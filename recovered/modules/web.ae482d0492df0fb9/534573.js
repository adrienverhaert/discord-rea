/* Recovered shipped factory. Module 534573.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5614329..5615247
 * Raw property SHA-256: 8543137195bc8a6901968a0902305abede271d356e1986acdfcddc8bec086745
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ec: () => d, v4: () => o });
  var i = n(332714),
    r = n(776231),
    a = n(998218);
  let s = new Set(
    (window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS?.split(",") ?? [])
      .map((e) => e.substring(2))
      .map(i.K)
      .filter(Boolean),
  );
  function l(e) {
    return String((0, r.kr)(e * (0, r.mZ)()));
  }
  function o(e) {
    return (s.has(e.hostname) || !1) && e.pathname.startsWith("/external/");
  }
  function d(e, t) {
    let n = a.A.toURLSafe(e);
    if (null == n) return e;
    if (o(n)) {
      let n = a.A.toURLSafe(e);
      if (null == n || !o(n)) return e;
      if (null != t.size) {
        let e = l(t.size);
        (n.searchParams.set("width", e), n.searchParams.set("height", e));
      }
      return (
        !(function (e, t) {
          let { keepAspectRatio: n, format: i } = t;
          (null != n && e.searchParams.set("keep_aspect_ratio", String(n)),
            null != i && e.searchParams.set("format", i));
        })(n, t),
        n.toString()
      );
    }
    if (!a.A.isDiscordCdnUrl(e)) return e;
    if (null != t.size) {
      let i = l(t.size),
        r = Number(n.searchParams.get("size"));
      if (r > 0 && Number(i) > r) return e;
      n.searchParams.set("size", i);
    }
    return n.toString();
  }
}
