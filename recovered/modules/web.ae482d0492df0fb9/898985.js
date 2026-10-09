/* Recovered shipped factory. Module 898985.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4236762..4237431
 * Raw property SHA-256: 693047e5e19dcf8d043afea8488ec2682c34cfe0a270b37be4b1ce32861edc87
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { J: () => d, _: () => u });
  var i = n(582128),
    r = n(508425),
    a = n(559949),
    s = n(430571),
    l = n(763052),
    o = n(660183);
  let d = {
      [r.z.SOLID]: l.default.OpWJ3f,
      [r.z.GRADIENT]: l.default["i9e/u1"],
      [r.z.NEON]: l.default.x68b1F,
      [r.z.TOON]: l.default.otpeeM,
      [r.z.POP]: l.default.cjQOKb,
      [r.z.GUMMY]: l.default.x9Gtie,
      [r.z.PRISM]: l.default["/M7psm"],
    },
    c = {
      [r.z.SOLID]: 3,
      [r.z.GRADIENT]: 2.5,
      [r.z.GLOW]: 2.5,
      [r.z.PRISM]: 2.5,
      [r.z.NEON]: 3,
      [r.z.TOON]: 3,
      [r.z.POP]: 3,
      [r.z.GUMMY]: 3,
    };
  function u(e) {
    let t = (0, s.A)()[e];
    return i.useMemo(
      () => ({
        name: o.intl.string(d[e] ?? l.default.OpWJ3f),
        defaultColors: t,
        previewStyles: { fontId: a.x.DEFAULT, effectId: e, colors: t },
        minContrastRatio: c[e] ?? 3,
      }),
      [e, t],
    );
  }
}
