import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CreatePostBody(){
    const styleBar = {
        backgroundColor: "#5D2B7E",
        width: "100%",
        height: "10vh"
      };

      const [category, setCategory] = useState("Question");
      const [content, setContent] = useState("");

      const handleChangeCat = (event) => {
        setCategory(event.target.value)
      }

      const handleChangeContent = (event) => {
        setContent(event.target.value)
      }

      const handleSubmit = (event) => {
        event.preventDefault();
      }

    return (
        <>
        <div style={styleBar}>
        <Link to="/home" className="decolink"><h1>Forum</h1></Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="border border-gray border-4 rounded-3 p-5"
      >
        <div>
            <h2>Title</h2>
        </div>
        <div className="mb-3">
        <select value={category} onChange={handleChangeCat}>
        <option value="Question">Question</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Clarification">Clarification</option>
      </select>
        </div>

        <div className="mb-3">
        <label className="form-label">Write the content of the new post</label>
        <textarea value={content} onChange={handleChangeContent} placeholder="Body of your post..."/>
        </div>

        <div className="mb-3">
            <input type="file" />
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

export default CreatePostBody;