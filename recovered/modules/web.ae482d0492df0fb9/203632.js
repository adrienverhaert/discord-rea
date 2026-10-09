/* Recovered shipped factory. Module 203632.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3870531..3871246
 * Raw property SHA-256: aa4378dc7ffb789bf9c1a5fe8008a1732705e15c0705f93a5bc00409595bd5e5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => o, C3: () => l, HL: () => s });
  var i,
    r = n(575593),
    a = n(338535),
    s = (((i = {}).FromLoop = "fromLoop"), (i.FromStart = "fromStart"), i);
  function l(e) {
    return e instanceof o;
  }
  class o extends a.A {
    title;
    description;
    accessibilityLabel;
    reducedMotionSrc;
    thumbnailPreviewSrc;
    effects;
    animationType;
    staticFrameSrc;
    constructor(e) {
      (super(e),
        (this.type = r.R.PROFILE_EFFECT),
        (this.title = e.title),
        (this.description = e.description),
        (this.accessibilityLabel = e.accessibilityLabel),
        (this.reducedMotionSrc = e.reducedMotionSrc),
        (this.thumbnailPreviewSrc = e.thumbnailPreviewSrc),
        (this.effects = e.effects),
        (this.animationType = e.animationType),
        (this.staticFrameSrc = e.staticFrameSrc));
    }
    static fromServer(e) {
      return new o({ ...super.fromServer(e), ...e });
    }
  }
}
