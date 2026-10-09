/* Recovered shipped factory. Module 177773.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5440794..5441162
 * Raw property SHA-256: 84694fdbc9bbd24f2f464ec7f45040b64793876f2fa2e376a9113781699e81db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(401755);
  function r(e) {
    return {
      code: e.code,
      state: i.QB.RESOLVED,
      name: e.name,
      description: e.description ?? "",
      creatorId: e.creator_id,
      creator: e.creator,
      createdAt: e.created_at,
      updatedAt: e.updated_at,
      sourceGuildId: e.source_guild_id,
      serializedSourceGuild: e.serialized_source_guild,
      usageCount: e.usage_count,
      isDirty: e.is_dirty,
    };
  }
}
