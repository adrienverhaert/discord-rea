/* Recovered shipped factory. Module 326009.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8167009..8170573
 * Raw property SHA-256: 5a9572b9b10ae89d29978b6c9f4c3b483ced9b139e8fd391dcedf92081f4770a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => y, N: () => O });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(866665),
    o = n(750943),
    d = n(559106),
    c = n(289873),
    u = n(22231),
    _ = n(661531),
    E = n(922016),
    A = n(939249),
    h = n(693875),
    f = n(946274),
    I = n(885386),
    p = n(486020),
    T = n(652215);
  function m(e, t) {
    let { animated: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      i = window.GLOBAL_ENV.CDN_HOST ?? T.f34,
      r = `https://${i}/widget-assets/${e}/${t}`,
      a = p.QB ? "webp" : n ? "gif" : "png";
    return `${r}?format=${a}&animated=${n}`;
  }
  var g = n(458499),
    S = n(660183),
    N = n(842730);
  function C(e, t, n) {
    let i = I.kt.useSetting(),
      [a, s] = r.useState(!1),
      l = r.useCallback(() => s(!0), []),
      o = r.useCallback(() => s(!1), []),
      d = n && null != t && !("localDataUri" in t) && t.isAnimated && !i;
    return (r.useEffect(() => {
      !d ||
        null == t ||
        "localDataUri" in t ||
        (new Image().src = m(e, t.fileId, { animated: !0 }));
    }, [d, e, t]),
    null == t)
      ? { src: void 0, showGifTag: !1, onMouseMove: l, onMouseLeave: o, isHovering: a }
      : "localDataUri" in t
        ? { src: t.localDataUri, showGifTag: !1, onMouseMove: l, onMouseLeave: o, isHovering: a }
        : {
            src: m(e, t.fileId, { animated: n && t.isAnimated && (i || a) }),
            showGifTag: d,
            isHovering: a,
            onMouseMove: l,
            onMouseLeave: o,
          };
  }
  function O(e) {
    let { className: t, userId: n, image: r, canAnimate: a = !0 } = e,
      { src: l, showGifTag: o, onMouseMove: d, onMouseLeave: c } = C(n, r, a);
    return "localDataUri" in r
      ? (0, i.jsx)("div", {
          className: t,
          children: (0, i.jsx)("img", { className: N.Sl, alt: "", src: l }),
        })
      : (0, i.jsxs)("div", {
          className: s()(N.ZS, t),
          onMouseMove: d,
          onMouseLeave: c,
          children: [
            (0, i.jsx)("img", {
              className: N.Sl,
              alt: "",
              src: l,
              width: r.width,
              height: r.height,
            }),
            o ? (0, i.jsx)(h.A, { className: N.pH }) : null,
          ],
        });
  }
  function R(e) {
    let { canEdit: t, isHovering: n } = e;
    return (0, i.jsx)("div", {
      className: N.qf,
      children: t
        ? (0, i.jsx)(l.m, {
            text: S.intl.string(S.t["MsUY/S"]),
            forceOpen: n,
            ariaHidden: !0,
            children: (0, i.jsx)(o.X, { className: N.Dm, size: "md" }),
          })
        : null,
    });
  }
  function L(e) {
    let {
        className: t,
        userId: n,
        image: a,
        imageInputRef: l,
        previewUri: o,
        canAnimate: I = !0,
        cropAndUpload: p,
        editVariant: T,
        lastEdit: m,
      } = e,
      { src: O, showGifTag: L, onMouseMove: y, onMouseLeave: D, isHovering: v } = C(n, a, I),
      b = o ?? O,
      M = r.useRef(null),
      P = l ?? M,
      U = r.useRef(null);
    function w() {
      P.current?.activateUploadDialogue();
    }
    let G = null != m && null != b && null == o;
    return (0, i.jsx)(d.vN, {
      within: !0,
      children: (0, i.jsxs)("div", {
        className: s()(N.kL, t),
        onMouseMove: y,
        onMouseLeave: D,
        children: [
          null != b
            ? (0, i.jsx)("img", { alt: "", src: b, className: N.Sl })
            : (0, i.jsx)(R, { canEdit: !0, isHovering: "tooltip" === T && v }),
          null != o
            ? (0, i.jsx)("div", {
                className: N.ob,
                children: (0, i.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE }),
              })
            : L
              ? (0, i.jsx)(h.A, { className: N.pH })
              : null,
          "overlay" === T && null != b && null == o
            ? (0, i.jsx)("div", {
                className: N.HU,
                "aria-hidden": !0,
                children: (0, i.jsx)(u.PencilIcon, {
                  size: "md",
                  color: _.A.colors.WHITE,
                  className: N._1,
                }),
              })
            : null,
          (0, i.jsx)(f.Ay, {
            ref: P,
            tabIndex: G ? -1 : 0,
            className: G ? N.YZ : void 0,
            "aria-hidden": G,
            onChange: p,
            multiple: !1,
            "aria-label": S.intl.string(S.t["MsUY/S"]),
            title: "",
          }),
          G && null != m
            ? (0, i.jsx)(E.Y, {
                targetElementRef: U,
                position: "bottom",
                disablePointerEvents: !1,
                renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(g.A, {
                    lastEdit: m,
                    cropAndUpload: p,
                    onChangeImage: w,
                    onClose: t,
                  });
                },
                children: (e) =>
                  (0, i.jsx)(A.D, {
                    ...e,
                    innerRef: U,
                    className: N.Eq,
                    "aria-haspopup": "menu",
                    "aria-label": S.intl.string(S.t.RWkUzH),
                  }),
              })
            : null,
        ],
      }),
    });
  }
  function y(e) {
    let {
      className: t,
      canEdit: n,
      userId: r,
      image: a,
      imageInputRef: s,
      previewUri: l,
      canAnimate: o = !0,
      cropAndUpload: d,
      editVariant: c,
      lastEdit: u,
    } = e;
    return n
      ? (0, i.jsx)(L, {
          className: t,
          userId: r,
          image: a,
          imageInputRef: s,
          previewUri: l,
          canAnimate: o,
          cropAndUpload: d,
          editVariant: c,
          lastEdit: u,
        })
      : null == a
        ? (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsx)(R, { canEdit: !1, isHovering: !1 }),
          })
        : (0, i.jsx)(O, { className: t, userId: r, image: a, canAnimate: o });
  }
}
