import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";
import Contador from "./Components/Contador";
import { useEffect, useState } from "react";
import { futbolCharacter } from "./Data";


function App() {
  const [data, setdata] = useState([])

  const [count, setCount] = useState(0)

  const onClickIncrementar = () => {
    setcount((prevState) => prevState + 1)
  }

  const onClickDescrementar = () => {
    setcount((prevState) => (prevState > 0 ? prevState - 1 : 0))
  }

  const onClickReset = () => {
    setcount(0);
  }

  useEffect(() => {
    setdata(futbolCharacter)
  }, [futbolCharacter])

  return (
    <>
    <div >
        <div style={{ marginTop: "2rem" }}>
          <div className="row">
            {data.map((x) => (
              <div className="col" key={x.id}>
                <Card dataList={x} count={count} />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            padding: "2rem",
          }}
        >
          <Contador
            count={count}
            data={data}
            onClickIncrementar={onClickIncrementar}
            onClickDescrementar={onClickDescrementar}
            onClickReset={onClickReset}
          />
        </div>
      </div>
    </>
  )
}

export default App
