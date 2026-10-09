/* Recovered shipped factory. Module 973522.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4663651..4664577
 * Raw property SHA-256: 85c6394d30fe0705917b54d8503681ec32e318f0a5d50cf02748c5d67c7d65b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { EQ: () => d, Ic: () => l, PQ: () => c, wH: () => o });
  var i = n(871633),
    r = n(760751),
    a = n(723702);
  function s(e) {
    return ((e = e.toLowerCase()).endsWith("/") && (e = e.slice(0, -1)), e);
  }
  function l(e) {
    return s(e).split("/").slice(-2).join("/");
  }
  function o(e) {
    if (null == e)
      return {
        gameName: void 0,
        gameId: void 0,
        exe: void 0,
        distributor: void 0,
        sku: void 0,
        gameMetadata: void 0,
        rawExePath: void 0,
      };
    let t = "exePath" in e ? e.exePath : e.exe,
      n = {
        id: e.id ?? void 0,
        name: e.name ?? void 0,
        exePath: t ?? "",
        cmdLine: t ?? "",
        lastFocused: 0,
      },
      a = r.A.findGame(n);
    return {
      gameName: e.name ?? void 0,
      gameId: e.id ?? a?.id ?? void 0,
      exe: null != t ? l(t) : void 0,
      distributor: e.distributor ?? void 0,
      sku: e.sku ?? void 0,
      gameMetadata: null != e ? (0, i.MT)(e) : void 0,
      rawExePath: t,
    };
  }
  function d(e, t, n) {
    return t && null != n ? JSON.stringify({ detected_game_id: n }) : (0, i.MT)(e);
  }
  function c(e, t) {
    if (null == e || null == t) return !1;
    let n = s(e),
      i = (0, a.getPlatformName)();
    return t.some((e) => e.os === i && n?.endsWith(e.name));
  }
}
