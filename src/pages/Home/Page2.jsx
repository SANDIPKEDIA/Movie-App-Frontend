import React from "react";

const Page2 = () => {
  const dummyTitles = [
    "Top Gun",
    "Inception",
    "The Shawshank Redemption",
    "Pulp Fiction",
    "The Dark Knight",
  ];

  return (
    <div className="d-flex flex-column gap-3">
      <div className="card border-0 w-100">
        <div className="card-body">
          <div className="d-flex align-items-center gap-3 mb-4">
            <p className="h2 fw-bold mb-0">Movies by Tom</p>
            <span className="btn btn-icon rounded-circle btn-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </span>
          </div>
          <p className="h5 fw-bold mb-1">About this watchlist</p>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-3">
        {dummyTitles.map((title, index) => (
          <div
            className="card rounded-custom shadow-sm position-relative"
            key={index}
          >
            <span className="position-top-right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                className="bi bi-bookmark-check-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
                />
              </svg>
            </span>
            <img
              src="https://images.unsplash.com/photo-1718027808460-7069cf0ca9ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt={`Image for ${title}`}
            />
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-end gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-emoji-smile-fill text-success"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                </svg>
                {`${index + 1}/5`}
              </div>
              <h5 className="card-title w-100 nowrap text-truncate">{title}</h5>
              <p className="card-text text-secondary">2022</p>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
