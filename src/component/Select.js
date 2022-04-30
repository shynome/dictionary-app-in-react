import React from "react";

const Select = ({ mean }) => {
  let coreInfo = mean.map((Val) => {
    return Val.meanings;
  });
  // console.log(coreInfo)
  // Tabs TITLE : part of word, like n. adj. v. adv
  let partOf = [];
  let partContent = [];
  coreInfo.map((extract) => {
    extract.map((x) => {
      let item = {};
      item.part = x.partOfSpeech;
      item.def = x.definitions;
      item.anton = x.antonyms;
      item.synon = x.synonyms;
      partContent.push(item);

      if (partOf.includes(x.partOfSpeech) == false) {
        partOf.push(x.partOfSpeech);
      }
    });
  });
  // get the content of part
  console.log(partContent);
  function partMean(part) {
    let means = [];
    let examples = [];
    let antonyms = [];
    let synonyms = [];
    partContent.map((x) => {
      if (x.part == part) {
        antonyms = x.anton;
        synonyms = x.synon;
        for (let index = 0; index < x.def.length; index++) {
          if (x.def[index].example != undefined) {
            const element = x.def[index].example;
            examples.push(element);
          }
          const element = x.def[index].definition;
          means.push(element);
        }
      }
    });
    return [means, examples, antonyms, synonyms];
  }

  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {partOf.map((name) => {
          return (
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id={name + "-tab"}
                data-bs-toggle="tab"
                data-bs-target={"#" + name}
                type="button"
                role="tab"
                aria-controls={name}
                aria-selected="true"
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="tab-content mx-3" id="myTabContent">
        {partOf.map((name) => {
          return (
            <div
              className="tab-pane fade show mb-5"
              id={name}
              role="tabpanel"
              aria-labelledby={name + "-tab"}
            >
              <div className="fw-normal">
                <h1 className="text-start my-3 text-capitalize fs-6 fw-bold">
                  Meaning & Definitions
                </h1>
                <ul className="list-group ">
                  {partMean(name)[0].map((element) => {
                    return (
                      <li className="list-group-item border-0 border-bottom">
                        {" "}
                        {element}
                      </li>
                    );
                  })}
                </ul>
                <h1 className="text-start my-3 text-capitalize fs-6 fw-bold">
                  example
                </h1>
                <ul className="list-group ">
                  {partMean(name)[1].map((element) => {
                    return (
                      <li className="list-group-item border-0 border-bottom">
                        {" "}
                        {element}
                      </li>
                    );
                  })}
                </ul>
                <div className="row">
                  <div className="col">
                    <h1 className="text-start my-3 text-capitalize fs-6 fw-bold">
                      antonyms
                    </h1>
                    <ul className="list-group ">
                      {partMean(name)[2].map((element) => {
                        return (
                          <li className="list-group-item border-0 border-bottom">
                            {" "}
                            {element}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="col">
                    <h1 className="text-start my-3 text-capitalize fs-6 fw-bold">
                      Synonyms
                    </h1>
                    <ul className="list-group ">
                      {partMean(name)[3].map((element) => {
                        return (
                          <li className="list-group-item border-0 border-bottom">
                            {" "}
                            {element}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Select;
