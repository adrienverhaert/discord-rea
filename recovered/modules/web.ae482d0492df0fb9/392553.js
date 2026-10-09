/* Recovered shipped factory. Module 392553.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3280979..3309798
 * Raw property SHA-256: b6694a6859fffe60a36ad411ac904fba0ee217f81e87ec28871cd712bc0d4ee3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => eS }), n(321073), n(323874), n(14289), n(35956));
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(607399),
    c = n(465532),
    u = n(608299),
    _ = n(494921),
    E = n(155718),
    A = n(861382),
    h = n(94221),
    f = n(626584),
    I = n(274652),
    p = n(522602),
    T = n(234320),
    m = n(453771),
    g = n(741394),
    S = n(355622),
    N = n(408018),
    C = n(579940),
    O = n(734057),
    R = n(573163),
    L = n(531685),
    y = n(365971);
  function D(e) {
    let t = R.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (O.A.getChannel(t) ?? null);
  }
  var v = n(826745),
    b = n(442433),
    M = n(721768),
    P = n(555424),
    U = n(723702),
    w = n(677134),
    G = n(652215),
    x = n(650583);
  let k = /(\t|\s)/;
  class F extends r.PureComponent {
    _ref;
    state = { nextSelection: -1 };
    componentDidMount() {
      (Promise.resolve().then(() => {
        let { value: e } = this.props;
        this._ref?.setSelection(e.length, e.length);
      }),
        null != A.A.getActiveCommand(this.props.channel.id) &&
          M.Gf({ channelId: this.props.channel.id, command: null, section: null }));
    }
    componentDidUpdate(e, t) {
      this.state.nextSelection !== t.nextSelection &&
        null != this._ref &&
        this._ref.setSelection(this.state.nextSelection, this.state.nextSelection);
    }
    getCurrentWord() {
      let e = this._ref;
      if (null == e) return { word: null, fullWord: null, isAtStart: !1 };
      let { value: t } = this.props;
      if (0 === t.trim().length) return { word: null, fullWord: null, isAtStart: !1 };
      let n = e.selectionStart,
        i = e.selectionEnd;
      for (; n > 0 && !k.test(t[n - 1]);) n--;
      let r = e.selectionEnd;
      for (; r < t.length && !k.test(t[r]);) r++;
      let a = (0, P.h3)(t.slice(n, i), t.slice(n, r));
      return { word: a.word, fullWord: a.fullWord, isAtStart: 0 === n && !a.didTrimPrefix };
    }
    focus = () => {
      let { _ref: e } = this;
      null != e && e.focus();
    };
    blur() {
      let { _ref: e } = this;
      null != e && e.blur();
    }
    submit(e) {
      return (e?.preventDefault(), this.props.onSubmit(this.props.value));
    }
    insertAutocomplete(e, t) {
      let { addSpace: n = !0, replaceFullWord: i = !1 } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { word: r, fullWord: a } = this.getCurrentWord();
      if (null == r) this.insertText(e, t, n);
      else {
        let t = this._ref;
        if (null == t) return;
        let s = t.value.slice(0, t.selectionStart - r.length),
          l = i && null != a ? a.length - r.length : 0,
          o = t.value.slice(t.selectionEnd + l);
        this._insertText(e, s, o, n);
      }
    }
    insertInlineAutocompleteInput(e) {}
    replaceInlineAutocompleteInput(e, t, n) {}
    insertText(e, t) {
      let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = this._ref;
      if (null == i) return;
      let r = i.value.slice(0, i.selectionStart),
        a = i.value.slice(i.selectionEnd);
      this._insertText(e, r, a, n);
    }
    _insertText(e, t, n, i) {
      if (null == this._ref) return;
      i && (e += " ");
      let r = t + e + n,
        { onChange: a } = this.props;
      a?.(null, r, (0, N.x7)(r));
      let s = t.length + e.length;
      this.setState({ nextSelection: s }, () => {
        this.props.maybeShowAutocomplete();
      });
    }
    hasOpenCodeBlock() {
      let e = this._ref;
      if (null == e) return !1;
      let t = this.props.value.slice(0, e.selectionStart).match(/```/g);
      return null != t && t.length > 0 && t.length % 2 != 0;
    }
    render() {
      let {
        value: e,
        disabled: t,
        placeholder: n,
        required: r,
        onResize: a,
        className: l,
        id: o,
        submitting: d,
        textAreaPaddingClassName: c,
        spellcheckEnabled: u,
        "aria-controls": _,
        "aria-expanded": E,
        "aria-activedescendant": A,
      } = this.props;
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(T.EG, {
            event: G.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: this.handleGlobalPaste,
          }),
          (0, i.jsx)(v.y, {
            ref: this.handleSetRef,
            className: s()(l, c),
            id: o,
            rows: 1,
            fontWidthEstimate: 6,
            placeholder: n,
            disabled: t || d,
            required: r,
            onChange: this.handleOnChange,
            onResize: a,
            onKeyPress: this.handleKeyPress,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur,
            onPaste: this.handlePaste,
            onClick: this.handleClick,
            onContextMenu: this.handleContextMenu,
            value: t ? "" : e,
            tabIndex: 0,
            spellCheck: u,
            "aria-controls": _,
            "aria-expanded": E,
            "aria-activedescendant": A,
            "aria-haspopup": "listbox",
            "aria-autocomplete": "list",
            "aria-multiline": !0,
          }),
        ],
      });
    }
    handleSetRef = (e) => {
      this._ref = e;
    };
    handleKeyPress = (e) => {
      if (
        e.key === x.dh.ENTER &&
        !e.shiftKey &&
        !this.hasOpenCodeBlock() &&
        (!this.props.disableEnterToSubmit || e.ctrlKey)
      )
        return (e.preventDefault(), this.props.onSubmit(this.props.value));
    };
    handleKeyDown = (e) => {
      switch (e.which) {
        case G.Ks6.ARROW_DOWN:
          this.props.moveSelection(1) && e.preventDefault();
          break;
        case G.Ks6.N:
          e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
          break;
        case G.Ks6.ARROW_UP:
          this.props.moveSelection(-1) && e.preventDefault();
          break;
        case G.Ks6.P:
          e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
          break;
        case G.Ks6.TAB:
        case G.Ks6.ENTER:
          this.handleTabOrEnterDown(e);
      }
      let { onKeyDown: t } = this.props;
      t?.(e);
    };
    handleTabOrEnterDown(e) {
      (e.key === x.dh.TAB && this.props.onTab()) || (e.key === x.dh.ENTER && this.props.onEnter(e))
        ? (e.preventDefault(), e.stopPropagation())
        : e.key === x.dh.ESCAPE
          ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete())
          : e.key === x.dh.TAB &&
            this.hasOpenCodeBlock() &&
            (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1));
    }
    handleKeyUp = (e) => {
      switch (e.key) {
        case x.dh.ARROW_RIGHT:
        case x.dh.ARROW_LEFT:
        case x.dh.HOME:
        case x.dh.END:
          this.props.maybeShowAutocomplete();
      }
      let { onKeyUp: t } = this.props;
      t?.(e);
    };
    handleGlobalPaste = (e) => {
      let { event: t } = e;
      this.handlePaste(t) || this.focus();
    };
    handlePaste = (e) => {
      let t = this.props.onPaste(e);
      return (t && e.preventDefault(), t);
    };
    handleClick = () => {
      this.props.maybeShowAutocomplete();
    };
    handleContextMenu = (e) => {
      U.isPlatformEmbedded &&
        (0, b.L3)(
          e,
          async () => {
            let { default: e } = await Promise.all([n.e("230803"), n.e("342312")]).then(
              n.bind(n, 216603),
            );
            return (t) => (0, i.jsx)(e, { ...t, text: (0, w.u)() });
          },
          { align: "bottom", enableSpellCheck: !0 },
        );
    };
    handleOnChange = (e) => {
      let { onChange: t, allowNewLines: n } = this.props,
        i = e.currentTarget.value,
        r = n ? i : i.replace("\n", "");
      t?.(e, r, (0, N.x7)(r));
    };
    insertEmoji(e) {
      let { emoji: t, addSpace: n = !1 } = e;
      this.insertText(`:${t.name}:`, void 0, n);
    }
    getFirstText() {
      return this.props.value;
    }
  }
  var B = n(666860),
    V = n(625494),
    H = n(317681),
    j = n(186306),
    W = n(655098),
    Y = n(323350),
    K = n(35277),
    $ = n(820066),
    z = n(702483),
    X = n(490682),
    Z = n(683167),
    q = n(284009),
    Q = n.n(q),
    J = n(235599),
    ee = n(407315),
    et = n(2368),
    en = n(551483);
  function ei(e, t) {
    let n = A.A.getActiveCommand(e.id),
      i = n?.options?.find((e) => e.name === t.optionName);
    return null != i && (i.type !== E.n4.STRING || i?.choices != null || i?.autocomplete);
  }
  function er(e, t, n, i) {
    let r = $.VW.areStylesDisabled(e) || null == n ? t : n;
    j.o.withSingleEntry(e, () => {
      K.b.insertText(e, i ? r + " " : r);
    });
  }
  var ea = n(113001),
    es = n(770178),
    el = n(38405);
  let eo = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
  function ed(e) {
    try {
      return $.VW.toDOMNode(e, e);
    } catch (t) {
      let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
      return ((e.stack = t.stack), el.A.captureException(e), null);
    }
  }
  var ec = n(870748),
    eu = n(17928),
    e_ = n(31717),
    eE = n(660183),
    eA = n(106972);
  let eh = (e) => {
    let t,
      { channelId: n, element: a, attributes: l, children: o } = e,
      d = (0, J.f7)(),
      c = (0, J.zL)(),
      u = (0, J.RV)(),
      { optionType: _, errored: h } = (0, eu.cf)(
        [A.A],
        () => ({
          optionType: A.A.getOption(n, a.optionName)?.type,
          errored: A.A.getOptionState(n, a.optionName)?.lastValidationResult?.success !== !0,
        }),
        [n, a.optionName],
      ),
      f = (0, eu.bG)([p.A], () => p.A.getUpload(n, a.optionName, e_.C.SlashCommand), [
        n,
        a.optionName,
      ]),
      I = s()(eA.S0, eA.xP, { [eA.t$]: c && d, [eA.$2]: (!c || !d) && h }),
      T = r.useCallback(() => {
        $.VW.isVoid(u, a) || K.b.selectCommandOption(u, a.optionName, !0);
      }, [u, a]);
    return (
      (t =
        _ === E.n4.ATTACHMENT
          ? f?.filename != null
            ? (0, i.jsxs)("span", {
                className: s()(eA._K, eA.dU),
                contentEditable: !1,
                children: [f.filename, o],
              })
            : (0, i.jsxs)("span", {
                className: s()(eA._K, eA.ZI),
                contentEditable: !1,
                children: [eE.intl.string(eE.t.GRdFni), o],
              })
          : (0, i.jsx)("span", { className: eA._K, children: o })),
      (0, i.jsxs)("span", {
        ...l,
        className: I,
        children: [
          (0, i.jsxs)("span", {
            className: eA.gA,
            contentEditable: !1,
            onClick: T,
            children: [a.optionDisplayName, "\u200B"],
          }),
          t,
          (0, i.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
      })
    );
  };
  function ef(e) {
    let { element: t, attributes: n, children: r } = e,
      a = (0, J.f7)(),
      l = (0, J.zL)(),
      o = s()(eA.S0, eA.xP, eA.Bz, { [eA.t$]: l && a, [eA.$2]: t.error }),
      d = (0, i.jsx)("span", { className: eA._K, children: r });
    return (0, i.jsxs)("span", {
      ...n,
      className: o,
      children: [
        (0, i.jsxs)("span", {
          className: eA.gA,
          contentEditable: !1,
          children: ["@game", "\u200B"],
        }),
        d,
        (0, i.jsx)("span", { contentEditable: !1, children: "\u200B" }),
      ],
    });
  }
  function eI(e) {
    let { element: t, attributes: n, children: r } = e,
      a = (0, J.f7)(),
      l = (0, J.zL)(),
      o = s()(eA.S0, eA.xP, eA.Bz, { [eA.t$]: l && a, [eA.$2]: t.error }),
      d = t.children[t.children.length - 1],
      c = null != d && $.l5.isText(d) && d.text.endsWith("\n"),
      u = (0, i.jsxs)("span", {
        className: eA._K,
        children: [r, c ? (0, i.jsx)("span", { className: eA.Nx, contentEditable: !1 }) : null],
      });
    return (0, i.jsxs)("span", {
      ...n,
      className: o,
      children: [
        (0, i.jsxs)("span", {
          className: eA.gA,
          contentEditable: !1,
          children: ["@time", "\u200B"],
        }),
        u,
        (0, i.jsx)("span", { contentEditable: !1, children: "\u200B" }),
      ],
    });
  }
  var ep = n(183531);
  function eT(e) {
    let t,
      n,
      a,
      l,
      o,
      d,
      { ref: c, ...u } = e,
      {
        value: _,
        type: h,
        channel: f,
        className: I,
        id: m,
        disabled: g,
        submitting: N,
        placeholder: C,
        required: O,
        textAreaPaddingClassName: R,
        onChange: L,
        onPaste: y,
        onResize: D,
        onFocus: v,
        onBlur: b,
        onKeyDown: M,
        onKeyUp: U,
        onTab: w,
        onEnter: k,
        onSpace: F,
        onSubmit: q,
        onSubmitFailure: el,
        maybeShowAutocomplete: eu,
        hideAutocomplete: e_,
        moveSelection: eT,
        spellcheckEnabled: em,
        canUseCommands: eg,
        disableAutoFocus: eS,
        disableEnterToSubmit: eN,
        allowNewLines: eC,
        "aria-owns": eO,
        "aria-expanded": eR,
        "aria-haspopup": eL,
        "aria-activedescendant": ey,
        "aria-controls": eD,
        "aria-invalid": ev,
        "aria-describedby": eb,
        "aria-labelledby": eM,
        "aria-autocomplete": eP,
      } = u,
      eU = r.useRef(null),
      ew = r.useRef(null),
      eG = r.useRef(!0),
      ex = r.useRef(!0),
      ek = g || N,
      eF = r.useCallback(
        (e, t, n) => {
          let { value: i, selection: r } = n,
            a = $.VW.richValue(e),
            s = e.selection,
            l = !1;
          if (void 0 !== i && i !== a) {
            if (
              ((e.children = i),
              "parent" === t && !e.previewMarkdown && e.chatInputType === S.oU.EDIT)
            ) {
              try {
                ((e.previewMarkdown = !0), (0, et.eF)(e, f.guild_id, f.id));
              } finally {
                e.previewMarkdown = !1;
              }
              ((0, et.eF)(e, f.guild_id, f.id), (r = void 0));
            }
            ("undo" !== t && void 0 !== i && i !== a && j.o.insertEntry(e, "other", !1, a, s),
              (l = !0));
          }
          if (
            (null == r || $.Ot.isValid(e, r) || (r = void 0),
            (l || !$.Ot.isValid(e, s)) && void 0 === r)
          ) {
            let t = $.VW.end(e, []);
            r = { anchor: t, focus: t };
          }
          let o = null != r && !$.Ot.equals(r, s);
          if (null != r && o) {
            e.selection = r;
            let t = j.o.currentEntry(e);
            (null != t && (t.selection = r), (l = !0));
          }
          let d = H.n$(e);
          if (
            (null != d &&
              d[0].command.id !== A.A.getActiveCommand(f.id)?.id &&
              j.o.withMergedEntry(e, () => {
                (0, ec.t)(e, f.id, null, !0);
              }),
            l)
          )
            if ("parent" === t)
              try {
                ((ex.current = !1), e.onChange());
              } finally {
                ex.current = !0;
              }
            else e.onChange();
        },
        [f.id, f.guild_id],
      ),
      eB = r.useCallback(() => {
        eG.current = !1;
      }, []),
      eV = r.useCallback(() => {
        eG.current = !0;
      }, []),
      eH = (0, Z.A)({
        channel: f,
        chatInputType: h,
        onChangeStart: eB,
        onChangeEnd: eV,
        updateState: eF,
      }),
      ej = r.useCallback(
        (e, t) => {
          let n = H.SQ(eH, e, f.id),
            i = H.cd(e, f.guild_id, f.id, n, t);
          return { values: n, results: i };
        },
        [f.guild_id, f.id, eH],
      ),
      eW = r.useCallback(() => {
        let e,
          t = $.VW.getNodesOfType(eH, ["gameMentionInput", "timestampMentionInput"]),
          n = null != t ? [...t] : null,
          i = eg ? A.A.getActiveCommand(f.id) : null,
          r = !1;
        if (null != i && null != i.options) {
          let t = ej(i, !1);
          e = t.values;
          let n = H.O7(eH)
            .filter((e) => !t.results[e].success)
            .map((e) => (i.options ?? []).find((t) => t.name === e));
          for (let e of i.options)
            !e.required || e.name in t.values || (K.b.insertCommandOption(eH, e), n.push(e));
          if (n.length > 0) {
            let e = n[0];
            (K.b.selectCommandOption(eH, e.name),
              (r = !0),
              (0, B.zV)(G.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                application_id: i?.applicationId,
                command_id: i?.rootCommand?.id,
                argument_type: E.n4[e?.type ?? 3],
                is_required: e?.required,
              }));
          }
        }
        if (null != n)
          for (let [e, t] of n)
            (K.b.setNodes(eH, { error: !0 }, { at: t }),
              r || K.b.select(eH, $.VW.end(eH, t)),
              (r = !0));
        if (r) {
          (V._.dispatch(G.jej.SHAKE_APP, { duration: 200, intensity: 2 }), el?.());
          return;
        }
        q?.((0, Y.WO)($.VW.richValue(eH), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), i, e);
      }, [f.id, eH, q, el, ej, eg]);
    (r.useImperativeHandle(
      c,
      () => ({
        getSlateEditor: () => eH,
        submit(e) {
          (e?.preventDefault(), eW());
        },
        focus() {
          $.VW.focus(eH);
        },
        blur() {
          J.rL.blur(eH);
        },
        getCurrentWord() {
          let e = eH.selection;
          if (null == e || !$.Ot.isValid(eH, e) || $.ZF.isExpanded(e) || (0, ee.Q9)(eH))
            return { word: null, isAtStart: !1 };
          let [t, n] = $.VW.node(eH, $.PW.parent(e.anchor.path)),
            [i, r] = $.VW.node(eH, e.anchor.path),
            a = e.anchor.offset;
          if (!$.PW.hasPrevious(r) && $.l5.isText(i)) {
            let e = i.text.substring(0, a);
            if ($.AS.isType(t, "applicationCommand") && a < t.command.displayName.length + 2)
              return { word: e, isAtStart: !0 };
          }
          let s = "",
            l = !1;
          for (;;) {
            if (--a < 0) {
              if (!$.PW.hasPrevious(r)) {
                l = !0;
                break;
              }
              [i, r] = $.VW.node(eH, $.PW.previous(r));
            }
            if (!$.l5.isText(i)) break;
            let e = i.text[a];
            if (en.ug.test(e)) break;
            s = e + s;
          }
          let o = s,
            d = e.anchor.offset,
            [c] = $.VW.node(eH, e.anchor.path);
          for (; $.l5.isText(c) && !(d >= c.text.length);) {
            let e = c.text[d];
            if (en.ug.test(e)) break;
            ((o += e), d++);
          }
          let u = (0, P.h3)(s, o);
          return {
            word: u.word,
            fullWord: u.fullWord,
            isAtStart: !u.didTrimPrefix && l && $.PW.isFirstEditorBlock(n),
          };
        },
        getFirstText: () => $.VW.getFirstText(eH)?.text ?? "",
        getCurrentCommandOption() {
          let e = H.M3(eH);
          return null == e ? null : e[0].optionName;
        },
        getCurrentCommandOptionValue() {
          let e = H.M3(eH);
          if (null == e) return [];
          let t = A.A.getActiveCommand(f.id),
            n = t?.options?.find((t) => t.name === e[0].optionName);
          return null == n ? [] : H.FV(eH, n, e[0], f.id);
        },
        getCommandOptionValues() {
          let e = A.A.getActiveCommand(f.id);
          return null == e ? {} : H.SQ(eH, e, f.id);
        },
        insertText(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          j.o.withSingleEntry(eH, () => {
            let i = H.M3(eH),
              r = null != i && ei(f, i[0]);
            if (
              (null != t && r && (K.b.removeInlineChildren(eH, i), (n = !1)),
              er(eH, e, t, n),
              null != t && r)
            ) {
              let e = H.n$(eH);
              if (((i = $.cv.updateElement(eH, i)), null != e)) {
                let t = $.cv.markdown(e[0], f.guild_id);
                (0, et.lE)(eH, i, f.id, t) && (i = $.cv.updateElement(eH, i));
              }
              (H.ke(eH, f.guild_id, f.id, $.cv.updateElement(eH, i), !1),
                K.b.selectNextCommandOption(eH));
            }
          });
        },
        insertAutocomplete(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            { addSpace: n = !0, replaceFullWord: i = !1 } =
              arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          j.o.withSingleEntry(eH, () => {
            let r = H.M3(eH),
              a = null != r && ei(f, r[0]);
            if (a) (K.b.removeInlineChildren(eH, r), (n = !1));
            else {
              let { word: e, fullWord: t } = this.getCurrentWord();
              (null != e &&
                e.length > 0 &&
                K.b.delete(eH, { distance: e.length, unit: "character", reverse: !0 }),
                i &&
                  null != e &&
                  null != t &&
                  t.length - e.length > 0 &&
                  K.b.delete(eH, { distance: t.length - e.length, unit: "character" }));
            }
            (er(eH, e, t, n), a && K.b.selectNextCommandOption(eH));
          });
        },
        insertInlineAutocompleteInput(e) {
          j.o.withSingleEntry(eH, () => {
            let { word: t } = this.getCurrentWord();
            (null != t &&
              t.length > 0 &&
              K.b.delete(eH, { distance: t.length, unit: "character", reverse: !0 }),
              K.b.insertNodes(eH, [{ type: e, children: [{ text: "" }] }]));
          });
        },
        replaceInlineAutocompleteInput(e, t, n) {
          j.o.withSingleEntry(eH, () => {
            var t, i, r;
            let a = $.VW.getSelectedParentOfType(eH, [e]);
            (Q()(null != a, `Cannot replace inline input of type ${e} when none is selected`),
              K.b.removeNodes(eH, { at: a[1] }),
              (t = eH),
              (i = n),
              (r = !0),
              j.o.withSingleEntry(t, () => {
                K.b.insertText(t, r ? i + " " : i);
              }));
          });
        },
        insertEmoji(e) {
          let { emoji: t, addSpace: n = !1 } = e;
          j.o.withSingleEntry(eH, () => {
            let e = t.animated ? "a" : "",
              i = t.originalName ?? t.name ?? "";
            er(eH, `:${t.name}:`, null != t.id ? `<${e}:${i.replace(/:/g, "")}:${t.id}>` : null, n);
          });
        },
      }),
      [eH, f, eW],
    ),
      (t = r.useRef(null)),
      (n = r.useRef(null)),
      (a = r.useRef(null)),
      r.useLayoutEffect(() => {
        ((n.current = ed(eH)),
          null == n.current &&
            null == a.current &&
            (a.current = setTimeout(() => {
              n.current = ed(eH);
            }, 100)));
      }, [eH]),
      r.useEffect(() => {
        let e = a.current;
        return () => {
          null != e && clearTimeout(e);
        };
      }, []),
      (l = r.useCallback(() => {
        let e = n.current;
        if (null == e) return;
        let i = e.offsetHeight;
        t.current !== i &&
          (null != eU.current && (eU.current.style.height = `${i}px`), (t.current = i), D?.(i));
      }, [eU, D])),
      (0, es.g)(n, l, [l, eH, D], eo),
      r.useLayoutEffect(() => {
        let e = J.rL.findDocumentOrShadowRoot(eH).defaultView;
        if (e?.ResizeObserver == null) return;
        let n = ed(eH);
        null != n && ((t.current = n.offsetHeight), D?.(t.current));
      }, [eU, eH, D]));
    let { handleKeyDown: eY, handleKeyUp: eK } = (function (e) {
        let {
          editor: t,
          channel: n,
          disableEnterToSubmit: i,
          onKeyDown: a,
          onKeyUp: s,
          onTab: l,
          onEnter: o,
          onSpace: d,
          allowNewLines: c,
          submit: u,
          hideAutocomplete: _,
          moveSelection: E,
        } = e;
        return {
          handleKeyDown: r.useCallback(
            (e) => {
              switch (e.which) {
                case G.Ks6.ARROW_UP:
                  if (E(-1)) return void e.preventDefault();
                  break;
                case G.Ks6.ARROW_DOWN:
                  if (E(1)) return void e.preventDefault();
                  break;
                case G.Ks6.P:
                  if ((0, ea.j)(e, { ctrl: !0 }) && E(-1)) return void e.preventDefault();
                  break;
                case G.Ks6.N:
                  if ((0, ea.j)(e, { ctrl: !0 }) && E(1)) return void e.preventDefault();
                  break;
                case G.Ks6.ESCAPE:
                  _?.();
                  break;
                case G.Ks6.TAB:
                  if ((0, ea.j)(e, {}) && l?.()) {
                    (e.preventDefault(), e.stopPropagation());
                    return;
                  }
                  if (null != A.A.getActiveCommand(n.id)) {
                    (e.preventDefault(),
                      e.stopPropagation(),
                      e.shiftKey
                        ? K.b.selectPreviousCommandOption(t)
                        : K.b.selectNextCommandOption(t));
                    return;
                  }
                  break;
                case G.Ks6.ENTER:
                  if ((0, ea.j)(e, {}) && o?.(e)) {
                    (e.preventDefault(), e.stopPropagation());
                    return;
                  }
                  break;
                case G.Ks6.SPACE:
                  if ((0, ea.j)(e, {}) && d?.()) {
                    (e.preventDefault(), e.stopPropagation());
                    return;
                  }
              }
              if (t.onKeyDown?.(e) === !0) {
                (e.preventDefault(), e.stopPropagation());
                return;
              }
              (e.key !== x.dh.ENTER ||
                ((e.altKey || e.shiftKey || (i && !e.ctrlKey) || (0, ee.Q9)(t)) && c) ||
                (e.preventDefault(), e.stopPropagation(), u()),
                a?.(e));
            },
            [c, n.id, i, t, _, E, o, a, d, l, u],
          ),
          handleKeyUp: r.useCallback(
            (e) => {
              s?.(e);
            },
            [s],
          ),
        };
      })({
        editor: eH,
        channel: f,
        disableEnterToSubmit: eN,
        onKeyDown: M,
        onKeyUp: U,
        onTab: w,
        onEnter: k,
        onSpace: F,
        allowNewLines: eC,
        submit: eW,
        hideAutocomplete: e_,
        moveSelection: eT,
      }),
      { handlePaste: e$, handleGlobalPaste: ez } =
        ((o = r.useCallback(
          (e) => {
            if (ek) return !0;
            if (!0 === e.defaultPrevented) return !1;
            let t = y(e);
            return (t && (e.preventDefault(), e.stopPropagation()), t);
          },
          [ek, y],
        )),
        (d = r.useCallback(
          (e) => {
            let { event: t } = e;
            o(t) ||
              (t.preventDefault(),
              t.stopPropagation(),
              null != t.clipboardData && (eH.insertData(t.clipboardData), $.VW.focus(eH)));
          },
          [eH, o],
        )),
        { handlePaste: o, handleGlobalPaste: d }),
      eX = r.useCallback(
        (e) => {
          eu?.();
        },
        [eu],
      ),
      eZ = r.useCallback(
        (e) => {
          e !== ew.current
            ? ex.current && L?.(null, (0, Y.WO)(e, { mode: "raw" }), e)
            : ex.current && eu();
        },
        [eu, L],
      );
    (r.useLayoutEffect(() => {
      eG.current && ((ew.current = _), eF(eH, "parent", { value: _ }));
    }, [eH, _, eF]),
      r.useEffect(() => {
        function e() {
          let e = A.A.getActiveCommand(f.id) ?? null;
          null !== e && null != e.options && ej(e, !0);
        }
        return (p.A.addChangeListener(e), () => p.A.removeChangeListener(e));
      }, [f, eH, ej]));
    let eq = r.useCallback(
        (e) => [
          ...(0, X.A)(eH, e, f.guild_id),
          ...(0, z.A)(eH, e),
          ...(function (e, t) {
            if ($.VW.areStylesDisabled(e)) return [];
            let [n, i] = t,
              r = [];
            if (!$.l5.isText(n)) return r;
            let [a] = $.VW.node(e, $.PW.parent(i));
            return (
              $.AS.isType(a, "applicationCommand") &&
                n === a.children[0] &&
                r.push({
                  anchor: { path: i, offset: 0 },
                  focus: { path: i, offset: 0 + a.command.displayName.length + 1 },
                  commandName: !0,
                }),
              r
            );
          })(eH, e),
        ],
        [eH, f],
      ),
      eQ = r.useCallback(
        (e) => {
          let t = (function (e, t, n) {
            let { attributes: r, children: a, element: s } = t;
            switch (s.type) {
              case "applicationCommand":
                let l = A.A.getActiveCommand(n),
                  o = 0,
                  d = 0;
                if (null != l && l.id === s.command.id) {
                  let t = H.O7(e);
                  for (let e of l.options ?? []) t.includes(e.name) ? d++ : o++;
                }
                let c = {};
                if (o > 0) {
                  let e;
                  ((e =
                    d > 0
                      ? eE.intl.formatToPlainString(eE.t.BP8N0K, { count: o })
                      : eE.intl.formatToPlainString(eE.t.lziVC9, { count: o })),
                    (c["data-trailing-placeholder"] = e));
                }
                return (0, i.jsx)("div", { className: eA.uB, ...r, ...c, children: a });
              case "applicationCommandOption":
                return (0, i.jsx)(eh, { attributes: r, channelId: n, element: s, children: a });
              default:
                return null;
            }
          })(eH, e, f.id);
          return (
            null == t &&
              (t = (function (e) {
                let { attributes: t, children: n, element: r } = e;
                return "gameMentionInput" === r.type
                  ? (0, i.jsx)(ef, { attributes: t, element: r, children: n })
                  : null;
              })(e)),
            null == t &&
              (t = (function (e) {
                let { attributes: t, children: n, element: r } = e;
                return "timestampMentionInput" === r.type
                  ? (0, i.jsx)(eI, { attributes: t, element: r, children: n })
                  : null;
              })(e)),
            t
          );
        },
        [f.id, eH],
      ),
      eJ = r.useCallback(
        (e) =>
          (function (e) {
            let { attributes: t, children: n, leaf: r, text: a } = e;
            if (r.commandName) {
              let e = s()(eA.p6, { [eA.BI]: "" === a.text });
              return (0, i.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
            }
            return null;
          })(e),
        [],
      );
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(T.EG, { event: G.jej.GLOBAL_CLIPBOARD_PASTE, handler: ez }),
        (0, i.jsx)("div", {
          ref: eU,
          className: s()(I, ep.pC),
          children: (0, i.jsx)(W.A, {
            id: m,
            editor: eH,
            channelId: f.id,
            guildId: f.guild_id,
            className: s()(ep.gf, R),
            placeholder: C,
            readOnly: ek,
            spellCheck: em,
            autoFocus: !eS,
            canFocus: !g,
            onChange: eZ,
            onFocus: v,
            onBlur: b,
            onClick: eX,
            onPaste: e$,
            onKeyDown: eY,
            onKeyUp: eK,
            decorate: eq,
            renderExtraElement: eQ,
            renderExtraLeaf: eJ,
            "aria-owns": eO,
            "aria-haspopup": eL,
            "aria-expanded": eR,
            "aria-activedescendant": ey,
            "aria-controls": eD,
            "aria-labelledby": eM,
            "aria-describedby": eb,
            "aria-invalid": ev,
            "aria-autocomplete": eP,
            "aria-required": O,
          }),
        }),
      ],
    });
  }
  var em = n(495088);
  new f.A("ChannelEditor.tsx");
  let eg = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  };
  class eS extends r.Component {
    ref = r.createRef();
    _focusBlurQueue = Promise.resolve();
    _unsubscribe;
    _initTimeoutId = null;
    _cachedEditorWindow = null;
    _emptyRichValue = (0, N.x7)("");
    constructor(e) {
      (super(e),
        (this._unsubscribe = C.Y0.subscribe((e) => {
          requestAnimationFrame(() => {
            this.setState({ popup: e });
          });
        })),
        (this.state = { focused: !1, submitting: !1, popup: C.Y0.getState() }));
    }
    _getEditorWindow() {
      let e = this.ref?.current?.getSlateEditor?.()?.windowContext?.renderWindow;
      if (null == this._cachedEditorWindow || this._cachedEditorWindow !== e) {
        if (null != this._cachedEditorWindow && null == e) return null;
        this._cachedEditorWindow = e ?? window;
      }
      return this._cachedEditorWindow;
    }
    componentDidMount() {
      (this.props.focused && requestAnimationFrame(() => this.focus()),
        document.addEventListener("selectionchange", this.handleSelectionChange),
        window.addEventListener("beforeunload", this.handleBeforeUnload),
        (this._initTimeoutId = setTimeout(() => {
          this._getEditorWindow();
        }, 1e3)));
    }
    componentDidUpdate(e) {
      if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
        let e;
        ((e = this.props.useSlate
          ? this.props.textValue
          : (0, Y.WO)(this.props.richValue, { mode: "plain" })),
          this.props.onChange?.(null, e, (0, N.x7)(e)));
      } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled();
    }
    componentWillUnmount() {
      (this.saveCurrentText(),
        this._unsubscribe?.(),
        window.removeEventListener("beforeunload", this.handleBeforeUnload),
        document.removeEventListener("selectionchange", this.handleSelectionChange),
        (this._focusBlurQueue = null),
        (this._unsubscribe = null),
        (this._cachedEditorWindow = null),
        null != this._initTimeoutId && clearTimeout(this._initTimeoutId));
    }
    handleSelectionChange = () => {
      this.props.focused && this.props.onSelectionChanged(document.getSelection?.()?.toString());
    };
    focus = () => {
      this._focusBlurQueue?.then(() => {
        this.setState({ focused: !0 }, () => {
          let e = this.ref.current;
          null != e && e.focus();
        });
      });
    };
    blur() {
      let e = this.ref.current;
      null != e && e.blur();
    }
    submit(e) {
      this.ref.current?.submit(e);
    }
    insertEmoji(e) {
      let { emoji: t, willClose: n } = e,
        i = this.ref.current;
      null != t && null != i && (i.insertEmoji({ emoji: t, addSpace: n }), n && this.focus());
    }
    insertGIF(e) {
      let { textValue: t } = this.props,
        n = this.ref.current;
      null != e &&
        null != n &&
        ("" === t || t.endsWith(" ") || n.insertText(" ", void 0, !1), n.insertText(e.url));
    }
    insertSound(e) {
      let { textValue: t } = this.props,
        n = this.ref.current;
      null != e &&
        null != n &&
        (t.endsWith(" ") || n.insertText(" ", void 0, !1),
        n.insertText(`<sound:${e.guildId}:${e.soundId}>`, void 0, !0));
    }
    handleOuterClick() {
      this.focus();
    }
    clearValue() {
      let { channel: e, type: t } = this.props;
      (this.setState({ focused: !0, submitting: !1 }), c.A.saveDraft(e.id, "", t.drafts.type));
    }
    getCurrentWord() {
      let e = this.ref.current;
      return e?.getCurrentWord() ?? { word: null, isAtStart: !1 };
    }
    insertAutocomplete(e, t, n) {
      let i = this.ref.current;
      return i?.insertAutocomplete(e, t, n);
    }
    insertInlineAutocompleteElement(e) {
      let t = this.ref.current;
      return t?.insertInlineAutocompleteInput(e);
    }
    replaceInlineAutocompleteInput(e, t, n) {
      let i = this.ref.current;
      return i?.replaceInlineAutocompleteInput(e, t, n);
    }
    getCurrentCommandOption() {
      let e = this.ref.current;
      return e?.getCurrentCommandOption?.() ?? null;
    }
    getCurrentCommandOptionValue() {
      let e = this.ref.current;
      return e?.getCurrentCommandOptionValue?.() ?? [];
    }
    getCommandOptionValues() {
      let e = this.ref.current;
      return e?.getCommandOptionValues?.() ?? {};
    }
    getFirstText() {
      let e = this.ref.current;
      return e?.getFirstText() ?? null;
    }
    getSlateEditor() {
      let e = this.ref.current;
      return e?.getSlateEditor?.() ?? null;
    }
    fixFocus(e) {
      e.focused && !this.props.focused
        ? this.blur()
        : !e.focused && this.props.focused && this.focus();
    }
    appendText(e, t) {
      let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
      this.ref.current?.insertText(e, t, n);
    }
    saveCurrentText = (() => {
      var e = this;
      return function () {
        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          { type: n, channel: i } = e.props;
        n.drafts.autoSave &&
          (t && e.saveCurrentTextThrottled.cancel(), e.handleSaveCurrentText(i.id));
      };
    })();
    handleBeforeUnload = () => this.saveCurrentText();
    saveCurrentTextThrottled = o().throttle(this.saveCurrentText.bind(this, !1), 500);
    getPlaceholder() {
      let { disabled: e, placeholder: t, isPreviewing: n, showValueWhenDisabled: i } = this.props;
      return e && !n ? (i ? "" : eE.intl.string(eE.t.IYKTTc)) : t;
    }
    handleEnter = (e) => this.props.onEnter?.(e);
    handleTab = () => this.props.onTab?.();
    handleSpace = () => this.props.onSpace?.();
    handleMoveSelection = (e) => this.props.onMoveSelection?.(e);
    maybeShowAutocomplete = () => this.props.onMaybeShowAutocomplete?.();
    hideAutocomplete = () => this.props.onHideAutocomplete?.();
    render() {
      let {
          textValue: e,
          richValue: t,
          disabled: n,
          onChange: r,
          onKeyDown: a,
          onResize: l,
          onSubmit: o,
          onSubmitFailure: c,
          channel: u,
          type: _,
          useSlate: E,
          spellcheckEnabled: A,
          useNewSlashCommands: h,
          canOnlyUseTextCommands: f,
          className: I,
          id: p,
          required: m,
          maxCharacterCount: g,
          allowNewLines: N,
          "aria-describedby": C,
          "aria-labelledby": O,
          accessibilityLabel: R,
          showValueWhenDisabled: L,
        } = this.props,
        { submitting: y, popup: D } = this.state,
        v = {
          channel: u,
          className: s()(I, em.Tg, { [em.w5]: E, [em.Rr]: n || y }),
          id: p,
          placeholder: this.getPlaceholder(),
          required: m,
          accessibilityLabel: R,
          disabled: n || !1,
          submitting: y,
          isEdit: _ === S.oU.EDIT,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onPaste: this.handlePaste,
          onTab: this.handleTab,
          onEnter: this.handleEnter,
          onSpace: this.handleSpace,
          moveSelection: this.handleMoveSelection,
          maybeShowAutocomplete: this.maybeShowAutocomplete,
          hideAutocomplete: this.hideAutocomplete,
          allowNewLines: N,
          onChange: r,
          onResize: l,
          onKeyDown: a,
          onSubmit: o,
          textAreaPaddingClassName: s()({
            [em.H$]: _ === S.oU.CREATE_FORUM_POST,
            [em.g_]: _ === S.oU.CUSTOM_GIFT,
            [em.Yg]: _ === S.oU.USER_PROFILE,
            [em.$$]: _ === S.oU.OVERLAY_INLINE_REPLY,
          }),
          spellcheckEnabled: A,
          useNewSlashCommands: h,
          disableAutoFocus: d.Fr || (_.disableAutoFocus ?? !1),
          disableEnterToSubmit: _.submit?.disableEnterToSubmit ?? !1,
          "aria-controls": D.id ?? void 0,
          "aria-haspopup": "listbox",
          "aria-expanded": null !== D.id || void 0,
          "aria-activedescendant": D.activeDescendant ?? void 0,
          "aria-invalid": e.length > g,
          "aria-describedby": C,
          "aria-labelledby": O,
          "aria-autocomplete": "list",
        },
        b = E
          ? (0, i.jsx)(eT, {
              ref: this.ref,
              ...v,
              type: _,
              value: n && !L ? this._emptyRichValue : t,
              canUseCommands: _.commands?.enabled,
              canOnlyUseTextCommands: f,
              onSubmitFailure: c,
            })
          : (0, i.jsx)(F, { ref: this.ref, ...v, value: n && !L ? "" : e });
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(T.EG, { event: G.jej.INSERT_TEXT, handler: this.handleInsertText }),
          (0, i.jsx)(T.EG, { event: G.jej.CLEAR_TEXT, handler: this.handleClearText }),
          b,
        ],
      });
    }
    handleSaveCurrentText = (e) => {
      let { textValue: t } = this.props,
        n = (0, h.I)(A.A.getActiveCommand(e), t);
      c.A.saveDraft(e, t, this.props.type.drafts.type, n);
    };
    handleClearText = () => {
      this.props.onChange?.(null, "", (0, N.x7)(""));
    };
    handleInsertText = (e) => {
      let { plainText: t, rawText: n, addSpace: i = !1 } = e;
      this.props.disabled || (this.appendText(t, n, i), this.focus());
    };
    handleFocus = (e) => {
      let { onFocus: t } = this.props,
        { focused: n } = this.state;
      (t?.(e), n || this.setState({ focused: !0 }));
    };
    handleBlur = (e) => {
      let { onBlur: t } = this.props,
        { focused: n } = this.state;
      (t?.(e), n && this.setState({ focused: !1 }));
    };
    handlePaste = (e) => {
      let t,
        n = e.target?.ownerDocument?.defaultView,
        {
          channel: i,
          canPasteFiles: r,
          uploadPromptCharacterCount: a,
          promptToUpload: s,
          maxCharacterCount: l,
          type: o,
        } = this.props,
        d =
          null != n
            ? (function (e) {
                if (null == e) return null;
                let t = (0, y.Q2)(e);
                return null == t ? null : D(t);
              })(n)
            : null,
        c = null == (t = L.A.getFocusedWindowId()) ? null : D(t),
        h = !(function (e, t) {
          if (null == e || null == t) return !1;
          let n = (0, y.Q2)(e);
          return n === (0, y.Q2)(t) && null != n;
        })(n, this._getEditorWindow())
          ? (d ?? c ?? i)
          : i;
      if (null == s || (!h.isPrivate() && !r) || (h.isPrivate() && h.isManaged())) return !1;
      let { files: f, errors: T } = (function (e, t) {
        let n = [],
          i = [],
          r = null,
          a = null,
          s = [];
        for (let t of e.items)
          if ("file" === t.kind) {
            let e = t.webkitGetAsEntry?.() ?? t.getAsEntry?.() ?? null;
            if (null != e && !1 === e.isFile) {
              s.push({ item: t, error: "is_directory" });
              continue;
            }
            let r = t.getAsFile();
            if (null == r) continue;
            null != r.path && r.path.length > 0 ? n.push(r) : i.push(r);
          } else
            "string" === t.kind &&
              ("text/plain" === t.type && null == r
                ? (r = t)
                : "text/html" === t.type && null == a && (a = t));
        if (n.length > 0) return { files: n, errors: s };
        if (i.length > 0) {
          if (1 === i.length && "image/png" === i[0].type && null != a) {
            let t = i[0],
              n =
                (function (e) {
                  let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
                  if (null != t) {
                    let e;
                    try {
                      let { pathname: n } = new URL(t.src);
                      null != n && n.length > 0 && (e = (0, g.kh)(n));
                    } catch {}
                    if (null != e && e.length > 0) return `${e}.png`;
                  }
                })(e.getData(a.type)) ?? t.name;
            return { files: [(0, m.VE)(t, n, t.type)], errors: s };
          }
          return { files: i, errors: s };
        }
        if (null != r && null != t) {
          let n = e.getData(r.type);
          if (n.length > t) {
            let e = new Blob([n], { type: "text/plain" });
            return {
              files: [(0, m.VE)(e, "message.txt", "text/plain")],
              convertedStringToFile: !0,
              errors: s,
            };
          }
        }
        return { files: [], errors: s };
      })(e.clipboardData, o.uploadLongMessages ? (a ?? l) : null);
      return (eg(
        "onPaste",
        [...e.clipboardData.items].map((e) => {
          if ("file" !== e.kind) return { kind: e.kind, type: e.type };
          {
            let t = e.getAsFile();
            return { kind: e.kind, type: e.type, name: t?.name, path: t?.path };
          }
        }),
      ),
      0 === f.length)
        ? (null != T &&
            T.length > 0 &&
            (0, _.openUploadError)({
              title: eE.intl.string(eE.t.azO1Pe),
              help: eE.intl.string(eE.t["Koklr/"]),
            }),
          !1)
        : (e.preventDefault(),
          e.stopPropagation(),
          this.saveCurrentText(),
          !(function (e) {
            if (null == s) return;
            let t = A.A.getActiveCommand(h.id);
            if (null == t)
              return s(e, h, o.drafts.type, { requireConfirm: !0, origin: "clipboard" });
            let n = o.drafts.commandType ?? o.drafts.type,
              i = null,
              r = A.A.getActiveOption(h.id);
            null !=
              (i =
                r?.type === E.n4.ATTACHMENT
                  ? r
                  : t.options?.find((e) => {
                      if (e.type === E.n4.ATTACHMENT) return null == p.A.getUpload(h.id, e.name, n);
                    })) &&
              u.A.setFile({
                channelId: h.id,
                id: i.name,
                draftType: n,
                file: { id: i.name, platform: I.x.WEB, file: e[0] },
              });
          })(f),
          this.focus(),
          !0);
    };
  }
}
