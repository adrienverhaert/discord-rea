/* Recovered shipped factory. Module 290386.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7972595..7972976
 * Raw property SHA-256: c00a977aa9f30d83598d39a7c34e150586f38508f5f757aa145625dad12623c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { U: () => s, Z: () => l });
  var i = n(945810),
    r = n(652215);
  let a = (0, i.mj)({
    name: "2026-08-user-bio-max-length",
    kind: "user",
    defaultConfig: { maxLength: r.NA2 },
    variations: { 0: { maxLength: r.NA2 }, 1: { maxLength: r.wKD } },
  });
  function s(e) {
    let { location: t } = e;
    return a.useConfig({ location: t }).maxLength;
  }
  function l(e) {
    let { location: t } = e;
    return a.getConfig({ location: t }).maxLength;
  }
}
