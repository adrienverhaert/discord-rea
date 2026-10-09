/* Recovered shipped factory. Module 473953.
 * Source: recovered/web/assets/f288daae1084c79d.js
 * UTF-16 property offsets: 94..913
 * Raw property SHA-256: 0c9970eeaacea4b3d9caf8d354145a770a23a2dd7f4ad8e4376c3259e3f9c599
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, a, e) {
  e.d(a, { W: () => C, u: () => E });
  var c = e(562708),
    r = e(636537),
    i = e(73153),
    s = e(499785),
    h = e(716357),
    n = e(513446),
    _ = e(652215);
  let o = 0;
  async function p(t) {
    let a = o++;
    i.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: t, requestId: a });
    try {
      let { body: e } = await s.A.get({
        url: _.Rsh.GUILD_SPACE(t),
        trackedActionData: { event: c.NetworkActionNames.GUILD_SPACE_FETCH },
        rejectWithError: !0,
      });
      i.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: t, requestId: a, space: e });
    } catch (e) {
      i.h.dispatch({
        type: "GUILD_SPACE_FETCH_FAILURE",
        guildId: t,
        requestId: a,
        retryable: (0, n.a)(e),
      });
    }
  }
  async function E(t, a) {
    let { shouldRefetch: e = !1 } = a,
      c = h.A.getFetchStatus(t),
      r = h.A.isInBackoff(t);
    "loading" === c || r || (("idle" === c || e) && (await p(t)));
  }
  async function C(t, a) {
    let { body: e } = await r.Bo.patch({
      url: _.Rsh.GUILD_SPACE_SETTINGS(t),
      body: a,
      rejectWithError: !0,
    });
    return e;
  }
}
