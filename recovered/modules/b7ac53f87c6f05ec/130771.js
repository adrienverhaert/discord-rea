/* Recovered shipped factory. Module 130771.
 * Source: recovered/web/assets/b7ac53f87c6f05ec.js
 * UTF-16 property offsets: 580477..580885
 * Raw property SHA-256: a9d07ef9e2df70b94d70ec69c462a30ac8735aebaf4dec9a80965513524ded8f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => s });
  var i = n(582128),
    l = n(425587);
  let s = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      { refreshOnDepChange: t } = e,
      [n, s] = i.useState([]),
      [r, a] = i.useState(!0);
    async function o() {
      a(!0);
      try {
        let e = await l.A.fetchTeams(!0);
        s(e.body);
      } catch (e) {}
      a(!1);
    }
    let d = i.useRef(!0);
    return (
      i.useEffect(() => {
        (d.current || t) && ((d.current = !1), o());
      }, [t]),
      { teams: n, loading: r, refresh: o }
    );
  };
}
