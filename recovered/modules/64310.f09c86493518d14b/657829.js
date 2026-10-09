/* Recovered shipped factory. Module 657829.
 * Source: recovered/web/assets/64310.f09c86493518d14b.js
 * UTF-16 property offsets: 94..1390
 * Raw property SHA-256: c013597f98369a1eae476c31fe4b1dedf037292a51a0c5eb6ba013fa3096c328
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, s) {
  s.d(e, { h: () => p });
  var i = s(75109),
    n = s(128377),
    r = s(978862),
    o = s(875565);
  class a {
    constructor(t, e) {
      let s, i;
      ((s = t || new n.H()),
        (i = e || new n.H()),
        (this._stack = [{ scope: s }]),
        (this._isolationScope = i));
    }
    withScope(t) {
      let e,
        s = this._pushScope();
      try {
        e = t(s);
      } catch (t) {
        throw (this._popScope(), t);
      }
      return (0, o.Qg)(e)
        ? e.then(
            (t) => (this._popScope(), t),
            (t) => {
              throw (this._popScope(), t);
            },
          )
        : (this._popScope(), e);
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getIsolationScope() {
      return this._isolationScope;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    _pushScope() {
      let t = this.getScope().clone();
      return (this._stack.push({ client: this.getClient(), scope: t }), t);
    }
    _popScope() {
      return !(this._stack.length <= 1) && !!this._stack.pop();
    }
  }
  function h() {
    let t = (0, i.E)(),
      e = (0, i.S)(t);
    return (e.stack =
      e.stack ||
      new a(
        (0, r.B)("defaultCurrentScope", () => new n.H()),
        (0, r.B)("defaultIsolationScope", () => new n.H()),
      ));
  }
  function c(t) {
    return h().withScope(t);
  }
  function _(t, e) {
    let s = h();
    return s.withScope(() => ((s.getStackTop().scope = t), e(t)));
  }
  function u(t) {
    return h().withScope(() => t(h().getIsolationScope()));
  }
  function p(t) {
    let e = (0, i.S)(t);
    return e.acs
      ? e.acs
      : {
          withIsolationScope: u,
          withScope: c,
          withSetScope: _,
          withSetIsolationScope: (t, e) => u(e),
          getCurrentScope: () => h().getScope(),
          getIsolationScope: () => h().getIsolationScope(),
        };
  }
}
