/* Recovered shipped factory. Module 633075.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7936980..7937715
 * Raw property SHA-256: 9cacf84a33716448cd469cfdb868a1387f3581c050d91fb3549e9ca0d78e927e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => a, R: () => r });
  var i = n(540185);
  class r {
    id;
    type;
    applicationId;
    constructor({ id: e, applicationId: t }) {
      ((this.id = e), (this.type = i.x.APPLICATION), (this.applicationId = t));
    }
    toSubmission() {
      return { id: this.id, data: { type: this.type, application_id: this.applicationId } };
    }
    isUpdatable() {
      return !0;
    }
    isDiscardable() {
      return !1;
    }
    isValid() {
      return !0;
    }
    isEqual(e) {
      return e instanceof r && e.applicationId === this.applicationId;
    }
    getUniqueKey() {
      return `${this.type}-${this.applicationId}`;
    }
    getProfileAnalyticsOptions() {
      return { widgetType: this.type, applicationId: this.applicationId };
    }
    getProfileEditAnalyticsOptions() {
      return { widgetEdited: this.type, applicationId: this.applicationId };
    }
  }
  function a(e, t) {
    return null != t && e instanceof r && e.applicationId === t;
  }
}
