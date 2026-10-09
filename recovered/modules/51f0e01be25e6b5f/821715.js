/* Recovered shipped factory. Module 821715.
 * Source: recovered/web/assets/51f0e01be25e6b5f.js
 * UTF-16 property offsets: 234..745
 * Raw property SHA-256: da2e8623b5ab15e8a054336b9f7c027b52e02b39865ca7a4da562f3484c03398
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, a) {
  a.d(t, { A: () => n });
  var s = a(17928),
    l = a(487329),
    r = a(161518);
  let i = {
    [l.iy.STREAM_SOUNDSHARE_FAILED]: 0,
    [l.iy.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_SEND_LOW_FPS]: 2,
    [l.iy.STREAM_VIEW_LOW_FPS]: 2,
    [l.iy.STREAM_BAD_NETWORK_QUALITY]: 3,
  };
  function n(e) {
    let t = e.id;
    return (0, s.bG)(
      [r.A],
      () => {
        let e = Array.from(r.A.getActiveErrors().values())
          .filter((e) => "streamKey" in e && e.streamKey === t && null != i[e.type])
          .sort((e, t) => (i[e.type] ?? 0) - (i[t.type] ?? 0))[0];
        return e?.type;
      },
      [t],
    );
  }
}
