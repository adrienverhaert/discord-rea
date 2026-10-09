/* Recovered shipped factory. Module 256449.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7673083..7677799
 * Raw property SHA-256: 0e8a8d811f8baa995949f3703bbb0f01c38c367fea644265b65ceaaa6d80b59a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    Gc: () => D,
    Sr: () => S,
    Th: () => N,
    UT: () => v,
    XQ: () => R,
    ZO: () => O,
    Zq: () => b,
    _c: () => C,
    ln: () => y,
    pD: () => M,
  }),
    n(321073),
    n(667532));
  var i = n(582128),
    r = n(17928),
    a = n(931991),
    s = n(683973),
    l = n(885386),
    o = n(71393),
    d = n(967198),
    c = n(711014),
    u = n(287809),
    _ = n(473145),
    E = n(488926),
    A = n(361670),
    h = n(631576),
    f = n(931959),
    I = n(750385),
    p = n(194004),
    T = n(378058),
    m = n(652215),
    g = n(660183);
  function S(e) {
    R();
    let t = (0, r.bG)([I.A], () => I.A.hasLoadedStickerPacks);
    i.useEffect(() => {
      t && null == I.A.getStickerPack(e) && (0, h.zk)(e);
    }, [e, t]);
  }
  function N(e) {
    let t = l.S0.useSetting();
    return (0, T.Qn)(t, e);
  }
  function C(e) {
    let {
      collapsedStickersCategories: t,
      filteredStickers: n,
      listPaddingRight: r = 0,
      listWidth: s = 0,
      stickerNodeMargin: l = 0,
      stickerNodeWidth: c,
      stickersCategories: u,
      collapsePremiumSearchSection: E = !1,
    } = e;
    return i.useMemo(() => {
      let e = Math.floor((s - r + l) / (c + l)),
        i = Math.floor(Math.max(l, (s - r - c * e) / (e - 1))),
        A = [],
        h = [],
        f = [],
        I = 0,
        m = 0,
        S = 0;
      if (0 !== s) {
        function N(t, n) {
          let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = (0, T.Xw)(t[0]) ? o.A.getGuild(t[0].guild_id) : void 0,
            { canCreateExpressions: s } = (0, a.ie)(r),
            l = d.A.getGuildId(),
            c = u.findIndex((e) => e.type === p.Z2.FAVORITE),
            E = u.findIndex((e) => e.type === p.Z2.RECENT),
            N = t.length;
          null != r && l === r.id && s && t.length < (0, _.aG)(r.premiumTier) && N++;
          let C = Math.ceil(N / e);
          h[m] = i ? 0 : C;
          for (let a = 0; a < C; a++) {
            let s = a * e,
              l = s + e,
              o = t
                .slice(s, l)
                .map((e, t) => ({
                  type: p.op.STICKER,
                  sticker: e,
                  packId: (0, T.FD)(e) ? e.pack_id : "TODO - fix",
                  gridSectionIndex: m,
                  rowIndex: I,
                  columnIndex: t,
                  visibleRowIndex: S,
                  category: n,
                }));
            (m > E &&
              m > c &&
              null != r &&
              N > t.length &&
              o.push({
                type: p.op.CREATE_STICKER,
                guild_id: r.id,
                name: g.intl.string(g.t["UwF+Cw"]),
                gridSectionIndex: m,
                rowIndex: I,
                columnIndex: o.length,
                visibleRowIndex: S,
              }),
              i || (S++, f.push(o), A.push(o.length)),
              I++);
          }
          m++;
        }
        if (null == n)
          for (let e of u)
            e.stickers.length > 0
              ? (I++, N(e.stickers, e.type, t?.has(e.id) === !0))
              : e.type === p.Z2.EMPTY_GUILD_UPSELL && ((h[m] = 0), m++);
        else
          (n.sendable.length > 0 && N(n.sendable, p.Z2.SEARCH_RESULTS),
            n.sendableWithPremium.length > 0 && N(n.sendableWithPremium, p.Z2.SEARCH_RESULTS, E));
      }
      return {
        rowCount: I,
        rowCountBySection: h,
        stickersGrid: f,
        gutterWidth: i,
        columnCounts: A,
      };
    }, [t, n, r, s, l, c, u, E]);
  }
  function O(e) {
    return !0;
  }
  function R() {
    i.useEffect(() => {
      (0, h.YB)();
    }, []);
  }
  let L = [];
  function y() {
    let e = (0, s.k)();
    return e.favoriteStickers?.stickerIds ?? L;
  }
  function D() {
    let e = y();
    return (0, r.yK)(
      [I.A],
      () =>
        e
          .map((e) => I.A.getStickerById(e))
          .filter((e) => null != e && (!(0, T.Xw)(e) || (0, T.Y4)(e))),
      [e],
    );
  }
  function v() {
    let e,
      t,
      n =
        ((e = (0, s.k)()),
        (t = L),
        e?.stickerFrecency?.stickers != null && (t = Object.keys(e?.stickerFrecency?.stickers)),
        t);
    return (0, r.yK)([I.A], () => n.map((e) => I.A.getStickerById(e)).filter((e) => void 0 !== e), [
      n,
    ]);
  }
  function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = (0, r.bG)([I.A], () => I.A.getStickerById(e.id)),
      [a, s] = i.useState(!0),
      [l, o] = i.useState(!1),
      d = (0, T.Xw)(e) || (0, T.FD)(e),
      c = {
        hasFetched: l,
        isReturnable: d,
        renderableSticker: e,
        shouldFetch: a,
        stickersStoreDefinition: n,
      },
      u = i.useRef(c);
    return (i.useEffect(() => {
      u.current = c;
    }),
    i.useEffect(() => {
      (async () => {
        let {
          hasFetched: e,
          isReturnable: n,
          renderableSticker: i,
          shouldFetch: r,
          stickersStoreDefinition: a,
        } = u.current;
        if (t && !n && null == a && r && !e) {
          s(!1);
          try {
            await (0, h.AO)(i.id);
          } catch {}
          o(!0);
        }
      })();
    }, [t]),
    d)
      ? [e, l]
      : [n ?? null, l];
  }
  function M(e) {
    let t = (function (e) {
      let t,
        n,
        s,
        l = D(),
        { packs: d, frequentlyUsedStickers: _ } = (0, r.cf)(
          [I.A, f.A],
          () => ({
            packs: I.A.getPremiumPacks(),
            frequentlyUsedStickers: f.A.stickerFrecencyWithoutFetchingLatest.frequently,
          }),
          [],
        ),
        h = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        S =
          ((t = (0, r.bG)([I.A], () => I.A.getAllGuildStickers())),
          (n = (0, r.yK)(
            [c.Ay, o.A],
            () => {
              let e = c.Ay.getFlattenedGuildIds(),
                t = [];
              return (
                e.forEach((e) => {
                  let n = o.A.getGuild(e);
                  null != n && t.push(n);
                }),
                t
              );
            },
            [],
          )),
          (s = (0, r.bG)([u.default], () => u.default.getCurrentUser())),
          i.useMemo(() => {
            let i = [];
            for (let { name: e, id: r } of n) {
              let n = t.get(r);
              null != n &&
                0 !== n.length &&
                i.push({ type: p.Z2.GUILD, id: r, name: e, stickers: n });
            }
            if (e?.getGuildId() != null) {
              let t = o.A.getGuild(e.getGuildId()),
                { canManageAllExpressions: n } = (0, a.ie)(t),
                r = i.findIndex((t) => t.id === e.getGuildId());
              (r >= 1
                ? i.unshift(i.splice(r, 1)[0])
                : -1 === r &&
                  null != t &&
                  n &&
                  i.unshift({
                    type: p.Z2.EMPTY_GUILD_UPSELL,
                    id: t.id,
                    name: t.name,
                    stickers: [],
                  }),
                null == s ||
                  E.$3({ permission: m.xBc.USE_EXTERNAL_EMOJIS, user: s, context: e }) ||
                  (i = i.filter((t) => t.id === e.getGuildId())));
            }
            return i;
          }, [t, n, s, e]));
      return i.useMemo(() => {
        let t = d.map(T.T5);
        return [
          { type: p.Z2.FAVORITE, id: p.Z2.FAVORITE, name: g.intl.string(g.t.y3LQCG), stickers: l },
          {
            type: p.Z2.RECENT,
            id: p.Z2.RECENT,
            name: g.intl.string(g.t["6hjpXW"]),
            stickers:
              _?.filter((t) =>
                (0, T.Xw)(t)
                  ? (I.A.getStickersByGuildId(t.guild_id)?.some((e) => e.id === t.id) ?? !1) &&
                    (0, A.W$)(t, h, e) !== A.Ux.NONSENDABLE
                  : (0, T.FD)(t)
                    ? d.some((e) => e.id === t.pack_id)
                    : void 0,
              ) ?? [],
          },
          ...S,
          ...t,
        ];
      }, [d, l, _, S, h, e]);
    })(e);
    return i.useMemo(
      () => t.filter((e) => e.type === p.Z2.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []),
      [t],
    );
  }
}
