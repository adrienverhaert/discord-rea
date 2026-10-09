/* Recovered shipped factory. Module 386952.
 * Source: recovered/web/assets/b169683e280b57e9.js
 * UTF-16 property offsets: 2525..2935
 * Raw property SHA-256: d6ddacfacaa147088eda5d65d8d11381f8c60d09abfba38d680eb3a74c509527
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, S) {
  S.d(e, { e: () => r });
  var n = S(477900),
    i = S(582128),
    _ = S(503698),
    I = S.n(_),
    R = S(86304);
  function r() {
    let [t, e] = i.useState(!1);
    return {
      isTruncated: t,
      ExpandableTextContainer: i.memo(function (t) {
        let { showAll: S = !1, className: i, children: _, lineClamp: r = 2 } = t;
        return (0, n.jsx)("div", {
          ref: (t) => {
            null != t && e(t.scrollHeight - t.clientHeight > 1);
          },
          className: I()(R.I, i),
          style: S ? void 0 : { lineClamp: r, WebkitLineClamp: r },
          children: _,
        });
      }),
    };
  }
}
