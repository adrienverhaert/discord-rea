/* Recovered shipped factory. Module 423091.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5896687..5897101
 * Raw property SHA-256: d23e392bfdf7d057b2d5b2766ba4a9eb14e77f14d1ada5164b1da73f71349f05
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(827343),
    r = n(439372);
  let a = new (n(626584).A)("VideoFilterErrorManager");
  class s extends r.A {
    actions = { MEDIA_ENGINE_VIDEO_FILTER_ERROR: (e) => this.handleVideoFilterError(e) };
    handleVideoFilterError = (e) => {
      let { target: t } = e;
      "live" === t &&
        (a.warn(
          "Live video filter failed to initialize; disabling camera to avoid exposing raw video.",
        ),
        i.default.setVideoEnabled(!1));
    };
  }
  let l = new s();
}
