/* Recovered shipped factory. Module 411342.
 * Source: recovered/web/assets/56de58e916bd49dd.js
 * UTF-16 property offsets: 2879..3622
 * Raw property SHA-256: 21e045e36bf123e191b6dadfd560d7a272d7923b648e0a96ee74e90813587758
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { A: () => y });
  var r = e(477900);
  e(582128);
  var a = e(317097),
    i = e(602853),
    c = e(661531),
    o = e(696986),
    s = e(834730),
    l = e(140735),
    h = e(194261),
    u = e(660183),
    d = e(840794);
  function y(t) {
    let { locked: n, role: e, textVariant: y = "text-xs/medium" } = t,
      _ = (0, i.r)(c.A.colors.INTERACTIVE_TEXT_DEFAULT).hex();
    return (0, r.jsx)("div", {
      className: d.ex,
      children: (0, r.jsxs)("div", {
        className: d.b6,
        children: [
          (0, r.jsx)("div", { className: d.yY, style: { backgroundColor: (0, a.Hl)(e.color) } }),
          (0, r.jsx)(o.h, { size: 8, horizontal: !0 }),
          (0, r.jsxs)(s.E, {
            variant: y,
            color: "text-default",
            children: [(0, r.jsx)(l.A, { children: u.intl.string(u.t.RnyseL) }), e.name],
          }),
          !0 === n &&
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(o.h, { size: 8, horizontal: !0 }),
                (0, r.jsx)(h.LockIcon, { size: "md", color: _ }),
              ],
            }),
        ],
      }),
    });
  }
}
