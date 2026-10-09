/* Recovered shipped factory. Module 467324.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1191919..1192561
 * Raw property SHA-256: 0f5aba186e40bd8ef6c27a678d81df19fb142dcdb608d59a91a9cdb017cf8b03
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { B: () => s, s: () => l });
  var n = r(184093),
    i = r(761412),
    o = r(582128);
  let a = {
    border: 0,
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap",
  };
  function s(e = {}) {
    let { style: t, isFocusable: r } = e,
      [n, l] = (0, o.useState)(!1),
      { focusWithinProps: u } = (0, i.R)({ isDisabled: !r, onFocusWithinChange: (e) => l(e) }),
      c = (0, o.useMemo)(() => (n ? t : t ? { ...a, ...t } : a), [n]);
    return { visuallyHiddenProps: { ...u, style: c } };
  }
  function l(e) {
    let { children: t, elementType: r = "div", isFocusable: i, style: a, ...l } = e,
      { visuallyHiddenProps: u } = s(e);
    return o.createElement(r, (0, n.v)(l, u), t);
  }
}
