/* Recovered shipped factory. Module 184015.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9507586..9508081
 * Raw property SHA-256: e7757f3628f11609a90dc911e2d699edf0175ae1e87a6d63655e40135128537c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Z: () => l, j: () => s });
  var i = n(268218),
    r = n(70142),
    a = n(652215);
  function s() {
    return (0, i.sq)({
      createPromise: () => n.e("899193").then(n.t.bind(n, 224273, 23)),
      webpackId: 224273,
    }).then((e) => {
      let { default: t } = e;
      return t;
    });
  }
  function l() {
    let e = r.A.getClient();
    return null == e
      ? s().then((e) =>
          e.client
            .create({ authorization: a.Gg3.BRAINTREE.KEY })
            .then((e) => o(e))
            .catch(() => null),
        )
      : o(e);
  }
  function o(e) {
    return s().then((t) =>
      t.dataCollector
        .create({ client: e })
        .then((e) => e.deviceData)
        .catch(() => null),
    );
  }
}
