/* Recovered shipped factory. Module 545185.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4182980..4185009
 * Raw property SHA-256: 28dbc3de9faef683f311586323f68ec639d328c37b7d2ed04b9889951a82d40c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => E }), n(321073));
  var i = n(148494),
    r = n(439372),
    a = n(451909),
    s = n(734057),
    l = n(309010),
    o = n(25201),
    d = n(46013),
    c = n(381941),
    u = n(660183);
  class _ extends r.A {
    actions = {
      CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
      DICE_ROLL_START: (e) => this.handleStartRoll(e),
    };
    rollTimer = null;
    postRollDismissTimer = null;
    collapseTimer = null;
    handleChannelSelect = (e) => {
      let { channelId: t } = e,
        n = o.Ay.getState();
      null != n.channelId && n.channelId !== t && (this.clearTimers(), this.dismiss());
    };
    handleStartRoll = (e) => {
      let { channelId: t, diceCount: n = 1, diceSides: i = 6 } = e;
      if (l.Ay.getChannelId() !== t || null != o.Ay.getState().channelId) return;
      let r = 42 === n ? 42 : Math.min(Math.max(n, 1), 10),
        a = d.j.has(i) ? i : 6;
      o.Ay.setState({ channelId: t, rolling: !0, diceCount: r, diceSides: a, results: null });
      let s = [];
      for (let e = 0; e < r; e++) s.push(Math.floor(Math.random() * a) + 1);
      this.rollTimer = setTimeout(() => {
        ((this.rollTimer = null), this.finishRoll(t, r, a, s));
      }, 1500);
    };
    finishRoll(e, t, n, i) {
      (o.Ay.setState({ rolling: !1, results: i }),
        (this.postRollDismissTimer = setTimeout(() => {
          ((this.postRollDismissTimer = null), this.dismiss());
        }, 2e3)),
        this.sendMessage(e, t, n, i));
    }
    sendMessage(e, t, n, r) {
      let l = s.A.getChannel(e);
      if (null == l) return;
      let o = l.getGuildId() ?? "@me",
        d = `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/channels/${o}/${e}/roll-dice/${t}d${n}`,
        _ = u.intl.formatToPlainString(u.t.uV5JaG, { count: t, sides: n }),
        E = `[\`${_}\`](${d})`,
        A = r.reduce((e, t) => e + t, 0),
        h = u.intl.formatToMarkdownString(u.t.tmSbYW, { total: A, count: t, sides: n }),
        f = `-# ${r.map((e) => `:game_die: ${e.toString()}`).join(" ")}`,
        I =
          1 === t
            ? `### ${h} ${E}`
            : `### ${h} ${E}
${f}`;
      i.A.sendMessage(e, a.Ay.parse(l, I), !0, { location: c.Hx.CHAT_INPUT });
    }
    dismiss() {
      (o.Ay.setState({ dismissing: !0 }),
        (this.collapseTimer = setTimeout(() => {
          ((this.collapseTimer = null), o.Ay.setState(o.N_));
        }, 300)));
    }
    clearTimers() {
      (null != this.rollTimer && (clearTimeout(this.rollTimer), (this.rollTimer = null)),
        null != this.postRollDismissTimer &&
          (clearTimeout(this.postRollDismissTimer), (this.postRollDismissTimer = null)),
        null != this.collapseTimer &&
          (clearTimeout(this.collapseTimer), (this.collapseTimer = null)));
    }
  }
  let E = new _();
}
