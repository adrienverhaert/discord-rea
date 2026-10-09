/* Recovered shipped factory. Module 296216.
 * Source: recovered/web/assets/7e4c6962db41ed25.js
 * UTF-16 property offsets: 95..940
 * Raw property SHA-256: ded07ec6de30e5aecaf0ca33dcd0069dcf81ea9d69312d5cbf57ea90e69ccb06
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { F: () => A, J: () => m });
  var n = i(480747),
    l = i(437725),
    s = i(66834),
    a = i(71393),
    r = i(576705),
    d = i(977997),
    u = i(607567),
    o = i(652215);
  let c = "DRAGGABLE_USER";
  function A(e) {
    return (0, n.T)(
      c,
      {
        canDrop(e) {
          let { channel: t } = e,
            i = t.getGuildId(),
            n = a.A.getGuild(i)?.maxVideoChannelUsers ?? -1,
            l = u.Ay.countVoiceStatesForChannel(t.id),
            s = null != i && d.A.hasVideo(t.id) && n > 0 && l >= n + 1;
          return r.A.can(o.xBc.MOVE_MEMBERS, t) && r.A.can(o.xBc.CONNECT, t) && !s;
        },
        drop(e, t) {
          let { channel: i } = e,
            n = d.A.getVoiceStateForUser(t.getItem().user.id);
          n?.channelId !== i.id && s.A.setChannel(i.getGuildId(), t.getItem().user.id, i.id);
        },
      },
      (e, t) => ({ connectUserDropTarget: e.dropTarget(), isUserOver: t.isOver() && t.canDrop() }),
    )(e);
  }
  function m(e) {
    return (0, l.I)(
      c,
      {
        canDrag(e) {
          let { user: t, canDrag: i } = e;
          return i ?? !1;
        },
        beginDrag(e) {
          let { user: t } = e;
          return { user: t };
        },
      },
      (e) => ({ connectUserDragSource: e.dragSource() }),
    )(e);
  }
}
