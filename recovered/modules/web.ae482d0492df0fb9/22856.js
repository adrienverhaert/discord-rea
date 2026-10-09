/* Recovered shipped factory. Module 22856.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10368491..10368796
 * Raw property SHA-256: 3a866a4ba315549ac5e161ebd5fd656b07847f694a18d01ab223a422b5a6a412
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { V: () => s, k: () => a });
  var i = n(582128),
    r = n(664354);
  function a() {
    let e = i.useContext(s);
    if (null == e) throw Error("useModalContext must be used within a ModalContext.Provider");
    return e;
  }
  let s = i.createContext({
    dismissable: !0,
    onClose: r.tE,
    id: "modal-id",
    headingId: "modal-heading-id",
  });
}
