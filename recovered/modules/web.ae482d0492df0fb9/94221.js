/* Recovered shipped factory. Module 94221.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2983020..2983560
 * Raw property SHA-256: 9ce3580b10f7142f05159f6b687074c979d69823e1faa5951cc63dd79425fb8a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { I: () => a, p: () => s });
  var i = n(842209),
    r = n(458524);
  function a(e, t) {
    if (null == e) return null;
    let n = (function (e, t) {
      for (let n of [e.displayName, e.untranslatedName]) {
        let e = `/${n}`;
        if (t === e || t.startsWith(`${e} `)) return e;
      }
      return null;
    })(e, t);
    return null == n ? null : { commandId: e.id, applicationId: e.applicationId, commandText: n };
  }
  function s(e, t, n) {
    if (null == n || !(0, r.l)(n, t)) return null;
    let { command: a, section: s } = i.EW(
      { channel: e, type: "channel" },
      n.commandId,
      n.applicationId,
    );
    return null == a ? null : { command: a, section: s ?? null };
  }
  n(827669);
}
