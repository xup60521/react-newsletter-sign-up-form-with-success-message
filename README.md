
# **Frontend Mentor Challenge - Newsletter sign-up form with success message solution**

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv "https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv").

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
        - [framer-motion](#framer-motion)
        - [Email validation](#email-validation)
        - [Deploy to GitHub Pages using Bun](#deploy-to-github-pages-using-bun)
- [Resources](#resources)

## Overview

Users should be able to:

- Add their email and submit the form

- See a success message with their email after successfully submitting the form

- See form validation messages if:

   - The field is left empty

   - The email address is not formatted correctly

- View the optimal layout for the interface depending on their device's screen size

- See hover and focus states for all interactive elements on the page

Links:

- Github Repo: <https://github.com/xup60521/react-newsletter-sign-up-form-with-success-message>

- Website: <https://xup60521.github.io/react-newsletter-sign-up-form-with-success-message/>

```bash
# install dependencies
pnpm install
# start dev server
pnpm run dev
```

## My process

### Built with

- React (powered by vite)

- TailwindCSS

- framer-motion

### What I learned

#### framer-motion

I used framer-motion to animate the transition between the form page and the success page.

It was not my first time using this package, but I still ran into some minor challenges.

Framer-motion uses `key` to identify different components, and the `key` prop should be written outside of the functional component.

```tsx
// not good
const App = () => {
  return (
    <AnimatePresence>
      <Component1 />
      <Component2 />
    </AnimatePresence>
  )
}
const Component1 = () => (
  <div key="key1">{"..."}</div>
)
const Component2 = () => (
  <div key="key2">{"..."}</div>
)

// nice👍
const App = () => {
  return (
    <AnimatePresence>
      <Component1 key="key1" />
      <Component2 key="key2" />
    </AnimatePresence>
  )
}
// inside Component1 and Component2, 
// no `key` is needed.
const Component1 = () => <div>{"..."}</div>
const Component2 = () => <div>{"..."}</div>
```

#### Email validation

It's quite hard for me to manually write the email regex. So I asked Claude 3.5 Sonnet, it gave me the following regex.

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

Using `emailRegex.test()`, we can check whether the input email is valid or not.

#### Deploy to GitHub Pages using Bun

Previously when I used GitHub Actions to deploy to GitHub Pages, it always took several minutes.

Luckily, there are faster solutions. Bun is an all-in-one JavaScript toolkit known for its extreme speed, and we can use the official `setup-bun` to set up in the runner.

By replacing `setup-node` with `setup-bun` and changing `npm/yarn/pnpm` to `bun`, it not only just works, but is also so much faster.

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google font - <https://fonts.google.com>

- framer-motion docs - <https://www.framer.com/motion/>

- Bun docs - <https://bun.sh/guides/runtime/cicd>

