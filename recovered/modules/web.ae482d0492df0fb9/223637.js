/* Recovered shipped factory. Module 223637.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5753038..5753343
 * Raw property SHA-256: a5e6b57bce976a5d29d296c2004120c0b4025b46607d014582e35c8ed3a31e2a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(478676),
    r = n.n(i);
  let a = /\n$/,
    s = {
      ...r().defaultRules.heading,
      requiredFirstCharacters: [" ", "#"],
      match: (e, t, n) =>
        t.allowHeading && (null == n || "" === n || null != n.match(a))
          ? (0, i.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n)
          : null,
    };
}
