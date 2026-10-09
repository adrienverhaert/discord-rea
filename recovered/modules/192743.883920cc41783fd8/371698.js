/* Recovered shipped factory. Module 371698.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 148574..150081
 * Raw property SHA-256: 2fe5bf83fe6d5cdbdcbba93b26cc7a0b5c119bc708028acd0f9afc20e548721a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(72408),
    o = n(165900),
    a = n(998178),
    i = n(131742),
    u = n(555241),
    l = n(183631),
    s = n(689582),
    c = n(28254),
    f = n(841577),
    d = n(323845),
    h = n(481814),
    p = n(109850),
    y = n(326562),
    m = n(858340),
    v = n(909816),
    g = n(377482),
    b = n(208009),
    w = n(364173),
    _ = n(980320),
    k = n(442123),
    x = n(473951),
    S = n(234820),
    E = "[object Arguments]",
    O = "[object Function]",
    T = "[object Object]",
    R = {};
  ((R[E] =
    R["[object Array]"] =
    R["[object ArrayBuffer]"] =
    R["[object DataView]"] =
    R["[object Boolean]"] =
    R["[object Date]"] =
    R["[object Float32Array]"] =
    R["[object Float64Array]"] =
    R["[object Int8Array]"] =
    R["[object Int16Array]"] =
    R["[object Int32Array]"] =
    R["[object Map]"] =
    R["[object Number]"] =
    R[T] =
    R["[object RegExp]"] =
    R["[object Set]"] =
    R["[object String]"] =
    R["[object Symbol]"] =
    R["[object Uint8Array]"] =
    R["[object Uint8ClampedArray]"] =
    R["[object Uint16Array]"] =
    R["[object Uint32Array]"] =
      !0),
    (R["[object Error]"] = R[O] = R["[object WeakMap]"] = !1),
    (e.exports = function e(t, n, A, C, M, D) {
      var P,
        N = 1 & n,
        j = 2 & n,
        L = 4 & n;
      if ((A && (P = M ? A(t, C, M, D) : A(t)), void 0 !== P)) return P;
      if (!_(t)) return t;
      var z = g(t);
      if (z) {
        if (((P = y(t)), !N)) return s(t, P);
      } else {
        var U = p(t),
          Y = U == O || "[object GeneratorFunction]" == U;
        if (b(t)) return l(t, N);
        if (U == T || U == E || (Y && !M)) {
          if (((P = j || Y ? {} : v(t)), !N)) return j ? f(t, u(P, t)) : c(t, i(P, t));
        } else {
          if (!R[U]) return M ? t : {};
          P = m(t, U, N);
        }
      }
      D || (D = new r());
      var I = D.get(t);
      if (I) return I;
      (D.set(t, P),
        k(t)
          ? t.forEach(function (r) {
              P.add(e(r, n, A, r, t, D));
            })
          : w(t) &&
            t.forEach(function (r, o) {
              P.set(o, e(r, n, A, o, t, D));
            }));
      var F = L ? (j ? h : d) : j ? S : x,
        W = z ? void 0 : F(t);
      return (
        o(W || t, function (r, o) {
          (W && (r = t[(o = r)]), a(P, o, e(r, n, A, o, t, D)));
        }),
        P
      );
    }));
}
