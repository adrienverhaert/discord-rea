/* Recovered shipped factory. Module 247037.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 11327..12332
 * Raw property SHA-256: 2ffc12a090b2400db9f678c8f431ab213cd6169f18c72d26607f7aa81cc6b0fa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.reactFormatter = t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0),
    (t.formatReact = a),
    (t.makeReactFormatter = s));
  let n = r(582128),
    i = r(668317),
    o = n.createElement;
  function a(e, t, r) {
    return "string" == typeof e ? e : this.bindFormatValues(r, e, t);
  }
  function s(e) {
    return {
      format: a,
      builder: class extends i.FormatBuilder {
        constructor() {
          (super(...arguments), (this._nodeKey = 0), (this.result = []));
        }
        pushRichTextTag(t, r, n) {
          this.result.push(e[t](r, `${this.context.keyPrefix}.tag-${this._nodeKey++}`, n));
        }
        pushLiteralText(e) {
          "string" == typeof this.result[this.result.length - 1]
            ? (this.result[this.result.length - 1] += e)
            : this.result.push(e);
        }
        pushObject(e) {
          this.result.push(e);
        }
        finish() {
          return this.result;
        }
      },
    };
  }
  ((t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
    $b: (e, t) => o("strong", { key: t }, e),
    $i: (e, t) => o("em", { key: t }, e),
    $del: (e, t) => o("del", { key: t }, e),
    $code: (e, t) => o("code", { key: t }, e),
    $link: (e, t, [r]) => o("a", { href: r, key: t }, e),
    $p: (e, t) => o("p", { key: t }, e),
  }),
    (t.reactFormatter = s(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS)));
}
