/* Recovered shipped factory. Module 448613.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8003130..8004034
 * Raw property SHA-256: 892a56dc19a33f464f89cbbabb63f3e530347f1a889bb609cce754c9f6de4a83
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => A });
  var i = n(308528),
    r = n(148494),
    a = n(355622),
    s = n(428249),
    l = n(451909),
    o = n(138298),
    d = n(940382),
    c = n(761640),
    u = n(734057),
    _ = n(806150),
    E = n(381941);
  async function A(e) {
    let {
        userId: t,
        content: n,
        location: A,
        openChannel: h = !0,
        whenReady: f = !1,
        entry: I,
        nonce: p,
      } = e,
      { valid: T, failureReason: m } = await (0, _.i)({
        type: a.oU.NORMAL,
        content: n,
        channel: null,
      });
    if (!T) throw Error(m);
    let g = h
        ? await i.A.openPrivateChannel({ recipientIds: t, location: A })
        : await i.A.getOrEnsurePrivateChannel(t),
      S = u.A.getChannel(g);
    if (null == S) throw Error("Failed to open private channel");
    let N = c.Ay.getSidebarState(c.fe);
    if (
      (h &&
        N?.type === d.PE.VIEW_MESSAGE_REQUEST &&
        N.channelId === S.id &&
        o.A.closeChannelSidebar(c.fe),
      null != I)
    )
      (0, s.d)({
        channel: S,
        content: n,
        entry: I,
        whenReady: f,
        doNotNotifyOnError: !1,
        location: E.Hx.USER_PROFILE,
      });
    else {
      let e = l.Ay.parse(S, n);
      return r.A.sendMessage(S.id, e, f, { location: E.Hx.USER_PROFILE, nonce: p });
    }
  }
}
