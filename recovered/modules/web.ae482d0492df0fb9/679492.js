/* Recovered shipped factory. Module 679492.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8006798..8008021
 * Raw property SHA-256: 0bcb9e1ffa37e45255650c21ae6de7d99ec05a32b00f9524fecb7b086a2e4729
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Hl: () => d, NR: () => u, Pq: () => _, fC: () => c });
  var i = n(477900),
    r = n(582128),
    a = n(284009),
    s = n.n(a),
    l = n(451988);
  let o = r.createContext(void 0);
  function d(e) {
    let { value: t, children: n } = e;
    return (0, i.jsx)(o.Provider, { value: t, children: n });
  }
  function c() {
    let [e, t] = r.useState(null),
      [n, i] = r.useState(null),
      [a, s] = r.useState(null),
      [o, d] = r.useState(r.createRef()),
      c = r.useCallback((e) => {
        (t(e.interactionType), i(e.interactionSource), s(e.interactionSourceId));
      }, []),
      u = r.useCallback((e) => {
        d(e);
      }, []),
      _ = r.useCallback(() => {
        c({ interactionType: null, interactionSource: null, interactionSourceId: null });
      }, [c]),
      [E, A] = r.useState(!1),
      [h, f] = r.useState(null),
      [I] = r.useState(new l.Ep()),
      p = r.useCallback(
        (e) => {
          (f(e), A(!0), null === e ? I.stop() : I.start(2700, () => A(!1)));
        },
        [I],
      );
    return (
      r.useEffect(() => {
        I.stop();
      }, [I]),
      r.useMemo(
        () => ({
          interactionType: e,
          interactionSource: n,
          interactionSourceId: a,
          onInteraction: c,
          setInteractionToast: p,
          resetInteraction: _,
          showInteractionToast: E,
          interactionTypeSent: h,
          interactionPopoutTargetRef: o,
          onInteractionPopoutTargetRefChange: u,
        }),
        [c, p, n, a, E, e, h, _, o, u],
      )
    );
  }
  function u() {
    return r.useContext(o);
  }
  function _() {
    let e = u();
    return (
      s()(
        null != e,
        "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider",
      ),
      e
    );
  }
}
