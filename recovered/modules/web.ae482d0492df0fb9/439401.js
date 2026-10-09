/* Recovered shipped factory. Module 439401.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5988851..5990018
 * Raw property SHA-256: 3f2d7747bbd94fc9f02f631b9edf683adadef5d1ef9a698944faea4ff8964838
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => T });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(27232),
    o = n(505930),
    d = n(866665),
    c = n(939249),
    u = n(497685),
    _ = n(996566),
    E = n(594061),
    A = n(625494),
    h = n(652215),
    f = n(650583),
    I = n(660183),
    p = n(47299);
  let T = r.memo(function (e) {
    let { width: t, height: n, src: a, gifSrc: T, url: m, format: g, className: S } = e,
      [N, C] = r.useState(!1),
      [O, R] = r.useState(!1),
      L = (0, _.km)((0, u.xo)(m), O),
      y = L ? I.intl.string(I.t["5/NS74"]) : I.intl.string(I.t.nIH0v8),
      D = L ? l.StarIcon : o.y;
    function v(e) {
      (e.preventDefault(),
        e.stopPropagation(),
        C(!0),
        L
          ? (0, u.Tr)(m)
          : ((0, u.wg)({ url: m, src: a, gifSrc: T, width: t, height: n, format: g }),
            A._.dispatch(h.jej.FAVORITE_GIF)));
    }
    function b() {
      ((0, E.cE)(), R(!0));
    }
    return (
      r.useEffect(() => {
        if (!N) return;
        let e = setTimeout(() => {
          C(!1);
        }, 500);
        return () => clearTimeout(e);
      }, [N]),
      (0, i.jsx)(d.m, {
        text: y,
        children: (0, i.jsx)(c.D, {
          "aria-label": y,
          ignoreKeyPress: !0,
          className: s()(S, p.jj, { [p.wH]: L, [p.TV]: N }),
          onMouseDown: (e) => e.preventDefault(),
          onMouseEnter: b,
          onFocus: b,
          onClick: v,
          onKeyDown: function (e) {
            (e.key === f.dh.ENTER || e.key === f.dh.SPACE) && v(e);
          },
          onDoubleClick: (e) => e.preventDefault(),
          children: (0, i.jsx)(D, {
            color: "currentColor",
            className: p.Kk,
            size: "custom",
            width: 20,
            height: 20,
          }),
        }),
      })
    );
  });
}
