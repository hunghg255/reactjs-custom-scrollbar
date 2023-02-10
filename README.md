# reactjs-custom-scrollbar

[![npm version](https://badge.fury.io/js/reactjs-custom-scrollbar.svg)](https://badge.fury.io/js/reactjs-custom-scrollbar) [![npm](https://img.shields.io/npm/dw/reactjs-custom-scrollbar.svg?logo=npm)](https://www.npmjs.com/package/reactjs-custom-scrollbar) [![npm](https://img.shields.io/bundlephobia/minzip/reactjs-custom-scrollbar)](https://www.npmjs.com/package/reactjs-custom-scrollbar)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

## Installation

[![NPM](https://nodei.co/npm/reactjs-custom-scrollbar.png?compact=true)](https://nodei.co/npm/reactjs-custom-scrollbar/)

#### To install the latest stable version:

```
npm install --save reactjs-custom-scrollbar
```

#### Basic usage:

```jsx
import React, { Component } from 'react';
import Sticky from 'reactjs-custom-scrollbar';

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const App = () => {
  return (
    <div>
      <Scrollbar style={{ height: '100px', width: '200px' }} autoHide>
        <div>
          {array.map(a => (
            <div
              key={a}
              style={{
                width: '100px',
                height: '100px',
                background: 'yellow',
                display: 'flex',
                flex: 'none',
              }}
            >
              {a}
            </div>
          ))}
        </div>
      </Scrollbar>
    </div>
  );
};
}
```
