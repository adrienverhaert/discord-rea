/* Recovered shipped factory. Module 891600.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10584989..10585935
 * Raw property SHA-256: cb1006d07f5a971cacc999646dc545b372b6e76965c4bcd797a2f29b7a7c5dc0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(478676),
    r = n.n(i),
    a = n(919535);
  function s(e, t, n, i, r) {
    let s;
    (n || (t += "\n\n"), (s = e(t, { inline: n, ...i })), (s = (0, a.rI)(i, s)));
    let l = (0, a.Ae)(s),
      o = l.hasBailedAst;
    return ((s = l.ast), null != r && (s = r(s, n, o)), s);
  }
  let l = {
    reactParserFor(e) {
      let t = r().parserFor(e),
        n = r().reactFor(r().ruleOutput(e, "react"));
      return function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return n(s(t, e, i, r, a), r);
      };
    },
    astParserFor(e) {
      let t = r().parserFor(e);
      return function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return s(t, e, n, i, r);
      };
    },
  };
}
