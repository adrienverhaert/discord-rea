/* Recovered shipped factory. Module 826308.
 * Source: recovered/web/assets/1e3993d9f0654e3d.js
 * UTF-16 property offsets: 94..672
 * Raw property SHA-256: 3bf3d3dcf29deef5d593fcfd90b07dccde7dd0846f294431819f66e3b951dbdb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, e, l) {
  l.d(e, { A: () => p });
  var o = l(477900),
    t = l(582128),
    a = l(284009),
    c = l.n(a),
    s = l(477782),
    i = l(7689),
    d = l(174459),
    r = l(723702),
    u = l(652215),
    g = l(660183);
  function p(n) {
    let e = t.useCallback(() => {
      (c()(null != n, "text cannot be null"),
        d.default.track(u.HAw.MESSAGE_MENU_GOOGLE_SEARCHED),
        window.open(`https://www.google.com/search?q=${encodeURIComponent(n)}`, "_blank"));
    }, [n]);
    return r.isPlatformEmbedded && null != n && n?.length !== 0
      ? [
          (0, o.jsx)(
            s.Dr,
            {
              id: "search-google",
              label: g.intl.string(g.t["Rd/Mko"]),
              leadingAccessory: { type: "icon", icon: i.MagnifyingGlassIcon },
              action: e,
            },
            "search-google",
          ),
        ]
      : null;
  }
}
