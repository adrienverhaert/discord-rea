/* Recovered shipped factory. Module 761365.
 * Source: recovered/web/assets/13f3ae5909c1b122.js
 * UTF-16 property offsets: 95..835
 * Raw property SHA-256: 6aa72c0f314cb2043fc793621d48f28d1bf96a6e0d9068b4efaef0d46c1475c9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, s) {
  s.d(t, { A: () => u });
  var l = s(477900),
    a = s(582128),
    n = s(130147),
    r = s(344346),
    i = s(309239);
  let u = a.memo(function (e) {
    let { user: t, guildId: s, nameplate: a, isHighlighted: u, size: d = "default" } = e,
      c = "small" === d ? 62 : 94,
      o = "small" === d ? 72 : 110;
    return (0, l.jsx)("div", {
      className: i.Dz,
      children: (0, l.jsxs)("div", {
        className: i.ur,
        children: [
          (0, l.jsx)(n._, { showStatus: !0, width: c, opacity: 0.7, size: d }),
          (0, l.jsx)(n._, { showStatus: !0, width: o, opacity: 0.85, size: d }),
          (0, l.jsx)(r.A, {
            user: t,
            guildId: s,
            nameplate: a,
            className: i.tZ,
            isHighlighted: u,
            showPlaceholderUser: !u,
            showStatus: !0,
            nameplatePreviewSize: "small" === d ? "small" : "default",
            hideDecorators: !0,
          }),
          (0, l.jsx)(n._, { showStatus: !0, width: o, opacity: 0.85, size: d }),
          (0, l.jsx)(n._, { showStatus: !0, width: c, opacity: 0.7, size: d }),
        ],
      }),
    });
  });
}
