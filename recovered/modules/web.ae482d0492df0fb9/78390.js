/* Recovered shipped factory. Module 78390.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5787758..5788225
 * Raw property SHA-256: 6b48b96905233b05125c0a694244f37b64815ad92a860cba8375788bdb99ca23
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q: () => r, f: () => a });
  var i = n(660183);
  function r(e) {
    switch (e) {
      case "home":
      case "guide":
        return i.intl.string(i.t.VbpLyU);
      case "browse":
        return i.intl.string(i.t.et6wav);
      case "customize":
        return i.intl.string(i.t.h9mGOP);
      case "linked-roles":
        return i.intl.string(i.t.ghtnss);
    }
    return null;
  }
  function a(e, t, n, i) {
    if ("linked-roles" === t) {
      if (null == i) return null;
      let t = e.getRole(i, n);
      return null == t || t.tags?.guild_connections !== null ? null : t.name;
    }
    return null;
  }
}
