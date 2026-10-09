/* Recovered shipped factory. Module 870748.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3448800..3457712
 * Raw property SHA-256: e148c13afc4b9fff7fba247fe4870ba3dc7bcf6f23bf0e50d029edcdf1fac77e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => v, t: () => b }), n(321073), n(667532));
  var i = n(485845),
    r = n(465532),
    a = n(155718),
    s = n(721768),
    l = n(459016),
    o = n(842209),
    d = n(861382),
    c = n(392054),
    u = n(168186),
    _ = n(203779),
    E = n(94221),
    A = n(664929),
    h = n(853145),
    f = n(734057),
    I = n(31717),
    p = n(317525),
    T = n(287809),
    m = n(317681),
    g = n(186306),
    S = n(323350),
    N = n(35277),
    C = n(820066),
    O = n(551483),
    R = n(652215);
  n(827669);
  let L = new Set(["applicationCommandOption"]),
    y = new Set([a.n4.ATTACHMENT]),
    D = new Set(["line", "applicationCommand"]);
  function v(e, t) {
    let {
      insertData: n,
      isInline: _,
      isVoid: f,
      onChange: p,
      deleteBackward: T,
      deleteForward: R,
      deleteFragment: v,
    } = e;
    ((e.insertData = (i) => {
      if (
        null != t &&
        C.VW.isEditorEmpty(e) &&
        i.types.includes("application/x-discord-interaction-data")
      ) {
        let e = JSON.parse(i.getData("application/x-discord-interaction-data")),
          { commandKey: n, interactionOptions: r } = (0, u.Ez)(e),
          { application: a, command: d } = o.EW({ channel: t, type: "channel" }, n);
        if (null != d) {
          let e =
            null != a
              ? {
                  type: c.Hf.APPLICATION,
                  id: a.id,
                  icon: a.icon,
                  name: a.bot?.username ?? a.name,
                  application: a,
                }
              : null;
          return (
            s.Gf({
              channelId: t.id,
              command: d,
              section: e,
              location: c.Oh.PASTE,
              initialValues: (0, l.getInitialValuesFromInteractionOptions)(d, r ?? []),
            }),
            null
          );
        }
      }
      return n(i);
    }),
      (e.isInline = (e) => !!L.has(e.type) || _(e)),
      (e.isVoid = (e) => !!("applicationCommandOption" === e.type && y.has(e.optionType)) || f(e)),
      (e.deleteBackward = (t) => {
        w(e, () => T(t));
      }),
      (e.deleteForward = (t) => {
        w(e, () => R(t));
      }),
      (e.deleteFragment = (t) => {
        w(e, () => v(t));
      }));
    let x = null,
      k = null,
      F = null,
      B = null,
      V = null;
    return (
      (e.onChange = () => {
        if (null != t) {
          let n = d.A.getState(t.id),
            l = o.j8({ channel: t, type: "channel" });
          if (
            C.VW.richValue(e) !== x ||
            !C.Ot.equals(e.selection, k) ||
            n.activeCommand !== F ||
            null == V ||
            l.some((e, t) => V[t] !== e)
          ) {
            let d = g.o.withMergedEntry(e, () =>
              (function (e) {
                let {
                    editor: t,
                    storeCommandState: n,
                    channel: l,
                    commandChanged: d,
                    previousOptionValues: u,
                  } = e,
                  { command: _, commandText: f } = U(t),
                  p = n.activeCommand,
                  T = t.chatInputType.commands?.enabled === !0,
                  g = null != h.A.getPendingReply(l.id);
                if (
                  (!T && p?.integration_types?.includes(i.b.GUILD_INSTALL)) ||
                  (g &&
                    p?.inputType !== c.y$.BUILT_IN_TEXT &&
                    p?.inputType !== c.y$.BUILT_IN_INTEGRATION)
                )
                  return (
                    null != _
                      ? b(t, l.id, p, !0)
                      : null != p && s.Gf({ channelId: l.id, command: null, section: null }),
                    null
                  );
                if (null != _) {
                  if (C.VW.isEditorEmpty(t) || null == p) return (b(t, l.id, p, !1), null);
                  let e = `/${_.displayName}`;
                  if (
                    null == f ||
                    !f.startsWith(e) ||
                    (0 === m.O7(t).length && (f.length < e.length + 1 || " " !== f[e.length]))
                  )
                    return (
                      r.A.clearDraftCommand(l.id, I.C.ChannelMessage),
                      b(t, l.id, p, !0),
                      null
                    );
                } else {
                  if (null != p && d) {
                    let e = (function (e, t, n) {
                        let i,
                          { initialValues: r, activeCommand: a } = n;
                        if (null == a) return null;
                        let s = (a.options?.length ?? 0) > 0 ? m.pY(e, a) : null,
                          l = (0, S.WO)(C.VW.richValue(e), {
                            mode: "raw",
                            range: {
                              anchor: C.VW.start(e, []),
                              focus: s?.[0]?.keyRange.anchor ?? C.VW.end(e, []),
                            },
                          }),
                          o = "",
                          d = l.toLocaleLowerCase(),
                          c = `/${a.displayName} `.toLocaleLowerCase(),
                          u = `/${a.untranslatedName} `.toLocaleLowerCase();
                        d.startsWith(c)
                          ? (o = l.substring(c.length).trim())
                          : d.startsWith(u) && (o = l.substring(u.length).trim());
                        let _ = [],
                          E = null,
                          A = null;
                        if (null != a.options) {
                          let e = new Set();
                          if (null != s)
                            for (let i of s) {
                              e.add(i.name);
                              let r = G(n, t, i.name) ?? i.text,
                                a = {
                                  type: "applicationCommandOption",
                                  optionName: i.name,
                                  optionDisplayName: i.displayName,
                                  optionType: i.type,
                                  children: [{ text: r }],
                                };
                              (_.push(a), 0 === i.text.length && null == E && (E = a));
                            }
                          for (let i of a.options)
                            if (!e.has(i.name) && (i.required || null != r[i.name])) {
                              let e, r;
                              o.length > 0 && !y.has(i.type)
                                ? ((e = o), (o = ""))
                                : (e = (r = G(n, t, i.name)) ?? "");
                              let a = {
                                type: "applicationCommandOption",
                                optionName: i.name,
                                optionDisplayName: i.displayName,
                                optionType: i.type,
                                children: [{ text: e }],
                              };
                              (_.push(a),
                                0 === e.length && null == E && (E = a),
                                null == r && (A = a));
                            }
                        }
                        ((i =
                          o.length > 0
                            ? `/${a.displayName} ${o.replace(/\r|\n/g, " ")}`
                            : 0 === _.length
                              ? `/${a.displayName} `
                              : `/${a.displayName}`),
                          _.unshift({ text: i }));
                        let h = {
                          type: "applicationCommand",
                          children: _,
                          command: {
                            id: a.id,
                            name: a.untranslatedName,
                            displayName: a.displayName,
                          },
                        };
                        C.VW.withoutNormalizing(e, () => {
                          for (let [, t] of (N.b.insertNodes(e, [h], { at: O.Xg }),
                          C.VW.blocks(e).reverse()))
                            C.PW.isAfter(t, O.Xg) && N.b.removeNodes(e, { at: t, voids: !0 });
                        });
                        let f = null;
                        return (
                          null != E
                            ? (N.b.selectCommandOption(e, E.optionName), (f = E.optionName))
                            : null != A
                              ? (N.b.selectCommandOption(e, A.optionName, !1), (f = A.optionName))
                              : N.b.resetSelectionToEditorEnd(e),
                          null == A && M(e, a),
                          f
                        );
                      })(t, l, n),
                      i = m.SQ(t, p, l.id);
                    return (
                      P({
                        guildId: l.guild_id,
                        channelId: l.id,
                        command: p,
                        activeOption: e,
                        currentOptionValues: i,
                        previousOptionValues: null,
                        validateAll: !0,
                        allowEmpty: !0,
                      }),
                      { commandId: p.id, optionValues: i }
                    );
                  }
                  if (null != p && !d)
                    return (s.Gf({ channelId: l.id, command: null, section: null }), null);
                  let e = C.VW.richValue(t)[0],
                    i = e.children[0];
                  if (D.has(e.type) && C.l5.isText(i)) {
                    let e = (function (e, t) {
                      if (!e.startsWith("/")) return null;
                      let n = (0, E.p)(t, e, I.A.getDraftCommand(t.id, I.C.ChannelMessage));
                      if (null != n) return n;
                      let i = (0, A.Yn)(t, e.substring(1));
                      if (!i.hasSpaceTerminator) return null;
                      let { commands: r, sections: s } = o.v7(
                        { channel: t, type: "channel" },
                        a.kc.CHAT,
                        i.text,
                      );
                      if (0 === r.length) return null;
                      let l = i.text.trim(),
                        d = l + " ",
                        u = r.filter(
                          (e) =>
                            e.inputType !== c.y$.PLACEHOLDER &&
                            (e.displayName === l || e.displayName.startsWith(d)),
                        );
                      if (1 === u.length && u[0].displayName === l) {
                        let e = u[0],
                          t = s.find((t) => t.application?.id === e.applicationId);
                        return { command: e, section: t };
                      }
                      return null;
                    })(i.text, l);
                    if (null != e)
                      return (
                        s.Gf({ channelId: l.id, command: e.command, section: e.section }),
                        null
                      );
                  }
                }
                if (null != p && null != _) {
                  !(function (e, t) {
                    if (null == t.options || 0 === t.options.length) return !1;
                    let n = m.pY(e, t);
                    return (
                      0 !== n.length &&
                      (C.VW.withoutNormalizing(e, () => {
                        for (let t = n.length - 1; t >= 0; t--) {
                          let i = n[t];
                          N.b.textToInline(
                            e,
                            {
                              type: "applicationCommandOption",
                              optionName: i.name,
                              optionDisplayName: i.displayName,
                              optionType: i.type,
                              children: [{ text: i.text }],
                            },
                            { anchor: i.keyRange.anchor, focus: i.valueRange.focus },
                          );
                        }
                        let t = C.VW.getFirstText(e);
                        if (null == t) return !1;
                        let i = t.text.trim();
                        t.text !== i &&
                          N.b.textToText(e, i, {
                            anchor: { path: O.fP, offset: 0 },
                            focus: { path: O.fP, offset: t.text.length },
                          });
                      }),
                      !0)
                    );
                  })(t, p) && M(t, p);
                  let e = m.SQ(t, p, l.id),
                    n = C.VW.above(t, {
                      match: (e) => C.VW.isInline(t, e) && "applicationCommandOption" === e.type,
                      mode: "lowest",
                    }),
                    i = n?.[0].optionName ?? null;
                  return (
                    P({
                      guildId: l.guild_id,
                      channelId: l.id,
                      command: p,
                      activeOption: i,
                      currentOptionValues: e,
                      previousOptionValues: u,
                      validateAll: !1,
                      allowEmpty: !1,
                    }),
                    { commandId: _.id, optionValues: e }
                  );
                }
                return null;
              })({
                editor: e,
                storeCommandState: n,
                channel: t,
                commandChanged: n.activeCommand?.id !== F?.id,
                previousOptionValues: B,
              }),
            );
            if (null != d) {
              let t = g.o.currentEntry(e);
              (null != t && (t.commandId = d.commandId), (B = d.optionValues));
            } else B = null;
            ((x = C.VW.richValue(e)), (k = e.selection), (F = n.activeCommand), (V = l));
          }
        }
        p();
      }),
      e
    );
  }
  function b(e, t, n, i) {
    let [r] = C.VW.blocks(e)[0],
      a = (i ? (0, S.IQ)(r, { mode: "plain" }).trimEnd() : "")
        .split("\n")
        .map((e) => ({ type: "line", children: [{ text: e }] })),
      l = [a.length - 1];
    for (let [, t] of (N.b.insertNodes(e, a, { at: O.Xg }), C.VW.blocks(e).reverse()))
      C.PW.isAfter(t, l) && N.b.removeNodes(e, { at: t, voids: !0 });
    null != n && s.Gf({ channelId: t, command: null, section: null });
  }
  function M(e, t) {
    if (
      null == t.options ||
      1 !== t.options.length ||
      !0 === t.options[0].required ||
      y.has(t.options[0].type) ||
      m.O7(e).length > 0 ||
      null == m.n$(e)
    )
      return !1;
    let n = C.VW.getFirstText(e);
    if (null == n) return !1;
    let i = t.options[0],
      r = { path: O.fP, offset: t.displayName.length + 2 },
      a = { path: O.fP, offset: n.text.length };
    return (
      !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || C.Kh.equals(r, a)) &&
      (N.b.textToInline(
        e,
        {
          type: "applicationCommandOption",
          optionName: i.name,
          optionDisplayName: i.displayName,
          optionType: i.type,
          children: [{ text: n.text.substring(t.displayName.length + 2) }],
        },
        { anchor: r, focus: a },
      ),
      !0)
    );
  }
  function P(e) {
    let {
      guildId: t,
      channelId: n,
      command: i,
      activeOption: r,
      currentOptionValues: a,
      previousOptionValues: l,
      validateAll: o,
      allowEmpty: c,
    } = e;
    if (null == i.options) return !1;
    let u = o ? null : d.A.getActiveOptionName(n),
      E = {},
      A = d.A.getOptionStates(n),
      h = !1;
    for (let e of i.options) {
      let i = A[e.name],
        s =
          o ||
          (e.name === u && u !== r) ||
          (i?.lastValidationResult?.success === !1 && a?.[e.name] !== l?.[e.name]),
        d = {
          hasValue: null != a && e.name in a,
          isActive: e.name === r,
          lastValidationResult: s
            ? (0, _.J)({
                option: e,
                content: a?.[e.name] ?? null,
                guildId: t,
                channelId: n,
                allowEmptyValues: c,
              })
            : i?.lastValidationResult,
        };
      (null == i ||
        i.hasValue !== d.hasValue ||
        i.isActive !== d.isActive ||
        (s && i.lastValidationResult?.success === !1)) &&
        ((E[e.name] = d), (h = !0));
    }
    h && s.H2(n, E);
  }
  function U(e) {
    let t = m.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
      i = n.children[0];
    return C.l5.isText(i)
      ? { command: n.command, commandText: i.text }
      : { command: n.command, commandText: null };
  }
  function w(e, t) {
    let n = m.O7(e)[0];
    t();
    let i = C.ZF.toPoint(e.selection);
    if (null == i || n === m.O7(e)[0]) return;
    let { command: r, commandText: a } = U(e);
    !(null == r || null == a || a.endsWith(" ")) &&
      C.Kh.equals(i, { path: O.fP, offset: r.displayName.length + 1 }) &&
      N.b.insertText(e, " ");
  }
  function G(e, t, n) {
    let i = e.activeCommand?.options?.find((e) => e.name === n),
      r = e.initialValues[n];
    if (null == i || null == r) return null;
    if (null != i.choices) return i.choices.find((e) => e.value === r.value)?.displayName;
    let s = r.value?.toString();
    return i.type === a.n4.CHANNEL || (i.type === a.n4.MENTIONABLE && null != f.A.getChannel(s))
      ? `<#${s}>	`
      : i.type === a.n4.USER || (i.type === a.n4.MENTIONABLE && null != T.default.getUser(s))
        ? `<@${s}>`
        : i.type === a.n4.ROLE ||
            (i.type === a.n4.MENTIONABLE && null != p.A.getRole(t.guild_id, s ?? R.dJq))
          ? `<@&${s}>`
          : s;
  }
}
