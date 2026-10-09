/* Recovered shipped factory. Module 582904.
 * Source: recovered/web/assets/7e4c6962db41ed25.js
 * UTF-16 property offsets: 25460..26619
 * Raw property SHA-256: 3cf71b23d1b9c4d404d3f929a7e50ad60cb38ad727155e73cc72716c95cdfb3a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  (i.d(t, { Ln: () => f, Z0: () => p, kt: () => h }), i(321073));
  var n = i(582128),
    l = i(17928),
    s = i(427358),
    a = i(95701),
    r = i(696451),
    d = i(576705),
    u = i(287809),
    o = i(607567),
    c = i(488926),
    A = i(605431),
    m = i(366251),
    g = i(652215);
  function h(e) {
    let { channel: t } = e,
      i = t?.guild_id;
    return (0, l.yK)(
      [s.A, o.Ay, r.Ay, u.default],
      () => {
        if (null == t) return [];
        let e = s.A.getUserAffinitiesMap(),
          n = null != t ? o.Ay.getVoiceStatesForChannel(t) : [],
          l = new Set();
        n.forEach((e) => l.add(e.user.id));
        let d = [];
        for (let e of r.Ay.getMembers(i)) {
          if (l.has(e.userId)) continue;
          let i = u.default.getUser(e.userId);
          if (null == i) continue;
          let n = (0, a.TA)(t.type);
          (0, c.$3)({ permission: n, user: i, context: t }) && d.push(i);
        }
        function A(t) {
          return e.get(t)?.vcProbability ?? 0;
        }
        return d.sort((e, t) => A(t.id) - A(e.id)).slice(0, 5);
      },
      [t, i],
    );
  }
  function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { collapsed: i = !1 } = t,
      s = (0, l.bG)([m.A], () => m.A.getShouldShowPopover(e.id), [e.id]);
    return {
      shouldShow: s && !i,
      dismiss: n.useCallback(() => {
        (0, A.w)(e.id);
      }, [e]),
    };
  }
  function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { collapsed: i = !1 } = t,
      n = m.A.getShouldShowPopover(e.id),
      l = d.A.can(g.xBc.CREATE_INSTANT_INVITE, e);
    return n && l && !i;
  }
}
