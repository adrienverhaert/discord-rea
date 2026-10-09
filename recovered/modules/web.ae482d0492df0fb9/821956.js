/* Recovered shipped factory. Module 821956.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3824047..3824704
 * Raw property SHA-256: 1f57fd8ebfcd4dedf0d5f86b50b5ba192455cd98b9d257cc0a1815f31ee95952
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Xq: () => a, bS: () => s, kn: () => l, uZ: () => o });
  var i = n(435558),
    r = n(628856);
  function a(e) {
    if ("object" != typeof e || null == e) return null;
    let t = (0, r.V)(e);
    if (null == t) return null;
    let n = { skuId: t };
    return (
      "asset" in e && "string" == typeof e.asset && (n.asset = e.asset),
      "expires_at" in e && "number" == typeof e.expires_at && (n.expiresAt = e.expires_at),
      "expiresAt" in e && "number" == typeof e.expiresAt && (n.expiresAt = e.expiresAt),
      n
    );
  }
  function s(e) {
    return e?.expiresAt != null && 1e3 * e.expiresAt < Date.now();
  }
  function l(e, t) {
    return null == e || null == t ? e === t : (0, i.isEqual)(a(e), a(t));
  }
  function o(e, t) {
    return null != t && !s(e?.avatarDecoration) && e?.avatarDecoration?.asset != null;
  }
}
