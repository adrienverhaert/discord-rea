/* Recovered shipped factory. Module 849134.
 * Source: recovered/web/assets/c9705972df3a47b7.js
 * UTF-16 property offsets: 95..1309
 * Raw property SHA-256: be7c9fae8eb9cdd2f1edd3e248bf6704c853a3fa3a1e9c2fea9027b3431621e0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, a) {
  a.d(t, { A: () => c });
  var s = a(477900),
    r = a(582128),
    n = a(206248),
    i = a(43105),
    o = a(486318),
    l = a(660183),
    g = a(848834);
  function c(e) {
    let {
      targetElementRef: t,
      onRender: a,
      onRequestClose: c,
      onActionClick: u,
      onActionMouseDown: d,
      position: p = "right",
      align: m = "top",
      caretConfig: h = { align: "start" },
      graphicSource: C,
      title: f,
      body: y,
      actionLabel: b,
    } = e;
    r.useEffect(() => {
      a?.();
    }, [a]);
    let k = r.useMemo(() => {
        switch (C.type) {
          case "asset":
            return { type: "image", src: C.src, aspectRatio: "6/4" };
          case "video":
            return;
          case "sku":
            return (0, o.e)({
              imageUrl: C.imageUrl,
              backgroundImageUrl: C.backgroundImageUrl,
              altText: l.intl.string(l.t["ulQB+t"]),
              customClassNames: { containerClassName: g.z, foregroundImageClassName: g._ },
            });
        }
      }, [C]),
      w = { text: b ?? l.intl.string(l.t.RzWDqY), variant: "primary", onClick: u, onMouseDown: d };
    return "video" === C.type
      ? (0, s.jsx)(n.H, {
          shouldShow: !0,
          position: p,
          alignmentStrategy: "edge",
          align: m,
          caretConfig: h,
          badge: { type: "new", variant: "default" },
          onRequestClose: c,
          action: w,
          targetElementRef: t,
          title: f,
          body: y,
          assetUrl: C.src,
        })
      : (0, s.jsx)(i.A, {
          size: "lg",
          shouldShow: !0,
          position: p,
          caretConfig: h,
          gradientColor: "purple",
          alignmentStrategy: "edge",
          align: m,
          badge: { type: "new", variant: "default" },
          onRequestClose: c,
          actions: [w],
          targetElementRef: t,
          title: f,
          body: y,
          graphic: k,
        });
  }
}
