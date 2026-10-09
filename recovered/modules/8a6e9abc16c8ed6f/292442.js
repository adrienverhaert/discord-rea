/* Recovered shipped factory. Module 292442.
 * Source: recovered/web/assets/8a6e9abc16c8ed6f.js
 * UTF-16 property offsets: 95..1518
 * Raw property SHA-256: 740d5337bcb38b9859db5d039e8adc0feafe8ce1416cf16eabb82da7a7ddb943
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { tH: () => s });
  var r = t(582128);
  let i = (0, r.createContext)(null),
    o = { didCatch: !1, error: null };
  class s extends r.Component {
    constructor(e) {
      (super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = o));
    }
    static getDerivedStateFromError(e) {
      return { didCatch: !0, error: e };
    }
    resetErrorBoundary() {
      let { error: e } = this.state;
      if (null !== e) {
        for (var n, t, r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
        (null == (n = (t = this.props).onReset) || n.call(t, { args: i, reason: "imperative-api" }),
          this.setState(o));
      }
    }
    componentDidCatch(e, n) {
      var t, r;
      null == (t = (r = this.props).onError) || t.call(r, e, n);
    }
    componentDidUpdate(e, n) {
      let { didCatch: t } = this.state,
        { resetKeys: r } = this.props;
      if (
        t &&
        null !== n.error &&
        (function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return e.length !== n.length || e.some((e, t) => !Object.is(e, n[t]));
        })(e.resetKeys, r)
      ) {
        var i, s;
        (null == (i = (s = this.props).onReset) ||
          i.call(s, { next: r, prev: e.resetKeys, reason: "keys" }),
          this.setState(o));
      }
    }
    render() {
      let { children: e, fallbackRender: n, FallbackComponent: t, fallback: o } = this.props,
        { didCatch: s, error: a } = this.state,
        u = e;
      if (s) {
        let e = { error: a, resetErrorBoundary: this.resetErrorBoundary };
        if ("function" == typeof n) u = n(e);
        else if (t) u = (0, r.createElement)(t, e);
        else if (void 0 !== o) u = o;
        else throw a;
      }
      return (0, r.createElement)(
        i.Provider,
        { value: { didCatch: s, error: a, resetErrorBoundary: this.resetErrorBoundary } },
        u,
      );
    }
  }
}
