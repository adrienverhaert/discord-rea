/* Recovered shipped factory. Module 535736.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5241944..5242320
 * Raw property SHA-256: 693dbe6b2118687ff96114976c9be43cfa74c3373aba2930932b0f1ae299ef04
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(500208),
    r = n(652215);
  class a {
    getCreateAttachmentURL(e) {
      return r.Rsh.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
      return r.Rsh.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
      return i.vN;
    }
    getMaxAttachmentsCount() {
      return 10;
    }
    getMaxTotalAttachmentSize() {
      return i._T;
    }
    get shouldReactNativeCompressUploads() {
      return !1;
    }
  }
}
