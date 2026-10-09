/* Recovered shipped factory. Module 396787.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5017915..5019005
 * Raw property SHA-256: 421aedccccc09e8e05a63d790b2582c86f1ae8acdbcd10d0b844adfb21d48256
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { F5: () => _, XA: () => A, jv: () => E });
  var i = n(477900);
  n(582128);
  var r = n(653922),
    a = n(192308),
    s = n(157559),
    l = n(308528),
    o = n(793574),
    d = n(576470),
    c = n(339984),
    u = n(660183);
  function _(e, t) {
    return (0, a.openModalLazy)(async () => {
      let { default: r } = await Promise.all([
        n.e("191601"),
        n.e("67702"),
        n.e("1214"),
        n.e("475006"),
        n.e("863232"),
        n.e("536200"),
        n.e("844695"),
        n.e("50015"),
        n.e("631644"),
        n.e("534822"),
        n.e("790244"),
        n.e("229666"),
        n.e("480436"),
        n.e("93513"),
        n.e("647011"),
        n.e("779149"),
        n.e("90017"),
        n.e("199150"),
        n.e("760987"),
      ]).then(n.bind(n, 902550));
      return (n) =>
        (0, i.jsx)(r, {
          maxFileSizeBytes: 8388608,
          onComplete: e,
          uploadType: c.HL.AVATAR,
          showUpsellHeader: !1,
          modalTitle: u.intl.string(u.t["6yrpFR"]),
          analyticsLocation: o.A.GROUP_DM_ICON_EDITOR,
          analyticsLocations: t,
          allowRecentAvatarsSelection: !1,
          ...n,
        });
    });
  }
  function E(e, t) {
    _(
      (n) => {
        l.A.setIcon(e, n.imageUri, t).catch(A);
      },
      [t],
    );
  }
  function A(e) {
    if (e?.body?.retry_after != null) {
      let t = (0, r.A)(new Date(), e.body.retry_after);
      s.A.show({
        title: u.intl.string(u.t.Whhv4w),
        body: u.intl.format(u.t.VIJkAy, {
          duration: (0, i.jsx)(d.A, { showUnits: !0, deadline: t }),
        }),
      });
    }
  }
}
