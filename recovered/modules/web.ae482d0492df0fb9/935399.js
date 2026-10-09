/* Recovered shipped factory. Module 935399.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11655586..11655901
 * Raw property SHA-256: 40f94a01be72ca20546860717deacd2428ca9409728eac3a159a41f662a0e235
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => r, l0: () => s, u5: () => a });
  var i = n(582128);
  function r(e) {
    let t = i.useRef(e);
    i.useEffect(() => t.current(), []);
  }
  function a(e) {
    let t = i.useRef(e);
    i.useLayoutEffect(() => t.current(), []);
  }
  function s(e) {
    let t = i.useRef(e);
    (i.useEffect(() => {
      t.current = e;
    }),
      i.useEffect(
        () => () => {
          t.current();
        },
        [],
      ));
  }
}
