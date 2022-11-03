---
title: Extended Markdown Post
publishedAt: 2 Nov 2022
slug: a-different-slug
description: You can add a description using the YAML frontmatter as well
categories:
  - YAML
  - Markdown 
---

<!-- Look below at the TOC section for more info! -->
#### Table of Contents

Posts can also override default properties with YAML frontmatter. It is recommended to override `slug`, `title`, and `publishedAt` so that your post can have more fitting properties.

You can also add a short description that will be shown before the full post.

## Standard Markdown
 Since all posts are written in markdown and rendered statically as HTML at build time; we have access to the rich text feature of markdown. For example we can get all the usual markdown features like **bold**, and *italics* as well as:

* Bullet
* Points

and also:

1. Numbered
2. Lists

> Blockquotes

[External Links](https://example.com) automatically open in a new tab, unlike [Internal Links](/) which use the SvelteKit clientside router.

Other standard markdown features like images are also included. [Read the post on images to learn more](/posts/images).

## Extensions
This project uses [`remark`](https://github.com/remarkjs) to parse markdown and so there are a handful of useful extensions included to add even more functionality.

### TOC
A TOC or table of contents can be added by simply adding the heading `Table of Contents` anywhere. It will populate the list of contents with headings that come after the Table of Contents. See the table of contents at the top of the post for an example.

### Emphasis
Standard markdown does not have a way to highlight/mark or underline text. With this extended renderer you can do the following:

==highlight==

### GFM
GFM or [Github Flavoured Markdown](https://github.github.com/gfm/) adds:

#### Autolink literals

www.example.com, https://example.com, and contact@example.com.

#### Footnote

A note[^1]

[^1]: Big note.

#### Strikethrough

~one~ or ~~two~~ tildes.

#### Table

| Item         | Price | # In stock |
|--------------|:-----:|-----------:|
| Apples       |  1.99 |        739 |
| Bananas      |  1.89 |          6 |


#### Tasklist

* [ ] to do
* [x] done

### OEmbed
This automatically converts URLs in your markdown to the embedded version of those URLs. Its useful for adding in youtube videos into your content for example. [Learn more at oembed.com](https://oembed.com/).

https://www.youtube.com/watch?v=DTIZikaOTDE

### Syntax Highlighting
Using Prism.js (and refractor) for highlighting and [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus) to add a bit more functionality. You can specify a language at the begining of a code block, the list of supported languages is [here](https://github.com/wooorm/refractor#syntaxes).

```python
def my_function():
  print("Hello from a function") 
```
You can also add properties to highlight certain lines and show line numbers.

```js {4} showLineNumbers
const hello = (name) => `Hi, ${name}!`;

// The following line will be highlighted
hello("World")
```

It even supports diffs, by adding the `diff-` prefix before the language!

```diff-ts
const add = (a: number, b: number) => {
- return a - b
+ return a + b
}
```

### Emojis
You can insert emojis using their shortcodes in this format `:emoji:`. The full list of emojis is [here](https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json).

This can be combined with other standard markdown features to 'hack' together even more functionality, for example see below.

> :warning: **Warning:** Do not push the big red button.

> :memo: **Note:** Sunrises are beautiful.

> :bulb: **Tip:** Remember to appreciate the little things in life.