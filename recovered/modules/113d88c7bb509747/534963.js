/* Recovered shipped factory. Module 534963.
 * Source: recovered/web/assets/113d88c7bb509747.js
 * UTF-16 property offsets: 95..507
 * Raw property SHA-256: 2204427bba1f575ba4672be8900b1e70373ee70de8c414a155701b9d4d717f54
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, l) {
  l.d(t, { A: () => o });
  var n = l(636537),
    i = l(73153),
    r = l(652215);
  let o = {
    fetchRegions(e) {
      n.Bo.get({ url: r.Rsh.REGIONS(e), retries: 1, oldFormErrors: !0, rejectWithError: !0 }).then(
        (t) => i.h.dispatch({ type: "LOAD_REGIONS", regions: t.body, guildId: e }),
        () => i.h.dispatch({ type: "LOAD_REGIONS", regions: [], guildId: e }),
      );
    },
    changeCallRegion(e, t) {
      n.Bo.patch({
        url: r.Rsh.CALL(e),
        body: { region: t },
        oldFormErrors: !0,
        rejectWithError: !0,
      });
    },
  };
}
