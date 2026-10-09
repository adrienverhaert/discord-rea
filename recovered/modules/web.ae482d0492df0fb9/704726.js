/* Recovered shipped factory. Module 704726.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5781591..5781919
 * Raw property SHA-256: 8fce23edec9d5dd82dc4681a79c235c1faf155baa39144eeb5f6016a20d5fd6f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => a, VC: () => r });
  var i = n(478676);
  function r(e) {
    return RegExp(
      `^[\\s\\S]+?(?=${e}|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)`,
    );
  }
  let a = {
    ...n.n(i)().defaultRules.text,
    match: (0, i.anyScopeRegex)(
      /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/,
    ),
  };
}
