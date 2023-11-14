import { useEffect, useState } from "react";
import "./complaints.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";

const Complaints = () => {
  const [data, setData] = useState([]);
  const [delUser, setDelUser] = useState("yes");
  const [currentpage, setcp] = useState(1);
  const [limit] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const [category, setCategory] = useState("All");
  useEffect(() => {
    getPaginatedUsers();
  }, [category, currentpage, delUser]);
  // getPaginatedUsers();

  const deleteUser = (id, name) => {
    setDelUser("no");
    if (window.confirm(`are you sure you want to delete ${name}'s complaint`)) {
      console.log("hlel0");
      fetch("http://localhost:5500/deleteUser", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userID: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
        })
        .catch((error) => {
          console.log("ERROR : ", error);
        });
    }
  };
  //   const handleFilter = async(category) => {
  //     try {
  //         let data = await fetch(
  //           `http://10.145.41.139:5500/filtered?page=${currentpage}&limit=${limit}&category=${category}`,
  //           {
  //             method: "GET",
  //           }.then(res => res.json())
  //         );
  //         setData(data);
  //         setPageCount(data.pageCount);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //   }
  const handlePageClick = async (e) => {
    console.log(e);
    setcp(e.selected + 1);
    try {
      let data = await fetch(
        `http://10.145.41.139:5500/paginated?page=${currentpage}&limit=${limit}&category=${category}`,
        {
          method: "GET",
        }.then((res) => res.json())
      );
      setData(data);
      setPageCount(data.pageCount);
    } catch (err) {
      console.log(err);
    }
  };

  function getPaginatedUsers() {
    setDelUser("yes");
    fetch(
      `http://10.145.41.139:5500/paginated?page=${currentpage}&limit=${limit}&category=${category}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //    console.log(data)
        setPageCount(data.pageCount);
        setData(data.result);
      });
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      ></link>

      <section id="complaint-section">
        <h1>Complaints</h1>
        <table id="com-table" className=" table table-bordered  table-striped">
          <thead className="thead-light">
            <tr className="table-row">
              <th scope="col">Name</th>
              <th scope="col">ROLL NO</th>
              <th scope="col">Room NO</th>
              <th scope="col">
                <span>Category </span>

                <select
                  onChange={(e) => {
                    setCategory(e.target.value);
                    console.log(category);
                  }}
                >
                  <option value="All">All</option>
                  <option value="Mess">Mess</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Ragging">Ragging</option>
                  <option value="Other">Other</option>
                </select>
              </th>
              <th scope="col">status</th>
              <th scope="col">Date</th>
              <th>Del</th>
            </tr>
          </thead>

          {data.map((i, id) => {
            return (
              <>
                <tbody className="table-body">
                  <tr className="table-content-row">
                    <td>{i.name}</td>
                    <td>{i.rollno}</td>
                    <td>{i.roomno}</td>
                    <td>{i.category}</td>
                    <td>{i.status}</td>
                    <td>{i.date}</td>
                    <td>
                      <FontAwesomeIcon
                        key={id}
                        icon={faTrash}
                        onClick={() => deleteUser(i._id, i.name)}
                      />
                    </td>
                    <td>
                      {" "}
                      <img src="../../../public/logo/img2.svg" alt="dropdown" />
                    </td>
                  </tr>
                </tbody>

                <tr className="complaint-para">
                  <td colSpan={6}>{i.description}</td>
                </tr>
              </>
            );
          })}
        </table>
      </section>
      <div className="paginate">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          // forcePage={currentpage}
        />
      </div>
    </>
  );
};
export default Complaints;
