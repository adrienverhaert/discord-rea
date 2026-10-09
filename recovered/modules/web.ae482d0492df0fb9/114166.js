/* Recovered shipped factory. Module 114166.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2776295..2778988
 * Raw property SHA-256: e7a23b34e3670d561e6d509aea8653fe09532dcdc8efd9674cc033970cde1a5e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E, x: () => _ });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(435558),
    l = n.n(s),
    o = n(615300),
    d = n(531685),
    c =
      (((i = c || {})[(i.ABOVE = 0)] = "ABOVE"),
      (i[(i.VISIBLE = 1)] = "VISIBLE"),
      (i[(i.BELOW = 2)] = "BELOW"),
      i);
  function u(e, t) {
    return { toValue: e, duration: t ?? 300, easing: o.A.Easing.inOut(o.A.Easing.back()) };
  }
  function _(e, t, n) {
    if (null != t) {
      let i = Math.ceil(Math.log10(e + 1));
      return null != n && n > 0 ? Math.min(i, n) * t : i * t;
    }
  }
  class E extends a.PureComponent {
    static Positions = c;
    prevAnimate;
    currAnimate;
    constructor(e) {
      (super(e),
        (this.state = { prevValue: null, currValue: e.value, nextValue: null }),
        (this.prevAnimate = new o.A.Value(0)),
        (this.currAnimate = new o.A.Value(1)));
    }
    static getDerivedStateFromProps(e, t) {
      let { prevValue: n, currValue: i, nextValue: r } = t;
      return null == n && i !== e.value
        ? { prevValue: d.A.isFocused() ? i : null, currValue: e.value }
        : null != r && r !== e.value
          ? { nextValue: e.value }
          : null;
    }
    componentDidUpdate(e, t) {
      let { prevValue: n, currValue: i } = this.state;
      n !== t.prevValue && null != n && this.animateBetween(n, i);
    }
    animateBetween(e, t) {
      let n,
        { forcePosition: i, animationSpeed: r } = this.props;
      (this.prevAnimate.setValue(1),
        null != i
          ? 0 === i
            ? (this.currAnimate.setValue(0), (n = 2))
            : 2 === i && (this.currAnimate.setValue(2), (n = 0))
          : e > t
            ? (this.currAnimate.setValue(0), (n = 2))
            : (this.currAnimate.setValue(2), (n = 0)),
        o.A.parallel([
          o.A.timing(this.prevAnimate, u(n, r)),
          o.A.timing(this.currAnimate, u(1, r)),
        ]).start(this.animateNext));
    }
    animateNext = () => {
      let { currValue: e, nextValue: t } = this.state;
      null != t
        ? this.setState({ prevValue: d.A.isFocused() ? e : null, currValue: t, nextValue: null })
        : this.setState({ prevValue: null });
    };
    getAnimatedStyle(e) {
      let { animationColor: t } = this.props;
      return {
        transform: [
          {
            translateY: e.interpolate({
              inputRange: [0, 1, 2],
              outputRange: ["-100%", "0%", "100%"],
            }),
          },
        ],
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        ...(null != t && { color: t }),
      };
    }
    getMinWidth(e) {
      let { digitWidth: t, padStartLength: n } = this.props;
      return _(e, t, n);
    }
    padValue(e) {
      let { padStartLength: t } = this.props;
      return null != t ? String(e).padStart(t, "0") : e;
    }
    render() {
      let { prevValue: e, currValue: t } = this.state,
        { color: n, formatString: i } = this.props,
        a = l().omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
      if (null == e)
        return (0, r.jsx)("div", {
          ...a,
          style: { color: n, minWidth: this.getMinWidth(t) },
          children: null != i ? i(this.padValue(t)) : this.padValue(t),
        });
      let s = Math.max(e, t);
      return (0, r.jsxs)("div", {
        ...a,
        style: { color: n, position: "relative", overflow: "hidden" },
        children: [
          (0, r.jsx)("div", {
            style: { visibility: "hidden", minWidth: this.getMinWidth(s) },
            children: this.padValue(s),
          }),
          (0, r.jsx)(o.A.div, {
            style: { color: n, ...this.getAnimatedStyle(this.prevAnimate) },
            children: null != i ? i(this.padValue(e)) : this.padValue(e),
          }),
          (0, r.jsx)(o.A.div, {
            style: { color: n, ...this.getAnimatedStyle(this.currAnimate) },
            children: null != i ? i(this.padValue(t)) : this.padValue(t),
          }),
        ],
      });
    }
  }
}
