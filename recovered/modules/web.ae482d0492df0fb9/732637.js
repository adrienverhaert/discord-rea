/* Recovered shipped factory. Module 732637.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2678228..2679333
 * Raw property SHA-256: 174878f8e9126fba861a52ffa4faa1ef4469d6c09408c294b0eef651c9beef97
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(73153),
    l = n(31728),
    o = n(869146),
    d = n(625494),
    c = n(933958),
    u = n(969151),
    _ = n(108959),
    E = n(902439),
    A = n(5867),
    h = n(652215);
  function f(e, t) {
    s.h.wait(() => {
      (0, l.I_)(e, t);
    });
  }
  function I(e) {
    let t,
      { embedId: n, className: s, style: l } = e,
      I = (0, a.bG)([o.A], () => o.A.getWindow(h.MLl.CHANNEL_CALL_POPOUT)),
      p = (0, E.A)(),
      T = (0, a.bG)([c.Ay], () => c.Ay.getActivityPanelMode());
    t =
      null == p || (0, _.A)((0, u.H)(p.location)) || T !== A.Gd.PANEL
        ? (I?.window ?? window)
        : window;
    let m = r.useRef(null),
      g = r.useMemo(() => {
        let e = null;
        return () => {
          null == e &&
            (e = t.requestAnimationFrame(() => {
              (f(n, m.current?.getBoundingClientRect() ?? null), (e = null));
            }));
        };
      }, [n, t]);
    return (
      r.useEffect(
        () => (
          t.addEventListener("resize", g),
          d._.subscribe(h.jej.REMEASURE_TARGET, g),
          () => {
            (t.removeEventListener("resize", g), d._.unsubscribe(h.jej.REMEASURE_TARGET, g));
          }
        ),
        [g, t],
      ),
      r.useLayoutEffect(() => {
        let e = m.current;
        if (null == e) return;
        let t = e.ownerDocument.defaultView;
        if (null == t) return;
        g();
        let i = new t.ResizeObserver(g);
        return (
          i.observe(e),
          () => {
            (i.disconnect(), f(n, null));
          }
        );
      }, [n, g]),
      (0, i.jsx)("div", { ref: m, style: l, className: s })
    );
  }
}
