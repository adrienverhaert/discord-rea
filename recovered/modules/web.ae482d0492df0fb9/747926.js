/* Recovered shipped factory. Module 747926.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7820347..7822526
 * Raw property SHA-256: abb41a57ea9cdac20770b8fb18369df442c92c6978eb05822372051d27001503
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { JA: () => N, Tv: () => C, bA: () => R, xu: () => O });
  var i = n(284009),
    r = n.n(i),
    a = n(73153),
    s = n(465532),
    l = n(608299),
    o = n(666860),
    d = n(9588),
    c = n(267102),
    u = n(892340),
    _ = n(976860),
    E = n(378570),
    A = n(162199),
    h = n(885386),
    f = n(761640),
    I = n(31717),
    p = n(309010),
    T = n(625494),
    m = n(37411),
    g = n(652215),
    S = n(746080);
  function N(e, t, n) {
    if (!(0, u.C$)(e.id)) return void (0, d.showInaccessibleReportPostModal)();
    c.Uw.dispatch(g.jej.POPOUT_CLOSE);
    let i = { state: { hideThreadCallUI: !0 } };
    if (t || !h.SY.getSetting() || __OVERLAY__) {
      (a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
        null != n ? (0, E.N9)(e, { ...i, source: n }) : (0, E.iN)(e.id, i));
      return;
    }
    r()(null != e.parent_id, "all threads must have parents");
    let s = e.getGuildId();
    if (null != s && null != f.Ay.getGuildSidebarState(s)) {
      (a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
        null != n ? (0, E.N9)(e, { ...i, source: n }) : (0, E.iN)(e.id, i));
      return;
    }
    let l = p.Ay.getChannelId();
    (e.parent_id === l || (0, S.mP)(l) || (0, E.iN)(e.parent_id),
      (0, _.pX)(
        g.BVt.CHANNEL_THREAD_VIEW((0, A.j)(e), (0, S.mP)(l) ? S.VV.GUILD_HOME : e.parent_id, e.id),
        e.isForumPost() ? { source: m.H9.FORUM } : void 0,
      ),
      setTimeout(() => {
        T._.dispatch(g.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
      }, 0));
  }
  function C(e, t, n) {
    if (
      (r()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
      r()(!__OVERLAY__, "Cannot create threads in the overlay."),
      (0, o.zV)(g.HAw.THREAD_CREATION_STARTED, {
        location: n,
        channel_id: e.id,
        guild_id: e.guild_id,
      }),
      c.Uw.dispatch(g.jej.POPOUT_CLOSE),
      p.Ay.getChannelId() !== e.id && (0, E.iN)(e.id),
      "" === I.A.getDraft(e.id, I.C.FirstThreadMessage))
    ) {
      let t = I.A.getDraft(e.id, I.C.ChannelMessage);
      (s.A.saveDraft(e.id, "", I.C.ChannelMessage), s.A.saveDraft(e.id, t, I.C.FirstThreadMessage));
    }
    setTimeout(() => {
      a.h.dispatch({
        type: "SIDEBAR_CREATE_THREAD",
        parentChannelId: e.id,
        parentMessageId: t?.id,
        location: n,
      });
    }, 0);
  }
  function O(e, t) {
    ((0, _.pX)(g.BVt.CHANNEL(e, (0, S.mP)(t) ? S.VV.GUILD_HOME : t)),
      a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t }));
  }
  function R(e) {
    (a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
      l.A.clearAll(e, I.C.FirstThreadMessage),
      a.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: I.C.FirstThreadMessage }),
      a.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: I.C.ThreadSettings }));
  }
}
