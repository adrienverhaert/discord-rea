/* Recovered shipped factory. Module 243277.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5057373..5058544
 * Raw property SHA-256: 0d6e451dece9bfadc1c4e8224ca8faac0e698c82c4f51bf3d471fdf948b1debb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Mc: () => o,
    hG: () => A,
    zs: () => p,
    $5: () => T,
    AH: () => l,
    vY: () => c,
    bV: () => _,
    kS: () => f,
    NX: () => m,
    oN: () => R,
    UW: () => E,
    Nu: () => N,
    Ix: () => u,
    M3: () => S,
    TZ: () => C,
    qm: () => h,
    Ku: () => I,
    uh: () => d,
    xv: () => O,
    Us: () => g,
  });
  var i,
    r,
    a,
    s,
    l =
      (((i = {})[(i.BLOCK_MESSAGE = 1)] = "BLOCK_MESSAGE"),
      (i[(i.FLAG_TO_CHANNEL = 2)] = "FLAG_TO_CHANNEL"),
      (i[(i.USER_COMMUNICATION_DISABLED = 3)] = "USER_COMMUNICATION_DISABLED"),
      (i[(i.QUARANTINE_USER = 4)] = "QUARANTINE_USER"),
      i),
    o =
      (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"),
      (r[(r.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
      (r[(r.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] = "GUILD_MEMBER_JOIN_OR_UPDATE"),
      r),
    d =
      (((a = {})[(a.KEYWORD = 1)] = "KEYWORD"),
      (a[(a.SPAM_LINK = 2)] = "SPAM_LINK"),
      (a[(a.ML_SPAM = 3)] = "ML_SPAM"),
      (a[(a.DEFAULT_KEYWORD_LIST = 4)] = "DEFAULT_KEYWORD_LIST"),
      (a[(a.MENTION_SPAM = 5)] = "MENTION_SPAM"),
      (a[(a.USER_PROFILE = 6)] = "USER_PROFILE"),
      (a[(a.SERVER_POLICY = 7)] = "SERVER_POLICY"),
      (a[(a.APPLICATION = 8)] = "APPLICATION"),
      a),
    c =
      (((s = {})[(s.PROFANITY = 1)] = "PROFANITY"),
      (s[(s.SEXUAL_CONTENT = 2)] = "SEXUAL_CONTENT"),
      (s[(s.SLURS = 3)] = "SLURS"),
      s);
  (d.USER_PROFILE, d.SERVER_POLICY, d.MENTION_SPAM, d.ML_SPAM, d.DEFAULT_KEYWORD_LIST, d.KEYWORD);
  let u = 5,
    _ = 1e3,
    E = 100,
    A = 1e3,
    h = 10,
    f = 60,
    I = 1,
    p = 1,
    T = 260,
    m = 100,
    g = 1,
    S = 50,
    N = 20,
    C = 300,
    O = "^b(a|@)d$\nw(o|0)rd(s|$)",
    R = "automod-profile-quarantine-alert";
}
