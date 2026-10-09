/* Recovered shipped factory. Module 946274.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5619554..5621227
 * Raw property SHA-256: f887242310ff61d4c35db2035278524b77041634beed0302a0096ec23c7572b9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { AM: () => d, Ay: () => _, JF: () => c, gA: () => o });
  var i = n(477900),
    r = n(582128),
    a = n(780777),
    s = n(693591),
    l = n(660183);
  function o() {
    return [
      {
        name: l.intl.string(l.t["Sp2NF+"]),
        extensions: ["jpg", "jpeg", "jfif", "png", "gif", "webp", "avif"],
      },
    ];
  }
  function d(e, t) {
    if (null != e) {
      let n = new FileReader();
      ((n.onload = (n) => {
        "string" == typeof n.target?.result && t(n.target.result, e);
      }),
        n.readAsDataURL(e));
    }
  }
  function c(e, t, n) {
    d(e, (i) => {
      if (e.type === s.a.MP4) return t(i, e);
      let r = new Image();
      ((r.src = i),
        (r.onload = () => {
          t(i, e);
        }),
        (r.onerror = () => {
          n();
        }));
    });
  }
  class u extends r.PureComponent {
    _ref = r.createRef();
    _isMounted = !1;
    static defaultProps = { multiple: !0, tabIndex: -1, maxFileSizeBytes: 1 / 0 };
    componentDidMount() {
      this._isMounted = !0;
    }
    handleFileChange = (e) => {
      let { onFileSizeError: t, maxFileSizeBytes: n } = this.props;
      if ((e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files))
        for (let i = 0; i < e.currentTarget.files.length; i++) {
          let r = e.currentTarget.files[i];
          if (r.size > n) {
            t?.(n, r.size);
            continue;
          }
          c(r, this.handleFileRead, this.handleFileError);
        }
    };
    activateUploadDialogue() {
      this._ref.current?.activateUploadDialogue();
    }
    handleFileRead = (e, t) => {
      let { onChange: n } = this.props;
      this._isMounted && n(e, t);
    };
    handleFileError = async () => {
      let { openUploadError: e } = await Promise.all([
        n.e("454048"),
        n.e("300699"),
        n.e("599666"),
      ]).then(n.bind(n, 494921));
      e({ title: l.intl.string(l.t["0egKg3"]), help: l.intl.string(l.t["7PnXqu"]) });
    };
    render() {
      let {
        multiple: e,
        disabled: t,
        className: n,
        tabIndex: r,
        "aria-label": s,
        "aria-hidden": l,
        filters: d,
        title: c,
      } = this.props;
      return (0, i.jsx)(a.A, {
        ref: this._ref,
        onClick: this.props.onClick,
        onChange: this.handleFileChange,
        filters: d ?? o(),
        multiple: e,
        disabled: t,
        className: n,
        tabIndex: r,
        "aria-label": s,
        "aria-hidden": l,
        title: c,
      });
    }
  }
  let _ = u;
}
