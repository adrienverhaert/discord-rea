/* Recovered shipped factory. Module 279547.
 * Source: recovered/web/assets/55859e2649a90fc5.js
 * UTF-16 property offsets: 831..1142
 * Raw property SHA-256: 26bd0b313001ab822e920249ef5b0e0523af08267b58af804e2069493b7b0ac6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { d: () => a });
  var i = e(582128),
    s = e(913122);
  function a(t) {
    let { onError: n, onSuccess: e, report: a } = t,
      [l, o] = i.useState(!1);
    return {
      reportFalsePositive: i.useCallback(async () => {
        if (!l) {
          o(!0);
          try {
            (await a(), e?.());
          } catch (e) {
            let t = new s.LG(e);
            n?.(t);
          } finally {
            o(!1);
          }
        }
      }, [l, n, e, a]),
      isReportFalsePositiveLoading: l,
    };
  }
}
