/* Recovered shipped factory. Module 212007.
 * Source: recovered/web/assets/efeaa606c2782ec7.js
 * UTF-16 property offsets: 95..676
 * Raw property SHA-256: c1da5fd92ef931e6947db0a379f5a14e73122f15676fad736296369fb1bc662a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, a) {
  a.d(t, { T: () => d });
  var s = a(196765),
    l = a(537812),
    n = a(121894),
    r = a(932607);
  let i = (0, s.v)(
    (0, l.Zr)(
      (e, t) => ({
        channelShowResolvedFlags: {},
        setShowResolvedFlags: (t, a) =>
          (0, n.r)(() => {
            e((e) => ({ channelShowResolvedFlags: { ...e.channelShowResolvedFlags, [t]: a } }));
          }),
        getShowResolvedFlags: (e) => t().channelShowResolvedFlags[e] ?? !0,
      }),
      { name: "report-to-mod-channel-storage", storage: (0, l.KU)(() => r.A) },
    ),
  );
  function d(e) {
    let t = i();
    return null == e
      ? { showResolvedFlags: !0, setShowResolvedFlags: () => {} }
      : {
          showResolvedFlags: t.getShowResolvedFlags(e) ?? !0,
          setShowResolvedFlags: (a) => t.setShowResolvedFlags(e, a),
        };
  }
}
