/* Recovered shipped factory. Module 568185.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5439724..5440271
 * Raw property SHA-256: 538dd5d854fa68b44ca90cea7bd987afa242c8f41d5ee3cf3527578c6a37d37a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(73153),
    r = n(576705),
    a = n(292572),
    s = n(652215);
  let l = {
    async checkGuildTemplateDirty(e) {
      if (!r.A.canWithPartialContext(s.xBc.MANAGE_GUILD, { guildId: e })) return;
      let t = await a.A.loadTemplatesForGuild(e);
      t.body.length > 0 &&
        i.h.dispatch({ type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH", guildTemplate: t.body[0] });
    },
    hideGuildTemplateDirtyTooltip(e) {
      i.h.dispatch({ type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE", guildId: e });
    },
    hideGuildTemplatePromotionTooltip() {
      i.h.dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
    },
  };
}
