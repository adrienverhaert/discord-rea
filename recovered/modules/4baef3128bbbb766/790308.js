/* Recovered shipped factory. Module 790308.
 * Source: recovered/web/assets/4baef3128bbbb766.js
 * UTF-16 property offsets: 2531..2826
 * Raw property SHA-256: 4caa67a9022d87499e5b8bea27a24f90b0151867382792a70f06032a82a04c48
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, s, t) {
  t.d(s, { q: () => o });
  var i = t(362684),
    d = t(241453),
    l = t(184093);
  function o(e, s, t) {
    let { isSelected: o } = s,
      { isPressed: a, buttonProps: r } = (0, i.s)(
        { ...e, onPress: (0, d.c)(s.toggle, e.onPress) },
        t,
      );
    return {
      isPressed: a,
      isSelected: o,
      isDisabled: e.isDisabled || !1,
      buttonProps: (0, l.v)(r, { "aria-pressed": o }),
    };
  }
}
