/* Recovered shipped factory. Module 215655.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3727942..3728285
 * Raw property SHA-256: 94077d30579e630392fd26ee656db2dd0f6709ac3eeba936eee7657cf915ff9c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(582128),
    r = n(625494),
    a = n(652215);
  function s(e, t, n) {
    i.useEffect(() => {
      function i(e) {
        let { timestampMs: i } = e;
        null != n ? n(i) : null != t.current && (t.current.seek(i / 1e3), t.current.play());
      }
      return (
        r._.subscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, i),
        () => {
          r._.unsubscribeKeyed(a.zOV.CLIP_SEEK_VIDEO, e, i);
        }
      );
    }, [e, t, n]);
  }
}
