/* Recovered shipped factory. Module 34457.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8764554..8764916
 * Raw property SHA-256: 263db42df3aef6918fa4dbf847faae2499aae1f926cc1e0524f14962341115e8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Oy: () => l, _m: () => o, nk: () => c, sx: () => d, xh: () => s });
  var i = n(435558),
    r = n.n(i),
    a = n(136722);
  let s = "GuildRole";
  function l(e) {
    return e.id === e.guildId;
  }
  function o(e, t) {
    return (0, a.zy)(e.permissions, t);
  }
  function d(e, t) {
    return (0, a.X8)(e.permissions, t);
  }
  function c(e, t) {
    return r().isEqualWith(e, t, (e, t, n) => ("permissions" === n ? (0, a.aI)(e, t) : void 0));
  }
}
