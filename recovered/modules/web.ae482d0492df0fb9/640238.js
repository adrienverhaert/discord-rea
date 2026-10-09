/* Recovered shipped factory. Module 640238.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 976089..977582
 * Raw property SHA-256: 3b41c740ea590cb6b0d48f7240708e7109a1538ba0aa52f529ca45926ef6d3bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { M: () => E, a: () => _ });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(297264),
    o = n(862482),
    d = n(935462),
    c = n(725570),
    u = n(344146);
  function _(e) {
    let t,
      n,
      {
        header: a,
        children: c,
        confirmText: _,
        cancelText: E,
        className: A,
        onConfirm: h,
        onCancel: f,
        onClose: I,
        onCloseCallback: p,
        bodyClassName: T,
        transitionState: m,
        loading: g = !1,
        confirmButtonColor: S = o.$n.Colors.RED,
        focusCancel: N = !1,
        impression: C,
      } = e,
      O = r.useRef(null);
    return (
      r.useEffect(() => {
        N || setTimeout(() => O.current?.focus(), 0);
      }, [N]),
      r.useLayoutEffect(() => () => p?.()),
      null != E &&
        (t = (0, i.jsx)(o.$n, {
          "data-migration-pending": !0,
          type: "button",
          look: o.$n.Looks.FILLED,
          color: o.$n.Colors.PRIMARY,
          className: u.x,
          size: o.$n.Sizes.MEDIUM,
          disabled: g,
          onClick: () => {
            (f?.(), I());
          },
          autoFocus: N,
          children: E,
        })),
      null != _ &&
        (n = (0, i.jsx)(o.$n, {
          "data-migration-pending": !0,
          buttonRef: O,
          type: "submit",
          size: o.$n.Sizes.MEDIUM,
          color: S,
          submitting: g,
          onClick: async () => {
            try {
              (await h?.(), I());
            } catch (e) {
              throw e;
            }
          },
          autoFocus: !N,
          children: _,
        })),
      (0, i.jsxs)(d.EO, {
        "data-migration-pending": !0,
        className: A,
        transitionState: m,
        impression: C,
        parentComponent: "ConfirmModal",
        children: [
          null != a
            ? (0, i.jsx)(d.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                children: (0, i.jsx)(l.D, { variant: "heading-lg/semibold", children: a }),
              })
            : null,
          (0, i.jsx)(d.$m, { "data-migration-pending": !0, className: s()(u.Q, T), children: c }),
          (0, i.jsxs)(d.jl, { "data-migration-pending": !0, children: [n, t] }),
        ],
      })
    );
  }
  function E(e) {
    return (0, i.jsx)(c.aF, {
      onCloseRequest: e.dismissable ? e.onCancel : null,
      renderModal: (t) => (0, i.jsx)(_, { ...t, ...e }),
    });
  }
}
