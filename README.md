# rollup-typescript-estree-repro

This is a reproduction repository for the following error:

```
node_modules/@rollup/pluginutils/types/index.d.ts:2:26 - error TS2307: Cannot find module 'estree' or its corresponding type declarations.

2 import { BaseNode } from 'estree';
                           ~~~~~~~~

Found 1 error in node_modules/@rollup/pluginutils/types/index.d.ts:2
```

## Instructions

1. `npm install`
2. `npm test`

Look at `rollup.config.ts` for the relevant source code.
Basically no code is necessary, this already fails typechecks when installed.

## CI

You can also see the error in the failing GitHub Actions workflow:

[![CI](https://github.com/meyfa/rollup-typescript-estree-repro/actions/workflows/main.yml/badge.svg)](https://github.com/meyfa/rollup-typescript-estree-repro/actions/workflows/main.yml)
