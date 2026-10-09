/* Recovered shipped factory. Module 818645.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4271283..4271569
 * Raw property SHA-256: e49eb9d7a7eee6661cd2626144be911bbaf6c9512d160274a20c822b3c3d601b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a, W: () => r });
  var i = n(582128);
  function r(e) {
    let { topEmojis: t, newlyAddedEmojis: n, rowSize: i = 9 } = e,
      r = t.slice(0, i - n.length);
    return { visibleTopEmojis: r, visibleNewlyAddedEmojis: n, allEmojis: r.concat(n) };
  }
  function a(e) {
    return i.useMemo(() => r(e), [e]);
  }
  n(732139);
}
