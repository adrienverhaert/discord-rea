/* Recovered shipped factory. Module 458499.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8170574..8171452
 * Raw property SHA-256: ee24503adb8e823a3d98c6ccb8b285e03d292e9495e59efa6b48793ef3fc1558
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(43990),
    s = n(980707),
    l = n(477782),
    o = n(750943),
    d = n(428610),
    c = n(946274),
    u = n(363195),
    _ = n(660183);
  function E(e) {
    let { lastEdit: t, cropAndUpload: n, onChangeImage: E, onClose: A } = e,
      h = (0, r.bG)([u.A], () => u.A.theme);
    function f() {
      (0, c.AM)(t.unprocessedFile, (e, i) => n(e, i, t.transform));
    }
    return (0, i.jsx)(a.N, {
      theme: h,
      children: (e) =>
        (0, i.jsx)("div", {
          className: e,
          children: (0, i.jsx)(s.W, {
            "data-menu-migrated": !0,
            navId: "personal-widget-image-edit-menu",
            onClose: A,
            onSelect: void 0,
            "aria-label": _.intl.string(_.t.RWkUzH),
            children: (0, i.jsxs)(l.rX, {
              children: [
                (0, i.jsx)(l.Dr, {
                  id: "change-image",
                  label: _.intl.string(_.t.dh0LD5),
                  action: E,
                  icon: o.X,
                  leadingAccessory: { type: "icon", icon: o.X },
                }),
                (0, i.jsx)(l.Dr, {
                  id: "reposition-image",
                  label: _.intl.string(_.t.je0LTI),
                  action: f,
                  icon: d.K,
                  leadingAccessory: { type: "icon", icon: d.K },
                }),
              ],
            }),
          }),
        }),
    });
  }
}
