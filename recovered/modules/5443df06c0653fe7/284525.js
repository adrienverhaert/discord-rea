/* Recovered shipped factory. Module 284525.
 * Source: recovered/web/assets/5443df06c0653fe7.js
 * UTF-16 property offsets: 95..642
 * Raw property SHA-256: 2874b82dadf6c2b91eab1c7d3efd01b8d672cffdcb3a1378c90356448db7cd7f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, t, i) {
  i.d(t, { A: () => s });
  var e = i(477900);
  i(582128);
  var l = i(866665),
    r = i(821609),
    a = i(102853);
  function s(n) {
    let {
        activity: t,
        embeddedActivity: i,
        user: s,
        onAction: o,
        location: d,
        variant: u = "secondary",
        size: c = "sm",
        ...v
      } = n,
      h = (0, a.l)({
        activity: t ?? void 0,
        embeddedActivity: i,
        user: s,
        onGameJoin: o,
        location: d,
      });
    if (null == h) return null;
    let { isJoining: p, handleJoinRequest: f, buttonCTA: k, tooltip: x, isEnabled: C } = h;
    return (0, e.jsx)(
      l.m,
      {
        text: x,
        asContainer: !C,
        children: (0, e.jsx)(r.$, {
          variant: u,
          size: c,
          text: k,
          onClick: f,
          disabled: !C,
          loading: p,
          fullWidth: !0,
          ...v,
        }),
      },
      "join",
    );
  }
}
