/* Recovered shipped factory. Module 154327.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10407205..10407910
 * Raw property SHA-256: 24e3ed0dcebe9ab0918762d601bdba00bf9517637e00093513739bf6badeef28
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
    dirty: 2,
  });
  function a() {
    let e = (0, i.useRef)(null),
      t = (0, i.useRef)(r),
      n = (0, i.useCallback)(() => {
        let { current: n } = e,
          { dirty: i } = t.current;
        if (null == n || 0 === i) return t.current;
        if (1 === i) {
          let { scrollTop: e, scrollLeft: i } = n;
          t.current = { ...t.current, scrollTop: e, scrollLeft: i, dirty: 0 };
        } else {
          let {
            scrollTop: e,
            scrollLeft: i,
            scrollHeight: r,
            scrollWidth: a,
            offsetHeight: s,
            offsetWidth: l,
          } = n;
          t.current = {
            scrollTop: e,
            scrollLeft: i,
            scrollHeight: r,
            scrollWidth: a,
            offsetHeight: s,
            offsetWidth: l,
            dirty: 0,
          };
        }
        return t.current;
      }, []);
    return { scrollerRef: e, scrollerState: t, getScrollerState: n };
  }
}
