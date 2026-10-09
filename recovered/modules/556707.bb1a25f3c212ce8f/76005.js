/* Recovered shipped factory. Module 76005.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 291668..292010
 * Raw property SHA-256: 32dc4ac8a812c5f3883d0819d461bb1a053cd142fb9a9d8fe202890b923afd73
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  let r;
  n.d(t, { Z: () => l });
  var i = n(630449),
    o = n(688331),
    a = n(690094);
  let s = new WeakMap(),
    l = (0, o._C)(() => ({
      name: "FunctionToString",
      setupOnce() {
        r = Function.prototype.toString;
        try {
          Function.prototype.toString = function (...e) {
            let t = (0, a.sp)(this),
              n = s.has((0, i.KU)()) && void 0 !== t ? t : this;
            return r.apply(n, e);
          };
        } catch (e) {}
      },
      setup(e) {
        s.set(e, !0);
      },
    }));
}
