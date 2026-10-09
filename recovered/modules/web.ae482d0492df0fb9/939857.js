/* Recovered shipped factory. Module 939857.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5749283..5750626
 * Raw property SHA-256: 3d3da781170b0265013863514bbe38a5bda468f7ef4b6f28f5ba2cc5626edfb1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(935462),
    o = n(978843);
  let d = { SMALL: o.PG, MEDIUM: o.$g, LARGE: o.Pu };
  class c extends r.PureComponent {
    static Header = l.rQ;
    static Footer = l.jl;
    static Content = l.$m;
    static ListContent = l.Dc;
    static CloseButton = l.s_;
    static Sizes = d;
    static defaultProps = { fullscreenOnMobile: !0, size: d.SMALL, tag: "div" };
    _scroller = null;
    constructor(e) {
      (super(e), (this.state = { hideSeparator: !1 }));
    }
    calculateScroll() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
      if (null == e) return;
      let { scrollTop: t } = e.getScrollerState(),
        { hideSeparator: n } = this.state;
      0 !== t || n
        ? t > 0 && n && this.setState({ hideSeparator: !1 })
        : this.setState({ hideSeparator: !0 });
    }
    setRef = (e) => {
      ((this._scroller = e), null != e && this.calculateScroll());
    };
    getScroller() {
      return this._scroller;
    }
    handleScroll = (e) => {
      this.calculateScroll();
      let { onScroll: t } = this.props;
      t?.(e);
    };
    renderChildren() {
      let { hideSeparator: e } = this.state;
      return r.Children.map(this.props.children, (t) =>
        r.isValidElement(t)
          ? t.type === l.$m || t.type === l.Dc
            ? r.cloneElement(t, {
                scrollerRef: this.setRef,
                onScroll: this.handleScroll,
                onResize: this.handleScroll,
              })
            : t.type === l.rQ && e
              ? r.cloneElement(t, { separator: !1 })
              : t
          : t,
      );
    }
    render() {
      let { className: e, children: t, tag: n, size: r, fullscreenOnMobile: a, ...l } = this.props;
      return (0, i.jsx)(n, {
        className: s()(o.yl, e, r, { [o.z]: a }),
        ...l,
        children: this.renderChildren(),
      });
    }
  }
}
