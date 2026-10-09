/* Recovered shipped factory. Module 923138.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8420983..8421935
 * Raw property SHA-256: 5d245916618266b48dc0246652374318b80f8fe3df94d4bdafe3fed97b34f003
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { I: () => o, z: () => l });
  var i = n(582128),
    r = n(17928),
    a = n(12510),
    s = n(673125);
  function l(e) {
    let t = (0, i.useRef)(!1),
      {
        challengesForOrbWallet: n,
        hasFetchedChallenges: l,
        isFetchingChallenges: o,
        fetchChallengesError: d,
      } = (0, r.cf)([s.Ay], () => ({
        challengesForOrbWallet: s.Ay.challengesForOrbWallet,
        hasFetchedChallenges: s.Ay.hasFetchedChallenges,
        isFetchingChallenges: s.Ay.isFetchingChallenges,
        fetchChallengesError: s.Ay.fetchChallengesError,
      })),
      c = null != e && e.shouldFetch;
    return (
      (0, i.useEffect)(() => {
        !(c && !t.current) ||
          l ||
          o ||
          null != d ||
          (0, a.Od)(function () {
            t.current = !0;
          });
      }, [l, o, c, d]),
      { challengesForOrbWallet: n, hasFetchedChallenges: l, isFetchingChallenges: o, refetch: a.Od }
    );
  }
  function o(e) {
    let t = null == e || !1 !== e.enabled,
      n = (0, i.useRef)(!1),
      { hasUnreadUpdate: l } = (0, r.cf)([s.Ay], () => ({ hasUnreadUpdate: s.Ay.hasUnreadUpdate }));
    return (
      (0, i.useEffect)(() => {
        !t || n.current || s.Ay.hasFetchedChallenges || ((n.current = !0), (0, a.pu)());
      }, [t]),
      { hasUnreadUpdate: l, ackUnread: a.eX }
    );
  }
}
