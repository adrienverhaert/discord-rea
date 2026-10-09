/* Recovered shipped factory. Module 367513.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 566811..568442
 * Raw property SHA-256: c47ee33dc1536addf26feb71ba8ac4ef4eda6a90ab00be8a77796644b897e3a0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(73153),
    r = n(666860),
    a = n(174459),
    s = n(625494),
    l = n(652215);
  let o = {
    rebuildRTCActiveChannels() {
      i.h.dispatch({ type: "CHANNEL_RTC_ACTIVE_CHANNELS" });
    },
    selectParticipant(e, t) {
      i.h.dispatch({ type: "CHANNEL_RTC_SELECT_PARTICIPANT", channelId: e, id: t });
    },
    popoutParticipant(e, t) {
      i.h.dispatch({ type: "CHANNEL_RTC_POPOUT_PARTICIPANT", channelId: e, participantId: t });
    },
    returnParticipant(e, t) {
      i.h.dispatch({ type: "CHANNEL_RTC_RETURN_PARTICIPANT", channelId: e, participantId: t });
    },
    updateLayout(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.BRT.APP;
      (a.default.track(l.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: t, ...(0, r.QS)(e) }),
        i.h.dispatch({
          type: "CHANNEL_RTC_UPDATE_LAYOUT",
          channelId: e,
          layout: t,
          appContext: n,
        }));
    },
    toggleParticipants(e, t) {
      i.h.dispatch({
        type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN",
        channelId: e,
        participantsOpen: t,
      });
    },
    toggleVoiceParticipantsHidden(e, t) {
      i.h.dispatch({
        type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
        channelId: e,
        voiceParticipantsHidden: t,
      });
    },
    updateStageStreamSize(e, t) {
      i.h.dispatch({ type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE", channelId: e, large: t });
    },
    updateStageVideoLimitBoostUpsellDismissed(e, t) {
      i.h.dispatch({
        type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
        channelId: e,
        dismissed: t,
      });
    },
    updateChatOpen(e, t) {
      (i.h.dispatch({ type: "CHANNEL_RTC_UPDATE_CHAT_OPEN", channelId: e, chatOpen: t }),
        t
          ? setTimeout(() => {
              s._.dispatch(l.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            }, 0)
          : s._.dispatch(l.jej.FOCUS_CHAT_BUTTON));
    },
    jumpToVoiceChannelMessage(e, t, n, r) {
      i.h.dispatch({
        type: "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE",
        guildId: e,
        channelId: t,
        messageId: n,
        jumpType: r,
      });
    },
  };
}
