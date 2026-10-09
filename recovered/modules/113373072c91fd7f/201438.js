/* Recovered shipped factory. Module 201438.
 * Source: recovered/web/assets/113373072c91fd7f.js
 * UTF-16 property offsets: 95..307
 * Raw property SHA-256: 318ac028628939c1f8c1663a9e67eed1bc7cacd3b1764dce6f6fff5f2ea9a31e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  r.d(t, { A: () => n });
  var a = r(569926),
    i = r(660183);
  function n(e, t, r) {
    let { data: n, isLoading: s } = (0, a.I)(e);
    return {
      coverImageUrl: n?.getCoverURL(r),
      gameName: n?.name ?? t ?? i.intl.string(i.t.GIWFlF),
      isLoading: s,
    };
  }
}
