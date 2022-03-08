import React from "react";
import PropTypes from "prop-types";

function App() {
  return (
    <div>
      <h1>Hello World, React Test</h1>
      {foodList.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
      {foodList.map(
        function (dish) {
          return (<Food key={dish.id} name={dish.name} picture={dish.image}/>);
        }
      )}
      {foodList.map(renderFood)}
    </div>
  );
}

function Food({name, picture, rating}) {
  return (
      <div>
          <h2>I like {name}</h2>
          <h3>{rating}/5.0</h3>
          <img src = {picture} alt = {name} width = "200"/>
      </div>
  )
}

function renderFood(dish) {
  return (<Food name={dish.name} picture={dish.image}/>);
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const renderFood = dish => <Food key={dish.id} name={dish.name} picture={dish.image}/>;

const foodList = [
  {
    id: 1,
    name: "Apple",
    image: "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=",
    rating: 5,
  },
  {
    id: 2,
    name: "Orange",
    image: "http://barthfruit.ch/custom/images/contentBilder/big/orange.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Banana",
    image: "https://www.collinsdictionary.com/images/full/banana_64728013.jpg",
    rating: 3.5
  }
];

export default App;