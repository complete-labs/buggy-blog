# A statically generated blog example using Next.js, Markdown, and TypeScript

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/blog-starter-typescript)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript&project-name=blog-starter-typescript&repository-name=blog-starter-typescript)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example blog-starter-typescript blog-starter-typescript-app
# or
yarn create next-app --example blog-starter-typescript blog-starter-typescript-app
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

This blog-starter-typescript uses [Tailwind CSS](https://tailwindcss.com). To control the generated stylesheet's filesize, this example uses Tailwind CSS' v2.0 [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.

[Tailwind CSS v2.0 no longer supports Node.js 8 or 10](https://tailwindcss.com/docs/upgrading-to-v2#upgrade-to-node-js-12-13-or-higher). To build your CSS you'll need to ensure you are running Node.js 12.13.0 or higher in both your local and CI environments.

## Features

- [x] A [post's markdown metadata](https://github.com/polar-bear-labs/next.js/blob/canary/examples/blog-starter-typescript/_posts/preview.md?plain=1#L2) should be used to indicate whether it is a premium article.
- [x] All posts should be listed on the home page of the application, even if they are premium. There should be some small indicator as to whether or not the article is premium.
- [x] When a user clicks on or directly navigates to a premium article via link, they should be prompted to log in. If the user is already logged in, the article should be rendered as normal.
- [x] The login method need not be secure. You are welcome to hardcode a single username/password into the frontend. The logged-in state of a user should be managed via cookies.

## Login Credentials: please check

```bash
 Next Auth login credentials:
 username: admin
 password: password

 **/pages/api/auth/[...nextauth].ts** for implementation
```

## Next.js Blog Example with Markdown - 1 July 2023 - Watch Video

<a href="https://www.loom.com/share/386d94879de5441ea23587eb5be24fdb">

  <p>Next.js Blog Example with Markdown - 1 July 2023 - Watch Video</p>
  <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/386d94879de5441ea23587eb5be24fdb-with-play.gif">
  </a>
