import React, { useState, useEffect } from "react";
import Footer from "./footer";

function Actor() {
  const [inputVal, setInputVal] = useState("");
  const [actorsData, setActorsData] = useState([]);


//   const handleActorInput = (e) => {
//     setInputVal(e.target.value);
//   }


  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/people?q=${inputVal}`;
  } 
  const getActorsData = async () => {
    try {
      let respone = await fetch(dataUrl);
      let resData = await respone.json();
      setActorsData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getActorsData();
  }, [inputVal]);
  // console.log(actorsData);
  return (
    <>
        <div className="container1">
              <input type="text"  value={inputVal} className="form-control"
                onChange={(e) => setInputVal(e.target.value)}  placeholder="Search by Actors name...."  />
        </div>

          <div className="row">
            {actorsData.map((element) => {
              return (
                  <div className="card">
                    <a href={element.person.url} target="-">
                    {element.person.image ? (
                      <img
                        src={element.person.image.medium}
                        className="poster"
                        style={{ width: "255px", height: "325px" ,margin:"30px 0px -70px 50px" }}
                        alt={
                          element.person.name !== null
                            ? element.person.name 
                            : "Not found"
                        } 
                      />
                    ) :
                    
                    (
                        // poster no available
                      <div className="poster" style={{ height: "325px" ,margin:" 40px 0px -70px 50px" }}>
                        <img src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                          style={{ width: "250px", height: "325px" }} alt = "Not Found" />
                      </div>
                    )}

                    </a>

                    {/* poster name */}
                    <div className="card-body">
                      <p
                        className="card-text overflow-hidden"
                        style={{ height: "90px" ,margin:" 0px 0px 0px 50px" }}>
                        {/* lored sdfhsadfh fsdhhasff hsfdih */}
                      </p>
                    </div>
                    <h4  style={{margin:" -20px 0px 0px 50px"}}>  {element.person.name} </h4>
                   
            </div>
              ) 
            }) }
          </div>
          {
        actorsData.length ?  <Footer /> : ""
      }
    </>

  );
}

export default Actor;


