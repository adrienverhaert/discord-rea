/* Recovered shipped factory. Module 366251.
 * Source: recovered/web/assets/7e4c6962db41ed25.js
 * UTF-16 property offsets: 16358..17072
 * Raw property SHA-256: 02ab128f13dedf4a3d287471ef8e8fdf876380c9d84b5f5703de0ee1000a00de
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { A: () => A });
  var n = i(17928),
    l = i(73153),
    s = i(763827);
  let a = {},
    r = !1,
    d = null;
  function u(e) {
    e in a && delete a[e];
  }
  function o() {
    if (!r && s.A.isConnected()) {
      let e = s.A.getChannelId();
      if (null != e) return (u(e), (d = e), (r = !0), !0);
    } else if (r && !s.A.isConnected() && null != d) return (u(d), (d = null), (r = !1), !0);
    return !1;
  }
  class c extends n.Ay.Store {
    static displayName = "VoiceInvitesuggestionsStore ";
    initialize() {
      (this.waitFor(s.A), this.syncWith([s.A], o));
    }
    getIsPopoverDismissed(e) {
      return null != e && (a[e] ?? !1);
    }
    getShouldShowPopover(e) {
      return (
        null != e && s.A.isConnected() && s.A.getChannelId() === e && !this.getIsPopoverDismissed(e)
      );
    }
  }
  let A = new c(l.h, {
    VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER: function (e) {
      let { channelId: t } = e;
      return !a[t] && ((a[t] = !0), !0);
    },
  });
}
