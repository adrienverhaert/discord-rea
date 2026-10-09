/* Recovered shipped factory. Module 753189.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6945979..6946713
 * Raw property SHA-256: a7ac6c0723bb93c470ea8ab0c4e891148117f1397ed6749b6dfe484cff577a07
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(439372),
    r = n(174459),
    a = n(652215);
  class s extends i.A {
    actions = {
      MESSAGE_CREATE: (e) => this.handleMessageCreate(e),
      MESSAGE_UPDATE: (e) => this.handleMessageUpdate(e),
    };
    handleMessageCreate(e) {
      let { message: t } = e;
      this._trackIfSessionMetadataExists(t);
    }
    handleMessageUpdate(e) {
      let { message: t } = e;
      this._trackIfSessionMetadataExists(t);
    }
    _getAuthorizedApplicationIds(e) {
      try {
        return e.authorized_application_ids;
      } catch {
        return null;
      }
    }
    _trackIfSessionMetadataExists(e) {
      null != e.session_metadata &&
        r.default.track(a.HAw.MESSAGE_DISPATCH_SESSION_METADATA_FOUND, {
          message_id: e.id,
          channel_id: e.channel_id,
          author_id: e.author?.id,
          authorized_application_ids: this._getAuthorizedApplicationIds(e.session_metadata),
        });
    }
  }
  let l = new s();
}
