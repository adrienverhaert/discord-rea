/* Recovered shipped factory. Module 475921.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1190648..1191104
 * Raw property SHA-256: 11c039e23c46234a04ae818cf1bbdd338f273a67a152c2bcc6f15b0f7883efed
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { U: () => i });
  var n = r(582128);
  function i(e) {
    let t = (0, n.useRef)(null),
      r = (0, n.useRef)(void 0),
      i = (0, n.useCallback)(
        (t) => {
          if ("function" == typeof e) {
            let r = e(t);
            return () => {
              "function" == typeof r ? r() : e(null);
            };
          }
          if (e)
            return (
              (e.current = t),
              () => {
                e.current = null;
              }
            );
        },
        [e],
      );
    return (0, n.useMemo)(
      () => ({
        get current() {
          return t.current;
        },
        set current(value) {
          ((t.current = value),
            r.current && (r.current(), (r.current = void 0)),
            null != value && (r.current = i(value)));
        },
      }),
      [i],
    );
  }
}
