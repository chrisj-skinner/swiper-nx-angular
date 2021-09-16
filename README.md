# Swiper nx angular

Repo to reproduce error

Run `npm i`

Then from the NX vscode extension. Run `run-many` -> `test` -> `all` -> `true` and execute `nx run-many --target=test --all=true <`

View console for

```
SyntaxError: Cannot use import statement outside a module

      1 | import { Component, ChangeDetectionStrategy } from '@angular/core';
      2 | // import Swiper core and required modules
    > 3 | import SwiperCore, { Virtual } from 'swiper';
        | ^
      4 |
      5 | // install Swiper modules
      6 | SwiperCore.use([Virtual]);

      at Runtime.createScriptFromCode (../../../node_modules/jest-runtime/build/index.js:1350:14)
      at Object.<anonymous> (src/lib/test-app-home/test-app-home.component.ts:3:1)
```
