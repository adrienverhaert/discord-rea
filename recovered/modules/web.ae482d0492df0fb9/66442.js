/* Recovered shipped factory. Module 66442.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5013487..5016326
 * Raw property SHA-256: 394238c2945d8d459636978d7e7f1dea0dd9fb3cc923ab4089c5a216d5c24707
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { X: () => R, default: () => L });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(189213),
    d = n(939249),
    c = n(177953),
    u = n(22231),
    _ = n(123292),
    E = n(95477),
    A = n(308528),
    h = n(964486),
    f = n(793574),
    I = n(688810),
    p = n(571694),
    T = n(47167),
    m = n(734057),
    g = n(174459),
    S = n(396787),
    N = n(652215),
    C = n(660183),
    O = n(689094);
  function R(e) {
    let {
        channel: t,
        previewIcon: n,
        onIconChange: r,
        onIconRemove: a,
        analyticsLocations: l,
        petite: o = !1,
        className: E,
        allowRemovingIcon: A = !0,
      } = e,
      h = void 0 !== n ? n : t?.icon != null ? (0, p.Y)(t, 120) : null,
      { analyticsLocations: T } = (0, I.Ay)(l, f.A.GROUP_DM_ICON_EDITOR),
      m = o ? 32 : 64;
    return (0, i.jsxs)("div", {
      className: s()(O.r2, E),
      children: [
        (0, i.jsxs)(d.D, {
          className: s()(O.zc, { [O.ud]: o }),
          "aria-label": C.intl.string(C.t["0qPSMV"]),
          onClick: () => (0, S.F5)(r, T),
          children: [
            null != h
              ? (0, i.jsx)("img", { src: h, alt: "", className: O.Dp })
              : (0, i.jsx)("div", {
                  className: O.Pz,
                  children: (0, i.jsx)(c.n, {
                    size: "custom",
                    width: m,
                    height: m,
                    color: "currentColor",
                  }),
                }),
            (0, i.jsx)("div", {
              className: O.qc,
              children: (0, i.jsx)(u.PencilIcon, {
                color: "currentColor",
                size: o ? "xs" : "refresh_sm",
              }),
            }),
          ],
        }),
        null != h && A
          ? (0, i.jsx)(_.Q, {
              variant: "critical",
              onClick: a,
              "aria-label": C.intl.string(C.t["uY+Nk/"]),
              text: C.intl.string(C.t["uY+Nk/"]),
              textVariant: "text-sm/medium",
              size: "sm",
              role: "button",
              type: "button",
            })
          : null,
      ],
    });
  }
  let L = function (e) {
    let {
        channelId: t,
        onClose: n,
        transitionState: a,
        setHasPendingChanges: s,
        closeOrShowDiscardChangesAlert: d,
        location: c,
      } = e,
      u = (0, l.bG)([m.A], () => m.A.getChannel(t)),
      _ = u?.name,
      p = (0, T.e5)(u),
      [L, y] = r.useState(_ ?? ""),
      [D, v] = r.useState(void 0),
      b = void 0 !== D,
      { analyticsLocations: M } = (0, I.Ay)(c, f.A.GROUP_DM_EDIT_MODAL),
      P = {
        channel_id: t,
        channel_type: u?.type,
        location: c,
        location_stack: M,
        old_name_set: "" !== _,
        old_icon_set: u?.icon != null,
      };
    return (r.useEffect(() => {
      s(L !== _ || b);
    }, [L, _, b, s]),
    (0, h.Ay)(
      () => (
        g.default.track(N.HAw.GDM_EDIT_INTERACTED, { ...P, action: "opened" }),
        () => {
          g.default.track(N.HAw.GDM_EDIT_INTERACTED, { ...P, action: "dismissed" });
        }
      ),
    ),
    null == u)
      ? null
      : (0, i.jsx)(I.f5, {
          value: M,
          children: (0, i.jsx)("form", {
            onSubmit: function (e) {
              e.preventDefault();
              let i = L !== _,
                r = void 0 !== D;
              if (
                (g.default.track(N.HAw.GDM_EDIT_INTERACTED, {
                  ...P,
                  action: "saved",
                  new_name_set: "" !== L,
                  new_icon_set: (r ? D : u?.icon) != null,
                  name_changed: i,
                  icon_changed: r,
                }),
                i || r)
              ) {
                let e = {};
                (i && (e.name = L), r && (e.icon = D), A.A.updateChannel(t, e, c).catch(S.XA));
              }
              n();
            },
            children: (0, i.jsx)(o.a, {
              title: C.intl.string(C.t["5Q9+/L"]),
              actions: [
                { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: d },
                {
                  text: C.intl.string(C.t["R3BPH+"]),
                  variant: "primary",
                  type: "submit",
                  disabled: L === _ && !b,
                },
              ],
              onClose: () => Promise.resolve(d()),
              transitionState: a,
              children: (0, i.jsxs)("div", {
                className: O.jE,
                children: [
                  (0, i.jsx)(R, {
                    channel: u,
                    previewIcon: D,
                    onIconChange: (e) => v(e.imageUri),
                    onIconRemove: () => v(null),
                    analyticsLocations: M,
                  }),
                  (0, i.jsx)(E.k, {
                    "aria-label": C.intl.string(C.t.GEGW3P),
                    placeholder: p ?? "",
                    maxLength: N.Ign,
                    value: L,
                    onChange: y,
                    autoFocus: !0,
                  }),
                ],
              }),
            }),
          }),
        });
  };
}
