/* Recovered shipped factory. Module 614972.
 * Source: recovered/web/assets/4480914f8fd8f98c.js
 * UTF-16 property offsets: 5381..5642
 * Raw property SHA-256: 02efa3a144c1b5ffc69c64f2b1edf7518fcef7b3af202ba8aaf2cd0da8951db7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { c: () => r, q: () => i });
  var s = n(582128);
  let i = s.createContext(null);
  function r(t) {
    let { onMenuOpen: e, onMenuClose: n } = t,
      i = s.useRef(!1);
    return s.useMemo(
      () => ({
        onMenuOpen: e,
        onMenuClose: n,
        setAutoOpen: (t) => {
          i.current = t;
        },
        getAutoOpen: () => i.current,
      }),
      [e, n],
    );
  }
}
