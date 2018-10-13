# Sauerkraut 🍲

[![npm version](https://badge.fury.io/js/%40devon-church%2Fsauerkraut.svg)](https://badge.fury.io/js/%40devon-church%2Fsauerkraut) ![build status](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiTUNhKzNPNWt4Z1AxR3ZYcDNwVm5raG9Yc2pkTHRCQ3MxODI1VUVqbHMxRUsyeXhITjJGUlVVWnNmSk16RWk2M01adHlaM0szdE9EbE1mNVFKd2hyL0hvPSIsIml2UGFyYW1ldGVyU3BlYyI6IkRoaFYyUWFWYmphZTk0cFQiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

An [AWS CodeBuild](https://aws.amazon.com/codebuild/) sequence to simultaneously create package _install_ hooks in [NPM](https://www.npmjs.com/), [GitHub](https://github.com/) and [AWS S3](https://aws.amazon.com/s3/).

## Pipeline ⚙️

![sauerkraut-infrastructure](https://user-images.githubusercontent.com/15273233/46903334-df34eb80-cf2f-11e8-8c2c-c6a3aee3d097.png)

## Usage 🎛️

### S3

Holds `.tgz` files associated to each released version of that package.

#### Usage

Install version `1.0.8` of the package.

```
npm install "https://s3.amazonaws.com/sauerkraut/1.0.8.tgz"
```

#### Versioning

Package versions are targeted via their associated **file names** e.g `1.0.8.tgz`

### Github

Holds the necessary [_raw_ assets](https://docs.npmjs.com/getting-started/packages#what-is-a-package-) required for NPM to verify the package.

- `package.json`
- `package.js` _(The CLI Hook)_
- `dist/*` _(The package content)_

#### Usage

Install version `1.0.8` of the package.

```
npm install "git://github.com/devonChurch/sauerkraut.git#v1.0.8"
```

#### Versioning

Package versions are targeted via their associated **tag names** e.g `#v1.0.8`

### NPM

Uses the traditional [NPM installation process](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) with this package residing under the `@devon-church` scope.

#### Usage

Install version `1.0.8` of the package.

```
npm install @devon-church/sauerkraut@1.0.8
```

### Versioning

Package versions can be targeted via NPM's [version selector syntax](https://docs.npmjs.com/cli/install#synopsis) e.g `@1.0.8`

## Note 💡

Unlike **NPM**, the package assets stored on **GitHub** and **AWS S3** are statically referenced. This means that you can not request a [dynamic server range](https://semver.npmjs.com/) as there is no registry implementing version reconciliation.
