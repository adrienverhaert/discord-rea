/* Recovered shipped factory. Module 67669.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1127032..1127527
 * Raw property SHA-256: 6e4273dc3132ea98003ad31f7f256e9c9cdbabb351ffb92f69ab7aeb9eee9879
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { i: () => s });
  var n = r(256062),
    i = r(143761),
    o = r(872197),
    a = r(582128);
  function s(e) {
    let { isDisabled: t, onFocus: r, onBlur: s, onFocusChange: l } = e,
      u = (0, a.useCallback)(
        (e) => {
          if ((0, n.wt)(e) === e.currentTarget) return (s && s(e), l && l(!1), !0);
        },
        [s, l],
      ),
      c = (0, o.yB)(u),
      f = (0, a.useCallback)(
        (e) => {
          let t = (0, n.wt)(e),
            o = (0, i.TW)(t),
            a = o ? (0, n.bq)(o) : (0, n.bq)();
          t === e.currentTarget && t === a && (r && r(e), l && l(!0), c(e));
        },
        [l, r, c],
      );
    return {
      focusProps: {
        onFocus: !t && (r || l || s) ? f : void 0,
        onBlur: !t && (s || l) ? u : void 0,
      },
    };
  }
}
