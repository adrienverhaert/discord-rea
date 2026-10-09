/* Recovered shipped factory. Module 725663.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6555787..6558900
 * Raw property SHA-256: 23ab50433c05b99b18dfe6f711a7dd603b7ff3789a3e456d2beb53aa6e9c9f17
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => O });
  var i = n(73153),
    r = n(717398),
    a = n(636537),
    s = n(765178),
    l = n(157559),
    o = n(913122),
    d = n(652215),
    c = n(660183);
  function u(e) {
    let t = new o.LG(e).getAnyErrorMessage();
    l.A.show({
      title: c.intl.string(c.t["328j/I"]),
      body: null != t ? t : c.intl.string(c.t.fEptJP),
    });
  }
  async function _(e) {
    let { userId: t, applicationId: n, onSuccess: i } = e;
    try {
      (await a.Bo.del({
        url: d.Rsh.USER_GAME_RELATIONSHIP(t, n),
        oldFormErrors: !0,
        rejectWithError: !1,
      }),
        i());
    } catch (e) {
      u(e);
    }
  }
  let E = async function (e) {
      let { userId: t, applicationId: n } = e;
      await _({
        userId: t,
        applicationId: n,
        onSuccess: () => {
          s.O.announce(c.intl.string(c.t.zRf8cO));
        },
      });
    },
    A = function (e) {
      let { userId: t, applicationId: n } = e;
      return (function (e) {
        let { userId: t, applicationId: n, onSuccess: i, type: r } = e;
        return a.Bo.put({
          url: d.Rsh.USER_GAME_RELATIONSHIP(t, n),
          body: { type: r },
          oldFormErrors: !0,
          rejectWithError: !1,
        })
          .then(() => {
            i();
          })
          .catch((e) => (u(e), Promise.reject(e)));
      })({
        userId: t,
        applicationId: n,
        type: d.eA$.FRIEND,
        onSuccess: () => {
          s.O.announce(c.intl.string(c.t.taJiuc));
        },
      });
    },
    h = async function (e) {
      let { userId: t, applicationId: n } = e;
      await _({
        userId: t,
        applicationId: n,
        onSuccess: () => {
          s.O.announce(c.intl.string(c.t.XMf21q));
        },
      });
    };
  var f = n(994500),
    I = n(427262),
    p = n(477900);
  n(582128);
  var T = n(192308),
    m = n(174459),
    g = n(646363);
  function S(e) {
    let { onConfirm: t, onFinally: i } = e;
    (m.default.track(d.HAw.OPEN_MODAL, { type: g.C }),
      (0, T.openModalLazy)(async () => {
        let { default: e } = await n.e("352049").then(n.bind(n, 691464));
        return (n) => {
          let { onClose: r, ...a } = n;
          return (0, p.jsx)(e, {
            onConfirm: t,
            onClose: async () => {
              (await r(), i?.());
            },
            ...a,
          });
        };
      }));
  }
  function N(e) {
    let { userId: t, applicationId: n, location: i, confirmStrangerRequest: a = !1 } = e;
    return null != n
      ? A({ userId: t, applicationId: n })
      : r.A.acceptFriendRequest({ userId: t, confirmStrangerRequest: a, context: { location: i } });
  }
  function C(e, t) {
    return e?.body?.code === d.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
      ? (i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !0 }),
        S({
          onConfirm: () => {
            (N({ ...t, confirmStrangerRequest: !0 }), t.onConfirm?.());
          },
          onCancel: () => {
            t.onCancel?.();
          },
        }),
        !0)
      : (e?.ok &&
          i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !1 }),
        !1);
  }
  let O = {
    removeFriend: function (e) {
      let { userId: t, applicationId: n, location: i } = e;
      null != n ? E({ userId: t, applicationId: n }) : r.A.removeFriend(t, { location: i });
    },
    cancelFriendRequest: function (e) {
      let { userId: t, applicationId: n, location: i } = e;
      return null != n
        ? h({ userId: t, applicationId: n })
        : r.A.cancelFriendRequest(t, { location: i });
    },
    acceptFriendRequest: N,
    maybeConfirmFriendRequestAccept: function (e) {
      let { userId: t, applicationId: n, location: i, onConfirm: r, onCancel: a, onFinally: s } = e,
        l = f.A.isStranger(t);
      return null != n || !1 === l
        ? N({ userId: t, applicationId: n, location: i, confirmStrangerRequest: !0 }).then(() => {
            (r?.(), s?.());
          })
        : l
          ? void S({
              onConfirm: () => {
                (N({ userId: t, applicationId: n, location: i, confirmStrangerRequest: !0 }),
                  r?.());
              },
              onCancel: () => {
                a?.();
              },
              onFinally: () => {
                s?.();
              },
            })
          : void N({ userId: t, applicationId: n, location: i })
              .then((e) => {
                C(e, { userId: t, applicationId: n, location: i, onConfirm: r, onCancel: a }) ||
                  r?.();
              })
              .catch((e) => {
                C(e, { userId: t, applicationId: n, location: i, onConfirm: r, onCancel: a });
              })
              .finally(() => {
                s?.();
              });
    },
    getDisplayName: function (e) {
      return f.A.getNickname(e.id) ?? I.Ay.getName(e);
    },
  };
}
