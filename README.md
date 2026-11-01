# Shuguang Dou · Research homepage

[Live site](https://shuguang-52.github.io/) · [Publications](https://shuguang-52.github.io/publications/)

A lightweight Jekyll academic homepage, informed by [Minimal Light](https://github.com/yaoyao-liu/minimal-light)'s profile-and-publications layout. The design uses warm paper tones, restrained typography, and a searchable research archive. GitHub Pages, existing project pages, and PDF URLs are retained.

## Update content

- **Publications:** edit `_data/publications.yml`. Each record has a stable `id`, title, authors, formal publication year, venue, research topics, useful links, and BibTeX. Set `selected: true` for homepage highlights. Include `image` only when an actual paper figure is available.
- **Research and current role:** edit `_pages/home.html`, `_pages/experience.html`, and the profile information in `_layouts/profile.html`.
- **Friends:** edit `_data/friends.yaml`; each entry has a name, an optional homepage URL, and the existing personal note. The page stays linked in the main navigation.
- **News:** add entries to `_data/news.yml` in reverse chronological order. The full news archive remains available.
- **Code:** the code index links to research repositories; update it alongside the corresponding publication record.
- **Appearance:** edit `assets/css/profile.css`; small enhancements live in `assets/js/profile.js`. All publications remain readable without JavaScript.

Publication records distinguish formal publication years from earlier preprints or online-first dates. Empty links and unverified bibliographic details are omitted. See [publication sources](docs/publication-sources.md) for the November 2026 update and its coverage limits. The existing PDF CV is retained as an archive and is not presented as the current employment record.

## Local Jekyll preview

Use Ruby and Bundler compatible with [GitHub Pages](https://pages.github.com/versions/):

```sh
bundle install
bundle exec jekyll serve
```

GitHub Pages builds the `master` branch. No account tokens, datasets, or private research materials belong in this repository.

## Credits

Layout inspiration: [Minimal Light](https://github.com/yaoyao-liu/minimal-light), CC0-1.0. The redesigned styles and components are maintained in this repository. Existing project content and original paper figures keep their author and publication attribution. Site source remains under the [MIT license](LICENSE).