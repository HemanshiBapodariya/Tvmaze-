import React, { useState, useEffect } from "react";
import Footer from "./footer";


function Show() {
    const [inputVal, setInputVal] = useState("");
    const [showData, setshowData] = useState([]);

    let dataUrl = "";
    if (inputVal.length > 0) {
        dataUrl = `https://api.tvmaze.com/search/shows?q=${inputVal}`;
    } 

    const getshowData = async () => {
        try {
            let respone = await fetch(dataUrl);
            let resData = await respone.json();
            setshowData(resData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getshowData();
    }, [inputVal]);
    // console.log(showData);
    return (
        <>
                    <div className="container1">
                            <input
                                type="text"
                                value={inputVal}
                                onChange={(e) => setInputVal(e.target.value)}
                                className="form-control"
                                placeholder="Search by Show name...."
                            />
                </div>

                    <div className="row">
                        {showData.map((element) => {
                            return (
                            //   <div className="col-md-3 mb-3">
                                <div className="card">
                                  <a href={element.show.url} target="_blank">
                                  {element.show.image ? (
                                    <img
                                      src={element.show.image.medium}
                                        style={{
                                        width: "255px",
                                        height: "325px",margin:" 0px 0px 0px 50px"
                                        }}
                                      alt={
                                        element.show.name != null
                                          ? element.show.name
                                          : "Not found"
                                      }
                                    />
                                  ) : (
                                    <div
                                      className="poster"
                                      style={{ height: "325px" }}
                                    >
                                      <img
                                        src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                                        style={{
                                        width: "270px",
                                        height: "325px",margin:" 0px 0px 20px 50px"
                                        }}
                                        alt = {element.show.name}
                                      />
                                    </div>
                                  )}
                                  </a>
                                  <div className="card-body">
                                    <span style={{margin:" 20px 0px 20px 50px"}}>
                                      <i
                                        class="fa fa-star text-success"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      {element.show.rating.average}
                                    </span>
                                  </div>

                                  <h5 className="text-danger text-center" style={{margin:" 20px 0px 20px 50px"}}>
                                    {element.show.name}
                                  </h5>
                                </div>
                            //   </div>
                            );
                        })}
                    </div>
                    {
                    showData.length ?  <Footer /> : ""
                    }
        </>
    );
}

export default Show;





