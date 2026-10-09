/* Recovered shipped factory. Module 935094.
 * Source: recovered/web/assets/782d5882697dd8f9.js
 * UTF-16 property offsets: 23378..23686
 * Raw property SHA-256: af3c354a7c8e63395f74428ed28df2d57b047f73686e501c627dfceb568f9705
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { f: () => s });
  var r = n(582128),
    i = n(575593);
  function s(e) {
    let [t, n] = (0, r.useState)(null);
    return {
      previewingVariantIndex: t,
      handleEntering: (0, r.useCallback)(
        (t) => {
          e?.type !== i.R.VARIANTS_GROUP || n(t);
        },
        [e?.type],
      ),
      handleLeaving: (0, r.useCallback)(() => {
        e?.type !== i.R.VARIANTS_GROUP || n(null);
      }, [e?.type]),
    };
  }
}
