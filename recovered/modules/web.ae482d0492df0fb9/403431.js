/* Recovered shipped factory. Module 403431.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10409117..10409689
 * Raw property SHA-256: 63f3ead57444a1e316a586825c2aee0dd281e41eacc6e4d5c9be01fb69ccb3da
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(582128);
  function r(e, t, n) {
    return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1];
  }
  let a = [0, 0];
  function s(e) {
    let { chunkSize: t, getScrollerState: n, forceUpdate: s } = e,
      { dirty: l, scrollTop: o, offsetHeight: d } = n();
    (0, i.useLayoutEffect)(() => {
      l > 0 && s();
    }, [l, s]);
    let c = (0, i.useRef)(a);
    c.current = r(o, d, t);
    let [u, _] = c.current;
    return {
      forceUpdateOnChunkChange: (0, i.useCallback)(
        (e) => {
          let { dirty: i, scrollTop: a, offsetHeight: l } = n();
          if (i > 0) return;
          let [o, d] = r(a, l, t);
          o !== c.current[0] ? s() : 2 === e && d !== c.current[1] && s();
        },
        [s, t, n],
      ),
      chunkStart: u,
      chunkEnd: _,
      dirty: l,
    };
  }
}
