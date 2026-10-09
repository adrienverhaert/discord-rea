/* Recovered shipped factory. Module 615550.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5033331..5034143
 * Raw property SHA-256: 1c2532677e3991d10c0a281ac6e665cad680b3af29c8666b8f1d69a07414951f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Gb: () => l, TF: () => o, W_: () => c, n7: () => u, no: () => d }), n(660183));
  var i,
    r,
    a,
    s,
    l =
      (((i = {}).BUG = "BUG"),
      (i.ALLOWED = "ALLOWED"),
      (i.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION"),
      i),
    o = (((r = {}).JOIN_RAID = "JOIN_RAID"), (r.MENTION_RAID = "MENTION_RAID"), r),
    d =
      (((a = {}).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY"),
      (a.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS"),
      (a.LEGITIMATE_DMS = "LEGITIMATE_DMS"),
      (a.DM_SPAM = "DM_SPAM"),
      (a.JOIN_RAID = "JOIN_RAID"),
      (a.OTHER = "OTHER"),
      a);
  function c(e) {
    return e.includes("LEGITIMATE_ACTIVITY")
      ? "LEGITIMATE_ACTIVITY"
      : e.includes("DM_SPAM")
        ? "DM_SPAM"
        : e.includes("JOIN_RAID")
          ? "JOIN_RAID"
          : "OTHER";
  }
  var u =
    (((s = {}).DM_SPAM = "DM_SPAM"),
    (s.MENTION_SPAM = "MENTION_SPAM"),
    (s.CHANNEL_SPAM = "CHANNEL_SPAM"),
    (s.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS"),
    (s.CHANGING_SETTINGS = "CHANGING_SETTINGS"),
    (s.OTHER = "OTHER"),
    s);
}
