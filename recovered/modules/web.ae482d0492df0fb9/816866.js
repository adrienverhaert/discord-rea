/* Recovered shipped factory. Module 816866.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3842650..3843910
 * Raw property SHA-256: e3bb7002df2754f1b4de3bc8cd49a6d6981ecaaff3eda0afc7755aa25d3bed3d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { ZK: () => I, pF: () => f, wu: () => h }), n(323874), n(14289), n(35956), n(321073));
  var i = n(582128),
    r = n(462180),
    a = n(882035),
    s = n(121894),
    l = n(506774),
    o = n(739187),
    d = n(857250),
    c = n(97483),
    u = n(87558);
  let _ = "__DEBUG_PROFILE_EFFECTS_STORE",
    E = { profileEffects: l.w.get(_) ?? {} },
    A = (e) => {
      try {
        l.w.set(_, e.profileEffects);
      } catch (e) {
        (console.error(e),
          (0, o.P)(
            (0, d.o)(
              "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
              c.Ck.FAILURE,
            ),
          ));
      }
    },
    h = (0, a.h)((e) => ({
      ...E,
      upsertProfileEffect: (t) =>
        (0, s.r)(() => {
          e((e) => {
            let n = { ...e };
            return ((n.profileEffects[t.skuId] = t), A(n), n);
          });
        }),
      deleteProfileEffect: (t) =>
        (0, s.r)(() => {
          e((e) => {
            let n = { ...e };
            return (delete n.profileEffects[t], A(n), n);
          });
        }),
      clearAll: () =>
        (0, s.r)(() => {
          e(() => (l.w.remove(_), { profileEffects: {} }));
        }),
    }));
  function f() {
    return h((e) => {
      let { profileEffects: t } = e;
      return Object.values(t);
    }, r.x);
  }
  let I = (e) => {
    let t = h((t) => (null != e ? t.profileEffects[e] : null)),
      n = i.useRef([]);
    return (
      i.useEffect(
        () => () => {
          (n.current.forEach((e) => {
            URL.revokeObjectURL(e);
          }),
            (n.current = []));
        },
        [],
      ),
      i.useMemo(() => {
        if (null == t) return null;
        let e = t.stillFrames,
          i = null != e ? { ...e } : {};
        for (let e in i) {
          let t = i[e];
          null != t &&
            (i[e] = {
              ...t,
              src: (function (e) {
                let t = (0, u.fB)(e);
                return (n.current.push(t), t);
              })(t.base64),
            });
        }
        return { ...t, stillFrames: i };
      }, [t])
    );
  };
}
