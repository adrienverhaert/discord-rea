/* Recovered shipped factory. Module 887560.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6115709..6117373
 * Raw property SHA-256: d87af705298c42ce088ae31b10221918301de334ba2cea134bee65513c222e36
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Au: () => A, bH: () => _, gN: () => E, mA: () => h });
  var i = n(702841),
    r = n(832712);
  n(734057);
  var a = n(543465),
    s = n(477427);
  n(769591);
  var l = n(393432),
    o = n(24873),
    d = n(652215),
    c = n(790782),
    u = n(355097);
  function _(e) {
    let t = (0, i.bG)([a.Ay], () => a.Ay.resolveUnreadSetting(e)),
      n = (0, i.bG)([a.Ay], () => a.Ay.resolvedMessageNotifications(e));
    return { unread: t, notification: n, preset: (0, o.jU)(t, n) };
  }
  function E(e, t, n) {
    let i = a.Ay.getChannelIdFlags(e, t);
    n === o.N9.ALL_MESSAGES
      ? r.A.updateChannelOverrideSettings({
          guildId: e,
          channelId: t,
          settings: {
            message_notifications: d.orn.ALL_MESSAGES,
            flags: (0, l.mD)(i, u.vv.UNREADS_ALL_MESSAGES),
          },
          label: s.fd.PresetAll,
        })
      : n === o.N9.HYBRID
        ? r.A.updateChannelOverrideSettings({
            guildId: e,
            channelId: t,
            settings: {
              message_notifications: d.orn.ONLY_MENTIONS,
              flags: (0, l.mD)(i, u.vv.UNREADS_ALL_MESSAGES),
            },
            label: s.fd.PresetHybrid,
          })
        : n === o.N9.MENTIONS
          ? r.A.updateChannelOverrideSettings({
              guildId: e,
              channelId: t,
              settings: {
                message_notifications: d.orn.ONLY_MENTIONS,
                flags: (0, l.mD)(i, u.vv.UNREADS_ONLY_MENTIONS),
              },
              label: s.fd.PresetMentions,
            })
          : n === o.N9.NOTHING &&
            r.A.updateChannelOverrideSettings({
              guildId: e,
              channelId: t,
              settings: {
                message_notifications: d.orn.NO_MESSAGES,
                flags: (0, l.mD)(i, u.vv.UNREADS_ONLY_MENTIONS),
              },
              label: s.fd.PresetNothing,
            });
  }
  function A(e, t) {
    r.A.updateChannelOverrideSettings({
      guildId: e,
      channelId: t,
      settings: {
        message_notifications: d.orn.NULL,
        flags: (0, l.PW)(a.Ay.getChannelIdFlags(e, t)),
      },
      label: s.fd.PresetDefault,
    });
  }
  function h(e, t, n) {
    let i = a.Ay.getChannelIdFlags(e, t);
    r.A.updateChannelOverrideSettings({
      guildId: e,
      channelId: t,
      settings: {
        flags: (0, l.mD)(
          i,
          n === c.e.ALL_MESSAGES ? u.vv.UNREADS_ALL_MESSAGES : u.vv.UNREADS_ONLY_MENTIONS,
        ),
      },
      label: s.G_.unreads(n),
    });
  }
}
