/* Recovered shipped factory. Module 288610.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3907039..3908122
 * Raw property SHA-256: f1f6828c0125f896eca0c9b4199e8a53bc2b810e4d61c67084551ad76d002046
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { R: () => c, p: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(66713),
    s = n(284009),
    l = n.n(s);
  let o = r.createContext(void 0);
  function d(e) {
    let { children: t } = e,
      [n, a] = r.useState(null),
      s = r.useMemo(() => ({ setComponentToSnapshot: a }), [a]);
    return (0, i.jsxs)(o.Provider, {
      value: s,
      children: [
        t,
        null != n &&
          (0, i.jsx)("div", {
            id: "component-to-image-container",
            style: { position: "fixed", top: "-1000px", right: "-1000px" },
            children: n,
          }),
      ],
    });
  }
  function c(e) {
    let { renderComponent: t, imageOptions: n } = e,
      i = r.useContext(o);
    l()(null != i, "useComponentToImageContext must be used within a ComponentToImageProvider");
    let [s, d] = r.useState(!1);
    return {
      generatingImage: s,
      generateImage: function () {
        return (
          l()(
            null != i,
            "useComponentToImageContext must be used within a ComponentToImageProvider",
          ),
          new Promise((e, r) => {
            async function s(t) {
              l()(
                null != i,
                "useComponentToImageContext must be used within a ComponentToImageProvider",
              );
              try {
                let i = await (0, a.ZR)(t, n);
                (l()(null != i, "Unable to generate image"), e(i));
              } catch (e) {
                r(e);
              } finally {
                (d(!1), i.setComponentToSnapshot(null));
              }
            }
            (d(!0), i.setComponentToSnapshot(t({ generateImageRef: s })));
          })
        );
      },
    };
  }
}
