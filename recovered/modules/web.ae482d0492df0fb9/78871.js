/* Recovered shipped factory. Module 78871.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8074602..8075827
 * Raw property SHA-256: e9537b2519ccdf0446f432b2b356722a038f9719a159ae8d8ee83b25bbb95277
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { QA: () => m, Rq: () => S, cy: () => g });
  var i = n(477900);
  n(582128);
  var r = n(339350),
    a = n(687966),
    s = n(323384),
    l = n(432017),
    o = n(748562),
    d = n(661531),
    c = n(177953),
    u = n(306788),
    _ = n(765379),
    E = n(189117),
    A = n(471107),
    h = n(506326),
    f = n(693879),
    I = n(583846),
    p = n(53257),
    T = n(652215);
  function m(e) {
    let { activity: t } = e,
      n = t.timestamps?.start ?? t.created_at,
      { now: c } = (0, A.G)();
    if (null == n || (0, p.A)(t)) return null;
    let u = t.timestamps?.end,
      I = t.timestamps?.isCountDown ?? !1,
      m = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return t
          ? r.Q
          : (0, _.A)(e) || (0, E.$_)(e)
            ? n
              ? a.GameControllerIcon
              : s.k
            : e.type === T.$pd.LISTENING
              ? l.T
              : e.type === T.$pd.WATCHING
                ? o.U
                : a.GameControllerIcon;
      })(t, I && null != u && u > c);
    return (0, i.jsxs)(h.er, {
      children: [
        (0, i.jsx)(m, { size: "xxs", color: d.A.colors.TEXT_FEEDBACK_POSITIVE }),
        (0, i.jsx)(f.z, {
          entry: { start: n, end: u, isCountDown: I },
          textColor: "text-feedback-positive",
        }),
      ],
    });
  }
  function g(e) {
    let { activity: t } = e;
    if ((0, _.A)(t) || null == t.party) return null;
    let n = (0, I.gF)(t.state, t.party);
    return null == n ? null : (0, i.jsx)(h.fM, { Icon: c.n, text: n });
  }
  function S(e) {
    let { activity: t } = e,
      n = (0, I.kR)(t.assets?.large_text);
    return null == n ? null : (0, i.jsx)(h.fM, { Icon: u.K, text: n });
  }
}
