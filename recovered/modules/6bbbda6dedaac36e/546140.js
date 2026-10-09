/* Recovered shipped factory. Module 546140.
 * Source: recovered/web/assets/6bbbda6dedaac36e.js
 * UTF-16 property offsets: 1006..1347
 * Raw property SHA-256: 753c013ac671c3da9e1e40c52831d0c4d0876496fb43cfdf47fc93ed7c6535b5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { L: () => l });
  var i = n(17928),
    a = n(617617),
    r = n(287809),
    s = n(840387),
    u = n(639555);
  function l() {
    let e = r.default.getCurrentUser(),
      t = (0, i.bG)(
        [a.A],
        () => a.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0,
      ),
      n = (0, s.Z)(),
      l = (0, u.Rv)({ location: "useSafetyAlertsSettingOrDefault" });
    return (!!n && !!l) || ((n || e?.isStaff() === !0) && t);
  }
}
