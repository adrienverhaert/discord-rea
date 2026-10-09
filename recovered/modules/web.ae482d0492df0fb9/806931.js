/* Recovered shipped factory. Module 806931.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3151038..3151901
 * Raw property SHA-256: e733c5ed3a6cc5c517b381f7b5bea52e4fb180d5eddc6bf3db758c1dec5730a8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Ay: () => A,
    GK: () => E,
    J7: () => _,
    PJ: () => f,
    R8: () => I,
    Xw: () => h,
    cF: () => T,
    fG: () => p,
    jd: () => u,
    lp: () => d,
    mn: () => m,
    qs: () => c,
  });
  var i,
    r,
    a,
    s,
    l,
    o,
    d =
      (((i = {})[(i.STREAM = 0)] = "STREAM"),
      (i[(i.HIDDEN_STREAM = 1)] = "HIDDEN_STREAM"),
      (i[(i.USER = 2)] = "USER"),
      (i[(i.ACTIVITY = 3)] = "ACTIVITY"),
      i),
    c = (((r = {}).STREAM = "STREAM"), (r.USER = "USER"), (r.ACTIVITY = "ACTIVITY"), r),
    u = (((a = {}).NONE = "NONE"), (a.AUTO = "AUTO"), a),
    _ =
      (((s = {})[(s.DESKTOP = 0)] = "DESKTOP"),
      (s[(s.MOBILE = 1)] = "MOBILE"),
      (s[(s.XBOX = 2)] = "XBOX"),
      (s[(s.PLAYSTATION = 3)] = "PLAYSTATION"),
      (s[(s.QUEST = 4)] = "QUEST"),
      s),
    E =
      (((l = {}).CONTEXT_MENU = "Context Menu"),
      (l.THREE_DOT = "Three-Dot"),
      (l.CARET = "Caret"),
      (l.OTHER_BUTTON = "Other Button"),
      l);
  function A(e) {
    return e?.type === 0 || e?.type === 1;
  }
  function h(e) {
    return e?.type === 2;
  }
  function f(e) {
    return e?.type === 3;
  }
  var I = (((o = {})[(o.VIDEO = 0)] = "VIDEO"), (o[(o.CAMERA_PREVIEW = 1)] = "CAMERA_PREVIEW"), o);
  let p = { 0: 320, 1: 160 },
    T = { 0: 960, 1: 480 },
    m = { 0: 200, 1: 160 };
}
