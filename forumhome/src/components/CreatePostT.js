import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreatePostT(){
    const styleBar = {
        backgroundColor: "#5D2B7E",
        width: "100%",
        height: "10vh"
      };

      const navigate = useNavigate();

      const [title, setTitle] = useState("");

      const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/CreatePostBody');
      }

      return(
        <>
        <div style={styleBar}>
        <Link to="/home" className="decolink"><h1>Forum</h1></Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="border border-gray border-4 rounded-3 p-5"
      >
        <div className="mb-3">
          <label className="form-label">Write the title of the new post</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Title..."
          />
        </div>

        <input
          type="submit"
          value="Next"
          className="btn btn-block btn-primary w-100 mt-2"
        />
      </form>
        </>
      )

}

export default CreatePostT;