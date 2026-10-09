/* Recovered shipped factory. Module 3322.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4553786..4555440
 * Raw property SHA-256: 2ac3a75d6d2bca90342257650ea792076df8ae43725029328a3653b2dd0660d1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => h });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(43105),
    l = n(181079),
    o = n(676168),
    d = n(652215),
    c = n(49999),
    u = n(384539),
    _ = n(660183),
    E = n(988572);
  let A = new Set([
    d.rbe.DM,
    d.rbe.GROUP_DM,
    d.rbe.GUILD_TEXT,
    d.rbe.GUILD_ANNOUNCEMENT,
    d.rbe.GUILD_FORUM,
  ]);
  function h(e) {
    return (0, o.r1)() ? (0, i.jsx)(f, { ...e }) : null;
  }
  function f(e) {
    let {
        targetElementRef: t,
        channelType: n,
        isTargetInViewport: d = !0,
        onVisibilityChange: h,
      } = e,
      [f, I] = r.useState("top"),
      p = r.useRef(null),
      T = r.useRef(null),
      m = (0, a.bG)([l.A], () => l.A.hasStoredFavorites()),
      { shouldShowPopover: g, markPopoverAsDismissed: S } = (0, o.zO)(d && A.has(n));
    if (
      (r.useEffect(() => {
        if (g) return (h?.(!0), () => h?.(!1));
      }, [g, h]),
      r.useLayoutEffect(() => {
        if (g && null != t.current)
          return (
            e(),
            window.addEventListener("resize", e),
            window.addEventListener("scroll", e, !0),
            () => {
              (null != T.current && (window.cancelAnimationFrame(T.current), (T.current = null)),
                window.removeEventListener("resize", e),
                window.removeEventListener("scroll", e, !0));
            }
          );
        function e() {
          null == T.current &&
            (T.current = window.requestAnimationFrame(() => {
              ((T.current = null),
                (function () {
                  let e = t.current?.getBoundingClientRect();
                  if (null == e) return;
                  let n = p.current?.getBoundingClientRect().height ?? 0;
                  I(window.innerHeight - e.top < n ? "bottom" : "top");
                })());
            }));
        }
      }, [g, t]),
      !g)
    )
      return null;
    let N = m ? u.default.TWuDTt : u.default["25YCHl"];
    return (0, i.jsx)(s.A, {
      targetElementRef: t,
      gradientColor: "nitro-pink",
      position: "right",
      alignmentStrategy: "edge",
      align: f,
      caretConfig: { align: "top" === f ? "start" : "end" },
      popoverRef: p,
      badge: { type: "beta", variant: "expressive" },
      graphic: { src: E.A, type: "image", aspectRatio: "16/9" },
      title: _.intl.string(N),
      body: _.intl.string(u.default.DFjrWw),
      onRequestClose: () => S(c.i.USER_DISMISS),
    });
  }
}
