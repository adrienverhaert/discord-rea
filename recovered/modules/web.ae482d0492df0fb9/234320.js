/* Recovered shipped factory. Module 234320.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9521200..9522240
 * Raw property SHA-256: fa007a8899ad66ecd61ca74c419f6cb0c15da59abb163d7d421ed55b93cd0265
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ah: () => c, EG: () => _, EH: () => d, Vo: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(143236),
    s = n(444927),
    l = n(625494);
  class o {
    emitter = new a.EventEmitter();
    subscribe(e, t) {
      (l._.subscribe(e, t), this.emitter.on(e, t));
    }
    unsubscribe(e, t) {
      (l._.unsubscribe(e, t), this.emitter.off(e, t));
    }
    bumpDispatchPriority() {
      for (let e of this.emitter.eventNames())
        for (let t of this.emitter.listeners(e)) l._.resubscribe(e, t);
    }
  }
  let d = r.createContext(
    new (class {
      subscribe(e, t) {
        l._.subscribe(e, t);
      }
      unsubscribe(e, t) {
        l._.unsubscribe(e, t);
      }
      bumpDispatchPriority() {}
    })(),
  );
  function c(e) {
    let { children: t, ref: n } = e,
      a = (0, s.A)(() => new o());
    return (
      r.useImperativeHandle(n, () => a, [a]),
      (0, i.jsx)(d.Provider, { value: a, children: t })
    );
  }
  function u(e) {
    let { event: t, handler: n } = e,
      i = r.useContext(d),
      a = r.useRef(n);
    r.useEffect(() => {
      a.current = n;
    }, [n]);
    let s = null == n;
    return (
      r.useEffect(() => {
        if (s) return;
        let e = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          a.current?.(...t);
        };
        return (
          i.subscribe(t, e),
          () => {
            i.unsubscribe(t, e);
          }
        );
      }, [i, t, s]),
      null
    );
  }
  function _(e) {
    return (u(e), null);
  }
}
