import Footer from "./component/Footer"
import Defination from "./component/Defination";
import './App.css';
import React, { useState, useEffect } from "react";
const App =()=> {
  const [word, setWord] = useState();
  const [mean, setMean] = useState([]);
  const [main, setMain] = useState([]);
  const [audio, setAudio] = useState();

  const dataApi = async () => {
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const dataJ = await data.json();
    setMean(dataJ);
    // console.log(dataJ);
    setMain(dataJ[0]);
    // console.log(dataJ[0]);
    const url = dataJ[0].phonetics[0].audio;
    setAudio(url);
  };
  useEffect(() => {
    dataApi();
  }, []);


  const Search = () => {
    dataApi();
    setWord("");
  };

  return (
    <>
      <div className="container-fluid "> 
        <div className="row">
          <div className="col-12 text-center fw-bold fs-1 p-3 bg-primary  bg-opacity-10 text-primary" >
              English Dictionary
            </div>
            <div className="form-floating bg-primary  bg-opacity-10 py-3 pb-5 d-flex justify-content-center">
              <input
                type="text"
                className="form-control-sm border-1 border-primary px-2 col-md-3 col-sm-4"
                placeholder="Type your word"
                id="floatingInput"
                input={word}
                onChange={(e)=>setWord(e.target.value)}
               
              />
              <button
                className="btn btn-primary text-light col-md-1 col-sm-2 mx-2"
                onClick={Search}
              >
               Search
              </button>
          </div>
      </div>       
      </div>
      {word === "" ? (
        <Defination mean={mean} main={main} audio={audio} />
      ) : (
        <div className="fs-4 text-capitalize text-center fw-light text-secondary extra mt-5" >
          type a word in the box
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
