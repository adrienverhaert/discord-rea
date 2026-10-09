/* Recovered shipped factory. Module 293260.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3974565..3975316
 * Raw property SHA-256: daca9ddbf3e4fc2021562cae13429873fd6165c2442977590bfef1d1fd514f84
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => A, CB: () => _, c0: () => E });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(231723),
    s = n(192308),
    l = n(477782),
    o = n(173936),
    d = n(317525),
    c = n(370480),
    u = n(660183);
  let _ = "guild-connection-roles";
  function E(e) {
    (0, s.openModalLazy)(
      async () => {
        let { default: t } = await Promise.all([
          n.e("42809"),
          n.e("64640"),
          n.e("24922"),
          n.e("150200"),
          n.e("292837"),
        ]).then(n.bind(n, 480900));
        return (n) => (0, i.jsx)(t, { ...n, guildId: e });
      },
      {
        modalKey: _,
        contextKey: a.SY,
        onCloseRequest: () => {
          (0, s.closeModal)(_, a.SY);
        },
      },
    );
  }
  function A(e) {
    return (0, r.bG)([d.A], () => (0, c.N8)(d.A.getSortedRoles(e.id)), [e])
      ? (0, i.jsx)(l.Dr, {
          id: "guild-connection-roles",
          label: u.intl.string(u.t.ghtnss),
          icon: o.LinkIcon,
          leadingAccessory: { type: "icon", icon: o.LinkIcon },
          action: () => E(e.id),
        })
      : null;
  }
}
