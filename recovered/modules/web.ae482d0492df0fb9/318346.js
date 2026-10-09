/* Recovered shipped factory. Module 318346.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8417751..8417984
 * Raw property SHA-256: a4af184cbc136bcc510999316d3463871a7962b90565d1196f04a9b29dc64f9a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Y: () => a });
  var i = n(174459),
    r = n(652215);
  function a(e) {
    let { pageType: t, sectionType: n, ctaObject: a } = e;
    i.default.track(r.HAw.ORBS_ENTRYPOINT_CLICKED, {
      location_page: t,
      location_section: n,
      location_object: a,
    });
  }
}
