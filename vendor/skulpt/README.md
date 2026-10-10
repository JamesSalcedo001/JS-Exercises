Skulpt 1.2.0, downloaded from the versioned npm distribution via jsDelivr:

- https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js
- https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js
- https://cdn.jsdelivr.net/npm/skulpt@1.2.0/LICENSE

These files are checked in so beginner Python activities run without a network
connection. Skulpt implements a subset of Python in JavaScript; it is not CPython
and does not provide pip packages, native extensions, or a local filesystem.
The runner uses Python 3 mode and supports the syntax used in this path.
Keep the accompanying MIT license with any redistributed runtime.

The runtime files and license were compared byte-for-byte with the npm 1.2.0
tarball after verifying that archive against the registry's SHA-512 integrity.

SHA-256 hashes of the downloaded files:

```text
1a319d8eedf314dba5af2444313e3cf2ac072a335df0f5100277e8f49b64eae9  skulpt.min.js
e3ecccbc17c6164d19ed3c5561aaaeb752c38c8efa2d88b62b5fb7a7e1b086a7  skulpt-stdlib.js
```
