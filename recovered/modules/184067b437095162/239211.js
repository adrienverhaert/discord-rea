/* Recovered shipped factory. Module 239211.
 * Source: recovered/web/assets/184067b437095162.js
 * UTF-16 property offsets: 95..1128
 * Raw property SHA-256: 8b04b4d737ea77ec7ae76e1faff2bf098f9122a076ab5e4e49b82d12a8aca2de
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => b });
  var o = n(477900);
  n(582128);
  var l = n(17928),
    a = n(477782),
    d = n(192308),
    r = n(717398),
    i = n(381689),
    s = n(994500),
    c = n(287809),
    u = n(652215),
    p = n(660183);
  function b(e) {
    let {
        user: t,
        guildId: b,
        channelId: k,
        onBlock: h,
        onIgnore: A,
        onUnblock: f,
        location: g = "ContextMenu",
        appContext: x = u.BRT.APP,
      } = e,
      { id: C } = t,
      m = (0, l.bG)([c.default], () => c.default.getCurrentUser()?.id === C, [C]),
      w = (0, l.bG)([s.A], () => s.A.isBlocked(C), [C]);
    return m
      ? null
      : (0, o.jsx)(a.Dr, {
          id: "block",
          color: (w ? "default" : "danger") ?? "default",
          label: w ? p.intl.string(p.t.XyHpKH) : p.intl.string(p.t.l4Emac),
          action: w
            ? () => {
                (f?.(),
                  r.A.unblockUser(C, { location: g }),
                  i.A.showUnblockSuccessToast(C, k ?? void 0));
              }
            : () => {
                (0, d.openModalLazy)(
                  async () => {
                    let { default: e } = await Promise.all([
                      n.e("337375"),
                      n.e("847727"),
                      n.e("283887"),
                      n.e("611523"),
                      n.e("363618"),
                      n.e("820683"),
                      n.e("600607"),
                      n.e("512755"),
                      n.e("670398"),
                      n.e("826696"),
                    ]).then(n.bind(n, 262797));
                    return (n) =>
                      (0, o.jsx)(e, {
                        ...n,
                        user: t,
                        guildId: b,
                        channelId: k,
                        onBlock: h,
                        onIgnore: A,
                        location: g,
                      });
                  },
                  { contextKey: (0, d.modalContextFromAppContext)(x) },
                );
              },
        });
  }
}
