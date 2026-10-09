/* Recovered shipped factory. Module 846922.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5271499..5271975
 * Raw property SHA-256: 7c5d27df48490a0b86df26118f8deaeb204e89aac8508b8eb8e13bde480032f8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { h: () => s, y: () => l });
  var i,
    r = n(196765),
    a = n(121894),
    s =
      (((i = {})[(i.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
      (i[(i.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
      i);
  let l = (0, r.v)((e) => ({
    listings: {},
    setListing: (t, n) =>
      (0, a.r)(() => e((e) => ({ listings: { ...e.listings, [t]: n(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
      (0, a.r)(() => {
        e((e) => ({
          editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: n(e.editStateIdsForGroup[t]) },
        }));
      }),
  }));
}
