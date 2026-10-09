/* Recovered shipped factory. Module 151271.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4471400..4472885
 * Raw property SHA-256: 581cdefda5f796c093576e05c47049374320514874a3481a950b923d46be3198
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    RQ: () => I,
    Ri: () => f,
    U: () => h,
    bf: () => u,
    ed: () => E,
    r$: () => A,
    v8: () => _,
  });
  var i = n(277057),
    r = n.n(i),
    a = n(537812),
    s = n(882035),
    l = n(121894),
    o = n(698279);
  let d = Object.freeze({
      activeView: null,
      lastActiveView: null,
      activeViewType: null,
      activeChannelId: null,
      searchQuery: "",
      isSearchSuggestion: !1,
      pickerId: (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
        return r()(e);
      })(),
      isNitroLockedSectionVisible: !1,
      areOnlyNitroLockedSectionsVisible: !1,
    }),
    c = (0, s.h)()(
      (0, a.Zr)((e, t) => d, {
        name: "expression-picker-last-active-view",
        partialize: (e) => ({ lastActiveView: e.lastActiveView }),
      }),
    );
  function u(e, t, n) {
    (0, l.r)(() =>
      c.setState({
        activeView: e,
        activeViewType: t,
        activeChannelId: n,
        lastActiveView: c.getState().activeView,
      }),
    );
  }
  function _(e, t) {
    let n = c.getState();
    (void 0 !== e && e !== n.activeViewType) ||
      (void 0 !== t && t !== n.activeChannelId) ||
      (null !== n.activeView &&
        (0, l.r)(() =>
          c.setState({
            activeView: null,
            activeViewType: null,
            activeChannelId: null,
            lastActiveView: n.activeView,
          }),
        ));
  }
  function E(e, t) {
    let n = c.getState();
    null == n.activeView
      ? u(n.lastActiveView ?? o.kx.EMOJI, e, t)
      : n.activeViewType !== e || n.activeChannelId !== t
        ? u(n.activeView, e, t)
        : _();
  }
  function A(e, t, n) {
    let i = c.getState();
    i.activeView === e && i.activeViewType === t && i.activeChannelId === n ? _() : u(e, t, n);
  }
  function h(e) {
    (0, l.r)(() => c.setState({ activeView: e, lastActiveView: c.getState().activeView }));
  }
  function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (0, l.r)(() => c.setState({ searchQuery: e, isSearchSuggestion: t }));
  }
  let I = c;
}
