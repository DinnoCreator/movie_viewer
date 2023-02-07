import classes from "../component/NewMovie.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewMovie = () => {
  // form data
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  // handle loading on submit
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //api call for sending the user data to the backend
      await axios.post('https://movie-viewer-api.onrender.com/feed', {title, image})
          .then(function (response) {
            
          })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className={` mt-5 ${classes.bod}`}>
        <h1>Movie viewer</h1>
        <h3>Movie Upload</h3>
        <div className="container">
          <form className="container"  onSubmit={onSubmitForm}>
            <div className="mb-3">
              <label htmlFor="labfname" className="form-label">
                Title
              </label>
              <input 
                type="text" 
                className="form-control"
                autoComplete="off" 
                id="labfname"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="lablname" className="form-label">
                Image
              </label>
              <input 
                type="text" 
                className="form-control"
                autoComplete="off" 
                id="lablname"
                value={image}
                required
                onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className="d-grid gap-2 ">
            <button className={`shadowB btn ${classes.login}`} type="submit">
              {loading ? (
                <>
                  <div
                  style={{ display: "inline-block" }} className="load"></div>
                </>
              ) : (
                <>Upload movie</>
              )}</button>
            </div>

            <hr />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewMovie;
