/* Recovered shipped factory. Module 800342.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 701471..702350
 * Raw property SHA-256: cf12938acd06d717b4d662afe1c9829e0ba30743f3a1683e7f220ec2a19b7bca
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { JI: () => d, QB: () => c });
  var i = n(636537),
    r = n(73153);
  n(587895);
  var a = n(977445),
    s = n(67480);
  n(328968);
  var l = n(371794),
    o = n(652215);
  function d(e) {
    return (0, l.aP)({
      url: o.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
      query: { application_id: e },
      oldFormErrors: !0,
      rejectWithError: (0, i.fT)(),
    }).then(
      (e) => (
        r.h.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.body.map((e) => ({ ...e, published: !0 })),
        }),
        e.body
      ),
    );
  }
  function c(e) {
    let t = s.A.get(e),
      n = null != t && (0, a.Fs)(t.applicationId);
    return (
      r.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: e }),
      (0, l.aP)({
        url: n ? o.Rsh.STORE_LISTINGS_SKU(e) : o.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e),
        rejectWithError: (0, i.fT)(),
      })
        .then((e) => {
          n
            ? r.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: e.body })
            : r.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: e.body });
        })
        .catch(() => {
          r.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: e });
        })
    );
  }
}
