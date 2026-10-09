/* Recovered shipped factory. Module 575731.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7980770..7981313
 * Raw property SHA-256: b3d714467b9147d9d3e497395d728a035a7937a9a0cd9825a34f868c19ecb4ce
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(427358),
    a = n(153488),
    s = n(287809),
    l = n(607567),
    o = n(652215);
  function d(e) {
    let t = (0, i.yK)(
        [l.Ay],
        () =>
          l.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
            let { user: t } = e;
            return t.id;
          }),
        [e.id, e.guild_id],
      ),
      n = (0, i.bG)([r.A], () => r.A.getUserAffinitiesMap()),
      d = (0, i.bG)([a.A], () => a.A.hasConsented(o.YAq.PERSONALIZATION));
    return (0, i.yK)(
      [s.default],
      () =>
        (d ? t.sort((e, t) => (n.get(t)?.vcProbability ?? 0) - (n.get(e)?.vcProbability ?? 0)) : t)
          .map((e) => s.default.getUser(e))
          .filter((e) => null != e),
      [d, n, t],
    );
  }
}
