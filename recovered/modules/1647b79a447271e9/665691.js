/* Recovered shipped factory. Module 665691.
 * Source: recovered/web/assets/1647b79a447271e9.js
 * UTF-16 property offsets: 95..1047
 * Raw property SHA-256: da0df02dec97b62847d7cca995b2e9e11743d9b1753d476b2f5991586a284a4a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, r, i) {
  (i.d(r, { DY: () => k, UF: () => c, bG: () => o }),
    i(393431),
    i(532706),
    i(42231),
    i(232424),
    i(949626),
    i(767709),
    i(65162));
  var t = i(17928),
    n = i(652896),
    u = i(280450),
    d = i(763827),
    l = i(707890),
    f = i(440976),
    s = i(787392),
    A = i(83942),
    a = i(259374);
  function c(e) {
    let { userId: r, channelId: i, userKey: n } = e,
      A = (0, a.k)({ channelId: i });
    return (0, t.bG)(
      [l.A, u.default, d.A, s.A, f.A],
      () => {
        if (null == r || !A || !d.A.isUserConnected(r) || u.default.getId() === r) return !1;
        if (void 0 === n) return l.A.isUserVerified(r);
        if (null === n) return !1;
        let e = new Uint8Array(n);
        return s.A.isKeyVerified(r, e) || f.A.isKeyVerified(r, e);
      },
      [A, r, n],
    );
  }
  function k(e) {
    let { streamKey: r, channelId: i } = e,
      d = (0, a.k)({ channelId: i }),
      f = (0, A.w)(r);
    return (0, t.bG)(
      [l.A, u.default],
      () => {
        if (!d || f || null == r) return !1;
        let e = u.default.getId(),
          { ownerId: i } = (0, n.Iy)(r);
        return i !== e && l.A.isStreamVerified(r);
      },
      [f, d, r],
    );
  }
  function o(e) {
    let { channelId: r } = e,
      i = (0, a.k)({ channelId: r }),
      n = (0, A.c)();
    return (0, t.bG)([l.A], () => !!i && !n && l.A.isCallVerified(), [n, i]);
  }
}
