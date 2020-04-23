import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="style_h1">WHY THIS IS AWESOME</h1>
      <hr className="style_hr" />
      <p className="style_p">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

      <div className="my-flex-container">

        <div className="style_div" >
          <img className="style_img" src="./img/lampochka.jpg" />
          <h3 className="style_h">Thoughtful Desing</h3>
          <p className="style_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reprehenderit autem ad quia dolore fugiat! Cumque possimus magni aliquid quibusdam reiciendis. Laboriosam libero vel cum nulla omnis unde repellat ad.</p>
        </div>

        <div className="style_div" >
          <img className="style_img" src="./img/klava.jpg" />
          <h3 className="style_h">Well Crafted</h3>
          <p className="style_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odio ducimus autem a quae libero reprehenderit repudiandae quidem, unde, error esse nemo. Exercitationem odio reprehenderit cupiditate voluptates saepe facilis suscipit.</p>
        </div>

        <div className="style_div" >
          <img className="style_img" src="./img/molnija.jpg" />
          <h3 className="style_h">Easy to Customize</h3>
          <p className="style_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet, nostrum aliquid explicabo aspernatur veniam at tempora quisquam ex corrupti commodi excepturi ea, sit reiciendis consequatur, fuga iste mollitia. Maiores!</p>
        </div>

      </div>

    </div>
  );
}

export default App;
