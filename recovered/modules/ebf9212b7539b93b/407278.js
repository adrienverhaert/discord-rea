/* Recovered shipped factory. Module 407278.
 * Source: recovered/web/assets/ebf9212b7539b93b.js
 * UTF-16 property offsets: 6245..7374
 * Raw property SHA-256: 9c7853d1e95bf9d1003584768db874b8fdc1f7881c5dc83e46136d690f9f1e88
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { A: () => C, L: () => f });
  var n = i(477900),
    s = i(196765),
    l = i(17928),
    a = i(506774),
    r = i(834730),
    d = i(434831),
    o = i(47167),
    u = i(976860),
    c = i(734057),
    m = i(652215),
    h = i(670064),
    p = i(660183),
    A = i(720722);
  let g = "legacyGameInviteChannelChatBannerDismissed",
    I = new Set([
      "1433122113031639161",
      "1433122091707924543",
      "1433122057616490537",
      "1433122142479847514",
      "1433122166102163598",
    ]),
    x = "1526555294518349946",
    v = (0, s.v)(() => ({
      dismissedChannelIds: a.w.get(g) ?? [],
      dismissChannel: (e) => {
        v.setState((t) => {
          let i = [...t.dismissedChannelIds, e];
          return (a.w.set(g, i), { dismissedChannelIds: i });
        });
      },
    }));
  function f(e) {
    let { dismissedChannelIds: t } = v(),
      i = t?.includes(x);
    return null != (0, l.bG)([c.A], () => c.A.getChannel(x)) && I.has(e) && !i;
  }
  function C() {
    let e = (0, l.bG)([c.A], () => c.A.getChannel(x)),
      t = (0, o.Ay)(e);
    function i() {
      v.getState().dismissChannel(x);
    }
    return null == e || null == t
      ? null
      : (0, n.jsx)(r.E, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: A.v,
          children: p.intl.format(h.default["5jIPgz"], {
            channelIconHook: () => (0, n.jsx)(d.t, { size: "xs", color: "currentColor" }),
            channelName: t,
            onChannelClick: () => {
              ((0, u.pX)(m.BVt.CHANNEL(e.guild_id, e.id)), i());
            },
            onDismissClick: () => i(),
          }),
        });
  }
}
