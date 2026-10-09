/* Recovered shipped factory. Module 117600.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4546960..4547739
 * Raw property SHA-256: 8b8d590059059b4285e8a30c1dda84b519760606bce96c863d22df0d8ca2de90
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { CU: () => h, E9: () => u, Z0: () => E, aj: () => I, fj: () => A, lK: () => f });
  var i = n(582128),
    r = n(196765),
    a = n(554146),
    s = n(47899),
    l = n(131607),
    o = n(93055),
    d = n(652215),
    c = n(49999);
  let u = [],
    _ = (0, r.v)(() => ({ suggestions: u, dismiss: d.tEg }));
  function E() {
    return _((e) => e.suggestions);
  }
  function A() {
    return _((e) => e.suggestions.length > 0);
  }
  function h(e) {
    _.setState({ suggestions: e });
  }
  function f() {
    let { hasAccess: e, isFreemium: t } = (0, o.TW)(),
      n = (0, s.Ay)((e) => e.postConnectionOpen),
      r = e && t && n,
      [E, A] = (0, l.kn)(r ? [a.M.FAVORITES_GUILD_SUGGESTIONS] : []),
      f = E === a.M.FAVORITES_GUILD_SUGGESTIONS;
    return (
      i.useLayoutEffect(() => {
        _.setState({
          dismiss: () => {
            (A(c.i.USER_DISMISS), h(u));
          },
        });
      }, [A]),
      i.useLayoutEffect(() => () => _.setState({ dismiss: d.tEg }), []),
      { isEligible: r, isSelected: f }
    );
  }
  function I() {
    return _((e) => e.dismiss);
  }
}
