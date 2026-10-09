/* Recovered shipped factory. Module 259374.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7316167..7316598
 * Raw property SHA-256: 6addbff470c98dd20c0254a41565d1035498c5db439c6e03d8fb8a2c02e4cd29
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { k: () => s });
  var i = n(17928),
    r = n(734057),
    a = n(763827);
  function s(e) {
    let { channelId: t } = e;
    return (0, i.bG)(
      [a.A, r.A],
      () =>
        (function (e) {
          let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, r.A];
          if (null == e || t.getChannelId() !== e) return !1;
          let i = n.getChannel(e);
          if (null == i || i.isGuildStageVoice()) return !1;
          let s = t.getSecureFramesState()?.version;
          return null != s && 0 !== s;
        })(t, [a.A, r.A]),
      [t],
    );
  }
  n(603266);
}
