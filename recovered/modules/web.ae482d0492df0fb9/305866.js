/* Recovered shipped factory. Module 305866.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 814219..815099
 * Raw property SHA-256: 56a4085ccfc141c14c4419696c39704f5168f2421dacdd4df556eb40f8967465
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { M: () => c, l: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(113325),
    s = n(315710),
    l = n(707554),
    o = n(559106),
    d = n(989395);
  let c = r.createContext({ inDialog: void 0 });
  function u(e) {
    let { ref: t, ...n } = e,
      { children: u, impressionType: _, impression: E, disableTrack: A, returnRef: h, ...f } = n,
      I = r.useRef(null),
      p = r.useRef(null),
      [T, m] = r.useState(!1),
      g = T ? p : I;
    ((0, s.tj)(g, { returnRef: h }),
      r.useContext(d.A)(
        { type: _, name: E?.impressionName, properties: E?.impressionProperties },
        { disableTrack: A },
      ));
    let S = r.useCallback(
        (e) => {
          ((I.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e));
        },
        [t],
      ),
      N = r.useCallback(
        (e) => {
          T !== e && m(e);
        },
        [T],
      );
    return (0, i.jsx)(c.Provider, {
      value: { inDialog: !0, setFocusLockDisabled: N },
      children: (0, i.jsxs)("div", {
        ...f,
        ref: S,
        role: "dialog",
        tabIndex: -1,
        "aria-modal": !0,
        children: [
          (0, i.jsx)(a.zR, {}),
          (0, i.jsx)(l.F, {
            forceLevel: 1,
            children: (0, i.jsx)(o.xp, { containerRef: I, children: u }),
          }),
        ],
      }),
    });
  }
}
