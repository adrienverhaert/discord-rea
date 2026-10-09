/* Recovered shipped factory. Module 83220.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 322198..322731
 * Raw property SHA-256: b3f5193b97e0880610b3fa054457bc13e395b01ecebe0b75ea66378ce74e8210
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { k3: () => a, lu: () => i, zf: () => o });
  var r = n(978862);
  function i() {
    return Date.now() / 1e3;
  }
  let o = (function () {
      let { performance: e } = r.O;
      if (!e || !e.now) return i;
      let t = Date.now() - e.now(),
        n = void 0 == e.timeOrigin ? t : e.timeOrigin;
      return () => (n + e.now()) / 1e3;
    })(),
    a = (() => {
      let { performance: e } = r.O;
      if (!e || !e.now) return;
      let t = e.now(),
        n = Date.now(),
        i = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
        o = e.timing && e.timing.navigationStart,
        a = "number" == typeof o ? Math.abs(o + t - n) : 36e5;
      if (i < 36e5 || a < 36e5)
        if (i <= a) return e.timeOrigin;
        else return o;
      return n;
    })();
}
