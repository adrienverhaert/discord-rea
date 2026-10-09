/* Recovered shipped factory. Module 226698.
 * Source: recovered/web/assets/bec17a5c7c60473d.js
 * UTF-16 property offsets: 95..337
 * Raw property SHA-256: ccb23083af5b74d52ac94394aeb71cb2c2fa8ddf3b700086deee741e70e753bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, e, o) {
  o.d(e, { A: () => s });
  var t = o(636537),
    p = o(652215);
  let s = {
    resolveFlag: (r) =>
      t.Bo.post({ url: p.Rsh.MODERATOR_REPORT_CLOSE(r), body: {}, rejectWithError: !0 }),
    reopenModReport: (r) => t.Bo.put({ url: p.Rsh.REPORT_TO_MOD_REOPEN(r), rejectWithError: !0 }),
  };
}
