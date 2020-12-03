# tslint-beautiful-imports

Currently there is only one rule, but it is beautiful.

## Examples:

### "blank-lines-after-imports": [true, 2]

**Good**
```
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


class myClass {
  //
}
```

**Bad**
```
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

class myClass {
  //
}
```

**Supports multiple import blocks**
```
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { getOrderStatusCodeLabel, getOrderUserTypeLabel } from '../core/helpers/order.helpers';
import { GeneralService } from '~app/shared/services/general.service';


class myClass {
  //
}
```


## How to include the rule

```
tslint.json

{
  ...,
  "extends": [
    ...,
    "tslint-beautiful-imports"
  ],
  rules: [
    ...,
    "blank-lines-after-imports": [true, 2],
  ]
}
```