/* Recovered shipped factory. Module 215497.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3364503..3366365
 * Raw property SHA-256: 0492bd792089b4045d7a712e4fcb82517b54c02f2a7b73b543983757c69b7f9a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L: () => f, A: () => p });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(837381),
    d = n(559106),
    c = n(608299),
    u = n(101555),
    _ = n(625494),
    E = n(652215),
    A = n(660183),
    h = n(33720),
    f =
      (((i = {})[(i.SMALL = 0)] = "SMALL"),
      (i[(i.MEDIUM = 1)] = "MEDIUM"),
      (i[(i.XXSMALL = 2)] = "XXSMALL"),
      (i[(i.XSMALL = 3)] = "XSMALL"),
      i);
  function I(e) {
    e.stopPropagation();
  }
  let p = function (e) {
    let {
        id: t,
        channelId: n,
        className: i,
        children: s,
        actions: f,
        handleEditModal: p,
        keyboardModeEnabled: T,
        onKeyDown: m,
        draftType: g,
        size: S = 1,
        ref: N,
      } = e,
      C = a.useRef(null),
      { onFocus: O, ...R } = (0, o.rm)(t),
      { handleFocus: L, handleBlur: y } = (function (e) {
        let [t, n] = (0, a.useState)(!1);
        return {
          handleFocus: (0, a.useCallback)(
            (t) => {
              ((t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) &&
                n(!0),
                null != e && e(t));
            },
            [e],
          ),
          handleBlur: (0, a.useCallback)(
            (e) => {
              (e.target !== e.currentTarget && e.currentTarget.contains(document.activeElement)) ||
                n(!1);
            },
            [void 0],
          ),
          isFocused: t,
        };
      })(O),
      D = 0 === S,
      v = null != f;
    return (0, r.jsx)(d.vN, {
      children: (0, r.jsx)("li", {
        ...R,
        onFocus: L,
        onBlur: y,
        onClick: function (e) {
          if (0 === e.detail && null != C.current) {
            let e = C.current.querySelector('[role="button"], button');
            e?.click();
          }
        },
        onKeyDown: function (e) {
          if (T) {
            switch (e.which) {
              case E.Ks6.D:
                (e.preventDefault(), c.A.remove(n, t, g));
                return;
              case E.Ks6.E:
                null != p && (e.preventDefault(), p(e));
                return;
              case E.Ks6.BACKSPACE:
                e.ctrlKey
                  ? (e.preventDefault(), c.A.clearAll(n, g))
                  : (e.preventDefault(), c.A.remove(n, t, g));
                return;
              case E.Ks6.ARROW_UP:
                if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                (e.preventDefault(),
                  _._.dispatchToLastSubscribed(E.jej.FOCUS_MESSAGES, { atEnd: !0 }));
            }
            m?.(e);
          }
        },
        className: l()(h.Se, i),
        ref: N,
        children: (0, r.jsxs)("div", {
          className: h.PO,
          ref: C,
          children: [
            s,
            v
              ? (0, r.jsx)("div", {
                  className: h.TC,
                  children: (0, r.jsx)("div", {
                    className: l()(h.KY, { [h.BN]: D }),
                    onContextMenu: I,
                    "aria-label": A.intl.string(A.t["8Lu3Du"]),
                    children: (0, r.jsx)(u.Ay, { className: l()({ [h.BX]: D }), children: f }),
                  }),
                })
              : null,
          ],
        }),
      }),
    });
  };
}
