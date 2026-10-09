/* Recovered shipped factory. Module 485745.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8140569..8140912
 * Raw property SHA-256: 146c57fedd4c84dace53b489e3002313d87efc342d6ab50f2589d788ce6a71e6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l, b: () => o });
  var i = n(17928),
    r = n(234e3),
    a = n(836602),
    s = n(61881);
  function l(e) {
    return (0, i.bG)(
      [s.A, a.A],
      () =>
        s.A.hasUnsavedChanges() ||
        (0, r.gz)(a.A.getPendingChanges()) ||
        (!e && a.A.hasUnsavedChanges()),
    );
  }
  function o(e) {
    return (
      s.A.hasUnsavedChanges() ||
      (0, r.gz)(a.A.getPendingChanges()) ||
      (!e && a.A.hasUnsavedChanges())
    );
  }
}
