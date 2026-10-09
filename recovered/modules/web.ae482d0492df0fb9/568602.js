/* Recovered shipped factory. Module 568602.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 909786..910932
 * Raw property SHA-256: 9021b4ef0143c86bada13c8255244fcea49de1fe093c421d80189029c8692cfa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { b: () => o });
  var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n.n(a),
    l = n(775602);
  class o extends r.Component {
    static defaultProps = { isShaking: !0, intensity: 5 };
    ref = r.createRef();
    animationFrame;
    shouldRenderFrame = !0;
    componentDidMount() {
      this.props.isShaking && this.startShaking();
    }
    componentDidUpdate(e) {
      this.props.isShaking !== e.isShaking && this.setShaking(this.props.isShaking);
    }
    setShaking(e) {
      e ? this.startShaking() : this.stopShaking();
    }
    startShaking() {
      ((this.shouldRenderFrame = !0), (this.animationFrame = requestAnimationFrame(this.animate)));
    }
    stopShaking() {
      null != this.animationFrame && cancelAnimationFrame(this.animationFrame);
      let e = this.ref.current;
      null != e && (e.style.transform = "");
    }
    animate = () => {
      let { intensity: e, isShaking: t } = this.props;
      if (!t) return;
      let n = this.ref.current;
      if (this.shouldRenderFrame && null != n) {
        let t = s().random(-e, e, !0),
          i = s().random(-e, e, !0);
        n.style.transform = l.Ay.useReducedMotion ? "" : `translate3d(${t}px,${i}px,0px)`;
      }
      ((this.shouldRenderFrame = !this.shouldRenderFrame),
        (this.animationFrame = requestAnimationFrame(this.animate)));
    };
    render() {
      let { className: e, children: t } = this.props;
      return (0, i.jsx)("div", { className: e, ref: this.ref, children: t });
    }
  }
}
