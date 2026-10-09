/* Recovered shipped factory. Module 335542.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3550127..3550592
 * Raw property SHA-256: cc20d6ce27ad5a42652d101b84c6830ebdffbfa2a6bee00ce7f580a30de1980f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { F: () => r, O: () => o });
  var i,
    r =
      (((i = {}).BACKGROUND_GRADIENT_PRESET = "backgroundGradientPreset"),
      (i.STANDARD_BACKGROUND_THEME = "standardBackgroundTheme"),
      (i.CUSTOM_BACKGROUND_GRADIENT = "customBackgroundGradient"),
      i),
    a = n(873298),
    s = n(38405),
    l = n(185928);
  function o(e) {
    let t = Object.entries(l.dP).find((t) => {
      let [n, i] = t;
      return i === e;
    });
    return void 0 === t
      ? (s.A.captureException(Error(`No ProtoTheme found for base theme: ${e}`)), a.Sx.UNSET)
      : parseInt(t[0]);
  }
}
