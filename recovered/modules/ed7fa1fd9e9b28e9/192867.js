/* Recovered shipped factory. Module 192867.
 * Source: recovered/web/assets/ed7fa1fd9e9b28e9.js
 * UTF-16 property offsets: 95..371
 * Raw property SHA-256: 2a8f31e39c37a76f2736999876d5d93551efa78baf9ed528afe7bd15d79d7449
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (a, s, e) {
  e.d(s, { A: () => d });
  var i = e(477900);
  e(582128);
  var r = e(97808),
    t = e(778712),
    c = e(395481);
  function d(a) {
    let { user: s, nickname: e } = a,
      d = null != e;
    return (0, i.jsx)(r.eu, {
      src: s.getAvatarURL(void 0, d ? 16 : 24),
      size: d ? t._3.SIZE_16 : t._3.SIZE_24,
      className: d ? c.H : c.tM,
      "aria-hidden": !0,
    });
  }
}
