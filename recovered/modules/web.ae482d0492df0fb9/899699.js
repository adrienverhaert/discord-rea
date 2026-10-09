/* Recovered shipped factory. Module 899699.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9387750..9388637
 * Raw property SHA-256: d1a8b149c0fd62efea81e73719d318d929fabe6a268b4b74c6ef05e1e5f26e5e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { R: () => d, m: () => c });
  var r = n(626584),
    a = n(206885),
    s = n(19575);
  let l = new r.A("OverlayModuleUtils"),
    o = null;
  function d() {
    async function e() {
      if (!a.O)
        throw (
          l.error("Attempted to load overlay on an unsupported platform."),
          Error("Overlay is not supported on this platform.")
        );
      try {
        return (
          await s.Ay.ensureModule("discord_overlay2"),
          (i = (function (e) {
            for (let t of [
              "createHostProcess",
              "connectProcess",
              "disconnectProcess",
              "destroyHostProcess",
            ])
              null == e[t] &&
                (l.info(
                  `polyfilling OverlayModule.${t}(); Overlay module is probably out of date.`,
                ),
                (e[t] = () => void 0));
            return e;
          })(s.Ay.requireModule("discord_overlay2")))
        );
      } catch (e) {
        l.error("failed ensuring discord_overlay2", e);
        return;
      }
    }
    return null != i ? Promise.resolve(i) : (null == o && (o = e()), o);
  }
  function c() {
    if (null == i)
      try {
        i = s.Ay.requireModule("discord_overlay2");
      } catch (e) {
        l.error("failed ensuring discord_overlay2", e);
        return;
      }
    return i;
  }
}
