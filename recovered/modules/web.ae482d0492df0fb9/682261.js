/* Recovered shipped factory. Module 682261.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2659693..2659952
 * Raw property SHA-256: da1a53cb50e53be2a4aeca232bc29a560b85a060bd3545d4eb7ab3175baa4f95
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(652215);
  function r(e) {
    return (
      null != e &&
      e.type !== i.$pd.CUSTOM_STATUS &&
      (null != e.details ||
        (null != e.assets && (null != e.assets.large_image || null != e.assets.small_text)) ||
        null != e.party ||
        null != e.secrets ||
        null != e.state)
    );
  }
}
