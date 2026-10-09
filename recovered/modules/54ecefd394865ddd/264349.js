/* Recovered shipped factory. Module 264349.
 * Source: recovered/web/assets/54ecefd394865ddd.js
 * UTF-16 property offsets: 2852..3678
 * Raw property SHA-256: 582fe6111b2b941f4f65e82bdc46b57a1c810da79802c0f5f13df26127a1c9ac
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { Zy: () => s, cT: () => u, ih: () => a });
  var r = t(477900);
  t(582128);
  var i = t(192308);
  function l(e) {
    return new Promise((n) => {
      (0, i.openModalLazy)(() =>
        e(
          function () {
            n(!0);
          },
          (e) => (n(!1), e()),
        ),
      );
    });
  }
  function a(e) {
    return l(async (n, i) => {
      let { default: l } = await t.e("706322").then(t.bind(t, 49065));
      return (t) =>
        (0, r.jsx)(l, {
          ...t,
          ruleName: e,
          onConfirm: n,
          onClose: () => i(t.onClose),
          onCancel: () => i(t.onClose),
        });
    });
  }
  function s(e, n) {
    return l(async (i, l) => {
      let { default: a } = await t.e("78785").then(t.bind(t, 92696));
      return (t) =>
        (0, r.jsx)(a, {
          ...t,
          ruleName: e,
          keyword: n,
          onConfirm: i,
          onClose: () => l(t.onClose),
          onCancel: () => l(t.onClose),
        });
    });
  }
  function u(e) {
    return (n) =>
      l(async (i, l) => {
        let { default: a } = await t.e("299979").then(t.bind(t, 146502));
        function s() {
          (n(), i());
        }
        return (n) =>
          (0, r.jsx)(a, {
            ruleName: e,
            ...n,
            onConfirm: s,
            onClose: () => l(n.onClose),
            onCancel: () => l(n.onClose),
          });
      });
  }
}
