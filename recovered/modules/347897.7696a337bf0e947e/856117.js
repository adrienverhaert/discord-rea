/* Recovered shipped factory. Module 856117.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 12333..12887
 * Raw property SHA-256: f9489886c452fb7ef495c27af84bc39e096239efd851fe6379af869210d781d4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.stringFormatter = t.StringBuilder = void 0),
    (t.formatToPlainString = o));
  let n = r(668317);
  class i extends n.FormatBuilder {
    constructor() {
      (super(...arguments), (this.result = ""));
    }
    pushRichTextTag(e, t, r) {
      for (let e of t) this.result += e;
    }
    pushLiteralText(e) {
      this.result += e;
    }
    pushObject(e) {
      null != e && "toString" in e && (this.result += e.toString());
    }
    finish() {
      return [this.result];
    }
  }
  function o(e, t) {
    return "string" == typeof e ? e : this.bindFormatValues(i, e, t)[0];
  }
  ((t.StringBuilder = i), (t.stringFormatter = { format: o, builder: i }));
}
