import Footer from "./component/Footer";
import Defination from "./component/Defination";
import "./App.css";
import React, { useState } from "react";

const apiBase = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const App = () => {
  // useState第一个参数是初始值, 不需要用useEffect特意请求接口获取初始值
  const [word, setWord] = useState("");
  // mean, main, audio 这三个状态是一体的, 所以放在一起
  const [{ mean, main, audio }, setState] = useState({
    mean: [],
    main: {},
    audio: "",
  });

  const dataApi = async () => {
    const resp = await fetch(apiBase + word).then((r) => r.json());
    const url = resp[0].phonetics[0].audio;
    setState({
      mean: resp,
      main: resp[0],
      audio: url,
    });
  };

  const Search = () => {
    dataApi();
    setWord("");
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 text-center fw-bold fs-1 p-3 bg-primary  bg-opacity-10 text-primary">
            English Dictionary
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              Search();
            }}
          >
            <div className="form-floating bg-primary  bg-opacity-10 py-3 pb-5 d-flex justify-content-center">
              <input
                type="text"
                className="form-control-sm border-1 border-primary px-2 col-md-3 col-sm-4"
                placeholder="Type your word"
                id="floatingInput"
                input={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <button className="btn btn-primary text-light col-md-1 col-sm-2 mx-2">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {word === "" ? (
        <Defination mean={mean} main={main} audio={audio} />
      ) : (
        <div className="fs-4 text-capitalize text-center fw-light text-secondary extra mt-5">
          type a word in the box
        </div>
      )}
      <Footer />
    </>
  );
};

export default App;
