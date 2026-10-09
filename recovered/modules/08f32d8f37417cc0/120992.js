/* Recovered shipped factory. Module 120992.
 * Source: recovered/web/assets/08f32d8f37417cc0.js
 * UTF-16 property offsets: 38771..39128
 * Raw property SHA-256: b9e08c6bc5528b109a0508f5825a4511064689fe522d1f84a6890e75a983451b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { c: () => c });
  var l = n(582128),
    r = n(635358),
    i = n(830382),
    s = n(354328),
    a = n(67480),
    u = n(202541);
  function c(e) {
    let { applicationId: t, skuIDs: n } = e,
      c = (0, s.A)("shop_include_unpublished"),
      o = l.useMemo(() => n.filter((e) => !u.oz.includes(e)), [n]);
    l.useEffect(() => {
      for (let e of o)
        a.A.isFetching(e) || null != a.A.get(e) || (0, i.EX)(t, e, r.g.VARIANTS_GROUP, c);
    }, [t, o, c]);
  }
}
