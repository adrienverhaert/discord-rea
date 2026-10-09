/* Recovered shipped factory. Module 80687.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9897510..9897874
 * Raw property SHA-256: 59cfcfbdc911f3ded38b1ce82a6957958a1aeea346a86d3e4f6c55a9a7924918
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D: () => o });
  var i = n(477900);
  n(582128);
  var r = n(113494),
    a = n(782134),
    s = n(460890),
    l = n(657718);
  function o(e) {
    let { "aria-label": t, playing: n, ...o } = e,
      { i18n: d } = (0, s.G9)();
    return (0, i.jsx)(l.S, {
      ...o,
      "aria-label": t ?? (n ? d.PAUSE_BUTTON_LABEL : d.PLAY_BUTTON_LABEL),
      icon: n ? r.PauseIcon : a.PlayIcon,
      variant: "overlay-secondary",
      fullWidth: !1,
      rounded: !0,
    });
  }
}
