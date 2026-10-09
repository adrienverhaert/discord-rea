/* Recovered shipped factory. Module 675171.
 * Source: recovered/web/assets/f91527a5010ff598.js
 * UTF-16 property offsets: 84661..85382
 * Raw property SHA-256: ba09321acca4f11d84f2b5c1df30e225365a744dac04ffe6211d9708e48452e1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => h });
  var l = n(702841),
    i = n(933958),
    s = n(969151),
    a = n(108959),
    r = n(734057),
    o = n(626360),
    c = n(5867);
  let d = "no_text_activity",
    u = {
      [d]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
      [c.Gd.DISCONNECTED]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
      [c.Gd.LAUNCHING_WITH_ORIENTATION_CHANGE]: [
        o.i.NEW_MESSAGES,
        o.i.OPT_IN_CHANNEL,
        o.i.SUMMARIES,
      ],
      [c.Gd.PANEL]: [],
      [c.Gd.PIP]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
      [c.Gd.ACTIVITY_POPOUT_WINDOW]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
    };
  function h() {
    let e = (0, l.bG)([i.Ay], () => i.Ay.getCurrentEmbeddedActivity()),
      t = (0, l.bG)([i.Ay], () => i.Ay.getActivityPanelMode()),
      n = (0, s.H)(e?.location);
    return void 0 === e || (0, a.A)(n, r.A) ? u[d] : u[t];
  }
}
