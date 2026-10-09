/* Recovered shipped factory. Module 95035.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5729153..5729757
 * Raw property SHA-256: 88d588f415aa477c62a75f0299509ccc8f5171eb32a1b5297ec2cac6edc42bb7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900),
    r = n(582128),
    a = n(559106),
    s = n(976860),
    l = n(650583);
  function o(e) {
    let {
        href: t,
        children: n,
        onClick: o,
        onKeyPress: d,
        focusProps: c,
        transitionExtras: u,
        ref: _,
        ...E
      } = e,
      A = r.useCallback(
        (e) => {
          e.repeat ||
            ((e.key === l.dh.SPACE || e.key === l.dh.ENTER) &&
              (e.preventDefault(), null != t && (0, s.pX)(t, u), o?.()),
            d?.(e));
        },
        [t, d, o, u],
      ),
      h = r.useCallback(
        (e) => {
          e.metaKey ||
            e.shiftKey ||
            0 !== e.button ||
            (e.preventDefault(), e.stopPropagation(), null != t && (0, s.pX)(t, u), o?.());
        },
        [t, o, u],
      ),
      f = (0, i.jsx)("a", { ref: _, href: t, onClick: h, onKeyPress: A, ...E, children: n });
    return (0, i.jsx)(a.vN, { ...c, children: f });
  }
}
