+++
title = "Learn Markdown"
date = "2021-10-10"
+++

For website/blog instead of writing pure HTML and uploading it to a server like a caveman i started using Markdown, a lightweight markup language for creating formatted text using a plain-text editor that is appealing to human readers in its source code form.

### Basic markdown syntax

```
# Start a heading with one hash

## Start a subheading with two hashes

Paragraphs are separated by empty lines.

**Bold text** is wrapped in double asterisks,

_italic_ in underscores,

`monospace` in backticks.

[A link](https://groovyghost.in/).

![An image](/avatar.jpeg)

    # Indented code block
    hello() { echo 'Hello'; }

A list of items:

- Each item is on its line
- Lines start with `-`

An ordered list:

1. The first item
1. The second item can start with `1.` too
1. Markdown handles the numbering for you.

```
To convert markdown to HTML you can use [lowdown](https://kristaps.bsd.lv/lowdown/), [pandoc](https://pandoc.org/) or with [original markdown.pl](https://daringfireball.net/projects/markdown/)

Credit to [markdownguide](https://www.markdownguide.org/basic-syntax)