# Project Name

> Overview Module 

## Related Projects

  - [Menu Module](https://github.com/fourcourses/menu_module)
  - [Sidebar Module](https://github.com/fourcourses/sidebar_module)
  - [Reviews Module](https://github.com/fourcourses/Reviews-module)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

### API Routes

| Route | Method |
| --- | --- |
| /api/restaurant/:rid | GET |
| /api/restaurant/:rid | POST |
| /api/restaurant/:rid | PATCH |
| /api/restaurant/:rid | DELETE |

Route handling may be found in the [server/index.js file](../master/server/index.js)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

