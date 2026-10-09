/* Recovered shipped factory. Module 628856.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3877731..3878510
 * Raw property SHA-256: dd9e3dd480261fa3cfbe48f24a51c7d1623a3b6a6aa9472e96c919345582bb24
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    return "string" == typeof e.skuId || "number" == typeof e.skuId
      ? String(e.skuId)
      : "string" == typeof e.sku_id || "number" == typeof e.sku_id
        ? String(e.sku_id)
        : null;
  }
  function r(e) {
    return "object" == typeof e && null != e && "nameplate" in e && "object" == typeof e.nameplate
      ? {
          nameplate: (function (e) {
            if ("object" != typeof e || null == e) return null;
            let t = i(e);
            if (
              null == t ||
              !("label" in e) ||
              "string" != typeof e.label ||
              !("palette" in e) ||
              "string" != typeof e.palette
            )
              return null;
            let n = { skuId: t, label: e.label, palette: e.palette };
            return (
              "asset" in e && "string" == typeof e.asset && (n.asset = e.asset),
              "expiresAt" in e && "number" == typeof e.expiresAt && (n.expiresAt = e.expiresAt),
              "expires_at" in e && "number" == typeof e.expires_at && (n.expiresAt = e.expires_at),
              n
            );
          })(e.nameplate),
        }
      : null;
  }
  n.d(t, { V: () => i, t: () => r });
}
