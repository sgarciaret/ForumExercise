import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/logo.png';

function CreatePostT(props){
    const [category, setCategory] = useState("Question");
    const [content, setContent] = useState("");
    const ref = useRef(null);
    const ref2 = useRef(null);
  
    const handleChangeCat = (event) => {
      setCategory(event.target.value)
    }

    const handleChangeContent = (event) => {
      setContent(event.target.value)
    }

    const styleBar = {
        backgroundColor: "#5D2B7E",
        width: "100%",
        height: "10vh"
      };

      let styleOculto = {
        display: "none"
      }

      let styleMostrar = {
        display: "block"
      }

      const navigate = useNavigate();

      const [title, setTitle] = useState("");

      useEffect(() => {
        const el2 = ref2.current;
        console.log(el2);
      }, []);

      const handleSubmit = (event) => {
        event.preventDefault();

        const p = { 
          "title": title,
          "threadfk": props.threadId
        };

        fetch("http://localhost:8080/controller/existTitle", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(p),
        }
        ).then(result => result.json()
        ).then( 
            data => { 
              if (data.title !== null) {
                alert("Titulo ya existe");
              } else {
                ref.current.style.display = 'block'    
                ref2.current.style.display = 'none'     
              }

            },
            error => {
              console.log(error)
            })
      }

      const handleSubmitForm = (event) => {
        event.preventDefault();

        const post = { 
          "title": title,
          "threadfk": props.threadId,
          "body": content,
          "category": category,
          "visibility": true
        };

        fetch("http://localhost:8080/controller/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post),
        }).then(
          window.location = `/thread`
        )
      }

      return(
        <div>
          <div id="divTitulo" ref={ref2} style={styleMostrar}>
            <div style={styleBar}>
            <img src={logo} className="logo"/>
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
          </div>
          
        <div style={styleOculto} id="divBody" ref={ref}>
          <div style={styleBar}>
            <Link to="/home" className="decolink"><h1>Forum</h1></Link>
          </div>

          <form
            onSubmit={handleSubmitForm}
            className="border border-gray border-4 rounded-3 p-5"
          >
            <div>
                <h2>{title}</h2>
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
        </div>
      </div>
      )

}

export default CreatePostT;