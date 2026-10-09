/* Recovered shipped factory. Module 203656.
 * Source: recovered/web/assets/fd959530312519e2.js
 * UTF-16 property offsets: 74225..74727
 * Raw property SHA-256: f0518ea5431bfee00570be3821ac5e73eaac490566f4cf693cf0b2f6c2c256b2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (A, h, v) {
  v.d(h, { M: () => t });
  var l = v(477900);
  v(582128);
  var H = v(534400),
    M = v(620757),
    V = v(743981),
    Z = v(557682);
  function t(A) {
    let h = null === A.tag || 0 === A.tag.length ? "WUMP" : A.tag;
    return (0, l.jsx)("div", {
      className: Z.fC,
      children: (0, l.jsx)(H.o9, {
        guildId: A.guildId,
        textClassName: Z.em,
        guildTag: h,
        guildBadge:
          "string" == typeof A.badge
            ? A.badge
            : (0, l.jsx)(M.J, {
                className: Z.i6,
                badge: A.badge,
                width: V.Sl.SIZE_12,
                height: V.Sl.SIZE_12,
                primaryTintColor: A.primaryColor ?? void 0,
                secondaryTintColor: A.secondaryColor ?? void 0,
              }),
      }),
    });
  }
}
