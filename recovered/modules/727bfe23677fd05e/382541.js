/* Recovered shipped factory. Module 382541.
 * Source: recovered/web/assets/727bfe23677fd05e.js
 * UTF-16 property offsets: 35953..36279
 * Raw property SHA-256: 6794348f0d3b490560d66886b107cac8df3d8711461faf54f55751147c5416fc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { d: () => o, g: () => a });
  var r = n(636537),
    s = n(361504),
    i = n(652215);
  function o(e) {
    return l(i.Rsh.CONJURE_PROJECT_WS_TICKET(e));
  }
  function a(e) {
    return l(i.Rsh.CONJURE_PROJECT_REMIX_TICKET(e));
  }
  async function l(e) {
    let { body: t } = await r.Bo.post({ url: e, rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, s.d)() ?? t.url };
  }
}
