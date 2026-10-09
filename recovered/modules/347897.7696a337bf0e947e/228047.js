/* Recovered shipped factory. Module 228047.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1011047..1011845
 * Raw property SHA-256: 7b36ef948a0b55262ac27d81cf472d5fd185cc57fc5dc3ec255dccbb4492bacb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(353841),
    i = r(741623),
    o = r(547210),
    a = r(33831),
    s = r(227106);
  e.exports = function (e) {
    if (!s(e)) throw new i("ToPropertyDescriptor requires an object");
    var t = {};
    if (
      (n(e, "enumerable") && (t["[[Enumerable]]"] = a(e.enumerable)),
      n(e, "configurable") && (t["[[Configurable]]"] = a(e.configurable)),
      n(e, "value") && (t["[[Value]]"] = e.value),
      n(e, "writable") && (t["[[Writable]]"] = a(e.writable)),
      n(e, "get"))
    ) {
      var r = e.get;
      if (void 0 !== r && !o(r)) throw new i("getter must be a function");
      t["[[Get]]"] = r;
    }
    if (n(e, "set")) {
      var l = e.set;
      if (void 0 !== l && !o(l)) throw new i("setter must be a function");
      t["[[Set]]"] = l;
    }
    if ((n(t, "[[Get]]") || n(t, "[[Set]]")) && (n(t, "[[Value]]") || n(t, "[[Writable]]")))
      throw new i(
        "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute",
      );
    return t;
  };
}
