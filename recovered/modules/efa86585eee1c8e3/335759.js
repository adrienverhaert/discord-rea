/* Recovered shipped factory. Module 335759.
 * Source: recovered/web/assets/efa86585eee1c8e3.js
 * UTF-16 property offsets: 1420..1828
 * Raw property SHA-256: ed3d8a2d76c7b1c4a6dc3a0d9ae3a96c0528e92638dd162c6a97fc8a5bd526a2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Q: () => r, w: () => l });
  var s = n(636537),
    i = n(913122),
    a = n(652215);
  async function r(e) {
    let { channelId: t, messageId: n, answerIds: r } = e;
    try {
      await s.Bo.put({
        url: a.Rsh.POLL_ANSWERS(t, n),
        body: { answer_ids: r },
        rejectWithError: !1,
      });
    } catch (e) {
      throw new i.LG(e);
    }
  }
  async function l(e) {
    let { channelId: t, messageId: n } = e;
    try {
      await s.Bo.post({ url: a.Rsh.POLL_EXPIRE(t, n), rejectWithError: !1 });
    } catch (e) {
      throw new i.LG(e);
    }
  }
}
