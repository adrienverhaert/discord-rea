/* Recovered shipped factory. Module 494921.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 782343..783775
 * Raw property SHA-256: 7b68fdce6169c1e033cfe85b308593ffee566599faac41a86d3ecd5aa05caf88
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { openUploadError: () => T, D: () => p });
  var i = n(477900);
  n(582128);
  var r = n(189213),
    a = n(192308),
    s = n(523527),
    l = n(17928),
    o = n(967198),
    d = n(676279),
    c = n(453771),
    u = n(831318),
    _ = n(660183);
  let E = function (e) {
    let { handleLearnMore: t, effectiveMaxSize: n, ...r } = e,
      a = (0, l.bG)([o.A], () => o.A.getGuildId()),
      s = (0, c.Iu)({ guildId: a, maxSize: n }),
      E = (0, d.TM)()
        ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
        : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, i.jsx)(u.A, {
      title: _.intl.string(_.t["9C+41g"]),
      subtitle: s,
      graphic: { type: "video", src: E, loop: !0, loopAt: 2.1 },
      secondaryCTA: _.intl.string(_.t.ZnqyZ2),
      onSecondaryClick: t,
      ...r,
    });
  };
  var A = n(976860),
    h = n(174459),
    f = n(652215);
  function I(e) {
    let {
      title: t,
      help: n,
      showPremiumUpsell: a,
      effectiveMaxSize: l,
      transitionState: o,
      onClose: d,
    } = e;
    return a
      ? (0, i.jsx)(E, {
          transitionState: o,
          onClose: d,
          handleLearnMore: function () {
            ((0, s.A)(),
              d(),
              h.default.track(f.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: f.JJy.FILE_UPLOAD_UPSELL_MODAL,
                location_object: f.ZSU.NAVIGATION_LINK,
              }),
              (0, A.pX)(f.BVt.APPLICATION_STORE));
          },
          effectiveMaxSize: l,
        })
      : (0, i.jsx)(r.a, {
          title: t,
          subtitle: n,
          transitionState: o,
          actions: [{ text: _.intl.string(_.t["NX+WJN"]), onClick: d, variant: "primary" }],
          onClose: d,
        });
  }
  let p = "UPLOAD_ERROR_MODAL_KEY";
  function T(e) {
    (0, a.openModal)((t) => (0, i.jsx)(I, { ...t, ...e }), { modalKey: p });
  }
}
