/* Recovered shipped factory. Module 305070.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3241732..3247388
 * Raw property SHA-256: 79079c2d827f5ac26823b6ca2d3f5e9614e5239e35cf1833ad80389d2f24c916
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => B });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(17928),
    d = n(689175),
    c = n(623646),
    u = n(811024),
    _ = n(933958),
    E = n(969151),
    A = n(659280),
    h = n(579940),
    f = n(915089),
    I = n(750506),
    p = n(513609),
    T = n(71393),
    m = n(597184),
    g = n(105330),
    S = n(265431),
    N = n(459016),
    C = n(861382),
    O = n(355622),
    R = n(820066),
    L = n(696451),
    y = n(576705),
    D = n(351906),
    v = n(287809),
    b = n(31498),
    M = n(887129),
    P = n(741918),
    U = n(267102),
    w = n(652215),
    G = n(307731);
  let x = new Map([["thread", new Set(["name"])]]);
  var k = n(5867),
    F = n(940169);
  function B(e) {
    let { ref: t, ...n } = e,
      {
        channel: a,
        type: B,
        editorHeight: V,
        onVisibilityChange: H,
        editorScrollerRef: j,
        barsHeight: W,
      } = n,
      Y = (0, f.GV)(),
      K = (0, o.bG)([T.A], () => T.A.getGuild(a.guild_id) ?? null, [a.guild_id]),
      $ = r.useRef(null),
      [z, X, Z] = (function (e, t, n) {
        let { channel: i, type: a } = e,
          [s, l] = r.useState(() => (0, b.Ur)()),
          d = (0, S.A)(),
          c = (0, o.bG)([L.Ay, v.default], () => {
            let e = v.default.getCurrentUser();
            return (
              (null != i.guild_id && null != e
                ? L.Ay.getMember(i.guild_id, e.id)?.isPending
                : null) ?? !1
            );
          }),
          { canMentionEveryone: u, hidePersonalInformation: _ } = (0, o.cf)(
            [y.A, D.A],
            () => ({
              canMentionEveryone:
                i.isPrivate() || c || a === O.oU.RULES_INPUT || y.A.can(w.xBc.MENTION_EVERYONE, i),
              hidePersonalInformation: D.A.hidePersonalInformation,
            }),
            [i, a, c],
          ),
          { activeCommand: E, activeCommandOption: A } = (0, o.cf)([C.A], () => ({
            activeCommand: C.A.getActiveCommand(i.id),
            activeCommandOption: C.A.getActiveOption(i.id),
          })),
          h = r.useMemo(
            () =>
              E?.untranslatedName != null &&
              A?.name != null &&
              (x.get(E.untranslatedName)?.has(A.name) ?? !1),
            [E?.untranslatedName, A?.name],
          ),
          f = (function (e) {
            let { navId: t, scrollerRef: n, state: i, onFocus: a } = e,
              { renderWindow: s } = r.useContext(U.Ay);
            function l(e, t, r) {
              if ((n.current?.scrollToTop(), e && null != i.query)) {
                let e = i.query.typeInfo.focusMode,
                  n =
                    e !== m.e.MANUAL &&
                    (e !== m.e.AUTO_WHEN_FILTERED || 0 !== i.query.queryText.length);
                i.isVisible && (!0 !== t || !1 !== n) && !0 !== r
                  ? (d.setFocus("0"), a?.(0))
                  : (d.setFocus(null), a?.(null));
              }
            }
            function o(e) {
              if ((n.current?.scrollToBottom(), e && null != i.query && i.query.resultCount > 0)) {
                let e = i.query.resultCount - 1;
                (d.setFocus(e.toString()), a?.(e));
              }
            }
            let d = (0, M.Ay)({
                id: t,
                isEnabled: i.isVisible,
                orientation: P.Gl.VERTICAL,
                useVirtualFocus: !0,
                setFocus: function (e, t) {
                  let i = s.document.querySelector(e);
                  (null != i && n.current?.scrollIntoViewNode({ node: i }), a?.(+t));
                },
                onNavigateNextAtEnd: () => l(!0),
                onNavigatePreviousAtStart: () => o(!0),
                scrollToStart: () => (l(!1, !1), Promise.resolve()),
                scrollToEnd: () => (o(!1), Promise.resolve()),
              }),
              c = r.useRef(l);
            return (
              r.useEffect(() => {
                c.current = l;
              }),
              r.useEffect(() => {
                c.current(!0, !0, i.isInitialAfterError);
              }, [
                i.query?.type,
                i.query?.queryText,
                i.query?.isLoading,
                i.isVisible,
                i.isInitialAfterError,
              ]),
              d
            );
          })({
            navId: "channel-autocomplete",
            scrollerRef: n,
            state: s,
            onFocus: (e) => k.setSelectedIndex(e),
          }),
          I = e.editorRef.current?.getCurrentWord(),
          p = e.editorRef.current?.getSlateEditor(),
          T = null;
        null != p && (T = R.VW.getSelectedParentOfType(p, b.mk)?.[0] ?? null);
        let g = {
            ...e,
            navigator: f,
            activeCommand: E,
            activeCommandOption: A,
            activeInlineAutocompleteInput: T,
            canMentionUsers: a.users?.allowMentioning ?? !1,
            canMentionEveryone: u,
            hidePersonalInformation: _,
            hideMentionDescription: a === O.oU.RULES_INPUT,
            emojiIntention:
              a === O.oU.RULES_INPUT
                ? G.EmojiIntention.COMMUNITY_CONTENT
                : h
                  ? G.EmojiIntention.NO_CUSTOM_EMOJI
                  : G.EmojiIntention.CHAT,
            currentWord: I?.word ?? "",
            currentWordIsAtStart: I?.isAtStart === !0,
            optionText:
              null != A
                ? (0, N.getString)(
                    { [A.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] },
                    A.name,
                  )
                : "",
          },
          [k] = r.useState(() => new b.Ay(g));
        return (
          r.useEffect(() => {
            k.updateProps(g);
          }),
          r.useImperativeHandle(t, () => k, [k]),
          r.useEffect(() => () => k.unmount(), [k]),
          r.useEffect(() => {
            function e(e) {
              return l(e);
            }
            return (
              k.on("change", e),
              k.on("update", d),
              () => {
                (k.off("change", e), k.off("update", d));
              }
            );
          }, [d, k]),
          r.useEffect(() => {
            let e = s.query?.typeInfo.stores;
            if (null != e) {
              function t() {
                return k.queryResults();
              }
              for (let n of e) n.addChangeListener(t);
              return () => {
                for (let n of e) n.removeChangeListener(t);
              };
            }
          }, [k, s.query?.typeInfo]),
          [s, k, f]
        );
      })({ ...n, guild: K }, t, $),
      q = B.autocomplete?.forceChatLayer ? p.Ay : I.Ay,
      Q = (0, A.aI)(z.selectedIndex);
    (0, h.gf)(Y, z.isVisible, Q);
    let J = (0, g.l)({ editorHeight: V, type: B, state: z }),
      ee = (0, o.bG)(
        [_.Ay],
        () => {
          let e = _.Ay.getSelfEmbeddedActivityForChannel(a.id),
            t = _.Ay.getActivityPanelMode();
          return (0, u.AX)(a) && null != e && (0, E.H)(e.location) === a.id && t === k.Gd.PANEL;
        },
        [a],
      ),
      et = r.useMemo(
        () =>
          J?.top == null && J?.left == null && J?.bottom == null && J?.right == null
            ? ""
            : String(Date.now()),
        [J?.top, J?.left, J?.bottom, J?.right],
      );
    if (
      (r.useEffect(() => {
        H(z.isVisible);
      }, [H, z.isVisible]),
      !z.isVisible || null == z.query || void 0 === J)
    )
      return null;
    let en =
      z.query.typeInfo.renderResults({
        results: z.query.results,
        selectedIndex: z.selectedIndex,
        channel: a,
        guild: K,
        query: z.query.queryText,
        options: z.query.options,
        onHover: (e) => X.onResultHover(e),
        onClick: (e) => X.onResultClick(e),
      }) ?? null;
    if (null == en) return null;
    let ei = {
        [F.pK]: null == J,
        [F.YB]: null != J,
        [F.sQ]: null == J && "bottom" === n.position,
        [F.mO]: ee,
      },
      er = 490;
    null != J &&
      (er = B.autocomplete?.small ? 200 : z.query?.type === m.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let ea = Math.max(V, j?.current?.clientHeight ?? 0),
      es = Math.min(0.5 * window.innerHeight, ea);
    er = Math.min(window.innerHeight - 120 - es - (W ?? 0), er);
    let el = (0, i.jsx)(A.Ay, {
      id: Y,
      className: s()(F.nx, ei),
      innerClassName: F.Fv,
      onMouseDown: (e) => e.preventDefault(),
      children: (0, i.jsx)(l.hD, {
        navigator: Z,
        children: (0, i.jsx)(l.PR, {
          children: (e) => {
            let { ref: t, ...n } = e;
            return (0, i.jsx)(d.Ch, {
              id: Y,
              ref: (e) => {
                ((t.current = e?.getScrollerNode() ?? null), ($.current = e));
              },
              orientation: "vertical",
              overflow: "auto",
              ...n,
              className: F.XG,
              style: { maxHeight: er },
              role: "listbox",
              "aria-labelledby": (0, A.Sz)(Y),
              children: en,
            });
          },
        }),
      }),
    });
    return null != J
      ? (0, i.jsx)(q, {
          children: (0, i.jsx)(c.Q, {
            targetRef: n.targetRef,
            overrideTargetRect: J,
            positionKey: et,
            position: n.position ?? "top",
            align: "left",
            spacing: 8,
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            children: () => el,
          }),
        })
      : el;
  }
}
