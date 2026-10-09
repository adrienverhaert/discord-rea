/* Recovered shipped factory. Module 53200.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8337326..8337738
 * Raw property SHA-256: 768858ee68a954cf8a24a3ff651ffeebeb1c574f394b7d0c1a412c70dd37bf5d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ap: () => l, E: () => a, LA: () => s });
  let i = null,
    r = null;
  function a() {
    return (r ??= n
      .e("357423")
      .then(n.bind(n, 771253))
      .then((e) => ((i = e.default), e.default)));
  }
  function s() {
    return i;
  }
  function l() {
    if (null != i) return i.isSupported();
    let e = window.ManagedMediaSource ?? window.MediaSource;
    return (
      null != e &&
      "function" == typeof e.isTypeSupported &&
      e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
    );
  }
}
