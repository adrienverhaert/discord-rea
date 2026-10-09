/* Recovered shipped factory. Module 787458.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2547876..2548994
 * Raw property SHA-256: 770fffe13331739f3ba1c0542e14effd41205450c91d1b0736f9d442d0d914ab
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { m: () => _, B: () => E });
  var i,
    r = n(535736),
    a = n(292348),
    s = n(652215);
  class l {
    getCreateAttachmentURL(e) {
      return s.Rsh.GRAVITY_ATTACHMENTS;
    }
    getDeleteUploadURL(e) {
      return s.Rsh.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
      return s.TbF;
    }
    getMaxAttachmentsCount() {
      return s.XgB;
    }
    getMaxTotalAttachmentSize() {
      return (0, a.jS)({ location: "ICYMIAttachmentUploadTarget" });
    }
    get shouldReactNativeCompressUploads() {
      return !0;
    }
  }
  var o = n(409481),
    d = n(734057),
    c = n(453771);
  class u {
    getCreateAttachmentURL(e) {
      return s.Rsh.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
      return s.Rsh.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
      let t = d.A.getBasicChannel(e);
      return (0, o.C)(c.o2(t?.guild_id));
    }
    getMaxAttachmentsCount() {
      return s.XgB;
    }
    getMaxTotalAttachmentSize() {
      return (0, a.jS)({ location: "MessageAttachmentUploadTarget" });
    }
    get shouldReactNativeCompressUploads() {
      return !0;
    }
  }
  var _ =
    (((i = {})[(i.MESSAGE_ATTACHMENT = 0)] = "MESSAGE_ATTACHMENT"),
    (i[(i.GUILD_PRODUCT_ATTACHMENT = 1)] = "GUILD_PRODUCT_ATTACHMENT"),
    (i[(i.GRAVITY_ATTACHMENT = 2)] = "GRAVITY_ATTACHMENT"),
    i);
  function E(e) {
    switch (e) {
      case 1:
        return new r.A();
      case 2:
        return new l();
      default:
        return new u();
    }
  }
}
