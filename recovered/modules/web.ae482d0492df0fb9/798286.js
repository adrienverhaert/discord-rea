/* Recovered shipped factory. Module 798286.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7306409..7307954
 * Raw property SHA-256: 707021314330c6fe8baa7ab20f3af74ac13075e6abc7f7eabd60aa2b6acea6bf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    HJ: () => c,
    Hb: () => E,
    Hg: () => d,
    Jk: () => I,
    XS: () => p,
    YT: () => f,
    cw: () => u,
    k0: () => A,
    kF: () => _,
    y5: () => h,
  });
  var i = n(666860),
    r = n(47675),
    a = n(734057),
    s = n(174459),
    l = n(652215);
  function o(e) {
    return a.A.getChannel(e)?.guild_id;
  }
  function d(e) {
    let { channelId: t, selectedTab: n } = e;
    i.Ay.trackWithMetadata(l.HAw.RTC_PANEL_VIEWED, {
      channel_id: t,
      guild_id: o(t),
      selected_tab: n,
    });
  }
  function c(e) {
    let { channelId: t, userId: n } = e;
    i.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFICATION_VIEWED, {
      channel_id: t,
      guild_id: o(t),
      ...(0, r.UI)({ userId: n }),
    });
  }
  function u(e) {
    let { channelId: t, userId: n, analyticsLocation: a } = e;
    i.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFIED, {
      channel_id: t,
      guild_id: o(t),
      location: a,
      ...(0, r.UI)({ userId: n }),
    });
  }
  function _(e) {
    let { channelId: t, userId: n, keyVersion: a, reason: s } = e;
    i.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFICATION_FAILED, {
      channel_id: t,
      guild_id: o(t),
      failure_reason: s,
      key_version: `${a}`,
      ...(0, r.UI)({ userId: n }),
    });
  }
  function E(e) {
    let { channelId: t, userId: n } = e;
    i.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFICATION_CODE_COPIED, {
      channel_id: t,
      guild_id: o(t),
      ...(0, r.UI)({ userId: n }),
    });
  }
  function A(e) {
    let { channelId: t } = e;
    i.Ay.trackWithMetadata(l.HAw.E2EE_CALL_VERIFICATION_CODE_COPIED, {
      channel_id: t,
      guild_id: o(t),
    });
  }
  function h(e) {
    let { channelId: t } = e;
    i.Ay.trackWithMetadata(l.HAw.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
      channel_id: t,
      guild_id: o(t),
    });
  }
  function f() {
    s.default.track(l.HAw.E2EE_SETTINGS_USER_DELETE);
  }
  function I() {
    s.default.track(l.HAw.E2EE_SETTINGS_DEVICE_DELETE);
  }
  function p(e) {
    s.default.track(l.HAw.E2EE_PUBLIC_KEY_MISMATCH, { key_version: `${e}` });
  }
}
