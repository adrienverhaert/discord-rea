/* Recovered shipped factory. Module 88701.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 800285..800801
 * Raw property SHA-256: 0a4516a3b70988f41eccb2cf7e27615cf80db1d19633569398565becd36ebd58
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  let n = r(177335),
    i = r(601861),
    o = r(800670),
    a = r(569671),
    s = r(596641),
    l = r(738018);
  e.exports = (e, t, r, u) => {
    switch (t) {
      case "===":
        return (
          "object" == typeof e && (e = e.version),
          "object" == typeof r && (r = r.version),
          e === r
        );
      case "!==":
        return (
          "object" == typeof e && (e = e.version),
          "object" == typeof r && (r = r.version),
          e !== r
        );
      case "":
      case "=":
      case "==":
        return n(e, r, u);
      case "!=":
        return i(e, r, u);
      case ">":
        return o(e, r, u);
      case ">=":
        return a(e, r, u);
      case "<":
        return s(e, r, u);
      case "<=":
        return l(e, r, u);
      default:
        throw TypeError(`Invalid operator: ${t}`);
    }
  };
}
