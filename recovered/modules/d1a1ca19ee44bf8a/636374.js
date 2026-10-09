/* Recovered shipped factory. Module 636374.
 * Source: recovered/web/assets/d1a1ca19ee44bf8a.js
 * UTF-16 property offsets: 1051..1450
 * Raw property SHA-256: 7b241ea689d048819e411d7079052bfc494dcfe9d86c608f6d0a8ac039b1bdf4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, i, o) {
  o.d(i, { P: () => u });
  var n = o(666810),
    e = o(662349);
  function u(t) {
    let { wishlistOwner: i, isOwned: o, shortText: u, onDetailsClick: r, onPurchaseClick: c } = t,
      { clickRoutesToGift: s, showGiftButton: a } = (0, n.X)(),
      {
        label: l,
        icon: d,
        isPromptingPurchase: f,
      } = (0, e.h)({ wishlistOwner: i, isOwned: o, shortText: u }),
      h = s && f;
    return {
      onBodyClick: h ? c : r,
      onOverlayClick: f ? c : r,
      showOverlayButton: !f || a,
      routesToGift: h,
      label: l,
      icon: d,
    };
  }
}
