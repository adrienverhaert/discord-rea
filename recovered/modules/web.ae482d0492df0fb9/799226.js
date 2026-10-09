/* Recovered shipped factory. Module 799226.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10398284..10399404
 * Raw property SHA-256: fd911553686e627ab743232e67ba4dbf47c8f972805a2505acb739a0979f65a3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { BW: () => o, CE: () => c, DS: () => u, Gy: () => _, m2: () => E });
  var i,
    r = n(582128),
    a = n(971940),
    s = n(888633),
    l = n(167789),
    o = (((i = {}).Loading = "loading"), (i.Loaded = "loaded"), i);
  let d = (0, s.v)(() => ({ riveAssetCache: new Map(), riveOverrideCache: {} }));
  function c(e) {
    let t = e instanceof ArrayBuffer ? e.byteLength.toString() : e?.toString(),
      n = "object" == typeof e && e instanceof ArrayBuffer,
      i = _(t),
      s = d((e) => (null == t ? null : e.riveAssetCache.get(t)));
    return ((0, r.useEffect)(() => {
      if (null == t || null != i || n || d.getState().riveAssetCache.has(t)) return;
      let e = new a.RiveFile({ src: t });
      (0, l.O)(() => {
        (e.init(),
          e.on(a.EventType.Load, () => {
            let n = { status: "loaded", buffer: e.buffer };
            d.setState((e) => ({ riveAssetCache: e.riveAssetCache.set(t, n) }));
          }),
          e.on(a.EventType.LoadError, (e) => {
            console.error("Rive file load error", t, e);
          }));
      });
    }, [t, i, n]),
    null != i)
      ? { status: "loaded", buffer: i }
      : n
        ? { status: "loaded", buffer: e }
        : (s ?? { status: "loading", buffer: null });
  }
  function u(e, t) {
    let n = d.getState().riveOverrideCache;
    d.setState({ riveOverrideCache: { ...n, [e]: t } });
  }
  function _(e) {
    let t = d((e) => e.riveOverrideCache);
    return null == e ? null : t[e];
  }
  function E(e) {
    return null != d((e) => e.riveOverrideCache)[e];
  }
}
