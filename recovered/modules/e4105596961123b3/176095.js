/* Recovered shipped factory. Module 176095.
 * Source: recovered/web/assets/e4105596961123b3.js
 * UTF-16 property offsets: 147..915
 * Raw property SHA-256: b9edf85ed60dfda46e05087413350be181e673d3a42b03520effd2213e69e854
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, s, t) {
  t.d(s, { A: () => o });
  var n = t(17928),
    r = t(73153);
  let i = {},
    a = new Set(),
    l = new Set();
  function c(e) {
    ((a = new Set(a)).delete(e), (l = new Set(l)).add(e));
  }
  class u extends n.Ay.Store {
    static displayName = "WalletBalanceStore";
    getBalance(e) {
      return i[e] ?? null;
    }
    getIsFetching(e) {
      return a.has(e);
    }
    hasSettled(e) {
      return l.has(e);
    }
  }
  let o = new u(r.h, {
    BILLING_WALLET_BALANCE_FETCH_START: function (e) {
      (a = new Set(a)).add(e.paymentSourceId);
    },
    BILLING_WALLET_BALANCE_FETCH_SUCCESS: function (e) {
      (c(e.paymentSourceId),
        (i = { ...i, [e.paymentSourceId]: { currency: e.currency, amount: e.amount } }));
    },
    BILLING_WALLET_BALANCE_FETCH_FAIL: function (e) {
      c(e.paymentSourceId);
    },
    WALLET_BALANCE_UPDATE: function (e) {
      i = { ...i, [e.paymentSourceId]: { currency: e.currency, amount: e.balance } };
    },
    LOGOUT: function () {
      ((i = {}), (a = new Set()), (l = new Set()));
    },
  });
}
