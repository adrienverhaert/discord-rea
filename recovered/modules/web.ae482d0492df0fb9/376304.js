/* Recovered shipped factory. Module 376304.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5077732..5078805
 * Raw property SHA-256: 0ac77322cf05b8c9c0db0d53ccc12c1cf7d3d2579cf3f870c25e271b8b1231f7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { XD: () => E, fm: () => A, sE: () => u, ux: () => _ });
  var i = n(7584),
    r = n(776231),
    a = n(486020),
    s = n(723702),
    l = n(652215);
  let o = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
    d = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
    c = (0, s.isAndroid)();
  function u(e, t) {
    if (null == e) return null;
    let n = (function (e, t) {
        let { id: n, icon: i } = e;
        if (null == i) return;
        if (i.startsWith("data:")) return i;
        let s = a.QB ? "webp" : "png",
          u = "",
          _ = "quality=lossless";
        return (null != t && ((u = "size=" + (0, r.kr)(t * (0, r.mZ)())), (_ = c ? "" : "&" + _)),
        null != window.GLOBAL_ENV.CDN_HOST)
          ? `${o}/${n}/${i}.${s}?${u}${_}`
          : `${d}${l.Rsh.ROLE_ICON(n, i)}?${u}`;
      })(e, t),
      s =
        null != e.unicodeEmoji
          ? i.Ay.getByName(i.Ay.convertSurrogateToName(e.unicodeEmoji, !1))
          : void 0;
    return null == n && null == s ? null : { customIconSrc: n, unicodeEmoji: s ?? void 0 };
  }
  function _(e, t) {
    return e.replace(/size=[0-9]+/g, `size=${(0, r.kr)(t * (0, r.mZ)())}`);
  }
  function E(e) {
    return e.startsWith(o) || (e.startsWith(`${d}/roles`) && e.includes("/icons/"));
  }
  function A(e, t) {
    return t?.tags?.subscription_listing_id != null || e.features.has(l.GuildFeatures.ROLE_ICONS);
  }
}
