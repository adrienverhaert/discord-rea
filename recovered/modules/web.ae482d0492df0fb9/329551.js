/* Recovered shipped factory. Module 329551.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8299974..8300307
 * Raw property SHA-256: 90c4300dca7a315652cef34458f708ec0c960457aa52e560a9a762fabe56d0c7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { i: () => s }), n(582128), n(17928), n(964404));
  var i = n(617617);
  n(287809);
  var r = n(158045),
    a = n(965162);
  function s(e) {
    var t, n;
    let s = i.A.settings;
    return (
      (t = s.voiceAndVideo?.videoBackgroundFilterDesktop),
      (n = (0, a.Hk)(t, e.id)),
      (!(0, a.d1)(n) || r.Ay.canUseCustomBackgrounds(e)) && ("number" != typeof n || (0, a.pR)(n))
        ? n
        : null
    );
  }
}
