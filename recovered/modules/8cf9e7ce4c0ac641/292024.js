/* Recovered shipped factory. Module 292024.
 * Source: recovered/web/assets/8cf9e7ce4c0ac641.js
 * UTF-16 property offsets: 3945..4492
 * Raw property SHA-256: e75098e5b63f926e612ca620561d03d0777bff7b1f8f16e83a6b39905c98537b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => g });
  var i = n(477900);
  n(582128);
  var l = n(17928),
    s = n(477782),
    a = n(935286),
    r = n(468689),
    o = n(529942),
    c = n(209700),
    d = n(576705),
    u = n(652215),
    m = n(660183);
  function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.BEX.ROLES;
    return (0, l.bG)([d.A], () => d.A.canImpersonateRole(e, t))
      ? (0, i.jsx)(
          s.Dr,
          {
            id: "view-as-role",
            label: m.intl.string(m.t.arFPfJ),
            icon: a.E,
            leadingAccessory: { type: "icon", icon: a.E },
            action: () => {
              (r.default.close(),
                (0, o.Tk)(e.id, { type: c._.ROLES, roles: { [t.id]: t }, returnToSection: n }));
            },
          },
          "view-as-role",
        )
      : null;
  }
}
