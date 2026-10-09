/* Recovered shipped factory. Module 258072.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5752361..5753037
 * Raw property SHA-256: 6b23e66e4c1890e37417fc051d0592fe5eae2e9342597027d5aed1edfc52ab17
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d, h: () => o });
  var i = n(478676),
    r = n.n(i);
  let a = Array.from(n(256964).p)
      .map((e) => e.replaceAll("/", ""))
      .join("|"),
    s = "(?:-[A-Za-z0-9]+)?",
    l = RegExp(
      `^https://(?:[A-Za-z0-9-]+\\.)*(?:(?:media|images)${s}\\.discordapp\\.net|(?:cdn${s}\\.discordapp\\.com))/(?:${a})/\\d+/\\d+/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?`,
    );
  function o(e) {
    let t = l.exec(e);
    return null != t && t[0] === e ? { name: t[1] } : null;
  }
  let d = {
    attachmentLink: {
      order: r().defaultRules.url.order - 0.5,
      requiredFirstCharacters: ["h"],
      match: (e) => l.exec(e),
      parse(e, t, n) {
        var i;
        let r = e[0];
        return {
          type: "attachmentLink",
          content: [{ type: "text", content: (i = e[1]) }],
          attachmentUrl: r,
          attachmentName: i,
        };
      },
    },
  };
}
