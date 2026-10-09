/* Recovered shipped factory. Module 561509.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3855100..3855923
 * Raw property SHA-256: 603808f2fbfb0cc7108e45ee28fcd638f7ebf0f5b1cdad7cd93aa79903ddf533
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { l: () => d });
  var i,
    r =
      (((i = {})[(i.INNER_WIDTH = 1200)] = "INNER_WIDTH"),
      (i[(i.OVERFLOW_TOP = 304)] = "OVERFLOW_TOP"),
      (i[(i.OVERFLOW_BOTTOM = 212)] = "OVERFLOW_BOTTOM"),
      (i[(i.OVERFLOW_HORIZONTAL = 56)] = "OVERFLOW_HORIZONTAL"),
      i),
    a = n(102607),
    s = n(374380);
  function l(e, t) {
    return e.length > 0 ? Math.max(...e) : t;
  }
  function o(e, t, n) {
    return Math.max(0, e - (t - n));
  }
  function d(e) {
    let t = r.INNER_WIDTH,
      n = l(
        e.map((e) => {
          let { dims: n } = e;
          return Math.round(Math.max(0, (n.width - t) / 2));
        }),
        0,
      );
    return {
      innerWidth: t,
      overflowTop: l(
        e
          .filter((e) => {
            let { layer: t } = e;
            return t.type === s.O.STAPLE && t.anchor === a.T.TOP;
          })
          .map((e) => {
            let { dims: t } = e;
            return o(t.height, 716, r.OVERFLOW_TOP);
          }),
        0,
      ),
      overflowBottom: l(
        e
          .filter((e) => {
            let { layer: t } = e;
            return t.type === s.O.STAPLE && t.anchor === a.T.BOTTOM;
          })
          .map((e) => {
            let { dims: t } = e;
            return o(t.height, 424, r.OVERFLOW_BOTTOM);
          }),
        0,
      ),
      overflowHorizontal: n,
    };
  }
}
