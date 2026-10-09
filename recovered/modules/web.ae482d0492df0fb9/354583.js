/* Recovered shipped factory. Module 354583.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7661282..7661526
 * Raw property SHA-256: f1ee937189a92fdc57b2113cf0350ee414e01a38c481d619982ec91a2143a36e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(17928),
    r = n(734057),
    a = n(309010);
  function s() {
    return (0, i.bG)([a.Ay, r.A], () => {
      let e = a.Ay.getVoiceChannelId();
      if (null != e) {
        let t = r.A.getChannel(e);
        if (t?.isGuildStageVoice()) return t;
      }
      return null;
    });
  }
}
