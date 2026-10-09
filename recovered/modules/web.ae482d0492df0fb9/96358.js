/* Recovered shipped factory. Module 96358.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2754843..2755062
 * Raw property SHA-256: 51851a28e880daecf4c05228d93e1cdaf93091cb4455ab55441fc97ea573c74a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { S: () => s });
  var i = n(636537),
    r = n(73153),
    a = n(652215);
  async function s() {
    (await i.Bo.post({ url: a.Rsh.AGE_VERIFICATION_RESET, rejectWithError: !0 }),
      r.h.dispatch({ type: "AGE_VERIFICATION_RESET" }));
  }
}
