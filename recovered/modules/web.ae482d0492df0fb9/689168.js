/* Recovered shipped factory. Module 689168.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9309243..9310861
 * Raw property SHA-256: 0fc7afffa072343ae16f0dace65a0c14a29ddd51d0eae6aba5bb9d94a2aa1c5b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f });
  var i = n(17928),
    r = n(451988),
    a = n(73153),
    s = n(480595),
    l = n(461213),
    o = n(652215);
  let d = {},
    c = {};
  function u(e, t, n) {
    null != c[e] && c[e].stop();
    let i = new r.Ep();
    (i.start(n, () =>
      a.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t }),
    ),
      (c[e] = i));
  }
  function _(e, t, n) {
    let { applicationId: i, remotePartyId: r } = n;
    if (e === o.eAD.COMPLETE) {
      (delete d[i]?.[t], null != c[i] && (c[i].stop(), delete c[i]));
      return;
    }
    let a = d[i] ?? {};
    ((a[t] = { state: e, remotePartyId: r }),
      (d[i] = a),
      __OVERLAY__ || e !== o.eAD.FAILED
        ? e === o.eAD.LOADING && u(i, t, null != r ? 15e3 : 12e4)
        : u(i, t, 12e4));
  }
  function E(e) {
    return (
      ("ACTIVITY_JOIN" !== e.type || null == e.parentApplicationId) &&
      _(o.eAD.COMPLETE, o.xL.JOIN, e)
    );
  }
  function A() {
    let e = Object.entries(d)
        .map((e) => {
          let [t, n] = e;
          return { applicationId: t, remotePartyId: n[o.xL.JOIN]?.remotePartyId };
        })
        .filter((e) => {
          let { remotePartyId: t } = e;
          return null != t;
        }),
      t = !1;
    return (
      e.forEach((e) => {
        let { applicationId: n, remotePartyId: i } = e,
          r = s.A.getApplicationActivity(n),
          a = l.A.getApplicationActivity(n);
        (r?.party?.id === i || a?.party?.id === i) &&
          (_(o.eAD.COMPLETE, o.xL.JOIN, { applicationId: n, remotePartyId: i }), (t = !0));
      }),
      t
    );
  }
  class h extends i.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
      this.syncWith([s.A, l.A], A);
    }
    getState(e, t) {
      let n = d[e];
      return n?.[t]?.state;
    }
    getStates() {
      return d;
    }
  }
  let f = new h(a.h, {
    OVERLAY_INITIALIZE: function (e) {
      let { activityLauncherStates: t } = e;
      d = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => _(o.eAD.LOADING, o.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => _(o.eAD.FAILED, o.xL.JOIN, e),
    ACTIVITY_JOIN: E,
    EMBEDDED_ACTIVITY_CLOSE: E,
    ACTIVITY_LAUNCH_FAIL: function (e) {
      let { applicationId: t, activityType: n } = e,
        i = d[t];
      if (null == i) return !1;
      delete i[n];
    },
  });
}
