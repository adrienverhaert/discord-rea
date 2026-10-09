/* Recovered shipped factory. Module 181940.
 * Source: recovered/web/assets/a890bc0c554d3ef1.js
 * UTF-16 property offsets: 95..441
 * Raw property SHA-256: 9e81dd3735a3ea1ac7618c0071422460a590d251c352010cc02404adde138ca4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, s) {
  s.d(t, { A: () => a });
  var r = s(582128),
    u = s(868652);
  function a(e, t) {
    let [s, a] = r.useState(!1),
      [i, o] = r.useState(void 0);
    return {
      isLoading: s,
      error: i,
      onToggle: r.useCallback(
        (s) => {
          if (null == t) return Promise.resolve();
          let r = s ? u.Qh : u.pz;
          return (
            a(!0),
            o(void 0),
            r(e, t.skuId)
              .catch((e) => {
                throw (o(e.body?.message ?? void 0), e);
              })
              .finally(() => {
                a(!1);
              })
          );
        },
        [e, t],
      ),
    };
  }
}
