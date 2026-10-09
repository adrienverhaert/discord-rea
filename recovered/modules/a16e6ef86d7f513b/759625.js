/* Recovered shipped factory. Module 759625.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 18280..19053
 * Raw property SHA-256: e2864da03eb0629b9bc8d8bc9eddc7a1a40e07ca9289ae9215783ce758e35ff2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => d });
  var l = n(477900);
  n(582128);
  var r = n(939249),
    o = n(834730),
    i = n(147925),
    a = n(807973),
    u = n(898612),
    s = n(232492),
    c = n(80595);
  function d(e) {
    let { benefit: t, guildId: n, onClick: d } = e,
      C = (0, s.A)(n, t.ref_id),
      h = (0, l.jsx)(a.A, { guildId: n, emojiId: t.emoji_id, emojiName: t.emoji_name });
    return (0, l.jsxs)(r.D, {
      className: c.kL,
      onClick: function () {
        (C?.navigateToChannel(), d());
      },
      "aria-label": C?.ariaLabel,
      role: "link",
      children: [
        (0, l.jsx)("div", { className: c.qq, children: h }),
        (0, l.jsxs)("div", {
          className: c.op,
          children: [
            (0, l.jsx)(o.E, {
              variant: "text-md/medium",
              color: "text-strong",
              className: c.UU,
              children: (0, u.A)(t),
            }),
            (0, l.jsx)(o.E, {
              color: "interactive-text-default",
              variant: "text-sm/normal",
              children: t.description,
            }),
          ],
        }),
        (0, l.jsx)(i.A, { direction: i.A.Directions.RIGHT, className: c.OW }),
      ],
    });
  }
}
