/* Recovered shipped factory. Module 315693.
 * Source: recovered/web/assets/13f3ae5909c1b122.js
 * UTF-16 property offsets: 4359..4700
 * Raw property SHA-256: 067d880da4c81f4e5dc5f98d348d54bcd47e67cf2d64d4301e4fa4adf61c553b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, s) {
  s.d(t, { XX: () => a, aZ: () => n, cz: () => r });
  var l = s(982240);
  function a(e, t) {
    return e.reduce((e, s) => {
      let a = (0, l.rL)(s);
      return t < a ? e : null == e || a > (0, l.rL)(e) ? s : e;
    }, null);
  }
  function n(e, t) {
    return e.reduce((e, s) => {
      let a = (0, l.rL)(s);
      return t >= a ? e : null == e || a < (0, l.rL)(e) ? s : e;
    }, null);
  }
  function r(e, t) {
    let s = n(e, t);
    return null == s ? null : (0, l.rL)(s) - t;
  }
}
