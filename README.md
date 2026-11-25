# Aionium

Static website for [aionium.eu](https://aionium.eu), published with GitHub Pages from the repository root. There is no build step.

## Preview locally

From this folder:

```bash
python -m http.server 8765
```

Open `http://127.0.0.1:8765/`.

## Publish on GitHub Pages

1. Push this repository to GitHub. Pages on a free account requires a **public** repository.
2. In the repository: **Settings → Pages → Build and deployment**.
3. Set **Source** to **Deploy from a branch**.
4. Set **Branch** to `main` and folder to **`/ (root)`**, then save.
5. The custom domain is already declared in `CNAME` as `aionium.eu`. After the first deploy, confirm it under Pages → Custom domain, then enable **Enforce HTTPS** once the certificate is issued.

`.nojekyll` is present so GitHub Pages serves the files as-is and does not run Jekyll.

## DNS for aionium.eu

The domain verification record in your GitHub profile is separate from the records that send visitors to the site. At the DNS host for `aionium.eu`, point the apex domain at GitHub Pages:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

If you also use `www`, add a CNAME from `www` to `<github-user>.github.io` and add `www.aionium.eu` as well, or redirect `www` to the apex at your DNS host. Certificate issuance can take up to a day after DNS is correct.

## Contact form

The site is static. The form opens the visitor’s email application with a message addressed to `info@aionium.eu`. Nothing is stored on a server.
