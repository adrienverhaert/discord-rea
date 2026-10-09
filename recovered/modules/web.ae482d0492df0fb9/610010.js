/* Recovered shipped factory. Module 610010.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4778029..4779157
 * Raw property SHA-256: 7868bf683d40f5129fca31405f83bc91a1fe738ddb4171c96bb7bb948a0f6e76
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Bp: () => E, EX: () => _, TF: () => f, k0: () => h });
  var i = n(582128),
    r = n(17928),
    a = n(363487),
    s = n(71393),
    l = n(576705),
    o = n(498480),
    d = n(831617),
    c = n(475669);
  function u(e, t, n) {
    let i = !0 === (0, a.G)(t, e),
      r = (0, d.TS)(e.id, n);
    return i && r;
  }
  function _(e) {
    return (0, r.yK)([s.A, l.A], () => s.A.getGuildsArray().filter((t) => u(t, l.A, e)));
  }
  function E(e) {
    return (0, r.bG)([s.A, l.A], () => s.A.getGuildsArray().some((t) => u(t, l.A, e)));
  }
  let A = new Set([
    "363409643973771264",
    "1158877933042143272",
    "1199745463918788740",
    "358422126602223616",
    "1458530944955973852",
    "1402418491272986635",
    "1272751502439612486",
    "1197827812623650866",
    "1361763069696675961",
    "1402418594532298837",
    "1402418344912752671",
    "1129504121708355634",
    "1124358970618953818",
    "1441987315235946546",
  ]);
  function h(e) {
    return null != e && A.has(e);
  }
  function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { shouldFetch: n = !1 } = t,
      a = (0, r.bG)(
        [c.A],
        () => {
          if (null == e) return !1;
          let { catalog: t } = c.A.getGlobalCatalogState();
          return Object.values(t).some((t) => t.gameId === e);
        },
        [e],
      ),
      s = (0, r.bG)([c.A], () => c.A.shouldFetchGlobalCatalog());
    return (
      i.useEffect(() => {
        null != e && n && s && (0, o.K)();
      }, [e, n, s]),
      a
    );
  }
}
