/* Recovered shipped factory. Module 92277.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9685410..9685898
 * Raw property SHA-256: f36d3e86e4133a3b4ab08a87ab66bc52084731f88af53864a9699a8af25366af
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { $: () => o, g: () => l }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162));
  var i = n(435558),
    r = n.n(i),
    a = n(136722),
    s = n(460288);
  function l(e) {
    return r().cloneDeepWith(e, (e) =>
      (0, a.H0)(e)
        ? { __tag__: "bigflag", data: e.toJSON() }
        : (0, s.mg)(e)
          ? { __tag__: "uint8array", data: Array.from(e) }
          : void 0,
    );
  }
  function o(e) {
    return r().cloneDeepWith(e, (e) =>
      null != e && "object" == typeof e && "__tag__" in e && "bigflag" === e.__tag__
        ? a.iu(e.data)
        : (0, s.I)(e)
          ? new Uint8Array(e.data)
          : void 0,
    );
  }
}
