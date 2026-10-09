# Gaps and coverage

| Area | Status | Implementation/evidence |
| --- | --- | --- |
| Desktop bootstrap and preload | Recovered | Exact ASAR members and hashes; not needed to execute the offline web clone. |
| Initial web bundles and styles | Recovered within HTML-linked scope | Originals retained, modules split statically. Additional dynamic chunks are not claimed complete. |
| Original authoring source | Unavailable | Main source-map probes return 404. TypeScript, original filenames, comments and most local variable names cannot be restored reliably. |
| Icons, fonts, theme material | Recovered subset reused | See `evidence/ui-source-map.json` and `recovered/SOURCE-RECOVERY.md`. |
| Navigation and message UI | Reconstructed | Authored React presentation uses recovered visual artifacts; not the original bootstrapped Discord application. |
| Message/DM persistence | Authored local substitute | Synthetic data and browser local storage. No real Discord accounts or data. |
| Reactions, replies, edits, deletion, search | Authored local substitute | Works on local messages. Owner edit/delete rules are tested. |
| Server/channel creation, profile and settings | Authored local substitute | Local workspace only; no remote permissions or account changes. |
| Voice/video/screen sharing | Not implemented as communication | UI identifies local demonstration; real-time media requires a separate service. |
| Gateway, account login, Nitro, billing, moderation, bots | Not reconstructed | Requires original or replacement backend contracts and implementation. |
| Original global behavior and visual parity | Not proven | No blanket equivalence assertion. Screenshots and tests cover the delivered offline flows only. |

A recovered module being present is not proof that it executes or works independently. The readable module inventory is an inspection artifact with original dependency identifiers, not a set of independently npm-importable React components.
