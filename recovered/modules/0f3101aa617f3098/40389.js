/* Recovered shipped factory. Module 40389.
 * Source: recovered/web/assets/0f3101aa617f3098.js
 * UTF-16 property offsets: 642..1459
 * Raw property SHA-256: 495e3fa912a4206d384dd8afdc08f7f91cf41d2124a12c688e849c5430441007
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => b });
  var i = n(477900),
    r = n(582128),
    l = n(435558),
    a = n.n(l),
    d = n(17928),
    s = n(477782),
    o = n(367513),
    u = n(198052),
    c = n(499211),
    h = n(406704),
    A = n(977997),
    m = n(262763),
    g = n(660183);
  function b(t) {
    let e = (0, h._M)(t),
      n = (0, d.bG)([A.A], () => A.A.isInChannel(t.id)),
      l = (0, d.bG)([A.A], () => !a().isEmpty(A.A.getVoiceStatesForChannel(t.id))),
      { needSubscriptionToAccess: b } = (0, c.A)(t.id),
      j = (0, d.bG)([u.A], () => u.A.getChatOpen(t.id)),
      p = r.useCallback(() => {
        m.A.handleVoiceConnect({
          channel: t,
          connected: n,
          needSubscriptionToAccess: b,
          locked: !1,
        });
      }, [t, n, b]);
    return n || !e
      ? null
      : (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.Dr, {
              id: "join-thread-voice",
              label: l ? g.intl.string(g.t["0D/6Rz"]) : g.intl.string(g.t.My50nf),
              action: p,
            }),
            l &&
              !j &&
              (0, i.jsx)(s.Dr, {
                id: "open-chat",
                label: g.intl.string(g.t.ZXxLQg),
                action: () => {
                  o.A.updateChatOpen(t.id, !0);
                },
              }),
          ],
        });
  }
}
