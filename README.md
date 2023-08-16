# #include Website 2023

## Getting started

### Initial setup

First, make sure you have the following installed:

- Visual Studio Code
- Node.js - v16.x.x
- npm - v8.x.x

Then, once you have `npm`, run the following command to install yarn if you don't already have it:

```bash
npm install --global yarn
```

ESLint allows us to keep our code consistent and adherent to a certain code style. It can also format our code on save in VSCode. To enable this (and please do), open the command palette in VSCode and open **Preferences: Open Workspace Settings (JSON)**. Now add the following settings into the JSON file:

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]
```

Now when you save a file, VSCode will format it to adhere to our ESLint configuration.

### Recommended VSCode extensions (all optional unless stated otherwise)

- Auto Rename Tag — useful for JSX
- ESLint — **required**
- Error Lens — **highly recommended**
- GitLens — see who edited any line of code while you're editing

## Running the codebase locally

Make sure you have all the necessary packages installed:

```bash
yarn # or yarn install
```

Then, you can run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn more about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
