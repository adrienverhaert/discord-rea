/* Recovered shipped factory. Module 465932.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4132880..4134408
 * Raw property SHA-256: 6311951cd65bdb19e0b468e37cb81b94f9192cc4bc9d7a146bb67b63e0e7142f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { MH: () => _, YG: () => A, nq: () => E });
  var i = n(582128),
    r = n(17928),
    a = n(163126),
    s = n(579908),
    l = n(636194),
    o = n(71393),
    d = n(836039),
    c = n(652215);
  function u(e) {
    let t = (0, a.A)();
    i.useEffect(() => {
      null != e &&
        e.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
        l.A.getMonetizationRestrictionsFetchState(e.id) === l.e.NOT_FETCHED &&
        s.LJ(e.id, { signal: t });
    }, [e, t]);
    let n = e?.id;
    return {
      restrictions: (0, r.yK)([l.A], () => l.A.getMonetizationRestrictions(n ?? c.dJq) ?? []),
      restrictionsLoading: (0, r.bG)(
        [l.A],
        () => l.A.getMonetizationRestrictionsFetchState(n ?? c.dJq) === l.e.FETCHING,
      ),
    };
  }
  function _(e) {
    let t = (0, r.bG)([o.A], () => o.A.getGuild(e), [e]),
      { restrictions: n, restrictionsLoading: i } = u(t);
    return {
      shouldHideGuildPurchaseEntryPoints:
        !(
          t?.features.has(c.GuildFeatures.CREATOR_MONETIZABLE) ||
          t?.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
        ) ||
        (i
          ? (t?.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0)
          : (0, d.Y5)(n)),
      restrictionsLoading: i,
    };
  }
  function E(e) {
    let t = (0, r.bG)([o.A], () => o.A.getGuild(e), [e]),
      { restrictions: n, restrictionsLoading: i } = u(t),
      a = i
        ? (t?.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0)
        : (0, d.a1)(n),
      s = !!t?.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
    return {
      shouldRestrictUpdatingCreatorMonetizationSettings: a || s,
      allowSelfRemoveMonetization: !a,
      restrictionsLoading: i,
    };
  }
  function A(e) {
    let { restrictions: t, restrictionsLoading: n } = u(
      (0, r.bG)([o.A], () => o.A.getGuild(e), [e]),
    );
    return { isMonetizationReapplicationDisabled: (0, d.EM)(t), restrictionsLoading: n };
  }
}
