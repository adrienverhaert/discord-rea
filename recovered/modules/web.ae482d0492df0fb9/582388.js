/* Recovered shipped factory. Module 582388.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2642412..2643442
 * Raw property SHA-256: 11e0d1b486f1b3760c141e315e43360e16c06a72b5e985e76aea2d6478c8b82a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(17928),
    r = n(73153),
    a = n(526218),
    s = n(970928);
  class l {
    type;
    applicationId;
    linkId;
    assetId;
    assetPath;
    title;
    description;
    customId;
    constructor(e) {
      const t = (0, a.t)(e.link_id);
      ((this.type = t?.type ?? null),
        (this.applicationId = e.application_id),
        (this.linkId = e.link_id),
        (this.assetId = "asset_id" in e ? e.asset_id : void 0),
        (this.assetPath = "asset_path" in e ? e.asset_path : void 0),
        (this.title = e.title),
        (this.description = e.description),
        (this.customId = e.custom_id));
    }
    getAssetURL() {
      return this.type === a.G.MANAGED
        ? (0, s.uD)(this.applicationId, this.assetId, 512)
        : this.type === a.G.QUICK
          ? (function (e) {
              if (null != e)
                return `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/attachments-quick-links/${e}`;
            })(this.assetPath)
          : void 0;
    }
  }
  let o = {};
  class d extends i.Ay.Store {
    static displayName = "CustomActivityLinksStore";
    getOne(e, t) {
      if (null != o[e]) return o[e][t];
    }
  }
  let c = new d(r.h, {
    CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: function (e) {
      let { applicationId: t, link: n } = e;
      (null == o[t] && (o[t] = Object.create(null)), (o[t][n.link_id] = new l(n)));
    },
    LOGOUT: function () {
      o = {};
    },
  });
}
