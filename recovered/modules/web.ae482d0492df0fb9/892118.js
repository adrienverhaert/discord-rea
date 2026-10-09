/* Recovered shipped factory. Module 892118.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3871247..3871900
 * Raw property SHA-256: 638541bc4fc27aacdce70bbe3b244da2125b6edc40b9e4027c6da453d5a27b33
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s, s: () => a });
  var i = n(575593),
    r = n(338535);
  function a(e) {
    return e instanceof s;
  }
  class s extends r.A {
    label;
    layers;
    innerWidth;
    overflowTop;
    overflowBottom;
    overflowHorizontal;
    constructor(e) {
      (super(e),
        (this.type = i.R.PROFILE_FRAME),
        (this.label = e.label),
        (this.layers = e.layers),
        (this.innerWidth = e.innerWidth),
        (this.overflowTop = e.overflowTop),
        (this.overflowBottom = e.overflowBottom),
        (this.overflowHorizontal = e.overflowHorizontal));
    }
    static fromServer(e) {
      let { inner_width: t, overflow_top: n, overflow_bottom: i, overflow_horizontal: r, ...a } = e;
      return new s({
        ...super.fromServer(a),
        ...a,
        innerWidth: t,
        overflowTop: n,
        overflowBottom: i,
        overflowHorizontal: r,
      });
    }
  }
}
