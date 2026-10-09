/* Recovered shipped factory. Module 639621.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7276761..7277084
 * Raw property SHA-256: 1cabd2a194f697bb2b4219b68342781987095c9bdee73f4bcce11defe692b15b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => r }), n(938796));
  var i = n(821956);
  function r(e) {
    let {
      id: t,
      username: n,
      discriminator: r,
      globalName: a,
      avatar: s,
      avatarDecoration: l,
      bot: o,
      flags: d,
      premiumType: c,
    } = e;
    return {
      id: t,
      username: n,
      discriminator: r,
      global_name: a,
      avatar: s,
      avatar_decoration_data: (0, i.Xq)(l),
      bot: o,
      flags: d,
      premium_type: c ?? 0,
    };
  }
}
