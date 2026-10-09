/* Recovered shipped factory. Module 659051.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 3950..4259
 * Raw property SHA-256: 0986fc13842d458f0880f89285729f804526db631f5ea6b70400c960a0e9dc79
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => r });
  var i = n(927813),
    l = n(935208);
  let s = 2 * i.A.Millis.HOUR;
  function r(e, t, n) {
    if (null == e) return !1;
    let i = null != t.activity ? t.activity.party_id : null,
      r = null != i && e.party?.id !== i,
      a = l.default.extractTimestamp(t.id) + s < Date.now(),
      o = null != e.application_id && e.application_id !== n;
    return !r && !a && !o;
  }
}
