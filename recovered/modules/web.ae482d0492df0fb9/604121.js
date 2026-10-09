/* Recovered shipped factory. Module 604121.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10353954..10355925
 * Raw property SHA-256: 298e761215c7c30cad781adf947b43b91d27a761168fb40f4fd21dda73fb79b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { a: () => o });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(451988),
    l = (((i = l || {}).SVG = "svg"), (i.CANVAS = "canvas"), i);
  class o extends a.Component {
    static defaultProps = {
      loop: !0,
      autoplay: !0,
      renderer: "svg",
      shouldAnimate: !0,
      resetOnPlay: !1,
    };
    static Renderers = l;
    animationRef = a.createRef();
    animation;
    delayTimeout = new s.Ep();
    loadAnimation = async () => {
      let {
        importData: e,
        loop: t,
        autoplay: i,
        delay: r,
        renderer: a,
        rendererSettings: s,
        shouldAnimate: l,
      } = this.props;
      null != this.animation && this.animation.destroy();
      let [o, { default: d }] = await Promise.all([
        e(),
        n.e("996382").then(n.t.bind(n, 883885, 23)),
      ]);
      if (null == this.animationRef.current) return;
      let c =
        "object" == typeof o && null != o && "default" in o && "string" == typeof o.default
          ? { path: o.default }
          : { animationData: o };
      ((this.animation = d.loadAnimation({
        container: this.animationRef.current,
        renderer: a,
        loop: t,
        autoplay: i && null == r && l,
        rendererSettings: s,
        ...c,
      })),
        null != r
          ? this.delayTimeout.start(r, () => {
              this.animation?.play();
            })
          : this.playOrPauseAnimation(),
        this.animation?.addEventListener("complete", this.handleComplete));
    };
    componentDidMount() {
      (null != this.props.versionKey && this.props.versionKey < 0) || this.loadAnimation();
    }
    componentDidUpdate(e) {
      (null != this.props.versionKey && this.props.versionKey < 0) ||
        (null != this.props.versionKey &&
        null != e.versionKey &&
        this.props.versionKey > e.versionKey
          ? this.loadAnimation()
          : this.playOrPauseAnimation(e));
    }
    componentWillUnmount() {
      (null != this.animation &&
        (this.animation.stop(), this.animation.destroy(), (this.animation = null)),
        this.delayTimeout.stop());
    }
    playOrPauseAnimation(e) {
      null != this.animation &&
        (this.props.shouldAnimate && (null == e || !e.shouldAnimate)
          ? this.props.resetOnPlay
            ? this.animation.goToAndPlay(0)
            : this.animation.play()
          : !this.props.shouldAnimate &&
            (null == e || e.shouldAnimate) &&
            (this.animation.pause(),
            null != this.props.pauseAtFrame &&
              this.animation.goToAndStop(this.props.pauseAtFrame, !0)));
    }
    handleComplete = () => {
      let { onComplete: e } = this.props;
      null != e && e();
    };
    render() {
      return (0, r.jsx)("div", { className: this.props.className, ref: this.animationRef });
    }
  }
}
