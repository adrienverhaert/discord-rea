/* Recovered shipped factory. Module 249700.
 * Source: recovered/web/assets/11cc338743991354.js
 * UTF-16 property offsets: 479..985
 * Raw property SHA-256: 0774121a6bf13f6de3dce6ef43c1c8cb1e9cd1f35560c0c839633aa26f40f888
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  (t.d(n, { A: () => r }), t(938796));
  var i = t(148494),
    l = t(545152),
    a = t(381941);
  function r(e, n, t) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((i.A.deleteMessage(e.id, n.id, !0), n.isCommandType())) {
      null != n.interactionData && null != r.applicationId && (0, l.x)(n, e, r);
      return;
    }
    let { content: s, tts: o, messageReference: c, flags: d, nonce: u } = n;
    i.A.sendMessage(
      e.id,
      { content: s, tts: o, invalidEmojis: [], validNonShortcutEmojis: [] },
      void 0,
      { nonce: u, flags: d, messageReference: c ?? void 0, ...r, location: a.Hx.RETRY },
    );
  }
}
