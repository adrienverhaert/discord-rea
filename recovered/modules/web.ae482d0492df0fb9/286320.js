/* Recovered shipped factory. Module 286320.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6773151..6774328
 * Raw property SHA-256: 00f599c8410023378c20ce26287b359e45df0cec2fd63df122e91f7d56f81f38
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { b: () => A });
  var i = n(582128),
    r = n(17928),
    a = n(73153);
  let s = { fetched: !1, fetching: !1, affinities: [] };
  class l extends r.Ay.Store {
    get hasFetched() {
      return s.fetched;
    }
    get isFetching() {
      return s.fetching;
    }
    get affinities() {
      return s.affinities;
    }
  }
  let o = new l(a.h, {
    BILLING_PREMIUM_AFFINITY_FETCH_START: function (e) {
      let {} = e;
      s.fetching = !0;
    },
    BILLING_PREMIUM_AFFINITY_FETCHED: function (e) {
      let {} = e;
      ((s.fetched = !0), (s.fetching = !1));
    },
    BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED: function (e) {
      let { res: t } = e;
      s.affinities = t;
    },
    LOGOUT: function () {
      ((s.fetched = !1), (s.fetching = !1), (s.affinities = []));
    },
  });
  var d = n(636537),
    c = n(889227),
    u = n(739508),
    _ = n(652215);
  async function E() {
    a.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
      let e = await d.Bo.get({ url: _.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
      a.h.dispatch({
        type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED",
        res: e.body.map((e) => new c.A(e)),
      });
    } catch (e) {
      (0, u.gr)(e) || (0, u.pM)(e);
    } finally {
      a.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCHED" });
    }
  }
  function A() {
    let {
      affinities: e,
      hasFetched: t,
      isFetching: n,
    } = (0, r.cf)([o], () => ({
      affinities: o.affinities,
      hasFetched: o.hasFetched,
      isFetching: o.isFetching,
    }));
    return (
      i.useEffect(() => {
        t || n || E();
      }, [t, n]),
      e
    );
  }
}
