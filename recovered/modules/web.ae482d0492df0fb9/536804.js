/* Recovered shipped factory. Module 536804.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10412340..10412851
 * Raw property SHA-256: 1998225e8e6c063f5ac7af1e6150f42e7fbf3bc3b2b49e1860047ea77cf5dcb3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(582128);
  let r = Object.freeze({
    scrollTop: 0,
    scrollLeft: 0,
    scrollHeight: 0,
    scrollWidth: 0,
    offsetHeight: 0,
    offsetWidth: 0,
    dirty: 0,
  });
  function a() {
    let e = (0, i.useRef)(null),
      t = (0, i.useCallback)(() => {
        let { current: t } = e;
        if (null != t) {
          let {
            scrollTop: e,
            scrollLeft: n,
            scrollHeight: i,
            scrollWidth: r,
            offsetHeight: a,
            offsetWidth: s,
          } = t;
          return {
            scrollTop: e,
            scrollLeft: n,
            scrollHeight: i,
            scrollWidth: r,
            offsetHeight: a,
            offsetWidth: s,
            dirty: 0,
          };
        }
        return r;
      }, []);
    return { scrollerRef: e, getScrollerState: t };
  }
}
