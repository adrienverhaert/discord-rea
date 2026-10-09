/* Recovered shipped factory. Module 844981.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7601883..7602716
 * Raw property SHA-256: d060cb1ca18864c5e448a3634a5b86ee1333e15f8833bfedc8a5a420217ce9e7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => _, L3: () => c, Xt: () => u });
  var i,
    r = n(582128),
    a = n(17928),
    s = n(738566),
    l = n(192820),
    o = n(201242),
    d = n(731854),
    c =
      (((i = {}).HIDDEN = "HIDDEN"),
      (i.AVAILABLE = "AVAILABLE"),
      (i.BLOCKED_MONO_OUTPUT = "BLOCKED_MONO_OUTPUT"),
      (i.BLOCKED_INIT_FAILED = "BLOCKED_INIT_FAILED"),
      (i.BLOCKED_HRTF_FAILED = "BLOCKED_HRTF_FAILED"),
      i);
  function u(e) {
    return !["HIDDEN", "AVAILABLE"].includes(e);
  }
  function _(e) {
    let { enabled: t } = s.A.useConfig({ location: e }),
      { supported: n, status: i } = (0, a.cf)([l.Ay, o.A], () => ({
        supported: l.Ay.supports(d.O5.SPATIAL_AUDIO),
        status: o.A.getSpatialAudioStatus(),
      }));
    return r.useMemo(
      () =>
        (function (e, t) {
          if (!e) return "HIDDEN";
          switch (t) {
            case d.D1.MONO_OUTPUT:
              return "BLOCKED_MONO_OUTPUT";
            case d.D1.INIT_FAILED:
              return "BLOCKED_INIT_FAILED";
            case d.D1.HRTF_FAILED:
              return "BLOCKED_HRTF_FAILED";
            default:
              return "AVAILABLE";
          }
        })(t && n, i),
      [t, n, i],
    );
  }
}
