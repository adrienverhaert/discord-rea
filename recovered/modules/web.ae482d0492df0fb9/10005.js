/* Recovered shipped factory. Module 10005.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6522273..6524141
 * Raw property SHA-256: 4288ef4fa89c402224f4ff9ac9da3000f8f038d2b9b21f7a87bbe617ee607258
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(582128),
    r = n(913122),
    a = n(899847),
    s = n(695515),
    l = n(191627);
  function o(e) {
    let { onError: t, onSuccess: n } = e ?? {},
      [o, d] = i.useState(!1),
      [c, u] = i.useState(!1),
      [_, E] = i.useState(!1),
      [A, h] = i.useState(!1),
      [f, I] = i.useState(!1),
      [p, T] = i.useState(!1),
      [m, g] = i.useState(!1),
      [S, N] = i.useState(!1),
      C = o || c || _ || A || p || S,
      O = i.useCallback(
        async (e) => {
          if (!C) {
            d(!0);
            try {
              (await (0, a.nt)(e, l.Ef.ACTIVE), n?.());
            } catch (n) {
              let e = new r.LG(n);
              t?.(e);
            } finally {
              d(!1);
            }
          }
        },
        [C, t, n],
      ),
      R = i.useCallback(
        async (e) => {
          if (!C) {
            u(!0);
            try {
              (await (0, a.nt)(e, l.Ef.DECLINED), n?.());
            } catch (n) {
              let e = new r.LG(n);
              t?.(e);
            } finally {
              u(!1);
            }
          }
        },
        [C, t, n],
      ),
      L = i.useCallback(
        async (e) => {
          if (!C) {
            E(!0);
            try {
              (await (0, a.nt)(e, l.Ef.INACTIVE), n?.());
            } catch (n) {
              let e = new r.LG(n);
              t?.(e);
            } finally {
              E(!1);
            }
          }
        },
        [C, t, n],
      ),
      y = i.useCallback(
        async (e) => {
          if (!C) {
            h(!0);
            try {
              (await (0, a.e$)(e), n?.());
            } catch (n) {
              let e = new r.LG(n);
              t?.(e);
            } finally {
              h(!1);
            }
          }
        },
        [C, t, n],
      ),
      D = i.useCallback(async () => {
        if (!f) {
          I(!0);
          try {
            (await (0, a.HB)(), n?.());
          } catch (n) {
            let e = new r.LG(n);
            t?.(e);
          } finally {
            I(!1);
          }
        }
      }, [f, t, n]),
      v = i.useCallback(
        async (e) => {
          if (!m) {
            g(!0);
            try {
              (await a.Ay.fetchTeenActivity(e), n?.());
            } catch (n) {
              let e = new r.LG(n);
              t?.(e);
            } finally {
              g(!1);
            }
          }
        },
        [m, t, n],
      );
    return {
      acceptLinkRequest: O,
      declineLinkRequest: R,
      disconnectLinkRequest: L,
      cancelLinkRequest: y,
      selectTeenUser: v,
      getLinkCode: D,
      requestLink: i.useCallback(
        async (e, i) => {
          if (!p) {
            T(!0);
            try {
              (await a.Ay.requestLink(e, i), n?.());
            } catch (n) {
              let e = new r.LG(n);
              t?.(e);
            } finally {
              T(!1);
            }
          }
        },
        [p, t, n],
      ),
      loadMore: i.useCallback(
        async (e) => {
          let n = s.A.getActionsForDisplayType(e),
            i = n[n.length - 1],
            l = s.A.getStartId(),
            o = s.A.getSelectedTeenId();
          if (!S && null != l && null != o) {
            N(!0);
            try {
              await a.Ay.fetchMoreTeenActivity(o, e, l, i.event_id);
            } catch (n) {
              let e = new r.LG(n);
              t?.(e);
            } finally {
              N(!1);
            }
          }
        },
        [S, t],
      ),
      isAcceptLoading: o,
      isDeclineLoading: c,
      isDisconnectLoading: _,
      isCancelLoading: A,
      isGetLinkCodeLoading: f,
      isSelectTeenUserLoading: m,
      isRequestingLink: p,
      isMoreLoading: S,
    };
  }
}
