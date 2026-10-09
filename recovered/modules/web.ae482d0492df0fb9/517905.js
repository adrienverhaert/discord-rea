/* Recovered shipped factory. Module 517905.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5251292..5252709
 * Raw property SHA-256: b2ba2566a97484781396b74387681db37566c9d5ade07367d848763d7a6abaaf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900);
  n(582128);
  var r = n(292036),
    a = n(922016);
  let s = (0, n(268218).Fe)({
    createPromise: () =>
      Promise.all([
        n.e("123727"),
        n.e("179301"),
        n.e("132073"),
        n.e("918347"),
        n.e("358574"),
        n.e("552653"),
        n.e("689521"),
        n.e("196063"),
        n.e("392028"),
        n.e("124054"),
        n.e("398791"),
        n.e("10886"),
        n.e("424199"),
        n.e("645499"),
        n.e("264236"),
        n.e("543039"),
        n.e("398125"),
        n.e("827708"),
        n.e("266900"),
        n.e("901555"),
        n.e("721690"),
        n.e("117268"),
        n.e("417286"),
        n.e("832817"),
        n.e("425544"),
        n.e("416143"),
        n.e("844695"),
        n.e("92124"),
        n.e("123216"),
        n.e("747017"),
        n.e("165595"),
        n.e("988077"),
        n.e("511527"),
        n.e("763070"),
        n.e("561216"),
        n.e("50015"),
        n.e("313681"),
        n.e("141432"),
        n.e("475166"),
        n.e("829177"),
        n.e("858164"),
        n.e("106943"),
        n.e("232551"),
        n.e("631644"),
        n.e("892340"),
        n.e("14962"),
        n.e("586127"),
        n.e("427032"),
        n.e("875842"),
        n.e("786751"),
        n.e("588940"),
        n.e("770697"),
        n.e("894747"),
        n.e("784041"),
        n.e("466322"),
        n.e("858514"),
        n.e("958428"),
        n.e("470068"),
        n.e("444376"),
        n.e("203589"),
        n.e("491793"),
        n.e("214285"),
        n.e("282783"),
        n.e("649520"),
        n.e("571470"),
        n.e("599141"),
        n.e("70008"),
      ]).then(n.bind(n, 109026)),
    webpackId: 109026,
    renderLoader: () => (0, i.jsx)(r.s, {}),
  });
  function l(e) {
    let { guildId: t, name: n, position: r = "right", onClose: l, targetElementRef: o, ...d } = e;
    return (0, i.jsx)(a.Y, {
      targetElementRef: o,
      position: r,
      clickTrap: !0,
      renderPopout: (e) =>
        (0, i.jsx)(s, {
          ...e,
          onClose: () => {
            (e.closePopout(), l?.());
          },
          guildId: t,
          name: n,
        }),
      ...d,
    });
  }
}
