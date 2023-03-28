import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";
import FullPageSpinner from "../../Components/loader/FullPageSpinner.tsx";

const Home = () => {
  interface userMap {
    firstname: string;
    lastname: string;
    image: string;
    phone: string;
    email: string;
    id: number;
    address: {
      city: string;
      country: string;
      street: string;
      streetName: string;
    };
    gender: string;
  }
  const [data, setData] = useState<Array<userMap>>([]);
  const [filter, setFilter] = useState("both");

  const [ready, setReady] = useState(false);
  const [total, setTotal] = useState("");
  const [no, setNo] = useState<number>(3);

  const HandleNum = () => {
    setNo((prev) => prev + 3);
  };
  const getData = (no) => {
    axios
      .get(`https://fakerapi.it/api/v1/persons?_quantity=${no}`)
      .then((res) => {
        setData(res.data.data);
        // console.log(res.data);
        setReady(true);
        setTotal(res.data.total);
        setNo(res.data.total + 3);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const getDataByGender = (no, gender) => {
    axios
      .get(
        `https://fakerapi.it/api/v1/persons?_quantity=${no}&_gender=${gender}`
      )
      .then((res) => {
        setData(res.data.data);
        // console.log(res.data);
        setReady(true);
        setTotal(res.data.total);
        setNo(res.data.total + 3);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const handleData = () => {
    HandleNum();
    if (filter === "both") {
      setReady(false);
      getData(no);
    } else {
      setReady(false);

      getDataByGender(no, filter);
    }
  };

  console.log(filter);
  console.log(no);
  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  
    console.log(e.target.value);
    setReady(false);
    setData([]);
    if (e.target.value === "both") {
      getData(3);
    } else {
      getDataByGender(3, e.target.value);
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
    getData(no);
  }, []);
  return (
    <>
      <FullPageSpinner show={!ready} />
      <div className="home">
        <div className="home-content">
          <div className="header">
            <div className="radio-btns-content">
              <div>
                <input
                  onChange={handleSelectChange}
                  type="radio"
                  value="female"
                 
                  name="gender"
                />
                <label htmlFor="">Female</label>
              </div>
              <div>
                <input
                  onChange={handleSelectChange}
                  type="radio"
                  value="male"
                  name="gender"
                />
                <label htmlFor="">Male</label>
              </div>
              <div>
                <input
                  onChange={handleSelectChange}
                  type="radio"
                  value="both"
                  defaultChecked
                  name="gender"
                />
                <label htmlFor="">Both</label>
              </div>
            </div>
 
            <div className="total-content">
              <button className="total">Total Results:</button>
              <span>{total}</span>
            </div>
          </div>
          {data&&data.map((data) => {
            return (
              <div className="card" key={data.id}>
                <img src={`${data.image}`} alt="user" />
                <div className="card-content">
                  <p className="name">{data.firstname + " " + data.lastname}</p>
                  <p>
                    address:
                    <span>
                      {data.address.city +
                        " " +
                        data.address.country +
                        " " +
                        data.address.street +
                        " " +
                        data.address.streetName}
                    </span>
                  </p>
                  <p>
                    mobile number : <span>{data.phone}</span>
                  </p>
                  <p>
                    email : <span> {data.email}</span>
                  </p>
                  <p>
                    gender : <span>{data.gender}</span>
                  </p>
                  <div></div>
                </div>
              </div>
            );
          })}
          {data.length > 0 ? (
            <button onClick={() => handleData(no)}>Loading more</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
