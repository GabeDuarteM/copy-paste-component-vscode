<h1 align="center" style="border-bottom: none;margin-bottom: 0;"><a href="https://github.com/GabrielDuarteM/copy-paste-component">copy-paste-component</a> for Visual Studio Code</h1>

<h4 align="center" style="margin-top: 0px;padding-bottom: 16px;border-bottom: 1px solid #eaecef;">
An extension for you to create new components, using the same structure of the ones you already have.
</h4>

<p align="center">
  <a href="https://travis-ci.org/GabrielDuarteM/copy-paste-component-vscode">
    <img src="https://img.shields.io/travis/GabrielDuarteM/copy-paste-component-vscode/master.svg" alt="Travis branch">
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="styled with prettier">
  </a>
</p>

![Usage](https://i.imgur.com/dQI2Ijl.gif)

# Motivation

Did you ever notice how boring and repetitive it is to create new components for your projects? You always end up copying and pasting existing ones and modifying their names, and that kind of repetitive task is something a machine should do, not me 😂.
That task can be sometimes not that slow when you have a simple component, but imagine a structure that demands `component` + `css` + `tests` + `index file` + [`storybook`](https://github.com/storybooks/storybook)

I've created this extension to speed up that process. You just right-click the component and click `Copy and paste component`. It will ask you to name your new component and a place to put it (it will try to guess, but you can modify it), and then BOOM 💥 💥 💥 you get a component's structure to work on, identical to the one you chose to copy, but with it's name changed to the new one (and not just on the filename, as you can see on the image above).

Imagine you have the structure below, and want to create a `NewApp` component:

```
src/components/App/App.js
src/components/App/App.css
src/components/App/App.test.js
src/components/App/App.stories.js
src/components/App/index.js
```

When you run the extension, it will create the following structure, replacing occurrences of the word `App` inside the files to `NewApp`:

```
src/components/NewApp/NewApp.js
src/components/NewApp/NewApp.css
src/components/NewApp/NewApp.test.js
src/components/NewApp/NewApp.stories.js
src/components/NewApp/index.js
```

And if `App.js` is the following file:

### App.js

```js
import React from "react"

const App = () => <div className="App-root">Hello World</div>

export default App
```

It will create the following file:

### NewApp.js

```js
import React from "react"

const NewApp = () => <div className="NewApp-root">Hello World</div>

export default NewApp
```

# Give it a try

On Visual Studio Code press `ctrl-p` and enter `ext install GabrielDuarteM.copy-paste-component-vscode`, or go to [vscode's marketplace](https://marketplace.visualstudio.com/items?itemName=GabrielDuarteM.copy-paste-component-vscode) and click `install`

# See also

* [copy-paste-component](https://github.com/GabrielDuarteM/copy-paste-component) A CLI tool to create components, by copying and pasting existing ones (the API used by this extension).

# Changelog

See [Changelog](https://github.com/GabrielDuarteM/copy-paste-component-vscode/blob/master/CHANGELOG.md).

# License

MIT
