/* Recovered shipped factory. Module 589812.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9855503..9866325
 * Raw property SHA-256: e595a0f6e9db380b3fa10ab879800861fd27a56a2a8f6c7f604f67bdfc1cfc9e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { kH: () => er });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(430111),
    l = n(598748),
    o =
      (((i = {}).WIDGET_TOP_HERO = "widget_top_hero"),
      (i.WIDGET_TOP_CONTAINED = "widget_top_contained"),
      (i.WIDGET_BOTTOM_STATS = "widget_bottom_stats"),
      (i.WIDGET_BOTTOM_PROGRESS = "widget_bottom_progress"),
      (i.WIDGET_BOTTOM_COLLECTION = "widget_bottom_collection"),
      (i.MINI_PROFILE_HERO_STAT = "mini_profile_hero_stat"),
      (i.MINI_PROFILE_CONTAINED_STAT = "mini_profile_contained_stat"),
      (i.ACTIVITY_ACCESSORY_STAT = "activity_accessory_stat"),
      (i.ADD_WIDGET_PREVIEW_HERO = "add_widget_preview_hero"),
      (i.ADD_WIDGET_PREVIEW_CONTAINED = "add_widget_preview_contained"),
      i),
    d = n(108089);
  let c = a.createContext(null);
  function u() {
    let e = a.useContext(c);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
  }
  var _ = n(503698),
    E = n.n(_),
    A = n(834730),
    h = n(779300),
    f = n(835792);
  function I(e) {
    let { variant: t, media: n, alt: i } = e;
    return null != n
      ? (0, r.jsx)(A.E, {
          variant: t,
          children: (0, r.jsx)("img", {
            src: n.url,
            width: n.width,
            height: n.height,
            className: f.K,
            alt: i ?? "",
          }),
        })
      : null;
  }
  var p = n(436385);
  function T(e) {
    let { width: t, variant: n, className: i } = e;
    return (0, r.jsx)(A.E, {
      variant: n ?? "text-md/normal",
      children: (0, r.jsx)("div", {
        className: E()(p.z, i),
        style: null != t ? { "--skeleton-text-width": t } : void 0,
        children: (0, r.jsx)("div", { className: p.v }),
      }),
    });
  }
  var m = n(33683);
  function g(e) {
    let {
        component: t,
        variant: n,
        color: i,
        required: a = !1,
        className: s,
        lineClamp: l,
        imagePosition: o = "right",
        hideLabel: d = !1,
      } = e,
      { resolveFieldValue: c, numberFormat: _, renderText: f } = u(),
      p = (0, h.Hx)(t, c, _, a, d);
    if ("hidden" === p.status) return null;
    if ("skeleton" === p.status) return (0, r.jsx)(T, { variant: n, className: s });
    let g = null != p.icon ? (0, r.jsx)(I, { media: p.icon, variant: n }) : null;
    return (0, r.jsxs)("div", {
      className: E()(m.k, s),
      children: [
        null != g && "left" === o ? g : null,
        (0, r.jsx)(A.E, { variant: n, color: i, lineClamp: l, children: f?.(p.text) ?? p.text }),
        null != g && "right" === o ? g : null,
      ],
    });
  }
  var S = n(640056);
  function N(e) {
    let { variant: t = "default", textColor: n } = e,
      { surfaceConfig: i } = u(),
      a = "badge" === t;
    return (0, r.jsx)("div", {
      className: S.z,
      children: (0, r.jsx)(g, {
        component: i.components.stat,
        className: S.Q,
        variant: a ? "text-xs/normal" : "text-xs/semibold",
        color: n,
        hideLabel: a,
        required: !0,
        imagePosition: "left",
        lineClamp: 1,
      }),
    });
  }
  var C = n(835887);
  function O(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: E()(C.z, t) });
  }
  var R = n(620632),
    L = n(836032);
  function y(e) {
    let { small: t = !1, image: n } = e;
    return (0, r.jsxs)("div", {
      className: E()(L.kL, { [L.PG]: t }),
      children: [
        (0, r.jsxs)("div", {
          className: L.Qs,
          children: [
            (0, r.jsx)("div", { className: L.wx }),
            (0, r.jsx)("div", { className: L.yF }),
            (0, r.jsxs)("div", {
              className: L.M1,
              children: [
                (0, r.jsx)("div", { className: L.dJ }),
                (0, r.jsx)("div", { className: L.dJ }),
                (0, r.jsx)("div", { className: L.dJ }),
                (0, r.jsx)("div", { className: L.dJ }),
                (0, r.jsx)("div", { className: L.dJ }),
                (0, r.jsx)("div", { className: L.dJ }),
              ],
            }),
          ],
        }),
        n,
      ],
    });
  }
  var D = n(170118);
  function v(e) {
    let { small: t = !1 } = e,
      { surfaceConfig: n, resolveFieldValue: i } = u(),
      a = i(n.components.contained_image?.fields.image, [R.o.MEDIA]);
    return (0, r.jsx)(y, {
      small: t,
      image: (0, r.jsx)("div", {
        className: D.ZS,
        children:
          null != a
            ? (0, r.jsx)("img", { alt: "", src: a.media.url, className: D.Sl })
            : (0, r.jsx)(O, { className: D.h2 }),
      }),
    });
  }
  function b(e) {
    let { media: t, ...n } = e;
    return (0, r.jsx)("img", {
      ...n,
      src: t.url,
      style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
      alt: e.alt ?? "",
    });
  }
  var M = n(506619),
    P = n(15555);
  function U(e) {
    let { surfaceConfig: t, resolveFieldValue: n } = u(),
      i = n(t.components.hero_image?.fields.image, [R.o.MEDIA]);
    return (0, r.jsx)(y, {
      ...e,
      image: (0, r.jsx)("div", {
        className: P.ZS,
        children:
          null != i
            ? (0, r.jsx)(b, { alt: "", media: i.media, className: E()(P.c8, M.g) })
            : (0, r.jsx)(O, { className: P.pm }),
      }),
    });
  }
  var w = n(123292),
    G = n(402233);
  function x(e) {
    let { image: t } = e,
      { header: n, surfaceConfig: i, onClick: a } = u();
    return (0, r.jsxs)("div", {
      className: G.zr,
      children: [
        (0, r.jsxs)("div", {
          className: G.rf,
          children: [
            n,
            (0, r.jsxs)("div", {
              className: G.Qs,
              children: [
                (0, r.jsx)(g, {
                  component: i.components.stat,
                  variant: "heading-sm/semibold",
                  lineClamp: 1,
                  required: !0,
                }),
                (0, r.jsx)(w.Q, {
                  textVariant: "text-xs/normal",
                  variant: "secondary",
                  text: "View All Stats",
                  onClick: a,
                }),
              ],
            }),
          ],
        }),
        t,
      ],
    });
  }
  var k = n(425367);
  function F() {
    let { surfaceConfig: e, resolveFieldValue: t } = u(),
      n = t(e.components.contained_image?.fields.image, [R.o.MEDIA]);
    return (0, r.jsx)(x, {
      image: (0, r.jsx)("div", {
        className: k.ZS,
        children:
          null != n
            ? (0, r.jsx)("img", { alt: "", src: n.media.url, className: k.Sl })
            : (0, r.jsx)(O, { className: k.h2 }),
      }),
    });
  }
  var B = n(853512);
  function V() {
    let { surfaceConfig: e, resolveFieldValue: t } = u(),
      n = t(e.components.hero_image?.fields.image, [R.o.MEDIA]);
    return (0, r.jsx)(x, {
      image:
        null != n
          ? (0, r.jsx)("div", {
              className: B.Xr,
              children: (0, r.jsx)(b, { media: n.media, className: E()(B.c8, M.g) }),
            })
          : (0, r.jsx)(O, { className: B.pm }),
    });
  }
  var H = n(193396);
  function j(e) {
    let { resolveFieldValue: t } = u(),
      n = t(e.componentConfig?.fields.image, [R.o.MEDIA]),
      i = t(e.componentConfig?.fields.name, [R.o.STRING]),
      a = t(e.componentConfig?.fields.description, [R.o.STRING]);
    return (0, r.jsxs)("div", {
      className: H.E4,
      children: [
        null != n
          ? (0, r.jsx)("img", { src: n.media.url, className: H.bA, alt: "" })
          : (0, r.jsx)(O, { className: H.ET }),
        (0, r.jsxs)("div", {
          className: H.Vx,
          children: [
            null != i
              ? (0, r.jsx)(A.E, { variant: "text-sm/medium", lineClamp: 2, children: i.value })
              : (0, r.jsx)(T, { variant: "text-sm/medium", width: "6ch" }),
            null != a
              ? (0, r.jsx)(A.E, {
                  variant: "text-xs/medium",
                  color: "text-subtle",
                  lineClamp: 2,
                  children: a.value,
                })
              : (0, r.jsx)(T, { variant: "text-xs/medium", width: "10ch" }),
          ],
        }),
      ],
    });
  }
  function W() {
    let { surfaceConfig: e } = u();
    return (0, r.jsxs)("div", {
      className: H.zr,
      children: [
        (0, r.jsx)(j, { componentConfig: e.components.item_1 }),
        (0, r.jsx)(j, { componentConfig: e.components.item_2 }),
        (0, r.jsx)(j, { componentConfig: e.components.item_3 }),
        (0, r.jsx)(j, { componentConfig: e.components.item_4 }),
      ],
    });
  }
  var Y = n(141255);
  function K() {
    let { surfaceConfig: e, resolveFieldValue: t } = u(),
      n = a.useId(),
      i = t(e.components.objective?.fields.image, [R.o.MEDIA]),
      s = t(e.components.objective?.fields.name, [R.o.STRING]),
      l = t(e.components.objective?.fields.description, [R.o.STRING]),
      o = t(e.components.progress?.fields.current, [R.o.NUMBER]),
      d = t(e.components.progress?.fields.max, [R.o.NUMBER]),
      c = (0, h.eq)(o, d);
    return (0, r.jsxs)("div", {
      className: Y.zr,
      children: [
        null != i
          ? (0, r.jsx)("img", { src: i.media.url, className: Y.Sl, alt: "" })
          : (0, r.jsx)(O, { className: Y.Sl }),
        (0, r.jsxs)("div", {
          className: Y.Qs,
          children: [
            (0, r.jsx)("div", {
              className: Y.L$,
              role: "progressbar",
              "aria-labelledby": n,
              "aria-valuenow": o?.value ?? 0,
              "aria-valuemax": d?.value ?? 1,
              "aria-valuetext": null != d && null != o ? `${o.value} of ${d.value}` : void 0,
              children: (0, r.jsx)("div", {
                className: Y.qB,
                style: { "--custom-progress": `${c}%` },
              }),
            }),
            (0, r.jsxs)("div", {
              className: Y.P_,
              children: [
                (0, r.jsxs)("div", {
                  className: Y.n_,
                  children: [
                    null != s
                      ? (0, r.jsx)(A.E, {
                          tag: "div",
                          variant: "heading-sm/medium",
                          id: n,
                          lineClamp: 2,
                          children: s.value,
                        })
                      : (0, r.jsx)(T, { variant: "heading-sm/medium" }),
                    null != l
                      ? (0, r.jsx)(A.E, {
                          variant: "text-xs/medium",
                          color: "text-subtle",
                          lineClamp: 2,
                          children: l.value,
                        })
                      : (0, r.jsx)(T, { variant: "text-xs/medium" }),
                  ],
                }),
                null != o
                  ? (0, r.jsx)(A.E, {
                      variant: "text-sm/medium",
                      lineClamp: 1,
                      className: Y.l_,
                      children: null != d ? `${o.value}/${d.value}` : `${(0, h.rr)(o.value)}%`,
                    })
                  : (0, r.jsx)(T, { variant: "text-sm/medium", width: "4ch" }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  var $ = n(620376);
  function z(e) {
    let { component: t, required: n = !1 } = e,
      { resolveFieldValue: i, numberFormat: a, durationFormat: s, renderText: l } = u(),
      o = (0, h.CZ)(
        t,
        i,
        a,
        (e) => {
          let t, n;
          return s.format(
            ((n = Math.floor((t = Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0) / 36e5)),
            {
              hours: n,
              minutes: Math.floor(t / 6e4) % 60,
              seconds: Math.floor(t / 1e3) % 60,
              milliseconds: t % 1e3,
            }),
          );
        },
        n,
      );
    return null == o
      ? null
      : (0, r.jsxs)("div", {
          className: $.k,
          children: [
            "value" === o.value.status
              ? (0, r.jsxs)("div", {
                  className: $.U,
                  children: [
                    (0, r.jsx)(A.E, {
                      variant: "text-sm/medium",
                      lineClamp: 2,
                      children: l?.(o.value.text) ?? o.value.text,
                    }),
                    null != o.value.icon &&
                      (0, r.jsx)(I, { variant: "text-sm/medium", media: o.value.icon }),
                  ],
                })
              : (0, r.jsx)(T, { variant: "text-sm/medium", width: "8ch" }),
            "value" === o.label.status
              ? (0, r.jsx)(A.E, {
                  variant: "text-xs/normal",
                  color: "text-subtle",
                  lineClamp: 2,
                  children: o.label.text,
                })
              : "skeleton" === o.label.status
                ? (0, r.jsx)(T, { variant: "text-xs/normal", width: "6ch" })
                : null,
          ],
        });
  }
  var X = n(374205);
  function Z() {
    let { surfaceConfig: e } = u();
    return (0, r.jsxs)("div", {
      className: X.w,
      children: [
        (0, r.jsx)(z, { component: e.components.stat_1, required: !0 }),
        (0, r.jsx)(z, { component: e.components.stat_2, required: !0 }),
        (0, r.jsx)(z, { component: e.components.stat_3, required: !0 }),
        (0, r.jsx)(z, { component: e.components.stat_4, required: !0 }),
        (0, r.jsx)(z, { component: e.components.stat_5, required: !0 }),
        (0, r.jsx)(z, { component: e.components.stat_6, required: !0 }),
      ],
    });
  }
  var q = n(892203);
  function Q() {
    let { surfaceConfig: e } = u();
    return (0, r.jsxs)("div", {
      className: q.Q,
      children: [
        (0, r.jsx)(g, {
          component: e.components.title,
          variant: "text-lg/medium",
          lineClamp: 2,
          required: !0,
          className: q.D,
        }),
        (0, r.jsx)(g, {
          component: e.components.subtitle_1,
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 2,
        }),
        (0, r.jsx)(g, {
          component: e.components.subtitle_2,
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 2,
        }),
        (0, r.jsx)(g, {
          component: e.components.subtitle_3,
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 2,
        }),
      ],
    });
  }
  var J = n(828575);
  function ee() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = u(),
      i = t(e.components.contained_image?.fields.image, [R.o.MEDIA]);
    return (0, r.jsxs)("div", {
      className: J.zr,
      children: [
        null != n && (0, r.jsx)("div", { className: J.wx, children: n }),
        (0, r.jsx)(Q, {}),
        null != i
          ? (0, r.jsx)("img", { alt: "", src: i.media.url, className: J.Sl })
          : (0, r.jsx)(O, { className: J.h2 }),
      ],
    });
  }
  var et = n(775176);
  function en() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = u(),
      i = t(e.components.hero_image?.fields.image, [R.o.MEDIA]);
    return (0, r.jsxs)("div", {
      className: et.zr,
      children: [
        null != n && (0, r.jsx)("div", { className: et.wx, children: n }),
        (0, r.jsx)("div", { className: et.hQ, children: (0, r.jsx)(Q, {}) }),
        null != i
          ? (0, r.jsx)("div", {
              className: et._j,
              children: (0, r.jsx)("div", {
                className: et.PX,
                children: (0, r.jsx)("img", {
                  alt: "",
                  src: i.media.url,
                  className: E()(et.Sl, M.g),
                }),
              }),
            })
          : (0, r.jsx)(O, { className: et.h2 }),
      ],
    });
  }
  let ei = {
    [l.m.WIDGET_TOP]: {
      [o.WIDGET_TOP_HERO]: () => (0, r.jsx)(en, {}),
      [o.WIDGET_TOP_CONTAINED]: () => (0, r.jsx)(ee, {}),
    },
    [l.m.WIDGET_BOTTOM]: {
      [o.WIDGET_BOTTOM_STATS]: () => (0, r.jsx)(Z, {}),
      [o.WIDGET_BOTTOM_PROGRESS]: () => (0, r.jsx)(K, {}),
      [o.WIDGET_BOTTOM_COLLECTION]: () => (0, r.jsx)(W, {}),
    },
    [l.m.MINI_PROFILE]: {
      [o.MINI_PROFILE_HERO_STAT]: () => (0, r.jsx)(V, {}),
      [o.MINI_PROFILE_CONTAINED_STAT]: () => (0, r.jsx)(F, {}),
    },
    [l.m.ACTIVITY_ACCESSORY]: { [o.ACTIVITY_ACCESSORY_STAT]: (e) => (0, r.jsx)(N, { ...e }) },
    [l.m.ADD_WIDGET_PREVIEW]: {
      [o.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, r.jsx)(U, { ...e }),
      [o.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, r.jsx)(v, { ...e }),
    },
  };
  function er(e) {
    let {
        surface: t,
        surfaceConfig: n,
        resolutionContext: i,
        locale: l,
        header: o,
        onClick: u,
        renderText: _,
        layoutProps: E,
      } = e,
      A = a.useMemo(() => (0, d.e)(l), [l]),
      h = a.useMemo(() => new s.Y(l, { style: "narrow" }), [l]);
    if (null == n) return null;
    let f = ei[t]?.[n.layout];
    return null == f
      ? null
      : (0, r.jsx)(c.Provider, {
          value: {
            surfaceConfig: n,
            locale: l,
            numberFormat: A,
            durationFormat: h,
            header: o,
            onClick: u,
            renderText: _,
            resolutionContext: i,
            resolveFieldValue: (0, R.J)(i),
          },
          children: f(E),
        });
  }
}
