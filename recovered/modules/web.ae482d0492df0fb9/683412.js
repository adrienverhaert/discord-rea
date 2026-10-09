/* Recovered shipped factory. Module 683412.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5781200..5781590
 * Raw property SHA-256: 79c7889c116a433379d6cbdd187ff623027ed1545d0d07710d3413e2efcaa5d5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(478676),
    r = n.n(i);
  let a = /\n$/,
    s = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/,
    l = {
      order: r().defaultRules.heading.order,
      requiredFirstCharacters: ["-"],
      match: (e, t, n) =>
        !1 === t.allowSubtext
          ? null
          : null == n || "" === n || null != n.match(a)
            ? (0, i.anyScopeRegex)(s)(e, t, n)
            : null,
      parse: function (e, t, n) {
        return { content: (0, i.parseInline)(t, e[1].trim(), { ...n, allowSubtext: !1 }) };
      },
    };
}
