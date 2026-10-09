/* Recovered shipped factory. Module 505274.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8431383..8435220
 * Raw property SHA-256: bb9a46a56d77e768f5e67fb44ac1bd7eb1f34b12151c8aa87c98f18e69e456dd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(17928),
    r = n(73153);
  class a extends i.Ay.Store {
    static displayName = "VirtualCurrencyStore";
    _entitlements = null;
    _redeemingSkuId = null;
    _isRedeemingVirtualCurrency = !1;
    _redeemVirtualCurrencyError = null;
    _balance = null;
    _fetchBalanceError = null;
    _isFetchingBalance = !1;
    _totalRedeemed = null;
    _fetchTotalRedeemedError = null;
    _isFetchingTotalRedeemed = !1;
    _onboardingModalOpenedPrior = !1;
    _balancePillOverlay = !1;
    constructor() {
      super(r.h, {
        VIRTUAL_CURRENCY_REDEEM_START: (e) => this.handleRedeemVirtualCurrencyStart(e),
        VIRTUAL_CURRENCY_REDEEM_SUCCESS: (e) => this.handleRedeemVirtualCurrencySuccess(e),
        VIRTUAL_CURRENCY_REDEEM_FAIL: (e) => this.handleRedeemVirtualCurrencyFail(e),
        VIRTUAL_CURRENCY_BALANCE_FETCH: (e) => this.handleBalanceFetch(e),
        VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS: (e) => this.handleBalanceFetchSuccess(e),
        VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL: (e) => this.handleBalanceFetchFail(e),
        VIRTUAL_CURRENCY_BALANCE_UPDATE: (e) => this.handleBalanceUpdate(e),
        VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH: (e) => this.handleTotalRedeemedFetch(e),
        VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_SUCCESS: (e) =>
          this.handleTotalRedeemedFetchSuccess(e),
        VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_FAIL: (e) => this.handleTotalRedeemedFetchFail(e),
        VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN: (e) => this.handleOnboardingModalOpen(e),
        VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET: (e) => this.handleOnboardingModalReset(e),
        LOGIN_SUCCESS: () => this.handleBalanceStateReset(),
        VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY: (e) => {
          this.setBalancePillOverlay(e.balancePillOverlay);
        },
      });
    }
    get redeemError() {
      return this._redeemVirtualCurrencyError;
    }
    get isRedeeming() {
      return this._isRedeemingVirtualCurrency;
    }
    get redeemingSkuId() {
      return this._redeemingSkuId;
    }
    get entitlements() {
      return this._entitlements;
    }
    get balance() {
      return this._balance;
    }
    get fetchBalanceError() {
      return this._fetchBalanceError;
    }
    get isFetchingBalance() {
      return this._isFetchingBalance;
    }
    get totalRedeemed() {
      return this._totalRedeemed;
    }
    get fetchTotalRedeemedError() {
      return this._fetchTotalRedeemedError;
    }
    get isFetchingTotalRedeemed() {
      return this._isFetchingTotalRedeemed;
    }
    get onboardingModalOpenedPrior() {
      return this._onboardingModalOpenedPrior;
    }
    get balancePillOverlay() {
      return this._balancePillOverlay;
    }
    setBalancePillOverlay(e) {
      this._balancePillOverlay = e;
    }
    getCurrentBalance() {
      return this.balance;
    }
    handleBalanceStateReset() {
      ((this._balance = null),
        (this._fetchBalanceError = null),
        (this._isFetchingBalance = !1),
        (this._totalRedeemed = null),
        (this._fetchTotalRedeemedError = null),
        (this._isFetchingTotalRedeemed = !1));
    }
    handleBalanceFetch(e) {
      let {} = e;
      ((this._isFetchingBalance = !0), (this._fetchBalanceError = null));
    }
    handleBalanceFetchSuccess(e) {
      let { balance: t } = e;
      ((this._isFetchingBalance = !1), (this._balance = t));
    }
    handleBalanceFetchFail(e) {
      let { error: t } = e;
      ((this._isFetchingBalance = !1), (this._fetchBalanceError = t));
    }
    handleBalanceUpdate(e) {
      let { balance: t, totalRedeemed: n } = e;
      ((this._balance = t), null != n && (this._totalRedeemed = n));
    }
    handleTotalRedeemedFetch(e) {
      let {} = e;
      ((this._isFetchingTotalRedeemed = !0), (this._fetchTotalRedeemedError = null));
    }
    handleTotalRedeemedFetchSuccess(e) {
      let { totalRedeemed: t } = e;
      ((this._isFetchingTotalRedeemed = !1),
        (this._totalRedeemed = t),
        (this._fetchTotalRedeemedError = null));
    }
    handleTotalRedeemedFetchFail(e) {
      let { error: t } = e;
      ((this._isFetchingTotalRedeemed = !1), (this._fetchTotalRedeemedError = t));
    }
    handleRedeemVirtualCurrencyStart(e) {
      let { skuId: t } = e;
      ((this._entitlements = null),
        (this._redeemingSkuId = t),
        (this._redeemVirtualCurrencyError = null),
        (this._isRedeemingVirtualCurrency = !0));
    }
    handleRedeemVirtualCurrencySuccess(e) {
      let { entitlements: t } = e;
      ((this._entitlements = t),
        (this._redeemingSkuId = null),
        (this._isRedeemingVirtualCurrency = !1));
    }
    handleRedeemVirtualCurrencyFail(e) {
      let { error: t } = e;
      ((this._entitlements = null),
        (this._redeemVirtualCurrencyError = t),
        (this._redeemingSkuId = null),
        (this._isRedeemingVirtualCurrency = !1));
    }
    handleOnboardingModalOpen(e) {
      let {} = e;
      this._onboardingModalOpenedPrior = !0;
    }
    handleOnboardingModalReset(e) {
      let {} = e;
      this._onboardingModalOpenedPrior = !1;
    }
  }
  let s = new a();
}
