/* Recovered shipped factory. Module 219504.
 * Source: recovered/web/assets/8cf9e7ce4c0ac641.js
 * UTF-16 property offsets: 1667..2159
 * Raw property SHA-256: 9b5eba8ca833c18dbd4d568fa10acdc34c5c185bdc3962e7bfada17b7c5c3a82
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => l });
  var i = n(582128);
  function l(e, t) {
    let [n, l] = i.useState(null),
      s = i.useCallback((e) => {
        l(e);
      }, []),
      a = i.useCallback(() => {
        l(null);
      }, []),
      r = i.useCallback(
        (i) => {
          a();
          let l = e.find((e) => {
              let { id: t } = e;
              return n === t;
            }),
            s = e.find((e) => {
              let { id: t } = e;
              return i === t;
            });
          if (null == l || null == s || l === s) return;
          let r = [...e],
            o = r.indexOf(l),
            c = r.indexOf(s),
            d = +(c - o > 0);
          (r.splice(o, 1), (c = r.indexOf(s)), r.splice(c + d, 0, l), t(r));
        },
        [e, n, a, t],
      );
    return { draggingId: n, handleDragStart: s, handleDragReset: a, handleDragComplete: r };
  }
}
