/* Recovered shipped factory. Module 519460.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4469339..4470099
 * Raw property SHA-256: 1d1766bc0d4a851d669f3fdd4c7910a5224cadd7498e7adcafa31a86cf8769a6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { T: () => a }), n(938796));
  var i = n(630986),
    r = n(961440);
  function a(e) {
    let { attachments: t, embeds: n, components: i } = s(e),
      r = (function (e) {
        let { messageSnapshots: t } = e;
        return null == t || 0 === t.length
          ? t
          : t.map((e) => {
              let { message: t } = e,
                { attachments: n, embeds: i, components: r } = s(t);
              return (
                (t = t.merge({ attachments: n, embeds: i, components: r })),
                (e = e.merge({ message: t }))
              );
            });
      })(e);
    return e.merge({ attachments: t, embeds: n, components: i, messageSnapshots: r });
  }
  function s(e) {
    let t = e.attachments.map((e) => ((e.content_scan_version = -1), e)),
      n = e.embeds.map((e) => ((e.contentScanVersion = -1), l(e.components ?? []), e)),
      { components: i } = e;
    return (l(i), { attachments: t, embeds: n, components: i });
  }
  function l(e) {
    for (let t of (0, i.A)(e))
      t.contentScanMetadata = { version: r.Ae, flags: t.contentScanMetadata?.flags ?? 0 };
  }
}
