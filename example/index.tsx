import 'react-app-polyfill/ie11';
import * as React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';

import Scrollbar from '../.';
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

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
