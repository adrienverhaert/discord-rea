/* Recovered shipped factory. Module 353281.
 * Source: recovered/web/assets/f2f84c482534d769.js
 * UTF-16 property offsets: 702..1147
 * Raw property SHA-256: 1da6ae503efde098a761dbcba5d0ace338ed324fc57c52a94dcb0cc59d7ea5b9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, t) {
  t.d(l, { H: () => s, J: () => i });
  var n = t(477900),
    r = t(582128);
  let a = (0, r.createContext)(null);
  function i(e) {
    let { navigateToStorefrontPage: l, viewProductDetails: t, children: i } = e,
      s = r.useMemo(() => ({ navigateToStorefrontPage: l, viewProductDetails: t }), [l, t]);
    return (0, n.jsx)(a.Provider, { value: s, children: i });
  }
  function s() {
    let e = (0, r.useContext)(a);
    return {
      navigateToStorefrontPage: e?.navigateToStorefrontPage,
      viewProductDetails: e?.viewProductDetails,
    };
  }
}
