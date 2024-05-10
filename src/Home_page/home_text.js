import "./home_text.css"

function Home_text() {
  return (
    <div className="body">
     <div className="body_text">
        <h1>Experience the height of fashon with our Exquisit Designer Pieces.</h1>
        <p>where style, sophistication, exclusivity is the forefront of our collection. Lorem ispsum dolor sit amet consectetur adipisicing elit. Repellant quaerat nostrum quia nam earum, libero, expedita, impedit delectus provident quo eveniet.</p>
        <button>Discover Our Products</button>
      </div>
        <div className="photoshoot-container">
          <span className="model-photo_wrapper boy">
            <img src="photo1.webp" className="model-photo" alt="model photograph" />
          </span>
          <span className="model-photo_wrapper boy">
            <img src="photo2.webp" className="model-photo" alt="model photograph" />
          </span>
          <span className="model-photo_wrapper female">
           <img src="photo3.webp"className="model-photo" alt="model photograph" />
          </span>
        </div>
      </div>
  )
}

export default Home_text;