# groovyghost.in

![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/groovyghost/groovyghost.in/deploy.yml?style=for-the-badge)

## :space_invader: Tech Stack

- [Zola](https://www.getzola.org/) - Your one-stop static site engine
- [Github-Actions](https://github.com/features/actions) - Deployment Zola pages
- [Cloudflare Pages](https://pages.cloudflare.com/) - For Secure site serving and analytics.

## Project structure

```
PROJECT_ROOT
│   # Blog contents in markdown
├── content
│   # Sass files to be complied
├── scss
│   # Static images and js files
├── static
│   # Templates used to render site
|── templates
│   # Zola configuration file in TOML format
└── config.toml
```
