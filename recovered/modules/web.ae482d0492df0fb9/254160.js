/* Recovered shipped factory. Module 254160.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3772891..3773155
 * Raw property SHA-256: 34f5164b5b76b3a22b3e955236feceb5deddd0fe3c31e40a0663e3c6f47a1dee
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { f: () => s });
  var i = n(887924);
  let r = new (n(626584).A)("codedLinkQueue"),
    a = new i.default({ concurrency: 5, intervalCap: 10, interval: 2e3 });
  function s(e) {
    a.add(e);
  }
  a.on("add", () => {
    a.size > 0 && r.warn("Message link fetch queue backlog:", a.size);
  });
}
