# ROAR SWR published release snapshot

This folder contains the public npm release `@bdelab/roar-swr` version `1.17.5`.

Included:
- The published JavaScript runtime and stylesheet.
- The release package manifest, README and license.
- The source map with its embedded dependency source text.
- First-party `src/` JavaScript modules recovered from the source map (saved as editable files alongside the map).

Scope note: The npm release is a distributable package, not the complete upstream development repository. Its published files do not include the full original Git repository, test suite, development build configuration, locale JSON files, or original word-bank CSV files. The compiled `lib/` bundle is the complete published runtime artifact; the recovered `src/` modules show the genuine first-party experiment implementation but cannot alone be rebuilt without the omitted development/data files.

No Kannada word bank or translations have been invented here. Those must be added using the original task architecture and research-team-approved Kannada materials.

The root-level Kannada prototype and Vercel configuration have not been modified. This snapshot is isolated in its own folder.
