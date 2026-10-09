/* Recovered shipped factory. Module 996759.
 * Source: recovered/web/assets/1261d3beb74ed8f5.js
 * UTF-16 property offsets: 95..547
 * Raw property SHA-256: 13a4dd431c86453ccf62fcb1b97c3a1efd669fa4785a0c7b98e6db06e005dc78
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, r) {
  r.d(e, { V: () => n });
  var s = r(636537),
    o = r(73153),
    i = r(652215);
  function n(t) {
    return (
      o.h.dispatch({ type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING", applicationId: t }),
      s.Bo.get({ url: i.Rsh.STORE_LAYOUT(t), rejectWithError: !0 })
        .then(
          (e) => (
            o.h.dispatch({
              type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
              applicationId: t,
              layout: e.body,
            }),
            e.body
          ),
        )
        .catch(() => {
          o.h.dispatch({
            type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED",
            applicationId: t,
          });
        })
    );
  }
}
