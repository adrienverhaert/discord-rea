/* Recovered shipped factory. Module 888697.
 * Source: recovered/web/assets/d6d7214192869745.js
 * UTF-16 property offsets: 120188..120613
 * Raw property SHA-256: af8311b233a8096a580915c9fdd0ed69792241f72fdd11a9dcbd8e980cd96177
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { B$: () => a, Hd: () => r, e2: () => o });
  var i = n(636537),
    l = n(522435),
    s = n(652215);
  async function r(e, t) {
    await i.Bo.post({
      url: s.Rsh.CHANNEL_VOICE_HANGOUT(e),
      body: { url: (0, l.K7)(t) },
      rejectWithError: !0,
    });
  }
  async function a(e, t) {
    await i.Bo.post({
      url: s.Rsh.CHANNEL_VOICE_HANGOUT(e),
      body: { hash: t },
      rejectWithError: !0,
    });
  }
  async function o(e) {
    await i.Bo.post({
      url: s.Rsh.CHANNEL_VOICE_HANGOUT(e),
      body: { url: "" },
      rejectWithError: !0,
    });
  }
}
