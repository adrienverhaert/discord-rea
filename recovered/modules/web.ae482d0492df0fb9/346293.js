/* Recovered shipped factory. Module 346293.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5898452..5899028
 * Raw property SHA-256: 1e51fb780bc9a9407e9634fff247dc210d3df2ea38c406f94c6190ae1f59fab4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    let {
      guildId: t,
      channelId: n,
      userIndividualFileSizeLimit: i,
      numAttachments: r,
      preCompressionFileSizes: a,
      preCompressionAggregateSize: s,
      postCompressionFileSizes: l,
      postCompressionAggregateSize: o,
      attachmentMimeTypes: d,
      errorType: c,
    } = e;
    return {
      ...(void 0 !== n ? { channel_id: n } : {}),
      ...(void 0 !== t ? { guild_id: t } : {}),
      user_individual_file_size_limit: i,
      num_attachments: r,
      pre_compression_file_sizes: a,
      pre_compression_aggregate_file_size: s,
      post_compression_file_sizes: l,
      post_compression_aggregate_file_size: o,
      attachment_mimetypes: d,
      error_type: c,
    };
  }
  n.d(t, { s: () => i });
}
