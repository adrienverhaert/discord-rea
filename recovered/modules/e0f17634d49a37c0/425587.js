/* Recovered shipped factory. Module 425587.
 * Source: recovered/web/assets/e0f17634d49a37c0.js
 * UTF-16 property offsets: 727..964
 * Raw property SHA-256: bd1bce3a41068d000a8554c3367200063566f53b9e0fdd79c2b8d6990e848538
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => s });
  var r = n(636537),
    i = n(652215);
  let s = {
    fetchTeams() {
      let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return r.Bo.get({
        url: i.Rsh.TEAMS,
        query: { include_payout_account_status: t },
        rejectWithError: !1,
      });
    },
  };
}
