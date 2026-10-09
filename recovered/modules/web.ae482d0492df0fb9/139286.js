/* Recovered shipped factory. Module 139286.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2830633..2832040
 * Raw property SHA-256: dc2b1bef6b12820dc5be853c59b91cac1ac1cf9caacbc59aee59a560a99126ba
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => T, x: () => p });
  var i = n(582128),
    r = n(812729),
    a = n.n(r),
    s = n(277057),
    l = n.n(s),
    o = n(562708),
    d = n(73153),
    c = n(964486),
    u = n(734057),
    _ = n(309010),
    E = n(967198),
    A = n(174459),
    h = n(666860),
    f = n(686757);
  let I = (0, o.trackMaker)({
    analyticEventConfigs: A.AnalyticEventConfigs,
    dispatcher: d.h,
    TRACK_ACTION_NAME: "TRACK",
  });
  function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      { name: i, type: r, properties: a } = e;
    if (
      e.type === o.ImpressionTypes.MODAL &&
      null == e.name &&
      (0, f.uJ)().some((e) => e._stackContext?.isSlide)
    )
      return;
    n || (0, f.Vm)(e);
    let s = a?.guild_id ?? E.A.getGuildId(),
      l = a?.channel_id ?? _.Ay.getChannelId(s),
      d = (0, A.expandEventProperties)({
        impression_type: r,
        location: (0, f.g$)(),
        ...(0, h.H$)(s),
        ...(0, h.dI)(u.A.getChannel(l)),
        ...a,
      });
    t
      ? (0, f.eE)(null, null)
      : (null != i && null != r && ((0, A.debugLogEvent)(i, d), I(i, d)), (0, f.eE)(i, d));
  }
  function T(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { disableTrack: !1, trackOnInitialLoad: !1 },
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = i.useRef(void 0),
      s = i.useRef(void 0);
    function o() {
      let i = !a()(r.current, e);
      i && (r.current = e);
      let o = !a()(s.current, n);
      if ((o && (s.current = n), !i && !o)) return;
      let d = { ...e, sequenceId: l()("impression_") };
      return (
        p(d, t.disableTrack),
        () => {
          null != d && (0, f.u5)(d);
        }
      );
    }
    ((0, c.Ay)(() => {
      if (t.trackOnInitialLoad) return o();
    }),
      i.useEffect(() => {
        if (!t.trackOnInitialLoad) return o();
      }));
  }
}
