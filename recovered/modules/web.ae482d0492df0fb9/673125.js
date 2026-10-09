/* Recovered shipped factory. Module 673125.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8426084..8431382
 * Raw property SHA-256: 4befbfac21920429b2c496796aa6b89fde80a52e138a206d5871ac3cedd97d55
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => f, EB: () => A, Y0: () => E });
  var i,
    r,
    a = n(17928),
    s = n(73153),
    l = n(287809),
    o = n(124861),
    d = n(12510);
  function c(e) {
    return {
      achievementIdentifier: e.achievement_identifier,
      achievementDefinitionId: String(e.achievement_definition_id),
      title: e.title,
      orbRewardAmount: e.reward_amount,
      achievementStatus: e.status,
    };
  }
  let u = new Set([null, o.x.NONE, o.x.IN_PROGRESS, o.x.ELIGIBLE, o.x.COMPLETED]);
  function _() {
    return {
      challenges: [],
      isFetchingChallenges: !1,
      hasFetchedChallenges: !1,
      fetchChallengesError: null,
      isClaimingChallengeMap: {},
      claimChallengeErrorMap: {},
      orbRewardMultiplier: null,
      nitroGatedOrbMultiplier: null,
      achievementUnreadState: null,
      lastFetchedPremiumType: void 0,
      userOpenedWalletViaProfileDCF: !1,
    };
  }
  var E =
      (((i = {}).NEW_ACHIEVEMENT = "new_achievement"),
      (i.UNCLAIMED_ACHIEVEMENT = "unclaimed_achievement"),
      i),
    A =
      (((r = {}).CLAIM_CHALLENGE = "claim_challenge"),
      (r.FETCH_CHALLENGES = "fetch_challenges"),
      r);
  class h extends a.Ay.Store {
    static displayName = "OrbChallengesStore";
    state = _();
    constructor() {
      super(s.h, {
        ORB_CHALLENGES_LIST_FETCH: (e) => this.handleOrbChallengesFetchStart(e),
        ORB_CHALLENGES_LIST_FETCH_SUCCESS: (e) => this.handleOrbChallengesFetchSuccess(e),
        ORB_CHALLENGES_LIST_FETCH_FAIL: (e) => this.handleOrbChallengesFetchFail(e),
        ORB_CHALLENGES_UNREAD_UPDATE: (e) => this.handleUnreadUpdate(e),
        ORB_CHALLENGES_UNREAD_ACK: () => this.handleUnreadAck(),
        ORB_CHALLENGE_CLAIM: (e) => this.handleOrbChallengeClaim(e),
        ORB_CHALLENGE_CLAIM_SUCCESS: (e) => this.handleOrbChallengeClaimSuccess(e),
        ORB_CHALLENGE_CLAIM_FAIL: (e) => this.handleOrbChallengeClaimFail(e),
        USER_DISCORD_ACHIEVEMENT_STATE_UPDATE: (e) => this.handleUserAchievementStateUpdate(e),
        CURRENT_USER_UPDATE: () => this.handleCurrentUserPremiumTypeChange(),
        UPDATE_CLIENT_PREMIUM_TYPE: () => this.handleCurrentUserPremiumTypeChange(),
        LOGIN_SUCCESS: () => this.handleReset(),
      });
    }
    initialize() {
      this.waitFor(l.default);
    }
    handleCurrentUserPremiumTypeChange() {
      let e = l.default.getCurrentUser();
      if (null == e) return !1;
      let t = e.premiumType;
      return (
        !!this.state.hasFetchedChallenges &&
        t !== this.state.lastFetchedPremiumType &&
        ((this.state.lastFetchedPremiumType = t),
        this.state.isFetchingChallenges || (0, d.Od)(),
        !1)
      );
    }
    handleReset() {
      this.state = _();
    }
    handleOrbChallengesFetchStart(e) {
      let {} = e;
      ((this.state.isFetchingChallenges = !0), (this.state.fetchChallengesError = null));
    }
    setAchievementUnreadState(e) {
      let t = this.state.achievementUnreadState ?? {
        has_unread_new_achievement: !1,
        has_unclaimed_achievements: !1,
      };
      this.state.achievementUnreadState = { ...t, ...e };
    }
    handleOrbChallengesFetchSuccess(e) {
      let { response: t } = e;
      ((this.state.challenges = t.achievements.map(c)),
        (this.state.orbRewardMultiplier = t.orb_multiplier),
        (this.state.nitroGatedOrbMultiplier = t.nitro_gated_orb_multiplier),
        this.setAchievementUnreadState({
          has_unclaimed_achievements: t.has_unclaimed_achievements,
        }),
        (this.state.hasFetchedChallenges = !0),
        (this.state.isFetchingChallenges = !1));
      let n = l.default.getCurrentUser();
      this.state.lastFetchedPremiumType = null != n ? n.premiumType : null;
    }
    handleUnreadUpdate(e) {
      let { achievementUnreadState: t } = e;
      this.state.achievementUnreadState = t;
    }
    handleUnreadAck() {
      this.setAchievementUnreadState({ has_unread_new_achievement: !1 });
    }
    handleOrbChallengesFetchFail(e) {
      let { error: t } = e;
      ((this.state.fetchChallengesError = t), (this.state.isFetchingChallenges = !1));
    }
    handleOrbChallengeClaim(e) {
      let { achievementIdentifier: t } = e;
      ((this.state.isClaimingChallengeMap[t] = !0), (this.state.claimChallengeErrorMap[t] = null));
    }
    handleOrbChallengeClaimSuccess(e) {
      let { achievementIdentifier: t, response: n } = e;
      ((this.state.isClaimingChallengeMap[t] = !1),
        (this.state.claimChallengeErrorMap[t] = null),
        (this.state.challenges = this.state.challenges.map((e) =>
          e.achievementIdentifier === t ? c(n) : e,
        )));
    }
    handleOrbChallengeClaimFail(e) {
      let { achievementIdentifier: t, error: n } = e;
      ((this.state.isClaimingChallengeMap[t] = !1), (this.state.claimChallengeErrorMap[t] = n));
    }
    handleUserAchievementStateUpdate(e) {
      let { payload: t } = e;
      return ((0, d.Od)(), "achievement_completed" === t.type)
        ? void this.setAchievementUnreadState({ has_unclaimed_achievements: !0 })
        : (t.type, !1);
    }
    setUserOpenedWalletViaProfileDCF(e) {
      this.state.userOpenedWalletViaProfileDCF = e;
    }
    get orbChallengesDisplayError() {
      let { fetchChallengesError: e, claimChallengeErrorMap: t } = this.state,
        n = Object.values(t).find((e) => null != e);
      return null != n
        ? { error: n, errorType: "claim_challenge" }
        : null != e
          ? { error: e, errorType: "fetch_challenges" }
          : null;
    }
    get userOpenedWalletViaProfileDCF() {
      return this.state.userOpenedWalletViaProfileDCF;
    }
    get orbRewardMultiplier() {
      return this.state.orbRewardMultiplier;
    }
    get nitroGatedOrbMultiplier() {
      return this.state.nitroGatedOrbMultiplier;
    }
    get hasUnclaimedAchievements() {
      return this.state.hasFetchedChallenges
        ? this.state.challenges.some((e) => e.achievementStatus === o.x.COMPLETED)
        : null != this.state.achievementUnreadState &&
            this.state.achievementUnreadState.has_unclaimed_achievements;
    }
    get clientUnreadNotificationType() {
      return null === this.state.achievementUnreadState
        ? null
        : this.state.achievementUnreadState.has_unread_new_achievement
          ? "new_achievement"
          : this.hasUnclaimedAchievements
            ? "unclaimed_achievement"
            : null;
    }
    get hasUnreadUpdate() {
      return null != this.clientUnreadNotificationType;
    }
    get challenges() {
      return this.state.challenges;
    }
    get challengesForOrbWallet() {
      return this.state.challenges.filter((e) => u.has(e.achievementStatus));
    }
    get hasFetchedChallenges() {
      return this.state.hasFetchedChallenges;
    }
    get isFetchingChallenges() {
      return this.state.isFetchingChallenges;
    }
    get fetchChallengesError() {
      return this.state.fetchChallengesError;
    }
  }
  let f = new h();
}
