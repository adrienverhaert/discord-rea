/* Recovered shipped factory. Module 573359.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6718759..6719813
 * Raw property SHA-256: 4bab10d31b79648c7f7d488af7cf5fb7996f4326f53e7757dff24404ce455edc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(73153);
  let a = {
    isDisplayingWowMomentConfirmation: !1,
    isAnimated: !1,
    nameplatePreviewOverrides: null,
  };
  class s extends i.Ay.Store {
    static displayName = "WowMomentConfirmationStore";
    getState() {
      return a;
    }
    get isDisplayingWowMomentConfirmation() {
      return a.isDisplayingWowMomentConfirmation;
    }
    get isAnimated() {
      return a.isAnimated;
    }
    get nameplatePreviewOverrides() {
      return a.nameplatePreviewOverrides;
    }
  }
  let l = new s(r.h, {
    LOGOUT: function () {
      a = {
        isDisplayingWowMomentConfirmation: !1,
        isAnimated: !1,
        nameplatePreviewOverrides: null,
      };
    },
    WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: function (e) {
      let { value: t, isAnimated: n } = e;
      ((a.isDisplayingWowMomentConfirmation = t), (a.isAnimated = n));
    },
    WOW_MOMENT_CONFIRMATION_SET_NAMEPLATE_PREVIEW_OVERRIDES: function (e) {
      let { displayNameStyles: t, avatar: n } = e;
      a = { ...a, nameplatePreviewOverrides: { displayNameStyles: t, avatar: n } };
    },
    WOW_MOMENT_CONFIRMATION_CLEAR_NAMEPLATE_PREVIEW_OVERRIDES: function () {
      if (null == a.nameplatePreviewOverrides) return !1;
      a = { ...a, nameplatePreviewOverrides: null };
    },
  });
}
