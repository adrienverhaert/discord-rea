/* Recovered shipped factory. Module 379261.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10361304..10362002
 * Raw property SHA-256: e3e9125627485875f3391531ee98578a47c7ab7c2021b53e3d8170515e2788fb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { r: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(869431);
  function d(e) {
    let { children: t, className: n, style: a } = e,
      d = r.useRef(null),
      c = r.useRef(null),
      [u, _] = r.useState(null);
    return (
      r.useLayoutEffect(() => {
        !(function () {
          let e = d.current,
            t = c.current;
          if (null == e || null == t) return;
          let n = t.scrollWidth - e.clientWidth;
          _(n > 0 ? n : null);
        })();
      }, [t]),
      (0, i.jsx)("div", {
        ref: d,
        className: s()(o.kL, n),
        "data-marquee-overflow": null != u,
        style: a,
        children: (0, i.jsx)(l.E, {
          variant: "text-sm/medium",
          color: "none",
          tag: "span",
          ref: c,
          className: o.Qq,
          style:
            null != u
              ? {
                  "--custom-marquee-overflow": `${u}px`,
                  "--custom-marquee-duration": `${Math.min(5, Math.max(2, u / 40))}s`,
                }
              : void 0,
          children: t,
        }),
      })
    );
  }
}
