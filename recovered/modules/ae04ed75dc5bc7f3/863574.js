/* Recovered shipped factory. Module 863574.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 913..1457
 * Raw property SHA-256: 87ee92cbf3a6a6f20a80527874234622138c79cc7f0ab550de048d02ee071e43
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Tm: () => o, Wb: () => c, ug: () => d });
  var i = n(477900);
  n(582128);
  var l = n(503698),
    s = n.n(l),
    r = n(622413),
    a = n(255314);
  let o = 660;
  function d(e) {
    return (0, i.jsx)(r.A, {
      ...e,
      className: s()(e.className, { [a.sN]: !e.isHorizontal, [a.wO]: e.isHorizontal }),
    });
  }
  let c = (e) => {
    let { isHorizontal: t } = e;
    return (0, i.jsx)(d, {
      ...e,
      media: function () {
        return (0, i.jsx)("div", {
          className: a.FR,
          children: (0, i.jsx)("div", {
            className: s()(a.Wv, { [a._n]: t }),
            children: (0, i.jsx)("div", { className: a.h$ }),
          }),
        });
      },
      title: function () {
        return (0, i.jsx)("div", { className: s()(a.GE, { [a.E9]: t }) });
      },
    });
  };
}
