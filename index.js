const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="person-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile"
      />
      <h1 className="name">Kiran V</h1>
      <p className="congo-msg">
        Vishnu Institute of Computer Education and Technology
        <br />
        Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-logo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
