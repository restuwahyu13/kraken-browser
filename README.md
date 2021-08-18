# Kraken Browser

[![Build Status](https://app.travis-ci.com/restuwahyu13/kinode.svg?token=TJCjdtb3tZAkAUnGPRjB&branch=main)](https://app.travis-ci.com/restuwahyu13/kinode) [![Coverage Status](https://coveralls.io/repos/github/restuwahyu13/kraken-node/badge.svg?branch=main)](https://coveralls.io/github/restuwahyu13/kraken-node?branch=main) [![codebeat badge](https://codebeat.co/badges/2a94b9f3-f82c-45c3-9f8e-fb4b13d44812)](https://codebeat.co/projects/github-com-restuwahyu13-kraken-node-main) [![CodeFactor](https://www.codefactor.io/repository/github/restuwahyu13/kraken-node/badge)](https://www.codefactor.io/repository/github/restuwahyu13/kraken-node) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/dc11d2a4ebeb447f9fb67fc8d0479dab)](https://www.codacy.com/gh/restuwahyu13/kraken-node/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=restuwahyu13/kraken-node&amp;utm_campaign=Badge_Grade) ![node-current](https://img.shields.io/node/v/kinode?style=flat-square) ![npm](https://img.shields.io/npm/dm/kinode) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/restuwahyu13/kraken-node/blob/main/CONTRIBUTING.md)

**kibrow** is dependency injection to register module to global access, without the need to load module using `require` or `import` again in every file, then module can be accessed as a global with very easy and then only register modules to kraken config, which you often the most used in each every file, example module like `axios`, `lodash`, `moment` etc, for nodejs version check this [kinode](https://github.com/restuwahyu13/kraken-node).

- [Kraken Browser](#kraken-browser)
  - [Installation](#installation)
  - [Config](#config)
  - [Example Usage](#example-usage)
  - [Testing](#testing)
  - [Bugs](#bugs)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

```bash
$ npm install kibrow -S or yarn add kibrow -S
```

## Config

- #### Kraken config property

  + **name** for to calling module in each every file and default value is to undefined
  + **module** for to register module to global access and default value is to undefined
  + **inject** for to disabled module to global access, if value is set to false and default value is to true

- #### Example kraken config

  ```js
  import { krakenConfig } from 'kibrow'
  import axios from 'axios'
  import _ from 'lodash'

  krakenConfig({
    packages: [
      {
        name: '$axios',
        module: axios
      },
      {
        name: '$_',
        module: _
      }
    ]
  })
  ```

## Example Usage

For example usage and implementaion, check folder demo in this repository [here](https://github.com/restuwahyu13/kraken-browser/tree/main/demo)

## Testing

- Testing Via Local

  ```sh
  npm test or make test
  ```

- Testing Via Local And Build

  ```sh
  make build
  ```

- Testing Via Docker

  ```sh
  docker build -t kraken-browser or make dkb tag=kraken-browser
  ```

## Bugs

For information on bugs related to package libraries, please visit [here](https://github.com/restuwahyu13/kraken-browser/issues)

## Contributing

Want to make **kraken-browser** more perfect ? Let's contribute and follow the [contribution guide.](https://github.com/restuwahyu13/kraken-browser/blob/main/CONTRIBUTING.md)

## License

- [MIT License](https://github.com/restuwahyu13/kraken-browser/blob/main/LICENSE.md)

<p align="right" style="padding: 5px; border-radius: 100%; background-color: red; font-size: 2rem;">
  <b><a href="#kraken-browser">BACK TO TOP</a></b>
</p>
