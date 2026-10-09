/* Recovered shipped factory. Module 82716.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3697793..3698353
 * Raw property SHA-256: d038c2919d6abc92574b5062ba2eb9979cf7a19ac530358fc77b76c4e98711b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { z: () => E });
  var i = n(477900),
    r = n(582128),
    a = n(27232),
    s = n(505930),
    l = n(866665),
    o = n(408278),
    d = n(609174),
    c = n(614584),
    u = n(704796),
    _ = n(660183);
  function E() {
    let e = (0, d.Y_)(),
      t = r.useCallback(
        (t) => {
          (t.stopPropagation(), t.preventDefault(), (0, c.XK)(e));
        },
        [e],
      );
    return (0, i.jsx)(
      l.m,
      {
        text: _.intl.string(e.isFavorite ? u.default.IZsalP : u.default.ihBfyA),
        position: "top",
        children: (0, i.jsx)(o.K, {
          onClick: t,
          icon: e.isFavorite ? a.StarIcon : s.y,
          "aria-label": _.intl.string(_.t.k8fFjp),
          variant: "overlay-secondary",
          size: "sm",
        }),
      },
      `${e.id}:favorite:${e.isFavorite}`,
    );
  }
}
