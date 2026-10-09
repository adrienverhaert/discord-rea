/* Recovered shipped factory. Module 405810.
 * Source: recovered/web/assets/82e568cb81917576.js
 * UTF-16 property offsets: 95..621
 * Raw property SHA-256: a4af371c3ddae05e549ca4afcb9563a808c77b6dde4c01b44e5d9b39888d5d97
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, i, s) {
  s.d(i, { A: () => t });
  var a = s(477900),
    d = s(582128),
    l = s(821609),
    n = s(946274),
    r = s(428966);
  function t(e) {
    let {
        onChange: i,
        onFileSizeError: s,
        multiple: t = !1,
        disabled: c = !1,
        maxFileSizeBytes: u,
        filters: o,
        ...h
      } = e,
      p = d.useRef(null);
    return (0, a.jsxs)("div", {
      children: [
        (0, a.jsx)("div", {
          className: r.l,
          children: (0, a.jsx)(n.Ay, {
            ref: p,
            onChange: i,
            onFileSizeError: s,
            multiple: t,
            maxFileSizeBytes: u,
            filters: o,
            disabled: c,
            tabIndex: -1,
            "aria-hidden": !0,
          }),
        }),
        (0, a.jsx)(l.$, {
          ...h,
          disabled: c,
          onClick: function () {
            p.current?.activateUploadDialogue();
          },
        }),
      ],
    });
  }
}
