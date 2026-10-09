/* Recovered shipped factory. Module 342321.
 * Source: recovered/web/assets/bba763aeda38e3f8.js
 * UTF-16 property offsets: 95..725
 * Raw property SHA-256: e55ebbdf0fe4df0467ea8ca3e82c858804d31d20db32f1888eaf387ca314b497
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (l, n, e) {
  e.d(n, { A: () => A, _: () => s });
  var t = e(477900);
  e(582128);
  var i = e(477782),
    c = e(138134),
    o = e(627363),
    u = e(587895),
    r = e(928658),
    d = e(652215),
    a = e(660183);
  let s = "app_channel_context_menu";
  function A(l, n) {
    let e = l.type === d.rbe.GUILD_APP ? l.getApplicationId() : null;
    return null == e
      ? null
      : (0, t.jsx)(i.Dr, {
          id: "report-app",
          label: a.intl.string(a.t.NgA5vp),
          action: () => {
            o.Ay.fetchApplication(e)
              .then(() => {
                let t = u.A.getApplication(e);
                null != t &&
                  (0, r.r3)({
                    application: t,
                    entrypoint: n,
                    contextualGuildId: l.getGuildId() ?? void 0,
                    contextualChannelId: l.id,
                  });
              })
              .catch(() => {});
          },
          icon: c.FlagIcon,
          leadingAccessory: { type: "icon", icon: c.FlagIcon },
          color: "danger",
        });
  }
}
