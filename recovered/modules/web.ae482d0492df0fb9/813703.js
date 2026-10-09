/* Recovered shipped factory. Module 813703.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4930731..4939914
 * Raw property SHA-256: 0fa22ac93d3b7bc69162d69579daf030895bc48c1edb26767e9a5fb4deff32f8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => z });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(297264),
    d = n(683438),
    c = n(939249),
    u = n(477155),
    _ = n(73153),
    E = n(497685),
    A = n(235986),
    h = n(151271),
    f = n(821102),
    I = n(996566),
    p = n(336807),
    T = n(435558),
    m = n.n(T),
    g = n(803805),
    S = n(661531),
    N = n(27232),
    C = n(555704),
    O = n(92008),
    R = n(25277),
    L = n(583613),
    y = n(327143),
    D = n(615300),
    v = n(664668);
  let b = [
    S.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css,
    S.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css,
    "#929AFA",
  ];
  class M extends r.PureComponent {
    state = { backgroundColor: m().sample(b) };
    render() {
      let {
        props: { height: e },
        state: { backgroundColor: t },
      } = this;
      return (0, i.jsx)("div", { style: { height: e, backgroundColor: t }, className: v.nX });
    }
  }
  class P extends r.Component {
    static defaultProps = { direction: -1 };
    constructor(e) {
      super(e);
      const t = Array(10)
        .fill(null)
        .map(() => m().random(40, 150));
      this.state = {
        blocks: t,
        height: 2 * t.reduce((e, t) => e + t + 12, 12),
        translateY: new D.A.Value(0),
      };
    }
    componentDidMount() {
      this.animateSlide();
    }
    animateSlide = () => {
      let {
        props: { direction: e },
        state: { translateY: t, height: n },
      } = this;
      (t.setValue(e > 0 ? 0 : -n / 2 + 12),
        D.A.timing(t, {
          toValue: e > 0 ? -n / 2 + 12 : 0,
          duration: 800,
          easing: D.A.Easing.linear,
        }).start(this.animateSlide));
    };
    getAnimatedStyle() {
      let {
        props: { columns: e },
        state: { translateY: t },
      } = this;
      return {
        width: `${100 / e}%`,
        transform: [
          { translateY: t.interpolate({ inputRange: [0, 1], outputRange: ["0px", "1px"] }) },
        ],
      };
    }
    render() {
      let { blocks: e } = this.state;
      return (0, i.jsxs)(D.A.div, {
        className: v.fi,
        style: this.getAnimatedStyle(),
        children: [
          e.map((e, t) => (0, i.jsx)(M, { height: e }, t)),
          e.map((e, t) => (0, i.jsx)(M, { height: e }, `alt${t}`)),
        ],
      });
    }
  }
  function U(e) {
    let { columns: t } = e;
    return (0, i.jsx)("div", {
      className: v.fi,
      style: { width: `${100 / t}%` },
      children: [, , , ,].fill(null).map((e, t) => (0, i.jsx)("div", { className: v.c8 }, t)),
    });
  }
  class w extends r.PureComponent {
    render() {
      let { columns: e, renderColumn: t } = this.props;
      return (0, i.jsx)("div", {
        className: v.kL,
        children: Array(e)
          .fill(null)
          .map((n, i) => t(e, i)),
      });
    }
  }
  var G = n(285961),
    x = n(652215),
    k = n(660183),
    F = n(682863);
  function B(e, t) {
    return (0, i.jsx)(U, { columns: e }, t);
  }
  class V extends r.PureComponent {
    _masonryRef = r.createRef();
    state = {
      favoritesTile: (function (e) {
        let t = m().sample(m().values(e));
        return {
          type: x.dD.FAVORITES,
          name: k.intl.string(k.t.y3LQCG),
          icon: N.StarIcon,
          src: null != t ? t.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
          format: t?.format ?? g.TL.IMAGE,
        };
      })(this.props.favorites),
      selectedIndex: { column: 0, row: 0 },
      focusedId: null,
    };
    componentDidMount() {
      0 === this.props.trendingCategories.length && (0, E.k8)();
    }
    handleFocus = (e) => {
      let { current: t } = this._masonryRef;
      if (null == t) return;
      let n = t.getCoordsMap()[e];
      null != n &&
        (t.scrollIntoViewRect({ start: n.top - 10, end: n.top + n.height + 10 }),
        this.setState({ focusedId: e }));
    };
    handleSelect = (e) => {
      let { onSelectItem: t } = this.props,
        n = this.getData().find((t) => t.name === e);
      null != n && null != t && t(n.type, n.name);
    };
    getItemKey = (e, t) => {
      if (e > 0) return null;
      let n = this.getData()[t];
      return null != n ? n.name : null;
    };
    memoizedData = (0, L.L_)(function (e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return n ? [...t] : [e, ...t];
    });
    getData() {
      return this.memoizedData(
        this.state.favoritesTile,
        this.props.trendingCategories,
        this.props.hideFavoritesTile,
      );
    }
    renderCategoryExtras(e) {
      let { name: t, type: n } = e;
      return (0, i.jsxs)(r.Fragment, {
        children: [
          (0, i.jsx)("div", { className: n === x.dD.FAVORITES ? F.H7 : F.FP }),
          (0, i.jsxs)("div", {
            className: F.O1,
            children: [
              n === x.dD.TRENDING_GIFS
                ? (0, i.jsx)(C.U, { className: F.Yl, color: "currentColor" })
                : null,
              (0, i.jsx)("span", { className: F.yb, children: t }),
            ],
          }),
        ],
      });
    }
    renderItem = (e, t, n, r) => {
      if (e > 0) return null;
      let a = this.getData()[t];
      if (null == a) return;
      let { onSelectItem: s, imagePool: l, videoPool: o } = this.props,
        { focusedId: d } = this.state;
      return (0, i.jsx)(
        G.uG,
        {
          format: a.format,
          color: S.A.unsafe_rawColors.PRIMARY_800.css,
          src: a.src,
          item: a,
          index: t,
          coords: n,
          onClick: () => s(a.type, a.name),
          renderExtras: this.renderCategoryExtras,
          focused: a.name === d,
          imagePool: l,
          videoPool: o,
          "aria-label": a.name,
        },
        r,
      );
    };
    renderContent = (e, t, n) => {
      let { className: r, trendingCategories: a } = this.props;
      return 0 === a.length
        ? (0, i.jsx)(w, { columns: e, width: t, renderColumn: B })
        : (0, i.jsx)(O.f, {
            ref: this._masonryRef,
            fade: !0,
            className: s()(F.kL, r),
            itemGutter: 12,
            getItemKey: this.getItemKey,
            columns: e,
            getItemHeight: () => 110,
            renderItem: this.renderItem,
            sections: [this.getData().length],
            chunkSize: 50,
          });
    };
    getItemGrid = () => {
      let { current: e } = this._masonryRef;
      return null != e ? e.getItemGrid() : [];
    };
    getCoordsMap = () => {
      let { current: e } = this._masonryRef;
      return null != e ? e.getCoordsMap() : {};
    };
    render() {
      return (0, i.jsx)(R.A, {
        getItemGrid: this.getItemGrid,
        getCoordsMap: this.getCoordsMap,
        onFocus: this.handleFocus,
        onSelect: this.handleSelect,
        children: (0, i.jsx)(y.A, {
          desiredItemWidth: 200,
          maxColumns: 6,
          children: this.renderContent,
        }),
      });
    }
  }
  function H(e) {
    let t = (0, l.bG)([f.A], () => f.A.getTrendingCategories()),
      n = (0, I.rM)(),
      r = (0, G.d5)();
    return (0, i.jsx)(V, { ...e, ...r, trendingCategories: t, favorites: n });
  }
  var j = n(732139),
    W = n(650583),
    Y = n(986531);
  function K(e) {
    return e.stopPropagation();
  }
  class $ extends r.PureComponent {
    state = { resultType: null };
    componentDidMount() {
      (E.V$(),
        document.addEventListener("keydown", this.backToFrontPage),
        "" !== this.props.query && this.search(this.props.query, x.dD.SEARCH));
    }
    componentDidUpdate(e) {
      ("" === e.query &&
        "" !== this.props.query &&
        null == this.state.resultType &&
        this.search(this.props.query, x.dD.SEARCH),
        "" !== e.query &&
          "" === this.props.query &&
          this.state.resultType === x.dD.SEARCH &&
          this.setState({ resultType: null }));
    }
    componentWillUnmount() {
      (_.h.wait(() => E.Se()), document.removeEventListener("keydown", this.backToFrontPage));
    }
    search(e, t, n) {
      (E.$P(e, t, n),
        "" === e
          ? this.setState({ resultType: null })
          : this.state.resultType !== x.dD.SEARCH && this.setState({ resultType: x.dD.SEARCH }));
    }
    backToFrontPage = (e) => {
      let { resultType: t } = this.state;
      e.key !== W.dh.ESCAPE ||
        (null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery()));
    };
    handleChangeQuery = (e) => {
      ((0, h.Ri)(e), this.search(e, x.dD.SEARCH));
    };
    handleSelectSuggestion = (e) => {
      ((0, h.Ri)(""), E.Se(), this.search(e, x.dD.SEARCH_SUGGESTION, !0));
    };
    handleClearQuery = () => {
      let { current: e } = this.props.searchBarRef;
      ((0, h.Ri)(""), E.Se(), this.setState({ resultType: null }), null != e && e.focus());
    };
    handleSelectGIF = (e, t) => {
      let { onSelectGIF: n } = this.props;
      null != n && n(e, t);
    };
    handleSelectItem = (e, t) => {
      switch (e) {
        case x.dD.TRENDING_CATEGORY:
          E.$P(t, x.dD.TRENDING_CATEGORY, !0);
          break;
        case x.dD.TRENDING_GIFS:
          E.Z4();
      }
      this.setState({ resultType: e }, () => {
        if (e === x.dD.TRENDING_CATEGORY) {
          let { current: e } = this.props.searchBarRef;
          null != e && e.focus();
        }
      });
    };
    renderHeaderContent() {
      let { query: e, favorites: t, headingColor: n } = this.props,
        { resultType: r } = this.state;
      switch (r) {
        case x.dD.FAVORITES:
          return (0, i.jsxs)("div", {
            className: Y.XK,
            children: [
              (0, i.jsx)(o.D, {
                variant: "heading-md/semibold",
                color: n,
                className: Y.wL,
                children: k.intl.string(k.t.y3LQCG),
              }),
              t.length > 0 &&
                (0, i.jsx)(d.I, {
                  query: e,
                  onChange: h.Ri,
                  onClear: () => (0, h.Ri)(""),
                  placeholder: k.intl.string(k.t["+Kakw+"]),
                  "aria-label": k.intl.string(k.t["+Kakw+"]),
                  ref: this.props.searchBarRef,
                  autoFocus: !0,
                }),
            ],
          });
        case x.dD.TRENDING_GIFS:
          return (0, i.jsx)(o.D, {
            variant: "heading-md/semibold",
            color: n,
            className: Y.wL,
            children: k.intl.string(k.t.H6zNFz),
          });
        default: {
          let t = (0, p.wT)();
          return (0, i.jsx)(d.I, {
            query: e,
            onChange: this.handleChangeQuery,
            onClear: this.handleClearQuery,
            placeholder: t,
            "aria-label": t,
            ref: this.props.searchBarRef,
            autoFocus: !0,
          });
        }
      }
    }
    renderHeader() {
      let { resultType: e } = this.state,
        t = null;
      return (
        null != e &&
          (t = (0, i.jsx)(c.D, {
            onClick: this.handleClearQuery,
            className: Y.Gv,
            "aria-label": k.intl.string(k.t["13/7kX"]),
            children: (0, i.jsx)(u.r, { size: "md", color: "currentColor" }),
          })),
        (0, i.jsxs)(A.A, { align: A.A.Align.CENTER, children: [t, this.renderHeaderContent()] })
      );
    }
    renderContent() {
      let {
          contentClassName: e,
          resultItems: t,
          resultQuery: n,
          query: r,
          favorites: a,
          searchOffset: s,
          searchLimit: l,
          searchTotalResults: o,
          suggestions: d,
          hideFavorites: c,
        } = this.props,
        { resultType: u } = this.state;
      return null == u
        ? (0, i.jsx)(H, { className: e, hideFavoritesTile: c, onSelectItem: this.handleSelectItem })
        : (0, i.jsx)(G.Ay, {
            className: e,
            data:
              u === x.dD.FAVORITES
                ? (function (e, t) {
                    if ("" === t) return e;
                    let n = t.toLowerCase().replace(/[-_ ]/g, "");
                    return e.filter((e) => {
                      let { url: t } = e;
                      return t.toLowerCase().replace(/[-_]/g, "").includes(n);
                    });
                  })(a, r)
                : t,
            onSelectGIF: this.handleSelectGIF,
            resultType: u,
            resultQuery: n,
            query: r,
            searchOffset: s,
            searchLimit: l,
            searchTotalResults: o,
            suggestions: d,
            onSelectSuggestion: this.handleSelectSuggestion,
            selectedGIF: this.props.selectedGIF,
          });
    }
    render() {
      let { className: e, forwardedRef: t } = this.props;
      return (0, i.jsxs)("div", {
        id: j.ni,
        role: "tabpanel",
        "aria-labelledby": j.g9,
        className: s()(Y.kL, e),
        onClick: K,
        ref: t,
        children: [
          (0, i.jsx)("div", {
            className: s()(Y.wx, this.props.headerClassName),
            children: this.renderHeader(),
          }),
          (0, i.jsx)("div", { className: Y.Qs, children: this.renderContent() }),
        ],
      });
    }
  }
  function z(e) {
    let { ref: t, ...n } = e;
    r.useEffect(
      () => (
        n.persistSearch ||
          ((0, h.Ri)(n.initialQuery ?? ""), E.$P(n.initialQuery ?? "", x.dD.SEARCH)),
        () => {
          n.persistSearch || (0, h.Ri)("");
        }
      ),
      [n.persistSearch, n.initialQuery],
    );
    let {
        query: a,
        resultQuery: s,
        resultItems: o,
        suggestions: d,
      } = (0, l.cf)([f.A], () => ({
        query: f.A.getQuery(),
        resultQuery: f.A.getResultQuery(),
        resultItems: f.A.getResultItems(),
        suggestions: f.A.getSuggestions(),
      })),
      c = (0, h.RQ)((e) => e.searchQuery),
      u = (0, I.IE)(),
      _ = r.useRef(null);
    return (0, i.jsx)($, {
      ...n,
      forwardedRef: t,
      query: null != a && "" !== a ? a : c,
      resultQuery: s,
      resultItems: o,
      suggestions: d,
      favorites: u,
      searchOffset: 0,
      searchTotalResults: f.A.getResultItems().length,
      searchLimit: null,
      searchBarRef: _,
      selectedGIF: n.selectedGIF,
    });
  }
}
