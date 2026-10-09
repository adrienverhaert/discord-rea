/* Recovered shipped factory. Module 23722.
 * Source: recovered/web/assets/b6824f99d56bf273.js
 * UTF-16 property offsets: 2331..2741
 * Raw property SHA-256: 1a34051b3c4a92746e13debee2ee5cdf12bc21ec7f0a104de60453974ce153fd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => a });
  var i = n(582128),
    r = n(207803),
    u = n(591179),
    l = n(485745);
  function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = !(0, u.X)("useUnsavedProfileChangesGuard"),
      a = (0, l.A)(n),
      s = i.useRef(e);
    return (
      i.useLayoutEffect(() => {
        s.current = e;
      }),
      i.useCallback(
        function () {
          for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
          t && a ? (0, r.VQ)() : s.current(...n);
        },
        [t, a],
      )
    );
  }
}
