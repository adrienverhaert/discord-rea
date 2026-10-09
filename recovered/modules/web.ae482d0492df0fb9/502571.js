/* Recovered shipped factory. Module 502571.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5615944..5616306
 * Raw property SHA-256: e8a9ee4dedc9391b5542cf3f872fb824f6fecb48d7334d1e06c9f2e8346ff89b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => l, getAttachmentImageLadderConfig: () => s }));
  var i = n(945810);
  n(459830);
  let r = { enabled: !1, maxUpscale: 1.1, minSnapDownDpr: 2 },
    a = (0, i.mj)({
      name: "2026-07-attachment-image-ladder",
      kind: "user",
      defaultConfig: r,
      variations: { 0: r, 1: { ...r, enabled: !0 } },
    });
  function s(e) {
    let { location: t } = e;
    return a.getConfig({ location: t });
  }
  let l = a;
}
