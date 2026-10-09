/* Recovered shipped factory. Module 639555.
 * Source: recovered/web/assets/6bbbda6dedaac36e.js
 * UTF-16 property offsets: 344..618
 * Raw property SHA-256: d86366f7d37c8195cc6cb82bf04a6f6a75e815e81dbdf0d39b6d77ab6f2de49c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Rv: () => a });
  let i = (0, n(240921).Ay)({
    name: "2026-04-inappropriate-conversations-default-on",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  function a(e) {
    let { location: t } = e,
      { enabled: n } = i.useConfig({ location: t });
    return n;
  }
}
