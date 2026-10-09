/* Recovered shipped factory. Module 285961.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4939915..4949044
 * Raw property SHA-256: 039b038d678df2c3e6d92c50cc159293e1a98d55f9e2c0a6f9898d0fe24fd496
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { d5: () => H, Ay: () => j, uG: () => B });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l);
  n(321073);
  class d {
    _elements;
    _createElement;
    _cleanElement;
    constructor(e, t) {
      ((this._elements = []), (this._createElement = e), (this._cleanElement = t));
    }
    getElement() {
      return 0 === this._elements.length ? this._createElement() : this._elements.pop();
    }
    poolElement(e) {
      (this._cleanElement(e), this._elements.push(e));
    }
    clearPool() {
      this._elements.length = 0;
    }
  }
  var c = n(803805),
    u = n(661531),
    _ = n(939249),
    E = n(834730),
    A = n(825484),
    h = n(821609),
    f = n(27232),
    I = n(364522),
    p = n(92008),
    T = n(442433),
    m = n(497685),
    g = n(25277),
    S = n(537652),
    N = n(267102),
    C = n(679164),
    O = n(439401),
    R = n(957565),
    L = n(998218),
    y = n(327143),
    D = n(652215),
    v = n(660183),
    b = n(801601);
  let M = [
      u.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css,
      u.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css,
      "#929AFA",
    ],
    P = Array.from({ length: 16 }).map((e, t) => ({
      id: `${t}`,
      height: Math.floor(100 * Math.random()) + 120,
    }));
  function U(e) {
    return e.id ?? e.src;
  }
  function w(e, t) {
    let n = P[t];
    return null == n ? 0 : n.height;
  }
  function G(e, t, n, r) {
    if (!(e > 0))
      return null == P[t]
        ? null
        : (0, i.jsx)("div", { className: b.qf, style: { animationDelay: `${75 * t}ms`, ...n } }, r);
  }
  function x(e, t) {
    return e > 0 ? "" : (P[t]?.id ?? "");
  }
  function k(e) {
    return e === c.TL.VIDEO;
  }
  function F(e) {
    let t = L.A.toURLSafe(e, document.baseURI),
      n = null != t && (C.BX(t) || C.i(t)) && t.pathname.toLowerCase().endsWith(".gif");
    return null != t &&
      (((C.BX(t) || C.i(t)) &&
        (t.pathname.toLowerCase().endsWith(".webp") ||
          t.pathname.toLowerCase().endsWith(".avif"))) ||
        n)
      ? (n && t.searchParams.set("format", "webp"),
        t.searchParams.set("animated", "true"),
        t.toString())
      : e;
  }
  class B extends r.PureComponent {
    ref = null;
    _video = null;
    _image = null;
    _mounted = !0;
    constructor(e) {
      super(e);
      const { format: t, color: n, imagePool: i } = this.props;
      ((this.state = { color: null == n ? o().sample(M) : n, loaded: !1 }),
        k(t) ||
          ((this._image = i.getElement()),
          (this._image.onload = () => this.setState({ loaded: !0 })),
          (this._image.src = F(e.src))));
    }
    componentDidMount() {
      let {
        props: {
          format: e,
          src: t,
          coords: { width: n, height: i },
          videoPool: r,
        },
        ref: a,
      } = this;
      if (e !== c.TL.VIDEO || null == a) return;
      let s = r.getElement();
      ((s.oncanplay = this.handleCanPlay),
        (s.src = t),
        (s.width = n),
        (s.height = i),
        a.appendChild(s),
        (this._video = s));
    }
    componentDidUpdate(e) {
      let { width: t, height: n } = this.props.coords;
      null != this._video &&
        (e.coords.width !== t || e.coords.height !== n) &&
        ((this._video.width = t), (this._video.height = n));
    }
    componentWillUnmount() {
      this._mounted = !1;
      let { _image: e, _video: t } = this,
        { imagePool: n, videoPool: i } = this.props;
      (null != e && ((this._image = null), n.poolElement(e)),
        null != t && ((this._video = null), i.poolElement(t)));
    }
    handleCanPlay = () => {
      this._mounted && this.setState({ loaded: !0 });
    };
    handleClick = (e) => {
      let { onClick: t, item: n, index: i } = this.props;
      null != t && t(n, i, { shiftKey: e.shiftKey });
    };
    handleContextMenu = (e) => {
      let { onContextMenu: t, item: n } = this.props;
      t?.(e, n);
    };
    renderGIF() {
      let {
          src: e,
          coords: { width: t, height: n },
        } = this.props,
        { loaded: r } = this.state;
      return r
        ? (0, i.jsx)("img", { src: F(e), width: t, height: n, className: b.nX, alt: "" })
        : null;
    }
    render() {
      let {
          item: e,
          renderExtras: t,
          format: n,
          coords: r,
          focused: a,
          selected: s,
          "aria-label": l,
        } = this.props,
        { color: o, loaded: d } = this.state;
      return (0, i.jsxs)(_.D, {
        tabIndex: -1,
        "aria-label": l,
        innerRef: (e) => {
          this.ref = e;
        },
        className: b.Ke,
        "data-focused": a,
        "data-selected": s,
        onClick: this.handleClick,
        onContextMenu: this.handleContextMenu,
        style: { backgroundColor: d ? void 0 : o, ...r },
        children: [k(n) ? null : this.renderGIF(), null != t ? t(e) : null],
      });
    }
  }
  class V extends r.PureComponent {
    _masonryRef = r.createRef();
    _footerContent = null;
    prevResultQuery = null;
    state = { focusedId: null, footerHeight: 180 };
    componentDidMount() {
      let { resultType: e, data: t } = this.props;
      (e === D.dD.FAVORITES &&
        ((0, m.Qh)(D.dD.FAVORITES), (0, m.H9)(t, D.dD.FAVORITES, { limit: null })),
        this.measureFooter());
    }
    componentDidUpdate() {
      this.measureFooter();
    }
    setFooterContent = (e) => {
      ((this._footerContent = e), this.measureFooter());
    };
    measureFooter = () => {
      let e = this._footerContent;
      if (null == e) return;
      let t = e.offsetHeight;
      t > 0 && t !== this.state.footerHeight && this.setState({ footerHeight: t });
    };
    handleFocus = (e) => {
      let { current: t } = this._masonryRef;
      if (null == t) return;
      let n = t.getCoordsMap()[e];
      null != n &&
        (t.scrollIntoViewRect({ start: n.top - 10, end: n.top + n.height + 10 }),
        this.setState({ focusedId: e }));
    };
    selectItem(e, t, n) {
      let { onSelectGIF: i, resultType: r, data: a, resultQuery: s } = this.props;
      (null != i && i(e, n),
        (0, m.g4)({
          type: r,
          index: t,
          offset: this.props.searchOffset,
          limit: this.props.searchLimit,
          results: a.length,
          totalResults: this.props.searchTotalResults,
          query: s,
          gifId: e.id,
        }));
    }
    handleSelect = (e, t) => {
      let n,
        { data: i } = this.props,
        r = i.findIndex((t) => U(t) === e);
      (-1 !== r && (n = i[r]), null != n && this.selectItem(n, r, t));
    };
    handleClickItem = (e, t, n) => {
      this.selectItem(e, t, n);
    };
    handleContextMenu = (e, t) => {
      R.p5 &&
        (0, T.L3)(e, async () => {
          let { default: e } = await n.e("22282").then(n.bind(n, 400017));
          return (n) => (0, i.jsx)(e, { ...n, link: t.url });
        });
    };
    handleScroll = () => {
      let { resultQuery: e } = this.props,
        { current: t } = this._masonryRef;
      if (null == t) return;
      let { scrollTop: n, scrollHeight: i } = t.getScrollerState();
      i - n <= 1180 && (e !== this.prevResultQuery && (0, m._E)(e), (this.prevResultQuery = e));
    };
    renderItem = (e, t, n, r) => {
      var a;
      let s, l;
      if (e > 0) return null;
      let { focusedId: o } = this.state,
        { selectedGIF: d } = this.props,
        c = this.props.data[t];
      if (null == c) return null;
      let u = null != d && U(d) === U(c);
      return (0, i.jsx)(
        B,
        {
          item: c,
          index: t,
          format: c.format,
          src: c.src,
          coords: n,
          onClick: this.handleClickItem,
          onContextMenu: this.handleContextMenu,
          renderExtras: () => (0, i.jsx)(O.A, { className: b.uJ, ...c }),
          focused: U(c) === o,
          imagePool: this.props.imagePool,
          videoPool: this.props.videoPool,
          selected: u,
          "aria-label":
            ((a = c.src),
            (s = a.split("/").pop()),
            null == (l = s?.split(".")[0]) ||
            "" === l ||
            l.length < 4 ||
            (l.length >= 8 && /^[0-9a-f]+$/i.test(l)) ||
            (l.length > 12 && !/[-_ ]/.test(l) && /\d/.test(l)) ||
            /^(giphy|tenor|\d+[wh]?|xs|sm|md|lg|xl)$/i.test(l)
              ? v.intl.formatToPlainString(v.t["5iIGZI"], { index: t + 1 })
              : l),
        },
        r,
      );
    };
    getItemHeight = (e, t, n) => {
      if (e > 0) return 0;
      let i = this.props.data[t];
      return null == i ? 0 : n * (i.height / i.width);
    };
    getItemKey = (e, t) => {
      if (e > 0) return null;
      let n = this.props.data[t];
      return null != n ? (n.id ?? n.src) : null;
    };
    getSectionHeight = (e) => (1 === e ? this.state.footerHeight : 0);
    renderSection = (e, t, n) => {
      let { onSelectSuggestion: r, suggestions: a } = this.props;
      return 1 === e
        ? (0, i.jsx)(
            "div",
            {
              className: b.jZ,
              style: t,
              children: (0, i.jsxs)("div", {
                ref: this.setFooterContent,
                className: b.Xe,
                children: [
                  (0, i.jsx)(E.E, {
                    variant: "text-md/medium",
                    color: "text-feedback-warning",
                    className: b.Z4,
                    children: v.intl.string(v.t["3JGJo2"]),
                  }),
                  (0, i.jsx)(A.e, {
                    size: "sm",
                    children: a.map((e) =>
                      (0, i.jsx)(
                        h.$,
                        {
                          variant: "secondary",
                          onClick: () => {
                            r(e);
                          },
                          text: e,
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            },
            n,
          )
        : null;
    };
    renderEmptyFavorite(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return (0, i.jsx)("div", {
        className: b.LA,
        children:
          null != e
            ? (0, i.jsxs)("div", {
                className: b.BA,
                children: [
                  t
                    ? (0, i.jsx)(f.StarIcon, { size: "xs", color: "currentColor", className: b.$2 })
                    : null,
                  (0, i.jsx)("div", { className: b.i6, children: e }),
                ],
              })
            : (0, i.jsx)("div", { className: b.Hc }),
      });
    }
    renderEmptyFavorites() {
      return (0, i.jsx)(I.Ip, {
        className: b.Xv,
        fade: !0,
        children: (0, i.jsxs)("div", {
          className: b.Ep,
          children: [
            this.renderEmptyFavorite(v.intl.string(v.t["3gyw4Z"]), !0),
            this.renderEmptyFavorite(v.intl.string(v.t.yThUi4)),
            this.renderEmptyFavorite(v.intl.string(v.t.MeP0SF)),
            Array.from({ length: 15 }).map((e, t) =>
              (0, i.jsx)(r.Fragment, { children: this.renderEmptyFavorite() }, t),
            ),
            this.renderEmptyFavorite(v.intl.string(v.t["5u99Xb"])),
            Array.from({ length: 16 }).map((e, t) =>
              (0, i.jsx)(r.Fragment, { children: this.renderEmptyFavorite() }, t),
            ),
            this.renderEmptyFavorite(v.intl.string(v.t.o6CLL4)),
          ],
        }),
      });
    }
    renderContent = (e, t, n) => {
      let {
          className: r,
          data: a,
          resultQuery: l,
          query: o,
          resultType: d,
          suggestions: c,
        } = this.props,
        u = c.length > 0;
      return 0 === a.length && (l !== o || d === D.dD.TRENDING_GIFS)
        ? (0, i.jsx)(
            p.f,
            {
              fade: !0,
              className: s()(b.Xv, r),
              sections: [P.length],
              columns: e,
              itemGutter: 12,
              getItemKey: x,
              getItemHeight: w,
              renderItem: G,
              chunkSize: 128,
            },
            l,
          )
        : (0, i.jsx)(
            p.f,
            {
              ref: this._masonryRef,
              fade: !0,
              itemGutter: 12,
              className: s()(b.Xv, r),
              columns: e,
              sections: u ? [a.length, 0] : [a.length],
              getItemKey: this.getItemKey,
              getItemHeight: this.getItemHeight,
              renderItem: this.renderItem,
              getSectionHeight: this.getSectionHeight,
              renderSection: this.renderSection,
              onScroll: this.handleScroll,
              chunkSize: 128,
            },
            `${l}-${d ?? ""}`,
          );
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
      let { data: e, resultQuery: t, query: n, resultType: r } = this.props;
      if (0 === e.length && r !== D.dD.TRENDING_GIFS) {
        if (r === D.dD.FAVORITES)
          return 0 === n.length
            ? this.renderEmptyFavorites()
            : (0, i.jsx)(S.A, { message: v.intl.string(v.t.ZH4o6l), className: b.wV });
        else if (t === n)
          return (0, i.jsx)(S.A, { message: v.intl.string(v.t["5dX4UM"]), className: b.wV });
      }
      return (0, i.jsx)(
        g.A,
        {
          getItemGrid: this.getItemGrid,
          getCoordsMap: this.getCoordsMap,
          onFocus: this.handleFocus,
          onSelect: this.handleSelect,
          children: (0, i.jsx)(y.A, {
            desiredItemWidth: 200,
            maxColumns: 8,
            children: this.renderContent,
          }),
        },
        t,
      );
    }
  }
  function H() {
    let { renderWindow: e } = r.useContext(N.Ay),
      t = e.document,
      [n] = r.useState(
        () =>
          new d(
            () => t.createElement("img"),
            (e) => {
              ((e.onload = null), (e.src = ""));
            },
          ),
      ),
      [i] = r.useState(
        () =>
          new d(
            () => {
              let e = t.createElement("video");
              return (
                (e.className = b.nX),
                (e.autoplay = !0),
                (e.loop = !0),
                (e.muted = !0),
                (e.preload = "auto"),
                (e.controls = !1),
                (e.tabIndex = -1),
                e
              );
            },
            (e) => {
              ((e.src = ""), (e.oncanplay = null));
              let { parentNode: t } = e;
              null != t && t.removeChild(e);
            },
          ),
      );
    return { imagePool: n, videoPool: i };
  }
  let j = function (e) {
    let t = H();
    return (0, i.jsx)(V, { ...e, ...t });
  };
}
