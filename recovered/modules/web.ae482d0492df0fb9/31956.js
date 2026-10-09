/* Recovered shipped factory. Module 31956.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3852349..3853107
 * Raw property SHA-256: a15d466028a1e3c3ed2ef68f26da600c5e603cd176bd50dee33f5e47f825d5cd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(582128),
    r = n(702841),
    a = n(47675),
    s = n(590180);
  function l(e) {
    let { skuId: t, openedAt: n, context: l, analyticsLocations: o } = e,
      d = (0, r.bG)([s.A], () => s.A.getProductFetch(t)),
      c = (0, i.useRef)(void 0),
      u = (0, i.useRef)(void 0),
      _ = (0, i.useRef)(void 0),
      E = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
      if (null == t || null == n) return;
      (u.current !== t || _.current !== n) &&
        ((u.current = t), (_.current = n), (E.current = !1), (c.current = void 0));
      let e = Date.now();
      ((c.current ??= e - n),
        d?.state !== "success" ||
          E.current ||
          ((E.current = !0),
          (0, a.wd)({
            profileUi: "PROFILE_FRAME",
            timeToInteractiveMs: c.current,
            timeToLoadMs: e - n,
            timeToFetchMs:
              null != d.startedAt && null != d.endedAt ? d.endedAt - d.startedAt : void 0,
            viewStartedAt: n,
            fetchStartedAt: d.startedAt,
            analyticsLocations: o,
            ...l,
          })));
    }, [t, n, d]);
  }
}
