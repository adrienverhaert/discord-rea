/* Recovered shipped factory. Module 613235.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4997809..4998063
 * Raw property SHA-256: 1ab91beedd222ec739eeec87591223ce12db3597c18c02b8943e8a5a304b3a18
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(660183);
  function r(e) {
    return e.windows.length > 0
      ? e.windows.map((e) => e.title).join(", ")
      : e.applications.length > 0
        ? e.applications.map((e) => e.name).join(", ")
        : e.displays.length > 0
          ? i.intl.string(i.t.R4wpLN)
          : null;
  }
}
