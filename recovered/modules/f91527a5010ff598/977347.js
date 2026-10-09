/* Recovered shipped factory. Module 977347.
 * Source: recovered/web/assets/f91527a5010ff598.js
 * UTF-16 property offsets: 85383..85685
 * Raw property SHA-256: 539248de2001be58d56715ca1a39f8fce8378e04e921b03a1854257e57250795
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { D: () => s });
  var l = n(17928),
    i = n(232835);
  function s(e, t) {
    return (0, l.bG)(
      [i.A],
      () => {
        if (null == t) return;
        let n = i.A.getMessages(e),
          l = n.findOldest((e) => e.author.id === t);
        if (null != l) {
          for (let e of n.toArray()) {
            if (e.author.id !== t) break;
            e.content.length > l?.content.length && (l = e);
          }
          return l;
        }
      },
      [e, t],
    );
  }
}
