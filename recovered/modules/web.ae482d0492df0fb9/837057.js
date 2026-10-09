/* Recovered shipped factory. Module 837057.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4951701..4954084
 * Raw property SHA-256: 37f3f68b3befd2d0f8866aba06a488f4e2a14708b05590b0709e21180e1d7797
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    transitionToGlobalDiscovery: () =>
      function e(t) {
        let n = t.tab;
        switch ((n !== u.GlobalDiscoveryTab.QUESTS && c.A.setState({ selectedTab: n }), n)) {
          case u.GlobalDiscoveryTab.SERVERS:
            let h = t.selectedServersTab;
            return (
              null != h
                ? a.A.setState({ selectedTab: h, entrypoint: t.entrypoint ?? A.J8.UNKNOWN })
                : a.A.setState({ entrypoint: t.entrypoint ?? A.J8.UNKNOWN }),
              (0, l.pX)(_.BVt.GLOBAL_DISCOVERY_SERVERS, t.extra)
            );
          case u.GlobalDiscoveryTab.APPS:
            if (null != t.newSessionState) {
              let n = (0, r.YP)(),
                { guildId: a, entrypoint: s } = t.newSessionState;
              if (
                (i.h.setState({
                  sessionId: n,
                  guildId: a ?? null,
                  entrypoint: s,
                  trackedOpenedFromExternalEntrypoint: !1,
                }),
                d.default.track(_.HAw.APP_DIRECTORY_OPENED, {
                  source: s?.name,
                  session_id: n,
                  guild_id: a,
                  user_id: o.default.getCurrentUser()?.id,
                }),
                t.newSessionState.restorePreviousView)
              )
                return e(
                  (function () {
                    let { lastItem: e } = i.tS.getState();
                    if (null != e)
                      switch (e.type) {
                        case i.ev.APPLICATION:
                          return {
                            tab: u.GlobalDiscoveryTab.APPS,
                            applicationId: e.applicationId,
                            section: e.section,
                          };
                        case i.ev.CATEGORY:
                          return {
                            tab: u.GlobalDiscoveryTab.APPS,
                            categoryId: Number(e.categoryId),
                          };
                        case i.ev.SEARCH:
                          return {
                            tab: u.GlobalDiscoveryTab.APPS,
                            query: e.query ?? "",
                            page: e.page,
                            categoryId: null != e.categoryId ? Number(e.categoryId) : void 0,
                          };
                      }
                    return { tab: u.GlobalDiscoveryTab.APPS };
                  })(),
                );
            }
            if (null != t.applicationId) {
              if (t.section === E.GlobalDiscoveryAppsSections.STORE)
                if (null != t.skuId)
                  return (0, l.pX)(
                    _.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId),
                  );
                else
                  return (0, l.pX)(
                    _.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                      t.applicationId,
                      E.GlobalDiscoveryAppsSections.STORE,
                    ),
                  );
              return (0, l.pX)(_.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
            }
            if (null != t.query) {
              let e = new URLSearchParams();
              return (
                "" !== t.query && e.set("q", t.query),
                null != t.categoryId && e.set("category_id", t.categoryId.toString()),
                null != t.page && e.set("page", t.page.toString()),
                (0, l.pX)(_.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() })
              );
            }
            if (null != t.categoryId)
              return (0, l.pX)(_.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
            else return (0, l.pX)(_.BVt.GLOBAL_DISCOVERY_APPS);
          case u.GlobalDiscoveryTab.QUESTS:
            return (0, s.m)({ fromContent: t.questContent, questId: t.questId });
          default:
            throw Error(`[transitionToGlobalDiscovery] Unhandled tab type: ${n}`);
        }
      },
  }),
    n(323874),
    n(14289),
    n(35956));
  var i = n(310419),
    r = n(965660),
    a = n(601193),
    s = n(216934),
    l = n(976860),
    o = n(287809),
    d = n(174459),
    c = n(726845),
    u = n(488995),
    _ = n(652215),
    E = n(435220),
    A = n(324580);
}
