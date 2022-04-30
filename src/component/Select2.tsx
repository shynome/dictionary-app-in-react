import React from "react";
import type { Result, Mean } from "../api";

const Select: React.FC<{ mean: Result[] }> = ({ mean }) => {
  let coreInfo = mean.map((Val) => {
    return Val.meanings;
  });
  // console.log(coreInfo)
  // Tabs TITLE : part of word, like n. adj. v. adv
  let partOf: string[] = [];
  // 唯一索引用map数据结构更为合适
  let partContentMap: { [k: string]: Mean } = {};
  // map是用来生成数组的, 这里用forEach更符合本意
  coreInfo.forEach((extract) => {
    extract.forEach((x) => {
      if (typeof partContentMap[x.partOfSpeech] == "undefined") {
        partContentMap[x.partOfSpeech] = x;
      }
    });
  });
  partOf = Object.keys(partContentMap);

  // get the content of part
  // 使用 map 数据结构后代码更简单了
  function partMean(part: string) {
    return partContentMap[part];
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
          let mean = partMean(name);
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
                  {mean.definitions.map((element) => {
                    return (
                      <li className="list-group-item border-0 border-bottom">
                        {" "}
                        {element.definition}
                      </li>
                    );
                  })}
                </ul>
                <h1 className="text-start my-3 text-capitalize fs-6 fw-bold">
                  example
                </h1>
                <ul className="list-group ">
                  {mean.definitions.map((element) => {
                    return (
                      <li className="list-group-item border-0 border-bottom">
                        {" "}
                        {element.example}
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
                      {mean.antonyms.map((element) => {
                        return (
                          <li className="list-group-item border-0 border-bottom">
                            {" "}
                            {element.antonyms}
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
                      {mean.synonyms.map((element) => {
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
