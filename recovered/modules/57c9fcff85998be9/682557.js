/* Recovered shipped factory. Module 682557.
 * Source: recovered/web/assets/57c9fcff85998be9.js
 * UTF-16 property offsets: 6060..6523
 * Raw property SHA-256: 29033f65a8483429e1779d028326e661d1e6fd04a43ea38d2d6927024d3d2119
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => a });
  var r = n(477900);
  n(582128);
  var i = n(922016),
    c = n(283354);
  let a = function (t) {
    let {
      entry: e,
      hideEditButton: n,
      children: a,
      onRequestOpen: l,
      onRequestClose: o,
      targetElementRef: E,
    } = t;
    return (0, r.jsx)(i.Y, {
      targetElementRef: E,
      onRequestOpen: l,
      onRequestClose: o,
      animation: i.Y.Animation.NONE,
      position: "bottom",
      spacing: 4,
      align: "right",
      renderPopout: (t) => {
        let { closePopout: i } = t;
        return (0, r.jsx)(c.default, { entry: e, closePopout: i, hideEditButton: n });
      },
      children: a,
    });
  };
}
