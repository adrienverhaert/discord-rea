/* Recovered shipped factory. Module 460288.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9712865..9713396
 * Raw property SHA-256: 897629c4b16dd19465b1e5f8733969fc9bd29f97ae47b87b76cc13b14ba89af6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t) {
    return 0 !== e.length && (e[Math.floor(t / 8)] & (1 << (t % 8))) != 0;
  }
  function r(e, t) {
    let n = Math.floor(t / 8);
    if (e.length <= n) {
      let t = new Uint8Array(n + 1);
      (t.set(e, 0), (e = t));
    }
    return ((e[n] |= 1 << (t % 8)), e);
  }
  function a(e, t) {
    if (i(e, t)) {
      let n = Math.floor(t / 8),
        i = t % 8;
      e[n] &= ~(1 << i);
    }
    return e;
  }
  function s(e) {
    return e instanceof Uint8Array;
  }
  function l(e) {
    return null != e && "object" == typeof e && "uint8array" === e.__tag__;
  }
  (n.d(t, { I: () => l, Vf: () => r, We: () => a, c0: () => i, mg: () => s }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162));
}
