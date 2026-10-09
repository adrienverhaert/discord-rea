/* Recovered shipped factory. Module 666281.
 * Source: recovered/web/assets/822f1ff553758a00.js
 * UTF-16 property offsets: 8022..8553
 * Raw property SHA-256: 68fc6522bfa3028c901db44c4935d086c996c0558a239c3ae9eccc4e7f67f33f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { v: () => c });
  var r = n(477900),
    i = n(661531),
    a = n(452027),
    l = n(834730),
    s = n(660183),
    u = n(795043);
  function c(e) {
    let {
      fieldLabel: t = s.intl.string(s.t["u+Cw58"]),
      label: n,
      value: c,
      Icon: o,
      iconColor: d = i.A.colors.ICON_SUBTLE,
    } = e;
    return (0, r.jsx)(a.D, {
      label: t,
      children: (0, r.jsxs)("div", {
        className: u.nQ,
        children: [
          (0, r.jsx)(l.E, { className: u.OL, variant: "text-md/normal", children: n }),
          (0, r.jsx)("span", {
            className: u.OL,
            children: (0, r.jsxs)(l.E, {
              variant: "text-md/normal",
              className: u.Kk,
              children: [(0, r.jsx)(o, { color: d, size: "sm" }), c],
            }),
          }),
        ],
      }),
    });
  }
}
