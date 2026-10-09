/* Recovered shipped factory. Module 103348.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7709655..7711321
 * Raw property SHA-256: 50aa2f99a48fceabcda0f161c5ca5e95b705931e72e9b9bccdb0c609e831854e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(749394),
    r = n(32731);
  class a {
    id;
    skuIds;
    name;
    summary;
    options;
    createdAt;
    updatedAt;
    skus;
    primaryCollectionId;
    primaryCollectionStyles;
    primaryCollectionPdpBgUrl;
    primaryCollectionWillUnpublishAt;
    gameApplicationId;
    badgeOverride;
    hideBadge;
    constructor(e) {
      ((this.id = e.id),
        (this.skuIds = e.skuIds),
        (this.name = e.name),
        (this.summary = e.summary),
        (this.options = e.options),
        (this.createdAt = e.createdAt),
        (this.updatedAt = e.updatedAt),
        (this.skus = e.skus),
        (this.primaryCollectionId = e.primaryCollectionId),
        (this.primaryCollectionStyles = e.primaryCollectionStyles),
        (this.primaryCollectionPdpBgUrl = e.primaryCollectionPdpBgUrl),
        (this.primaryCollectionWillUnpublishAt = e.primaryCollectionWillUnpublishAt),
        (this.gameApplicationId = e.gameApplicationId),
        (this.badgeOverride = e.badgeOverride),
        (this.hideBadge = e.hideBadge));
    }
    static fromServer(e) {
      let {
        sku_ids: t,
        options: n,
        created_at: s,
        updated_at: l,
        skus: o,
        tenant_metadata: d,
        ...c
      } = e;
      return new a({
        ...c,
        skuIds: t,
        options: n.map((e) => ({ name: e.name, optionValues: e.option_values })),
        createdAt: new Date(s),
        updatedAt: new Date(l),
        skus: o.map((e) => r.A.createFromServer(e)),
        primaryCollectionId: d.collectibles?.primary_collection_id,
        primaryCollectionStyles:
          d.collectibles?.primary_collection_styles != null
            ? i.A.fromServer(d.collectibles.primary_collection_styles)
            : void 0,
        primaryCollectionPdpBgUrl: d.collectibles?.primary_collection_pdp_bg_url,
        primaryCollectionWillUnpublishAt:
          d.collectibles?.primary_collection_will_unpublish_at != null
            ? new Date(d.collectibles.primary_collection_will_unpublish_at)
            : void 0,
        gameApplicationId: d.guild_monetization?.game_server?.game_application_id,
        badgeOverride: d.collectibles?.badge_override,
        hideBadge: d.collectibles?.hide_badge,
      });
    }
  }
}
