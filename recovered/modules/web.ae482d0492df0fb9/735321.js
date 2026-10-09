/* Recovered shipped factory. Module 735321.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7967484..7972473
 * Raw property SHA-256: c3e60701b536758ed62d89b61a9303b3e952a009e301248ff3500cc9d71f9ad1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    $6: () => G,
    $C: () => v,
    AD: () => F,
    BF: () => N,
    FM: () => g,
    Fo: () => x,
    L: () => m,
    N5: () => w,
    QN: () => M,
    R_: () => W,
    Un: () => Y,
    WX: () => P,
    XX: () => z,
    Y5: () => L,
    cv: () => S,
    ef: () => K,
    ew: () => j,
    iu: () => b,
    mC: () => k,
    mI: () => U,
    oc: () => H,
    qA: () => y,
    s1: () => B,
    tg: () => V,
    uA: () => $,
  });
  var i = n(926675),
    r = n(761915),
    a = n(540185),
    s = n(554146),
    l = n(501592),
    o = n(826673),
    d = n(569926),
    c = n(287809),
    u = n(646976),
    _ = n(289173),
    E = n(210598),
    A = n(321191),
    h = n(958805),
    f = n(61881),
    I = n(229231),
    p = n(49999);
  n(600253);
  var T = n(660183);
  function m(e) {
    return I.Ok[e.type](e);
  }
  function g(e, t) {
    let { showEditingControls: n } = t,
      r = e.games.length > 0;
    if (n && r)
      return 1 === i.u[e.type]
        ? T.intl.string(T.t.wiXdEa)
        : T.intl.format(T.t["zR1+0/"], { numGames: i.u[e.type] });
  }
  function S(e) {
    return e in i.u ? i.u[e] : 0;
  }
  function N() {
    let e = c.default.getCurrentUser(),
      t = null != e ? A.A.getUserProfile(e.id) : null;
    return t?.widgets ?? [];
  }
  function C() {
    return f.A.hasPendingChanges() ? (f.A.getPendingWidgets() ?? []) : N();
  }
  function O(e) {
    return (
      C()
        .filter(_.fu)
        .find((t) => t.type === e) ?? null
    );
  }
  function R(e) {
    let t = C(),
      n = t.findIndex((t) => t.getUniqueKey() === e.getUniqueKey());
    if (-1 === n) return [e, ...t];
    {
      let i = [...t];
      return ((i[n] = e), i);
    }
  }
  function L(e) {
    let t = C();
    null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) &&
      (e.type === a.x.PERSONAL &&
        ((0, o.Dr)(s.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, {
          dismissAction: p.i.INDIRECT_ACTION,
        }),
        (0, o.Dr)(s.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, {
          dismissAction: p.i.INDIRECT_ACTION,
        })),
      h.A.setPendingWidgets([e, ...t]));
  }
  function y(e) {
    let t = C().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
    h.A.setPendingWidgets(t);
  }
  function D() {
    return C().find((e) => e instanceof u.kM) ?? null;
  }
  function v(e) {
    let t = D(),
      n = t?.clips ?? [];
    if (n.length >= 4 || n.some((t) => "uploading" === t.status && t.localClipId === e.localClipId))
      return !1;
    let i = new u.kM({ id: t?.id, clips: [...n, e] });
    return (h.A.setPendingWidgets(R(i)), !0);
  }
  function b(e) {
    return D()?.clips.some((t) => t.id === e && "uploading" === t.status) ?? !1;
  }
  function M(e, t) {
    let n = D(),
      i = n?.clips.find((t) => t.id === e);
    if (null == n || null == i || "saved" === i.status) return;
    let r = new u.kM({
      id: n.id,
      clips: n.clips.map((e) => (e === i ? { ...i, thumbnail: t } : e)),
    });
    h.A.setPendingWidgets(R(r));
  }
  function P(e, t) {
    let n = D(),
      i = n?.clips.find((t) => t.id === e);
    if (null == n || i?.status !== "uploading") return !1;
    let r = new u.kM({
      id: n.id,
      clips: n.clips.map((e) => (e === i ? { ...i, status: "pending", uploadFilename: t } : e)),
    });
    return (h.A.setPendingWidgets(R(r)), !0);
  }
  function U(e, t) {
    let n = D();
    if (null == n) return;
    let i = t.trim(),
      r = new u.kM({
        id: n.id,
        clips: n.clips.map((t) => (t.id === e ? { ...t, title: "" === i ? void 0 : i } : t)),
      });
    h.A.setPendingWidgets(R(r));
  }
  function w(e, t) {
    let n = D();
    if (null == n || e === t) return;
    let i = [...n.clips];
    if (e < 0 || e >= i.length || t < 0 || t >= i.length) return;
    let [r] = i.splice(e, 1);
    i.splice(t, 0, r);
    let a = new u.kM({ id: n.id, clips: i });
    h.A.setPendingWidgets(R(a));
  }
  function G(e, t) {
    if (t.length > 20) return;
    let n = D();
    if (null == n) return;
    let i = new u.kM({
      id: n.id,
      clips: n.clips.map((n) => (n.id === e ? { ...n, tags: t.length > 0 ? t : void 0 } : n)),
    });
    h.A.setPendingWidgets(R(i));
  }
  function x(e, t) {
    let n = D();
    if (null == n) return;
    let i = n.clips.find((t) => t.id === e);
    i?.tags != null &&
      0 !== i.tags.length &&
      G(
        e,
        i.tags.filter((e) => e !== t),
      );
  }
  function k(e) {
    let t = D();
    if (null == t || !t.clips.some((t) => t.id === e)) return;
    let n = new u.kM({ id: t.id, clips: t.clips.filter((t) => t.id !== e) });
    h.A.setPendingWidgets(R(n));
  }
  function F(e) {
    let t = R(e(C().find((e) => e instanceof E.Tu) ?? null ?? (0, E.g0)()));
    h.A.setPendingWidgets(t);
  }
  function B(e, t, n) {
    let i = Object.values(r.X).length;
    if (n.length > i) return;
    let a = O(e);
    if (null == a) return;
    let s = a.games.find((e) => e.gameId === t);
    if (null == s) return;
    let l = { ...s, tags: n },
      o = a.games.map((e) => (e.gameId === t ? l : e)),
      d = R(new _.Yy({ ...a, games: o }));
    h.A.setPendingWidgets(d);
  }
  function V(e, t, n) {
    let i = O(e);
    if (null == i) return;
    let r = i.games.find((e) => e.gameId === t);
    if (null == r || null == r.tags || 0 === r.tags.length) return;
    let a = r.tags.filter((e) => e !== n);
    B(i.type, t, a.length > 0 ? a : []);
  }
  function H(e, t, n) {
    let i = O(e);
    if (null == i) return;
    let r = i.games.find((e) => e.gameId === t);
    if (null == r || n === r.comment) return;
    let a = { ...r, comment: n },
      s = i.games.map((e) => (e.gameId === t ? a : e)),
      l = R(new _.Yy({ ...i, games: s }));
    h.A.setPendingWidgets(l);
  }
  function j(e) {
    let t,
      { widgetType: n, game: i, ignoreMaxGames: r = !1 } = e,
      a = O(n),
      s = S(n);
    if (null != a) {
      let e = a.games?.length ?? 0;
      if ((!r && e >= s) || (a.games ?? []).some((e) => e.gameId === i.gameId)) return;
    }
    let l = { gameId: i.gameId, comment: i.comment, tags: i.tags };
    t = null != a ? [l, ...(a.games ?? [])] : [l];
    let o = R(new _.Yy({ ...(a ?? { type: n }), games: t }));
    (h.A.setPendingWidgets(o), d.I.fetchMany([i.gameId]));
  }
  function W(e, t) {
    if (e === t) return;
    let n = C();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let i = [...n],
      [r] = i.splice(e, 1);
    (i.splice(t, 0, r), h.A.setPendingWidgets(i));
  }
  function Y(e, t, n) {
    let i = O(e);
    if (null == i || null == i.games || t === n) return;
    let r = [...i.games];
    if (t < 0 || t >= r.length || n < 0 || n >= r.length) return;
    let [a] = r.splice(t, 1);
    r.splice(n, 0, a);
    let s = R(new _.Yy({ ...i, games: r }));
    h.A.setPendingWidgets(s);
  }
  function K(e, t) {
    let n = O(e);
    if (null == n) return;
    let i = (null != n.games ? n.games : []).filter((e) => e.gameId !== t),
      r = R(new _.Yy({ ...n, games: i }));
    h.A.setPendingWidgets(r);
  }
  function $(e) {
    let t = S(e.type);
    return e.games.length >= t;
  }
  function z(e) {
    return !(0, l.K)(e.contentClassification) && !i.Z.has(e.id);
  }
}
