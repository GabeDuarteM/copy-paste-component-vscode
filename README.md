# [copy-paste-component](https://github.com/GabrielDuarteM/copy-paste-component) for Visual Studio Code

[![Greenkeeper badge](https://badges.greenkeeper.io/GabrielDuarteM/copy-paste-component-vscode.svg)](https://greenkeeper.io/)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

An extension to create components, by copying and pasting existing ones. It integrates the [copy-paste-component](https://github.com/GabrielDuarteM/copy-paste-component) tool directly inside Visual Studio Code.

If you have the structure below:

```
src/components/App/App.js
src/components/App/App.test.js
src/components/App/App.stories.js
src/components/App/index.js
```

when you run the extension, it will create the following structure, replacing occurrences of the word `App` inside the files to `NewApp`:

```
src/components/NewApp/NewApp.js
src/components/NewApp/NewApp.test.js
src/components/NewApp/NewApp.stories.js
src/components/NewApp/index.js
```

## Usage

Just right click the component that you would like to copy and click `Copy and paste component`. After this, you will be prompted with a couple of questions about the new component, and then it will generate a structure that is the same as the one that the selected component uses, but it will change the filename to the one you provided.
It will also look inside the file for occurrences of the filename, and if it finds, it replaces with the one you provided.

So, given the following file:

### App.js

```js
import React from "react"

const App = () => <div>Hello World</div>

export default App
```

Becomes the following:

### NewApp.js

```js
import React from "react"

const NewApp = () => <div>Hello World</div>

export default NewApp
```

![Usage](https://i.imgur.com/dQI2Ijl.gif)

## For more information

* [copy-paste-component](https://github.com/GabrielDuarteM/copy-paste-component) A tool to create components, by copying and pasting existing ones.

## Change log

See [Change log](https://github.com/GabrielDuarteM/copy-paste-component-vscode/blob/master/CHANGELOG.md).

## License

MIT