/* Recovered shipped factory. Module 788883.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6827501..6827843
 * Raw property SHA-256: 1ed6a65d7832ba00fdb2b949de4dfbb93b6b6c2d07fed5dd4cd79d92d3759c93
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(562708),
    r = n(139286);
  function a(e) {
    let { componentType: t, componentId: n, promotionId: a, dismissibleContent: s } = e;
    return (
      (0, r.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: t, component_id: n, promotion_id: a, dismissible_content: s },
      }),
      null
    );
  }
}
