/* Recovered shipped factory. Module 279234.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10563112..10563573
 * Raw property SHA-256: 2dc69212fdaf9292396ec2dc363fdc5d925423d104b2960548b65151dded6e03
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P: () => _, x: () => E });
  var i = n(941426),
    r = n(31436);
  let a = null,
    s = new i.Vy("libdiscore");
  function l(e) {
    s.error(e);
  }
  function o(e) {
    s.warn(e);
  }
  function d(e) {
    s.info(e);
  }
  function c(e) {
    s.verbose(e);
  }
  function u(e) {
    s.trace(e);
  }
  function _() {
    return (
      null == a &&
        (a = (async () => {
          await r.Bf();
          let e = r.vZ();
          (e.installLogCallback(l, o, d, c, u),
            await e.initLibdiscore(),
            (window._libdiscoreInitialized = !0));
        })()),
      a
    );
  }
  function E() {
    return !0 === window._libdiscoreInitialized;
  }
}
