/* Recovered shipped factory. Module 968441.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10495340..10495991
 * Raw property SHA-256: d3f8a6ebd8b68e8f911a40f7e4fb83678036cc7e9259473a089adc9a75307338
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { r: () => r });
  var i = n(390225);
  class r {
    stores;
    changeCallback;
    storeVersionHandled;
    constructor(e, t) {
      ((this.stores = e), (this.changeCallback = t));
    }
    attach(e) {
      let { stores: t } = this;
      t.forEach((t, n) => {
        if (null == t)
          throw Error(
            `${e} tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ${n} stores before error.`,
          );
        t.addReactChangeListener(this.handleStoreChange);
      });
    }
    handleStoreChange = () => {
      let e = i.A.getChangeSentinel();
      this.storeVersionHandled !== e && (this.changeCallback(), (this.storeVersionHandled = e));
    };
    detach() {
      let { stores: e } = this;
      e.forEach((e) => e.removeReactChangeListener(this.handleStoreChange));
    }
  }
}
