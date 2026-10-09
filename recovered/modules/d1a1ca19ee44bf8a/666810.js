/* Recovered shipped factory. Module 666810.
 * Source: recovered/web/assets/d1a1ca19ee44bf8a.js
 * UTF-16 property offsets: 95..685
 * Raw property SHA-256: 29dfe42c4fab30a141f31d5b7f4dd0eed4ca977dcb504f089f9a5f0f2a7755f9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, i, o) {
  o.d(i, { X: () => a, h: () => d });
  var n = o(477900),
    e = o(582128),
    u = o(945810);
  let r = { clickRoutesToGift: !1, showGiftButton: !0 },
    c = (0, u.mj)({
      name: "2026-07-wishlist-direct-to-gifting",
      kind: "user",
      defaultConfig: r,
      variations: {
        1: { clickRoutesToGift: !0, showGiftButton: !0 },
        2: { clickRoutesToGift: !0, showGiftButton: !1 },
      },
    }),
    s = e.createContext(r);
  function a() {
    return e.useContext(s);
  }
  function l(t) {
    let { location: i, children: o } = t,
      e = c.useConfig({ location: i });
    return (0, n.jsx)(s.Provider, { value: e, children: o });
  }
  function d(t) {
    let { isGifting: i, location: o, children: e } = t;
    return i ? (0, n.jsx)(l, { location: o, children: e }) : e;
  }
}
