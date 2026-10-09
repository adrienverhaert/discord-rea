/* Recovered shipped factory. Module 783123.
 * Source: recovered/web/assets/5faeccf6704719be.js
 * UTF-16 property offsets: 938..1226
 * Raw property SHA-256: 8442bcd4024cfaf6a650da06ed1200359e8a2666fb4dfd3827bba5031271979d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, i, s) {
  s.d(i, { A: () => n });
  var e = s(477900),
    a = s(993401),
    r = s(660183);
  function n(t) {
    let { isBlocked: i, onClick: s, size: n = "sm" } = t;
    return (0, e.jsx)(a.FD, {
      size: n,
      action: i ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
      text: r.intl.string(r.t["UJKH/l"]),
      variant: "primary",
      fullWidth: !1,
      onClick: s,
    });
  }
}
