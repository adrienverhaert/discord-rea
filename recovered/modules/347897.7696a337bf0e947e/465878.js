/* Recovered shipped factory. Module 465878.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1147709..1148141
 * Raw property SHA-256: 6b13b021666dfcdfa2a0682cacdad5fae44cb0c3f75bbf83cc677c05e286521f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { M: () => a });
  var n = r(66464),
    i = r(184093),
    o = r(295551);
  function a(e) {
    let { description: t, errorMessage: r, isInvalid: a, validationState: s } = e,
      { labelProps: l, fieldProps: u } = (0, n.M)(e),
      c = (0, o.X1)([!!t, !!r, a, s]),
      f = (0, o.X1)([!!t, !!r, a, s]);
    return {
      labelProps: l,
      fieldProps: (u = (0, i.v)(u, {
        "aria-describedby": [c, f, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
      })),
      descriptionProps: { id: c },
      errorMessageProps: { id: f },
    };
  }
}
