/* Recovered shipped factory. Module 675991.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8313394..8313972
 * Raw property SHA-256: dc63177e58266e20c3fdc1e3c073e5c3b17d23770daba24298087cc9060f0c39
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q: () => a });
  var i = n(652215),
    r = n(660183);
  function a(e) {
    let {
        enabled: t,
        join: n,
        channel: a,
        cameraUnavailable: s,
        hasPermission: l,
        channelLimit: o = -1,
        channelLimitReached: d = !1,
      } = e,
      c = t ? r.intl.string(r.t["4xAQ5w"]) : r.intl.string(r.t.kgIe9a);
    return (
      n &&
        (c =
          a?.isManaged() || !a?.isPrivate()
            ? r.intl.string(r.t.clqrYm)
            : r.intl.string(r.t.W68MhH)),
      s && (c = r.intl.string(r.t["8jSzSe"])),
      l || (c = r.intl.string(r.t.uQn9B8)),
      d &&
        !t &&
        (c = a?.isGuildStageVoice()
          ? o >= i.uaN
            ? r.intl.string(r.t["j6h0/8"])
            : r.intl.string(r.t["jlZ+0h"])
          : r.intl.formatToPlainString(r.t.x9mtl4, { limit: o })),
      c
    );
  }
}
