import { useState } from "react";
import data from "./data";
import "./Accordian.css";

export default function Accordian() {
  const [state, stetstate] = useState(null);

  const [emultiple, setemultiple] = useState(false);

  const [multiple, setmultiple] = useState([]);

  function clickfun(cid) {
    stetstate(cid === state ? null : cid);
  }

  function handlemultiselection(cid) {
    let cpymultiple = [...multiple];

    const fcurrentid = cpymultiple.indexOf(cid);

    if (fcurrentid === -1) cpymultiple.push(cid);
    else cpymultiple.splice(fcurrentid, 1);

    setmultiple(cpymultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setemultiple(!emultiple)}>
        Enable Multiselection
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((items) => (
            <div className="item">
              <div
                onClick={
                  emultiple
                    ? () => handlemultiselection(items.index)
                    : () => clickfun(items.index)
                }
                className="title"
              >
                <h1>{items.title}</h1>

                <span>+</span>
              </div>

              {emultiple
                ? multiple.indexOf(items.index) !== -1 && (
                    <div className="content">{items.content}</div>
                  )
                : state === items.index && (
                    <div className="content">
                      <h3>{items.content}</h3>
                    </div>
                  )}

              {/* // {state === items.index ? (
  
                //   <div className="content">
  
                //     <h3>{items.content}</h3>
  
                //   </div>
  
                // ) : null} */}
            </div>
          ))
        ) : (
          <div>kuch nahi bhai</div>
        )}
      </div>
    </div>
  );
}
