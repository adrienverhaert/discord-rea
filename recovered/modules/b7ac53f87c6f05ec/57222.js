/* Recovered shipped factory. Module 57222.
 * Source: recovered/web/assets/b7ac53f87c6f05ec.js
 * UTF-16 property offsets: 7565..8121
 * Raw property SHA-256: f1408d92e598af926b6bf02331c336441de2c8731a04d89373b6c9322bb36d6a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => d, H: () => o });
  var i = n(477900);
  n(582128);
  var l = n(17928),
    s = n(34457),
    r = n(317525),
    a = n(64749);
  function o(e, t, n, i) {
    return (0, l.yK)(
      [r.A],
      () =>
        r.A.getSortedRoles(e)
          .filter((e) => !t.has(e.id) && !(n && (0, s.Oy)(e)) && (null == i || i(e)))
          .map((e) => (0, a.th)(e).row),
      [n, e, i, t],
    );
  }
  function d(e) {
    let {
        guildId: t,
        selectedRoleIds: n,
        onChange: l,
        placeholder: s,
        disableEveryoneRole: r,
        helperText: d,
        className: c,
        selectableRoleFilter: u,
      } = e,
      m = o(t, n, r, u);
    return (0, i.jsx)(a.Ay, {
      roleRows: m,
      guildId: t,
      selectedRoleIds: n,
      onChange: (e, t) => l(t),
      placeholder: s,
      helperText: d,
      className: c,
    });
  }
}
