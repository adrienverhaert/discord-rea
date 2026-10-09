/* Recovered shipped factory. Module 763758.
 * Source: recovered/web/assets/3f8c0cbbf9591e94.js
 * UTF-16 property offsets: 95..802
 * Raw property SHA-256: c746259b6f9d9fb10edcd05f9fbecd573bc93a7ed76c8a4280b04eeaeb747e33
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (s, t, e) {
  e.d(t, { A: () => l });
  var i = e(477900),
    n = e(582128),
    p = e(28863);
  class r extends n.PureComponent {
    render() {
      let { text: s, lastItem: t, className: e } = this.props;
      return (0, i.jsxs)("span", {
        children: [
          (0, i.jsx)(p.Anchor, { className: e, onClick: this.handleClick, children: s }),
          t ? "" : ", ",
        ],
      });
    }
    handleClick = () => {
      let { onClick: s, index: t } = this.props;
      s?.(t);
    };
  }
  class l extends n.PureComponent {
    render() {
      let s = this.props.artists.split("; ");
      if (!this.props.canOpen) return s.join(", ");
      let t = s.length - 1;
      return s.map((s, e) =>
        (0, i.jsx)(
          r,
          {
            text: s,
            index: e,
            lastItem: e === t,
            onClick: this.handleOpenSpotifyArtist,
            className: this.props.linkClassName,
          },
          `spotify-artist-${e}`,
        ),
      );
    }
    handleOpenSpotifyArtist = (s) => {
      let { onOpenSpotifyArtist: t } = this.props;
      t?.(s);
    };
  }
}
