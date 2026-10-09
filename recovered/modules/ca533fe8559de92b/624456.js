/* Recovered shipped factory. Module 624456.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 264924..265257
 * Raw property SHA-256: bc75d8e16abc460dcd85b0cf14287a33b5abe3764ef301612a2aba135eb2fda4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { M: () => r, l: () => a });
  var l = n(284009),
    i = n.n(l);
  function r(e) {
    let t = e.items;
    return (
      i()(1 === t.length, "more than 1 subscription item for role subscription"),
      t[0].planId
    );
  }
  function a(e) {
    let t = e?.renewalMutations?.items;
    if (null != t)
      return (
        i()(t.length <= 1, "more than 1 renewal mutation for role subscription"),
        t?.[0].planId
      );
  }
}
