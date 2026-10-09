/* Recovered shipped factory. Module 73392.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4250185..4250859
 * Raw property SHA-256: 0ea3b1e183dd08694a919499c316fa9ec5c269f39d22cbd134d272399a21b193
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { a: () => _, p: () => u });
  var i = n(503698),
    r = n.n(i),
    a = n(559949),
    s = n(676279),
    l = n(913563),
    o = n(824994),
    d = n(516064);
  let c = {
    [a.x.DEFAULT]: "",
    [a.x.CHERRY_BOMB]: d.u_,
    [a.x.CHICLE]: d.xO,
    [a.x.MUSEO_MODERNO]: d._,
    [a.x.NEO_CASTEL]: d.pN,
    [a.x.PIXELIFY]: d.f,
    [a.x.SINISTRE]: d.yH,
    [a.x.ZILLA_SLAB]: d.FR,
    [a.x.PLAYPEN_SANS]: d.R_,
    [a.x.ORBITRON]: d.yT,
    [a.x.NEW_ROCKER]: d.NX,
    [a.x.KALAM]: d.x4,
  };
  function u(e) {
    return { name: (0, l.A)(e), className: c[e] ?? "" };
  }
  function _(e) {
    let { displayNameStyles: t, compensateForSafari: n = !0 } = e;
    if (!(0, o.W)({ location: "useDisplayNameStylesFont" }) || null == t) return "";
    let i = u(t.fontId);
    return "" === i.className ? "" : r()(d.zt, i.className, { [d.VM]: n && (0, s.nr)() });
  }
}
