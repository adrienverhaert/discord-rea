/* Recovered shipped factory. Module 984813.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7532900..7533307
 * Raw property SHA-256: a75803ca4b98b87c18aa5e6143d9fd10ba1dc14eb05955c2351bd1f13a97be82
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { PP: () => s, mz: () => l, z0: () => o });
  var i,
    r = n(17928),
    a = n(617617);
  n(980504);
  var s = (((i = {})[(i.GLOBAL = 0)] = "GLOBAL"), (i[(i.GUILD = 1)] = "GUILD"), i);
  function l(e) {
    return (0, r.bG)([a.A], () => d(e, a.A.settings.guilds?.guilds ?? {}));
  }
  function o(e) {
    return d(e, a.A.settings.guilds?.guilds ?? {});
  }
  function d(e, t) {
    let n = t[e]?.joinSound,
      i = t["0"]?.joinSound,
      r = n ?? i;
    return null != r ? { ...r, type: +(null != n) } : void 0;
  }
}
