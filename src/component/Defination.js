import React from "react";
import Select from "./Select.js";

// import Synonyms from "./Synonym";
// import Antonyms from "./Antonyms";

const Defination = ({ mean, main, audio }) => {
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row ">
          <div className="col-12 text-center text-capitalize fs-1 fw-bold  mb-4 ">
            {main.word}
          </div>
          {audio ? (
            <audio
              controls
              className="color mx-auto text-center col-10 mb-3"
              src={audio}
            ></audio>
          ) : (
            <div className="color fs-3 text-center">Audio not found</div>
          )}
          {/* <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            meaning & definitions :
          </div> */}
          <div className="col-12 mx-3">
            <Select mean={mean} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Defination;
