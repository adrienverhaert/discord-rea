/* Recovered shipped factory. Module 343129.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7997907..7998512
 * Raw property SHA-256: 39cd12c209102738a71a86b4aab3a5b6bb9c86bf7bdb6448ba48d71c8324c98d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { I: () => s, U: () => a }), n(321073));
  var i = n(435558),
    r = n(652215);
  function a(e) {
    return (0, i.uniqWith)(
      e.filter((e) => {
        let { type: t } = e;
        return t !== r.$pd.CUSTOM_STATUS && t !== r.$pd.HANG_STATUS;
      }),
      (e, t) =>
        (null != e.application_id &&
          null != t.application_id &&
          e.application_id === t.application_id) ||
        (null != e.name && null != t.name && e.name === t.name),
    );
  }
  function s(e) {
    let { stream: t, live: n = [], voiceChannel: i, voiceActivity: r, isPrivate: a = !1 } = e,
      s = [];
    for (let e of (null != t && s.push({ type: "stream", stream: t }), n))
      s.push({ type: "live", activity: e });
    return (
      a || null != t || null != r || null == i || s.push({ type: "voice", voiceChannel: i }),
      s
    );
  }
}
