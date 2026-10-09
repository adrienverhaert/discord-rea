/* Recovered shipped factory. Module 191226.
 * Source: recovered/web/assets/c170ce2099e03de9.js
 * UTF-16 property offsets: 24575..24885
 * Raw property SHA-256: 66272bea0254d92fd173438953fc9b625eda345d191dd779e98d7610e2a7477c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { $: () => o });
  var i = n(477900);
  n(582128);
  var l = n(192308);
  function o(e, t) {
    (0, l.openModalLazy)(async () => {
      let { default: l } = await Promise.all([
        n.e("126301"),
        n.e("569080"),
        n.e("577084"),
        n.e("124006"),
        n.e("998186"),
      ]).then(n.bind(n, 112753));
      return (n) => (0, i.jsx)(l, { ...n, message: e, selectedReaction: t });
    });
  }
}
