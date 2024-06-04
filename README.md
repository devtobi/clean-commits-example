[![Last commit][commit-shield]][commit-url]

[![Open issues][issues-shield]][issues-url]
[![Open pull requests][pr-shield]][pr-url]

[![License][license-shield]][license-url]

<br />
<p align="center">
  <h3 align="center">clean-commits-example</h3>

  <p align="center">
    This is a example repository on how to do clean commits and force conventions like <a href="https://www.conventionalcommits.org/en/v1.0.0/">Conventional Commits</a> or <a href="https://gitmoji.dev/specification">Gitmoji</a>
    <br />
    <br />
    <a href="https://github.com/devtobi/clean-commits-example/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/devtobi/clean-commits-example/issues/new/choose">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Authors](#authors)
- [License](#license)

## About The Project

This little example repository utilizes different tools to force developers to use a convention for commit messages. This is especially useful when working with tools for automated releases and versioning like [semantic-release](https://github.com/semantic-release/semantic-release) or [release-it](https://github.com/release-it/release-it). It forces the developer to better think about the purpose and effects of the commits.

As a bonus, this repository also shows how to enforce running of formatters of linters (or even unit tests) before commitin by using Git Hooks. This can be another 'security' mechanism for good code on top of the mechanisms inside CI/CD pipelines and will lead to fewer unnecessary pipeline runs (and save money).

### Built With

- [husky](https://github.com/typicode/husky) (to easily work with git hooks)
- [commitlint](https://github.com/conventional-changelog/commitlint) (to check commit messages for compliance to chosen convention)
- [commitizen](https://github.com/commitizen/cz-cli) (to help write commit messages as defined in the chosen convention)
- [lint-staged](https://github.com/lint-staged/lint-staged) (to automatically lint staged files when commiting)
- [prettier](https://github.com/prettier/prettier) (as an example formatter, could be anything)
- [eslint](https://github.com/eslint/eslint) (as an example linter, could be anything)

Furthermore:

- [@commitlint/config-conventional](@commitlint/config-conventional) (as a example convention to use for commit messages, in my opinion also the best)
- [@commitlint/cz-commitlint](https://www.npmjs.com/package/@commitlint/cz-commitlint) (to integrate commitlint configuration with commitizen)

## Getting Started

To try out the mechanisms for yourself, you can use this repository as a 'playground' locally on your computer.

To get a local copy up and running follow these simple steps.

### Prerequisites

I assume you have a current version of [git](https://git-scm.com) running on your system.

Because the tools heavily rely on Node you need to have a up-to-date (LTS) version of [Node](https://nodejs.org/en) installed on your system.

The project manages its dependencies via [bun](https://bun.sh) (in my opinion the better npm, never went back). You need to have `bun` installed on your system if you want this repository to work out-of-the-box.

**Tip**: If you (for some reason) don't want or can't use `bun`, see step 2 in installation below.

### Installation

1. Clone the repo:

   ```sh
   git clone https://github.com/devtobi/clean-commits-example.git
   ```

2. (**Optional**): Switch to `npm` (if you don't have `bun`):

   - Replace hook call inside `.husky` directory to use `npm` instead of `bun`
   - Remove `bun.lockb` from the file system

3. Install dependencies:

   - bun: `bun install` or
   - npm: `npm install`

4. Initialize the git hooks via `husky`:

   - bun: `bun run prepare` or
   - npm: `npm run prepare`

5. You are ready to go and checkout the features setup in this repository! Congratulations!

## Usage

Just try changing any file and create a commit with the git-cli via `git commit -m "mymessage"`. This project uses conventional commit, so your commit must be in the format `type(scope): description`.
Try breaking the scheme and check the failing commit.

**Tip**: The used convention by `commitlint` is defined in `commitlint.config.mjs`. You can experiment with other conventions or even extend with your own specific needs by providing custom rules.

If you need help writing your commit just run `bun run commit` or `git commit` and an interactive CLI will pop-up that helps you writing your commit message.

To test running formatters and linters, e.g. put a invalid change for a JavaScript file (e.g. `commitlint.config.mjs`) in your staging area and try to commit it. You will see the linter will complain and your commit will not be done.
This behaviour is defined in the `.lintstagedrc.json` file, where you can set which tools to execute for specific file patterns.

For more examples, please visit the documentation of the tools.

<!-- AUTHORS -->

## Authors

- **Tobias Stadler** - [devtobi](https://github.com/devtobi)

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE][license-url] for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-shield]: https://img.shields.io/github/issues-raw/devtobi/clean-commits-example?style=for-the-badge&logo=github
[issues-url]: https://github.com/devtobi/clean-commits-example/issues?q=is%3Aopen+is%3Aissue+
[pr-shield]: https://img.shields.io/github/issues-pr-raw/devtobi/clean-commits-example?style=for-the-badge&logo=github&label=Pull%20Requests
[pr-url]: https://github.com/devtobi/clean-commits-example/pulls?q=is%3Apr+is%3Aopen
[license-shield]: https://img.shields.io/github/license/devtobi/clean-commits-example.svg?style=for-the-badge&logo=github
[license-url]: https://github.com/devtobi/clean-commits-example/blob/main/LICENSE
[commit-shield]: https://img.shields.io/github/last-commit/devtobi/clean-commits-example?style=for-the-badge&logo=github
[commit-url]: https://github.com/devtobi/clean-commits-example/commit/main
