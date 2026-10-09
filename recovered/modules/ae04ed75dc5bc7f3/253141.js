/* Recovered shipped factory. Module 253141.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 42856..44186
 * Raw property SHA-256: c0b476432fe2376f0017bc21fbbe6a74a429457e2e4541329f5198d2e6d39b9a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { EY: () => d, KW: () => c, a: () => r, ig: () => o, kt: () => a });
  var i = n(913122);
  n(576705);
  var l = n(652215),
    s = n(660183);
  let r = "_role";
  function a(e) {
    if (!(e >= 0))
      switch (-e) {
        case l.t02.ENTITY_TOO_LARGE:
          return s.intl.string(s.t.YbdEFK);
        case l.t02.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
          return s.intl.string(s.t.ZaXBoD);
        case 1:
          return s.intl.string(s.t.R0RpRX);
        default:
          return s.intl.formatToPlainString(s.t.cYwlp9, { code: -e });
      }
  }
  function o(e) {
    let { newRoleParams: t } = e;
    if (null != t && "" === t.name.trim()) {
      var n;
      return (
        (n = s.intl.string(s.t["V0B/k6"])),
        new i.LG({
          status: 400,
          body: {
            message: "Invalid form body",
            errors: { [r]: { _errors: [{ code: "", message: n }] } },
          },
        })
      );
    }
  }
  function d(e) {
    let {
        guildProductListing: t,
        name: n,
        priceTier: i,
        description: l,
        image: s,
        imageName: r,
        isImageChanged: a,
        newRoleParams: o,
        hasUnsavedAttachmentChanges: d,
      } = e,
      c = {};
    (t?.name !== n && "" !== n.trim() && (c.name = n),
      (t?.description ?? "") !== l && (c.description = l),
      t?.price_tier !== i && null != i && (c.priceTier = i),
      null != o && "" !== o.name.trim()
        ? (c.createNewRole = !0)
        : null === o && (c.unlinkRole = !0),
      s.startsWith("data:") &&
        (a || (null == t && (Object.keys(c).length > 0 || d))) &&
        ((c.image = s), (c.imageName = r)));
    let u = Object.keys(c).length > 0 || d;
    return {
      changes: c,
      hasUnsavedChanges: u,
      canSaveForDraft: u,
      canSaveForPublished: u,
      canPublishOrUnpublish: !(null == t || u),
    };
  }
  function c(e, t) {
    return `${location.protocol}//${location.host}${l.BVt.GUILD_PRODUCT(e, t)}`;
  }
}
