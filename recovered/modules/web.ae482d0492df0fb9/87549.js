/* Recovered shipped factory. Module 87549.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7002986..7003403
 * Raw property SHA-256: 0d742e5732351538d67eb0ae6d79a19402acd8fcec788299b1820c3f9c310e67
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  let i = (0, n(196765).v)((e) => ({
      utmSourceCurrent: void 0,
      utmMediumCurrent: void 0,
      utmCampaignCurrent: void 0,
      utmContentCurrent: void 0,
      setUtmCurrentContext: (t) => {
        let {
          utmSourceCurrent: n,
          utmMediumCurrent: i,
          utmCampaignCurrent: r,
          utmContentCurrent: a,
        } = t;
        return e({
          utmSourceCurrent: n,
          utmMediumCurrent: i,
          utmCampaignCurrent: r,
          utmContentCurrent: a,
        });
      },
      getUtmCurrentContext: () => i.getState(),
    })),
    r = i;
}
