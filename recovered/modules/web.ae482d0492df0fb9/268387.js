/* Recovered shipped factory. Module 268387.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9313905..9314669
 * Raw property SHA-256: 311a6ea769c44cb89d44e10ff91287d7b76c7b2388f3507637442a03d3a07b54
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { A: () => I });
  var r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(506774),
    o = n(73153),
    d = n(652215);
  let c = "GameLibraryViewStore",
    u = d.tSW.ASCENDING,
    _ = d.DpB.LAST_PLAYED,
    E = !1,
    A = a().debounce(() => {
      ((E = !1), f.emitChange());
    }, 200);
  class h extends s.Ay.Store {
    static displayName = "GameLibraryViewStore";
    initialize() {
      let e = l.w.get(c) ?? {};
      null != e.sortDirection && null != e.sortKey && ((u = e.sortDirection), (_ = e.sortKey));
    }
    get sortDirection() {
      return u;
    }
    get sortKey() {
      return _;
    }
    get activeRowKey() {
      return i;
    }
    get isNavigatingByKeyboard() {
      return E;
    }
  }
  let f = new h(o.h, {
      LIBRARY_TABLE_SORT_UPDATE: function (e) {
        let { direction: t, key: n } = e;
        ((u = t), (_ = n), l.w.set(c, { sortDirection: u, sortKey: _ }));
      },
      LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function (e) {
        let { key: t, isKeyboardEvent: n } = e;
        (n && ((E = !0), A()), (i = t));
      },
    }),
    I = f;
}
