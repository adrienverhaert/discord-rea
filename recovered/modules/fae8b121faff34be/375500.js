/* Recovered shipped factory. Module 375500.
 * Source: recovered/web/assets/fae8b121faff34be.js
 * UTF-16 property offsets: 95..676
 * Raw property SHA-256: 403b234664a218b219bc7ff855aaa7c217e649856255254ea0c65c073f17475a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (i, t, s) {
  s.d(t, { A: () => h });
  var a = s(477900);
  s(582128);
  var n = s(17928),
    e = s(477782),
    d = s(152007),
    r = s(867455),
    c = s(607508),
    l = s(37411),
    o = s(660183);
  function h(i) {
    let t = (0, c.X)(i);
    return (0, n.bG)([d.A], () => d.A.hasJoined(i.id))
      ? (0, a.jsx)(e.Dr, {
          id: "thread-notifications",
          label: o.intl.string(o.t.h850Ss),
          children: (0, l.EU)().map((s) => {
            let { setting: n, label: d } = s;
            return (0, a.jsx)(
              e.iD,
              {
                group: "thread-notifications",
                id: `${n}`,
                label: d,
                action: () => r.A.setNotificationSettings(i, { flags: n }),
                checked: n === t,
              },
              n,
            );
          }),
        })
      : (0, a.jsx)(e.Dr, {
          id: "notifications-disabled",
          label: o.intl.string(o.t.h850Ss),
          disabled: !0,
        });
  }
}
