/* Recovered shipped factory. Module 628677.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 256763..257108
 * Raw property SHA-256: 150f77761746f999cf9929ccbdf6f61d0f2dfb36d738c6b4057f20c469c2bce5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { R: () => s });
  var l = n(582128),
    i = n(885386),
    r = n(371794),
    a = n(218394);
  function s(e, t) {
    let { shouldAnimate: n = !0 } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      s = i.kt.useSetting(),
      o = (0, a.j)(),
      u = n && o && s;
    return l.useMemo(() => {
      if (e?.image_asset != null)
        return (0, r.YE)(e.application_id, e.image_asset, t, u ? void 0 : "webp");
    }, [t, e, u]);
  }
}
