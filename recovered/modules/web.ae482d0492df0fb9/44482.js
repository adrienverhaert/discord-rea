/* Recovered shipped factory. Module 44482.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10422020..10423737
 * Raw property SHA-256: a9e0c99e7596273c784d3247498488cb381efa78c5313c4a36f9f8a3b425db3a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { c: () => _ });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(508770),
    o = n(379261),
    d = n(834730),
    c = n(594615),
    u = n(198450);
  function _(e) {
    let {
        label: t,
        description: n,
        onClick: r,
        "aria-hidden": a,
        leading: l,
        trailing: _,
        inInput: A = !1,
      } = e,
      h = null;
    null != l &&
      (h = (0, i.jsx)("div", {
        className: u.R4,
        children: (0, i.jsx)(E, { accessory: l, leading: !0 }),
      }));
    let f = null;
    null != _ &&
      (f = (0, i.jsx)("div", { className: u.ZY, children: (0, i.jsx)(E, { accessory: _ }) }));
    let I = !A && null != n && "" !== n,
      p = { gridColumnStart: null != h ? "2" : "1", gridColumnEnd: null != f ? "2" : "3" };
    return (0, i.jsxs)("div", {
      className: s()(c.uN, u.uK, { [c.MO]: A }),
      onClick: r,
      "aria-hidden": a,
      "data-has-description": I || void 0,
      children: [
        h,
        A
          ? (0, i.jsx)(d.E, {
              variant: "text-md/normal",
              color: "currentColor",
              lineClamp: 1,
              style: p,
              children: t,
            })
          : (0, i.jsx)(o.r, {
              style: p,
              children: (0, i.jsx)(d.E, {
                tag: "span",
                variant: "text-md/normal",
                color: "currentColor",
                children: t,
              }),
            }),
        I &&
          (0, i.jsx)(d.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            lineClamp: 1,
            style: { gridColumnStart: null != h ? "2" : "1", gridColumnEnd: null != f ? "2" : "3" },
            children: n,
          }),
        f,
      ],
    });
  }
  function E(e) {
    let { accessory: t, leading: n } = e;
    if (null == t) return null;
    if (r.isValidElement(t))
      return (0, i.jsx)("div", { className: s()({ [u.MG]: n }), children: t });
    if ("string" == typeof t)
      return (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: t });
    if ("object" == typeof t && "type" in t)
      switch (t.type) {
        case "image":
          return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: u.mQ });
        case "avatar":
          return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: u.CD });
        case "badge":
          return (0, i.jsx)(l.E, { type: t.badgeType, variant: "brand" });
        default:
          return null;
      }
    return (0, i.jsx)("div", {
      className: u.MG,
      children: (0, i.jsx)(t, { size: "refresh_sm", color: "currentColor" }),
    });
  }
}
