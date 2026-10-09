/* Recovered shipped factory. Module 151565.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 10749..11326
 * Raw property SHA-256: c146d0187d3531c41608f2e8933c22e96b3bf6273e1c5c4f8e780f39ce739fd5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.markdownFormatter = void 0),
    (t.formatToMarkdownString = a));
  let n = r(856117),
    i = {
      $b: (e) => "**" + e.join("") + "**",
      $i: (e) => "*" + e.join("") + "*",
      $del: (e) => "~~" + e.join("") + "~~",
      $code: (e) => "`" + e.join("") + "`",
      $link: (e, t, [r]) => "[" + e.join("") + "](" + r + ")",
      $p: (e) => e.join("") + "\n\n",
    };
  class o extends n.StringBuilder {
    constructor() {
      (super(...arguments), (this.result = ""));
    }
    pushRichTextTag(e, t, r) {
      this.result += i[e](t, "", r);
    }
  }
  function a(e, t, r = o) {
    return "string" == typeof e ? e : this.bindFormatValues(r, e, t)[0];
  }
  t.markdownFormatter = { format: a, builder: o };
}
