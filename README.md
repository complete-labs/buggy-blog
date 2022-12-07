# Paywall feature for Complete Blogs :sparkles:

This is a feature update for Complete Blogs that creates a paywall for premium articles. Articles that are labelled as "Premium 🔒" will not be seen by users until they have logged in. The blurb for Premium articles will also be hidden by users who are not logged in to a premium account.

![Image of Paywall Feature](https://i.postimg.cc/6pWG4Bwf/Screen-Shot-2022-12-07-at-11-48-26-AM.png)

## Changes Made :hammer:

######  The changes made in this fork are as follows: 
- Text under premium articles that read `Premium 🔒` if an article is premium and you are not logged in
- A blurb feature that detects if an article is Premium and you are not logged in, and displays: `This content is only available to premium subscribers`
- A login page that appears if you click on a premium article but are not yet logged in 
- A login/signout button that appear on the top left of the page inside articles
- A message that says "Signed in as <your email>"

I am using NextAuth as my authentication for this project. This is an open source project by Next.js which you can use as an authenticator.

My strategy with this project was to use the least amount of code to get the project done. As a result, this is why I decided to use NextAuth as it is an extendible third party library which you can tie in with Github, Google, etc... and would work well in a big project.
  
## How to use

To run this program, clone this repository

```git clone https://github.com/jenndryden/blog-paywall```

Next, enter the folder 

```cd blog-paywall```

Install the dependencies 

```yarn install```

To run the dev environment

```yarn dev```

# Notes

This project uses [Gitmojis](https://gitmoji.dev/)! 
