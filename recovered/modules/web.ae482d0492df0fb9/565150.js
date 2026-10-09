/* Recovered shipped factory. Module 565150.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2546615..2547875
 * Raw property SHA-256: 8003f1a9b19b25f17851e26ebc52307f1fe5154a18149e93755b64b54bbcad3e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => E, Cj: () => _, Sm: () => u });
  var i,
    r = n(143236),
    a = n(435558),
    s = n.n(a),
    l = n(132500),
    o = n(274652),
    d = n(453771),
    c = n(292348);
  function u(e) {
    return void 0 !== e.isVideo && void 0 !== e.isImage;
  }
  var _ =
    (((i = {})[(i.FILE_ATTACHMENT = 0)] = "FILE_ATTACHMENT"),
    (i[(i.IMAGE_PICKER = 1)] = "IMAGE_PICKER"),
    (i[(i.IMAGE_EDITOR = 2)] = "IMAGE_EDITOR"),
    i);
  class E extends r.EventEmitter {
    id;
    uniqueId;
    filename;
    item;
    spoiler;
    description;
    classification;
    isImage;
    isVideo;
    uploadedFilename;
    mimeType;
    origin;
    durationSecs;
    waveform;
    isThumbnail;
    clip;
    allowOptimization = !0;
    constructor(e) {
      if ((super(), (this.item = e), e.platform === o.x.REACT_NATIVE)) {
        this.id = e.id ?? e.uri;
        const t = (0, c.ly)({ uri: e.uri, overrideFilename: e.filename, overrideType: e.mimeType });
        ((this.filename = t.filename),
          (this.isImage = t.isImage),
          (this.isVideo = t.isVideo),
          (this.mimeType = t.type),
          (this.origin = e.origin),
          (this.durationSecs = e.durationSecs),
          (this.waveform = e.waveform));
      } else
        ((this.id = e.id ?? s().uniqueId("upload")),
          (this.classification = d.TX(e.file)),
          (this.isImage = "image" === this.classification),
          (this.isVideo = "video" === this.classification),
          (this.filename = e.file.name),
          (this.mimeType = e.file.type),
          (this.origin = e.origin));
      ((this.isThumbnail = e.isThumbnail),
        (this.clip = e.clip),
        (this.uniqueId = (0, l.A)()),
        (this.spoiler = !1),
        (this.description = null));
    }
    cancel() {}
    resetState() {
      return this;
    }
  }
}
