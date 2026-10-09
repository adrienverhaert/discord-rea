/* Recovered shipped factory. Module 324580.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4974516..4975495
 * Raw property SHA-256: ce31be895121e43697e2032766c6ab9c15e82831ed488e7421939edab22626a3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    FZ: () => g,
    I9: () => f,
    Iq: () => c,
    J8: () => E,
    O3: () => p,
    OR: () => I,
    R0: () => A,
    Us: () => u,
    VX: () => h,
    WV: () => T,
    ig: () => o,
    o: () => _,
    tO: () => N,
    v: () => d,
    wz: () => m,
  });
  var i,
    r,
    a,
    s = n(927813),
    l = n(660183);
  let o = 0,
    d = 13,
    c = -1,
    u = -2;
  var _ =
      (((i = {}).FEATURED = "featured"),
      (i.GAMING = "gaming"),
      (i.MUSIC = "music"),
      (i.ENTERTAINMENT = "entertainment"),
      (i.TECH = "tech"),
      (i.EDUCATION = "education"),
      (i.HUBS = "hubs"),
      i),
    E =
      (((r = {}).UNKNOWN = "unknown"),
      (r.GUILDS_BAR = "guilds_bar"),
      (r.RTC_PANEL = "rtc_panel"),
      (r.PROFILE = "profile"),
      (r.GAME_LINK = "game_link"),
      (r.EMBED = "embed"),
      r);
  let A = new Set(["hubs"]),
    h = [],
    f = "q",
    I = "c",
    p = "l",
    T = 10 * s.A.Millis.MINUTE;
  var m =
    (((a = {})[(a.Clans = -3)] = "Clans"),
    (a[(a.Hub = u)] = "Hub"),
    (a[(a.Communities = c)] = "Communities"),
    (a[(a.Activity = 1)] = "Activity"),
    (a[(a.Music = 2)] = "Music"),
    (a[(a.Television = 3)] = "Television"),
    (a[(a.Science = 5)] = "Science"),
    (a[(a.Education = 6)] = "Education"),
    a);
  let g = [1, 2, 3, 5, 6],
    S = ["en-GB"];
  function N() {
    return (0, l.getLanguages)()
      .filter((e) => !S.includes(e.code))
      .map((e) => ("en-US" === e.code ? { ...e, name: l.intl.string(l.t.LQLMGP) } : e));
  }
}
