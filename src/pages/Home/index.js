import { useContext, useEffect, useState } from "react";
import { AuthContext } from "context";
import "./Home.scss";

export function Home() {
  const { user, getJobs, jobs } = useContext(AuthContext);

  const [showBtns, setShowBtns] = useState(false);
  const [dbJobs, setDbJobs] = useState(jobs);

  const handleSearch = (e) =>
    setDbJobs(
      dbJobs.filter((job) =>
        job.positionName.toLowerCase().includes(e.target.value)
      )
  );

  useEffect(() => {
    setDbJobs(jobs);
  }, [jobs]);

  return (
    <div className="container">
      <div className="top-wrapper">
        <h1>Welcome</h1>
        <br />
        <h2>
          {user.firstName} {user.lastName}{" "}
        </h2>
      </div>

      <div className="middle-wrapper">
        <div className="search-bar-wrapper">
          <input
            type="text"
            placeholder="Start typing to filter jobs"
            className="search-bar"
            onChange={handleSearch}
          />
        </div>
        <div className="search-results-wrapper">
          {jobs &&
            jobs.map((job) => {
              return (
                <ul>
                  <li>{job.positionName} - {job.companyName} - {job.createdAt.substring(0, 10)}</li>
                  <hr />
                </ul>
              );
            })}
        </div>
        <div className="btns-wrapper profile">
          <button className={"btn-edit btns-profile " + (showBtns && "active")}>
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => setShowBtns(!showBtns)}
            className="btn-add btns-main"
          >
            {" "}
            ADD{" "}
          </button>
          <button
            className={"btn-delete btns-profile " + (showBtns && "active")}
          >
            {" "}
            Delete{" "}
          </button>
        </div>
      </div>

      <div className="bottom-wrapper">

      <article>
Your future in one place, take the <span>  Next Step. </span></article>
      </div>

      {/*  <code>{JSON.stringify(user)}</code> */}
    </div>
  );
}
