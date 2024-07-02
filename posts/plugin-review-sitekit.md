---
title: "Plugin Review: Google Site Kit"
date: "2021-09-10"
---
Google Site Kit is a tool built by Google that allows for simple and straightforward integration of the key (free) tools that they offer for web admins – Google Analytics, Google Tag Manager, Google Page Speed Insights, Google AdSense, Google Search Console, and Google Optimize (just in case that sentence didn’t mention Google enough).
---
> [Site Kit by Google – Analytics, Search Console, AdSense, Speed](https://web.archive.org/web/20231225160402/https://wordpress.org/plugins/google-site-kit/)

[Google Site Kit](https://web.archive.org/web/20231225160402/https://sitekit.withgoogle.com/), is a tool built by Google that allows for simple and straightforward integration of the key (free) tools that they offer for web admins – Google Analytics, Google Tag Manager, Google Page Speed Insights, Google AdSense, Google Search Console, and Google Optimize (just in case that sentence didn’t mention Google enough).

If you’ve worked with WordPress before, you’ll be aware that there’s no native integration of Analytics into your site. You have to either be willing to edit a theme or plugin code or install a plugin to link it. Platforms like Squarespace have some support directly integrated. There’s also varied support with themes allowing for header or footer code injection.

WordPress plugins spouting their support for integrating Google Analytics varies. Sometimes plugins will even rely on third parties to provide reporting integration to your site’s dashboard. I believe that where possible, your data should be kept as close to the source as possible. This is particularly important with the personal nature of browsing data.

I first heard of the Site Kit plugin via the [Google Analytics products Showcase page on LinkedIn](https://web.archive.org/web/20231225160402/https://www.linkedin.com/showcase/google-analytics/) towards the end of 2020 when it was first announced. I began using it early in the year as we launched new sites with Threesides.

You come to expect good design and user experience from software developed by the likes of Google, and I was pleased to see how they approached this in the plugin. O-Auth and secure login experiences are patchy at the best of times – however, it has been handled well.

Table of Contents

[Toggle](#)

- [Installation](#installation)
  - [Google Analytics](#google-analytics)
  - [Tag Manager](#tag-manager)

Installation
------------

[Site Kit is available from the WordPress Plugin Library](https://web.archive.org/web/20231225160402/https://wordpress.org/plugins/google-site-kit/) and is installed just like any other plugin.

![Set up Site Kit welcome screen prompting the user to sign in with Google to get started.](https://web.archive.org/web/20231225160402im_/https://mathiaseverson.com/wp-content/uploads/2021/09/image-1.png)

Plugin Welcome screen following install.

As you’d expect – the first step is to get signed in with Google. Whilst it doesn’t mention it at this stage, the following screens provide a clear explanation of what each feature does, and what steps will happen during the process.

![Screen showing Google Site Kit's process of verifying Search Console](https://web.archive.org/web/20231225160402im_/https://mathiaseverson.com/wp-content/uploads/2021/09/image-2-1024x464.png)

Search Console Verification Process

The first tool Google will automatically verify is Search Console, providing organic ranking information for your site. I appreciate the explanation and outline of the steps that happen during this, especially when jumping between authorising the various scopes that it needs access to.

![](https://web.archive.org/web/20231225160402im_/https://mathiaseverson.com/wp-content/uploads/2021/09/image-3.png)

Step-by-step actions are shown

Separating the process into at least three stages per tool can take longer to set up. However, this provides transparency around what is happening and the permissions being granted.

### Google Analytics

What stands out to me most is the consideration around tools that may already be set up on the website, or what can be implied from data within the tool. This is seen when connecting Google Analytics. Once you’ve authorised access, you’re prompted to select the relevant Account, Property and View.

![](https://web.archive.org/web/20231225160402im_/https://mathiaseverson.com/wp-content/uploads/2021/09/image-4-1024x524.png)

Your Google Analytics property will automatically be selected.

If you’ve set up your site URL in Analytics, this will be set as the default. This is particularly helpful if you’ve got access to a large number of Analytics accounts.

One draw-back here is that GA4 is somewhat forcefully included. You need to have the appropriate permissions to create this property otherwise you are unable to continue the setup.

A nice touch is that if Analytics is already installed you will be notified and prompted to remove your other tracking code or just use the reporting aspects.

### Tag Manager

Similar to the prompt for double Analytics tracking, there are some nice prompts that appear when connecting Tag Manager.

The first will show if you attempt to add a container with different tracking to the property you’ve selected when linking Analytics. This is helpful if you’re connecting the same profile. If you need to connect a Tag Manager with a different profile, you will need to install it manually outside of Site Kit.

![](https://web.archive.org/web/20231225160402im_/https://mathiaseverson.com/wp-content/uploads/2021/09/image-6-1024x446.png)

The second shows when you select a container with the same Analytics profile you’ve previously selected. This will just show your reporting integration and use your Analytics configuration in Tag Manager,

![](https://web.archive.org/web/20231225160402im_/https://mathiaseverson.com/wp-content/uploads/2021/09/image-5-1024x412.png)