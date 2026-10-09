/* Recovered shipped factory. Module 252392.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10470318..10472494
 * Raw property SHA-256: aeb0c8e52f9a1eeaac06ac72022457ab325e0536f5c498922f71962f62ea8018
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { y: () => g });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(249686),
    o = n.n(l),
    d = n(661531),
    c = n(603392),
    u = n(628284),
    _ = n(695366),
    E = n(834730),
    A = n(23339),
    h = n(627805);
  function f(e) {
    let { entity: t, className: n } = e,
      r = s()(
        h.EG,
        {
          [h.my]: "avatar" === t.type,
          [h.EB]: "guild" === t.type,
          [h.Hj]: "guild" === t.type && null == t.src,
        },
        n,
      );
    return (0, i.jsx)("span", {
      className: r,
      "aria-hidden": !0,
      children: (0, i.jsx)(I, { entity: t }),
    });
  }
  function I(e) {
    let { entity: t } = e;
    switch (t.type) {
      case "emoji":
        if ("unicode" in t)
          return (0, i.jsx)(E.E, {
            variant: "text-lg/normal",
            color: "text-default",
            tag: "span",
            lineClamp: 1,
            children: t.unicode,
          });
        return (0, i.jsx)("img", { className: h.Sl, src: t.src, alt: t.alt ?? "", draggable: !1 });
      case "avatar":
        return (0, i.jsx)("img", { className: h.Sl, src: t.src, alt: t.alt ?? "", draggable: !1 });
      case "guild":
        if (null == t.src) {
          let e = (0, A.oN)(t.name);
          return (0, i.jsx)(E.E, {
            ...(e.length <= 1
              ? { variant: "text-xs/normal" }
              : e.length <= 4
                ? { variant: "text-xxs/normal" }
                : 5 === e.length
                  ? { variant: "text-xxs/normal", style: { fontSize: 7 } }
                  : { variant: "text-xxs/normal", style: { fontSize: 5 } }),
            color: "text-default",
            tag: "span",
            lineClamp: 1,
            children: e,
          });
        }
        return (0, i.jsx)("img", { className: h.Sl, src: t.src, alt: t.name, draggable: !1 });
      case "image":
        return (0, i.jsx)("img", {
          className: s()(h.Sl, h.M2),
          src: t.src,
          alt: t.alt ?? "",
          draggable: !1,
        });
    }
  }
  function p(e) {
    return "object" == typeof e && null != e && "type" in e && "string" == typeof e.type;
  }
  var T = n(395762);
  let m = {
    success: { color: d.A.colors.ICON_FEEDBACK_POSITIVE, icon: u.y },
    critical: { color: d.A.colors.ICON_FEEDBACK_CRITICAL, icon: _.E },
  };
  function g(e) {
    let { variant: t = "default", text: n, icon: a, iconColor: l, secondaryIconColor: u } = e,
      _ = (0, c.r)(d.A.modules.toast.TEXT_LINE_COUNT),
      A = r.useMemo(() => {
        let e = m[t];
        if (null == e && p(a)) return (0, i.jsx)(f, { entity: a });
        let n = e?.icon ?? (p(a) ? void 0 : a);
        if (null == n) return null;
        let r = { color: e?.color ?? l ?? d.A.colors.ICON_DEFAULT };
        return (
          null != u && (r.secondaryColor = u),
          (0, i.jsx)(n, { className: T.icon, size: "sm", ...r })
        );
      }, [a, l, u, t]);
    return (0, i.jsxs)("div", {
      className: s()(T.wrapper, T[t]),
      children: [
        (0, i.jsx)("div", { className: s()(T.baselayer, T[t]) }),
        (0, i.jsxs)("div", {
          className: T.content,
          children: [
            A,
            !o()(n) &&
              (0, i.jsx)(E.E, {
                variant: "text-md/normal",
                color: "text-strong",
                lineClamp: _,
                children: n,
              }),
          ],
        }),
      ],
    });
  }
}
