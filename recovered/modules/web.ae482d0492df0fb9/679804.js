/* Recovered shipped factory. Module 679804.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4592388..4592974
 * Raw property SHA-256: 2c38f8e8b21d248f5d2bf569797fe4c870272a71eb75dcca0345ac29d966ee0d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(734057);
  let r = new (class {
    filterTagIds;
    sortOrder;
    layout;
    tagSetting;
    setFilterTagIds = (e) => {
      this.filterTagIds = e;
    };
    setSortOrder = (e) => {
      this.sortOrder = e;
    };
    setLayout = (e) => {
      this.layout = e;
    };
    setTagSetting = (e) => {
      this.tagSetting = e;
    };
    getFilterTagIdsAnalytics = () =>
      null != this.filterTagIds ? Array.from(this.filterTagIds) : [];
    getSortOrderAnalytics = (e) => this.sortOrder ?? i.A.getChannel(e)?.getDefaultSortOrder();
    getLayoutAnalytics = (e) => this.layout ?? i.A.getChannel(e)?.getDefaultLayout();
    getTagSettingAnalytics = (e) => this.tagSetting ?? i.A.getChannel(e)?.getDefaultTagSetting();
  })();
}
