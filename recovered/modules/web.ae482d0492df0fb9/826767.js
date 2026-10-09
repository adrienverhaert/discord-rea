/* Recovered shipped factory. Module 826767.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7818712..7819243
 * Raw property SHA-256: b109bf8531e45fec7b373dcf73f006d2d7a0ddf398c137d92e3365e3aafd36b5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(573163),
    r = n(927813),
    a = n(935208);
  function s(e) {
    if (null == e.threadMetadata) return 0;
    let t = e.threadMetadata.autoArchiveDuration * r.A.Millis.MINUTE;
    return (
      (function (e) {
        if (null == e.threadMetadata) return 0;
        let t = i.Ay.lastMessageId(e.id) ?? e.id;
        return Math.max(
          a.default.extractTimestamp(t),
          null != e.lastNonMessageActivityTimestamp
            ? new Date(e.lastNonMessageActivityTimestamp).getTime()
            : 0,
          null != e.threadMetadata.archiveTimestamp
            ? new Date(e.threadMetadata.archiveTimestamp).getTime()
            : 0,
        );
      })(e) + t
    );
  }
}
