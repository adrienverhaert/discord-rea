/* Recovered shipped factory. Module 855187.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3190082..3191317
 * Raw property SHA-256: e21a84be3836747cf8b0ba18ad70bc7592d8e16f4b594f955ffe86dd02cffbcf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => h });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(638495),
    s = n(192308),
    l = n(477782),
    o = n(635739),
    d = n(39623),
    c = n(952572),
    u = n(280450),
    _ = n(192820),
    E = n(731854),
    A = n(660183);
  function h(e, t) {
    let h = (0, a.k)(),
      {
        videoEnabled: f,
        hasVideoDevice: I,
        videoSupported: p,
      } = (0, r.cf)([_.Ay], () => ({
        videoEnabled: _.Ay.isVideoEnabled(),
        hasVideoDevice: _.Ay.isVideoAvailable(),
        videoSupported: _.Ay.supports(E.O5.VIDEO),
      })),
      T = (0, r.bG)([u.default], () => u.default.getId() === e),
      m = (0, c.A)();
    return p && (!f || m) && T && I
      ? (0, i.jsx)(l.Dr, {
          id: "change-video-background",
          label: f ? A.intl.string(A.t.mZKxHb) : A.intl.string(A.t["vkV93/"]),
          action: function () {
            (0, s.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  n.e("775417"),
                  n.e("932696"),
                  n.e("25839"),
                  n.e("683084"),
                  n.e("650100"),
                  n.e("264236"),
                  n.e("721690"),
                  n.e("809915"),
                  n.e("776750"),
                  n.e("631644"),
                  n.e("534822"),
                  n.e("499941"),
                  n.e("858337"),
                  n.e("820683"),
                  n.e("220287"),
                  n.e("428367"),
                  n.e("480436"),
                  n.e("943371"),
                  n.e("195782"),
                  n.e("655212"),
                  n.e("410534"),
                ]).then(n.bind(n, 308229));
                return (t) => (0, i.jsx)(e, { ...t, videoEnabled: f });
              },
              {
                modalKey: "camera-preview",
                contextKey: null != t ? (0, s.modalContextFromAppContext)(t) : h,
              },
            );
          },
          icon: f ? o.f : d.EyeIcon,
          leadingAccessory: { type: "icon", icon: f ? o.f : d.EyeIcon },
        })
      : null;
  }
}
