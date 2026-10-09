/* Recovered shipped factory. Module 429635.
 * Source: recovered/web/assets/4b877a4798bd1cc7.js
 * UTF-16 property offsets: 432..687
 * Raw property SHA-256: d41e09430b3e1f1ca0499b7de2ac03477fde69ba5ee88e19ffcc118ccd5550c6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, t, l) {
  l.d(t, { A: () => o });
  var e = l(582128),
    r = l(733391),
    u = l(376680);
  function o(n) {
    let { applicationId: t, guildId: l } = n,
      o = (0, u.A)({ applicationId: t, guildId: l });
    return (
      e.useEffect(() => {
        null != t ? (0, r.ap)(t, { eager: !1 }) : null != l && (0, r.Rw)(l, { eager: !1 });
      }, [t, l]),
      o
    );
  }
}
