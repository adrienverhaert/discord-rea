/* Recovered shipped factory. Module 587426.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5168877..5169605
 * Raw property SHA-256: 15e5e0251ee916012aa265b09fb0dd7004cea4ec0e882db85506c7617f7c3ed5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, E: () => s });
  var i = n(462180),
    r = n(882035),
    a = n(121894);
  let s = (0, r.h)((e, t) => ({
      selectedUserIds: {},
      addUsers: (n, i) => {
        let { selectedUserIds: r } = t(),
          s = new Set([...(r[n] ?? new Set()), ...i]);
        (0, a.r)(() => {
          e({ selectedUserIds: { ...r, [n]: s } });
        });
      },
      removeUser: (n, i) => {
        let { selectedUserIds: r } = t(),
          s = r[n];
        if (null == s) return;
        let l = [...s].filter((e) => e !== i);
        (0, a.r)(() => {
          e({ selectedUserIds: { ...r, [n]: new Set(l) } });
        });
      },
      clearSelection: (n) => {
        let { selectedUserIds: i } = t();
        null != i &&
          (0, a.r)(() => {
            e({ selectedUserIds: { ...i, [n]: new Set() } });
          });
      },
    })),
    l = new Set();
  function o(e) {
    return s(
      (t) => ({
        selectedUserIds: t.selectedUserIds[e] ?? l,
        addUsers: (n) => {
          t.addUsers(e, n);
        },
        removeUser: (n) => {
          t.removeUser(e, n);
        },
        clearSelection: () => {
          t.clearSelection(e);
        },
      }),
      i.x,
    );
  }
}
