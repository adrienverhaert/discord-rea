/* Recovered shipped factory. Module 820284.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 734746..735862
 * Raw property SHA-256: 3a73ad34ec45f31b1e4d771904e155b1eee3f10fe2f61c1ed376c7a0cd8ed9d0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(132500),
    s = n(174459),
    l = n(583613),
    o = n(652215);
  class d extends r.Component {
    static Pages = o.liQ;
    static Sections = o.JJy;
    static Objects = o.ZSU;
    static ObjectTypes = o.AnalyticsObjectTypes;
    static defaultProps = { root: !1 };
    _loadId = null;
    _loadDate = this.props.root ? Date.now() : null;
    constructor(e) {
      (super(e),
        null != e.loadId ? (this._loadId = e.loadId) : e.root && (this._loadId = (0, a.A)()));
    }
    getLocation = (0, l.L_)((e, t, n, i) => {
      let r = {};
      return (
        null != e && (r.page = e),
        null != t && (r.section = t),
        null != n && (r.object = n),
        null != i && (r.objectType = i),
        r
      );
    });
    mergeLocation = (0, l.L_)((e, t) => ({ ...e, ...t }));
    getContext = (0, l.L_)((e, t, n) => ({ location: e, loadDate: t, loadId: n }));
    renderProvider(e) {
      let { section: t, page: n, object: r, objectType: a, children: l } = this.props,
        o = this.mergeLocation(e.location, this.getLocation(n, t, r, a)),
        d = this.getContext(o, this._loadDate ?? e.loadDate, this._loadId ?? e.loadId);
      return (0, i.jsx)(s.AnalyticsContext.Provider, { value: d, children: l });
    }
    render() {
      let { context: e } = this.props;
      return null != e
        ? this.renderProvider(e)
        : (0, i.jsx)(s.AnalyticsContext.Consumer, { children: (e) => this.renderProvider(e) });
    }
  }
}
