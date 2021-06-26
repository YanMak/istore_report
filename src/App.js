import logo from './logo.svg';
import './App.css';

//crm api
import getERPdataForReports from './data/api';

// reactive components
import { useEffect, useState } from 'react';

//const axios = require('axios');

const App = () => {

  const [count, setCount] = useState(0);

  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  const renewData = async () => {
    setCount(count + 1);
    const res = await getERPdataForReports();
    setData(res);
    alert(res);
  }

  useEffect(async () => {
    const res = await getERPdataForReports(page);
    setData(res);
  }, [page]);

  const printTable = (data) => {
    //data ? data.map((val) => {return printElem(val)}) : null;
    
     
    let x = 
      <div class="soflex1">
    <div>
        <div>printTable Left 1</div>
        <div>Left 2</div>
        <div>Left 3</div>
    </div>
    <div>
        <div>Center 1</div>
        <div>Center 2</div>
        <div>Center 3</div>
    </div>
    <div>
        <div>Right 1</div>
        <div>Right 2</div>
        <div>printTable Right 3</div>
    </div>
  </div>;

  let y = 
  <div class="soflex1">
    <div>
        <div>printTable Left 1</div>
    </div>
    <div>
        <div>Center 1</div>
    </div>
    <div>
        <div>Right 1</div>
    </div>
  </div>;

    return y;
  }

  const printElem = (val) => {
    //const elem = JSON.stringify(val___)
    return (<div>{val.id}</div>)
  }

  return (
    <div className="App">
      <header>    
      </header>
      <body>
        <div>
          <p>Вы нажали {count} раз</p>
            <button onClick={() => renewData()}>
              Нажми на меня
            </button>
            {printTable(data)};
            {data ? data.map((val) => {return printElem(val)}) : null}
            {data ? data.map((val) => (<div>{val.id}</div>)) : null}
        </div>
    
        </body>
    </div>
  );
}

export default App;
