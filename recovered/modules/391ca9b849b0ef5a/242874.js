/* Recovered shipped factory. Module 242874.
 * Source: recovered/web/assets/391ca9b849b0ef5a.js
 * UTF-16 property offsets: 95..751
 * Raw property SHA-256: 5bd9e955afd67e2f535f5d4f12013f1e05572e1a4e985a9fa19309452626dce7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, i) {
  i.d(n, { UN: () => f, oA: () => c, yE: () => p });
  var t,
    r = i(284009),
    l = i.n(r),
    a = i(308528),
    o = i(148494),
    s = i(451909),
    d = i(734057),
    u = i(45938),
    h = i(381941),
    c = (((t = {}).ACTION = "action"), (t.LOOP = "loop"), (t.IDLE = "idle"), t);
  async function f(e, n) {
    if (null == n) throw Error("giftCode must be defined");
    if (null == e) throw Error("Recipient must be defined");
    let i = await a.A.openPrivateChannel({ recipientIds: e.id }).then((e) => {
        let n = d.A.getChannel(e);
        if ((l()(null != n, "PrivateChannel is null"), null == n))
          throw Error("Channel must be defined");
        return n;
      }),
      t = (0, u.Zq)(n);
    return o.A.sendMessage(i.id, s.Ay.parse(i, t), void 0, {
      isGiftLinkSentOnBehalfOfUser: !0,
      location: h.Hx.GIFTING,
    });
  }
  function p(e) {}
}
