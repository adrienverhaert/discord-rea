/* Recovered shipped factory. Module 388096.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7391775..7392507
 * Raw property SHA-256: 458203a36e2f3c9fcf3003d9bc1e4ba8cca4fb7ef0c6c727a77e2d559046da41
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(331322),
    s = n(582306),
    l = n(666944),
    o = n(566908),
    d = n(660183),
    c = n(177600);
  function u(e) {
    let { defaultValue: t, onChange: n, scheduledMessageId: u } = e,
      [_, E] = r.useState(t),
      A = (0, o._O)(),
      h = (0, o.yp)(u);
    function f(e) {
      e.isValid() && E(e);
    }
    return (
      r.useEffect(() => {
        n?.(_);
      }, [_, n]),
      (0, i.jsxs)(a.B, {
        direction: "horizontal",
        gap: 16,
        className: c.i,
        children: [
          (0, i.jsx)("div", {
            className: c.f,
            children: (0, i.jsx)(s.J, {
              required: !0,
              label: d.intl.string(d.t.pSZKvM),
              value: _,
              onSelect: f,
              minDate: A,
              maxDate: h,
              disabled: !1,
            }),
          }),
          (0, i.jsx)("div", {
            className: c.f,
            children: (0, i.jsx)(l.c, {
              label: d.intl.string(d.t.GOmEb8),
              required: !0,
              value: _,
              onChange: f,
              hideValue: !1,
              disabled: !1,
              errorMessage: (0, o.Vf)(_, u),
            }),
          }),
        ],
      })
    );
  }
}
