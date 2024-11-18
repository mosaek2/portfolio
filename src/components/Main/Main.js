import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

export default function Main({ page, children }) {
  const navigate = useNavigate();
  const [circleTop, setCircleTop] = useState();
  const [defaultCircleTop, setDefaultCircleTop] = useState();

  useEffect(() => {
    if (page === "intro") {
      setDefaultCircleTop(72);
      setCircleTop(72);
    } else if (page === "profile") {
      setDefaultCircleTop(159);
      setCircleTop(159);
    } else if (page === "skills") {
      setDefaultCircleTop(246);
      setCircleTop(246);
    } else if (page === "works") {
      setDefaultCircleTop(333);
      setCircleTop(333);
    } else {
      setDefaultCircleTop(0);
      setCircleTop(0);
    }
  }, [page]);

  return (
    <div className="main">
      <div className="navigation">
        <div className="black-square" />
        <div
          className={
            circleTop === 72 || (page === "intro" && circleTop === undefined)
              ? "red-square"
              : "red-circle"
          }
          style={{ top: `${circleTop}px` }}
        />

        <div
          className="menu-list"
          onMouseLeave={() => setCircleTop(defaultCircleTop)}
        >
          <div
            className={page === "intro" ? "menu menu-selected" : "menu"}
            onMouseEnter={() => setCircleTop(72)}
            onClick={() => {
              navigate("/");
            }}
          >
            intro
          </div>

          <div
            className={page === "profile" ? "menu menu-selected" : "menu"}
            onMouseEnter={() => {
              setCircleTop(159);
            }}
            onClick={() => {
              navigate("/profile");
            }}
          >
            profile
          </div>

          <div
            className={page === "skills" ? "menu menu-selected" : "menu"}
            onMouseEnter={() => {
              setCircleTop(246);
            }}
            onClick={() => {
              navigate("/skills");
            }}
          >
            skills
          </div>

          <div
            className={page === "works" ? "menu menu-selected" : "menu"}
            onMouseEnter={() => {
              setCircleTop(333);
            }}
            onClick={() => {
              navigate("/works");
            }}
          >
            works
          </div>
        </div>
      </div>

      <div className="main-content">{children}</div>
    </div>
  );
}
