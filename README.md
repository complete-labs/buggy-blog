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

# Premium Details

Premium Account
```bash
Username: admin@gmail.com
Password: 123
```

To run use commands:
```bash
yarn install
yarn dev
```

# 1. We prioritize the premium paying user. 

It’s not fair to make someone who has paid to view the content wait an extra amount of time to view the page. So we load the Title, Author, & the image REGARDLESS of if you’re premium or not, this shows the paid user the page as soon as we can. Then once we confirm the cookie (which in production will be a more time consuming function reaching out to a database) we load the posts content.


# 2. It’s important to see that there’s a full article.

For a user who does not have a premium membership and is trying to view a premium article we do not want our site to look empty. So instead of taking them to a completely different page we show a blurry overlay, this makes them feel like they want to see more (encouraging sign ups via FOMO) and it also makes sure site does not look empty. It is important in this process that we also DO NOT load actual content from the post – the solution is to take the excerpt (which is already public) and make it the temporary body until the user signs up / logs in. So even if you are picking around in the code, just adding “display:none” to the overlay only shows you info that you’ve already seen.


# 3. The user has full control, and instant gratification.

I’ve incorporated the ability to log out when inside a premium blog post, this is to showcase how seamless the blog shifts states. After logging out the user is immediately blocked because of the way we use STATES to show/hide content. If someone is browsing and has their subscription expire they will immideatly lose access, or if someone is banned from the blog they will no longer see the posts. The goal being in the future to be able to have many profile properties attached that personalize the blog for the users in real time.

