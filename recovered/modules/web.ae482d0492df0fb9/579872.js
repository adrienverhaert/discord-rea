/* Recovered shipped factory. Module 579872.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 724527..725384
 * Raw property SHA-256: cff47d80dc86dddfa9e14a1f930b91da13c75e8d8f3c095cde2071e11d564f48
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => s }), n(321073));
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(660183);
  let s = {
    show(e) {
      let {
        title: t,
        body: s,
        confirmText: l,
        confirmVariant: o = "primary",
        cancelText: d,
        onConfirm: c,
        onCancel: u,
        onCloseCallback: _,
        contextKey: E,
      } = e;
      (0, r.openModalLazy)(
        async () => {
          let { Modal: e } = await Promise.all([n.e("454048"), n.e("304823"), n.e("223976")]).then(
            n.bind(n, 732955),
          );
          return function (n) {
            let r = [];
            return (
              null != d &&
                "" !== d &&
                r.push({
                  text: d,
                  onClick: async () => {
                    (u?.(), await n.onClose());
                  },
                  variant: "secondary",
                }),
              r.push({
                text: null != l ? l : a.intl.string(a.t.BddRzS),
                onClick: async () => {
                  (c?.(), await n.onClose());
                },
                variant: o,
              }),
              (0, i.jsx)(e, { ...n, size: "sm", title: t, subtitle: s, actions: r })
            );
          };
        },
        { onCloseCallback: _, contextKey: E },
      );
    },
    close() {},
    confirm(e) {
      return new Promise((t) => {
        this.show({
          onConfirm() {
            t(!0);
          },
          cancelText: a.intl.string(a.t["ETE/oC"]),
          onCancel() {
            t(!1);
          },
          ...e,
        });
      });
    },
  };
}
