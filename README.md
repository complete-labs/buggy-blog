Premium Account Details
```bash
Username: admin@gmail.com
Password: 123
```

To run use commands:
```bash
yarn install
yarn dev
```
——————————

# 1. We prioritize the premium paying user. 

It’s not fair to make someone who has paid to view the content wait an extra amount of time to view the page. So we load the Title, Author, & the image REGARDLESS of if you’re premium or not, this shows the paid user the page as soon as we can. Then once we confirm the cookie (which in production will be a more time consuming function reaching out to a database) we load the posts content.


# 2. It’s important to see that there’s a full article.

For a user who does not have a premium membership and is trying to view a premium article we do not want our site to look empty. So instead of taking them to a completely different page we show a blurry overlay, this makes them feel like they want to see more (encouraging sign ups via FOMO) and it also makes sure site does not look empty. It is important in this process that we also DO NOT load actual content from the post – the solution is to take the excerpt (which is already public) and make it the temporary body until the user signs up / logs in. So even if you are picking around in the code, just adding “display:none” to the overlay only shows you info that you’ve already seen.


# 3. The user has full control, and instant gratification.

I’ve incorporated the ability to log out when inside a premium blog post, this is to showcase how seamless the blog shifts states. After logging out the user is immediately blocked because of the way we use STATES to show/hide content. If someone is browsing and has their subscription expire they will immideatly lose access, or if someone is banned from the blog they will no longer see the posts. The goal being in the future to be able to have many profile properties attached that personalize the blog for the users in real time.

