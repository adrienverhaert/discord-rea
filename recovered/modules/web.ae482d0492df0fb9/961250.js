/* Recovered shipped factory. Module 961250.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7228808..7229326
 * Raw property SHA-256: 5697d883a8601f1841844974d625d255f97b143327acb6d33dc67edb485ed579
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => c, uM: () => u });
  var i = n(636537),
    r = n(73153),
    a = n(532309),
    s = n(26508),
    l = n(150092),
    o = n(652215);
  async function d() {
    r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH" });
    try {
      let e =
        (await i.Bo.get({ url: o.Rsh.PROGRAM_REWARDS, rejectWithError: !0 })).body.rewards ?? [];
      r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_SUCCESS", programRewards: e });
    } catch (e) {
      r.h.dispatch({ type: "PROGRAM_REWARDS_FETCH_FAILURE" });
    }
  }
  async function c() {
    (0, l.q)() && (await d());
  }
  async function u() {
    !(0, s.CZ)() || a.A.isFetching() || (await d());
  }
}
