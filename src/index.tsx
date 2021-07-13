import ReactDom from 'react-dom';
import { useState } from 'react';

import 'bulmaswatch/superhero/bulmaswatch.min.css';

import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundle from './bundler';

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        onChange={(value) => setInput(value)}
        initialValue="const a = 1;"
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
