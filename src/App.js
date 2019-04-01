import React, {
  Component
} from "react";
//import DrinkInfo from "./DrinkComponent/DrinkInfo";
import Navbar from "./navBar/Navbar";
//import Test from "./test"
import UserInfo from "./UserComponent/UserInfo";

import "./App.css";
import DrinkButton from "./DrinkComponent/DrinkButton";
import {
  Button,
  Icon,
  Row
} from "react-materialize";

const PRODUCTS = [{
    category: "soft drink",
    id: "0",
    quantity: 0,
    name: "Coke",
    size: [{
        size: "35cl",
        price: "120",
        crate: "35cl-Crate",
        cprice: "1000"
      },
      {
        size: "50cl",
        price: "150",
        crate: "50cl-Crate",
        cprice: "15000"
      }
    ],
    description: "about drink"
  },
  {
    category: "soft drink",
    id: "1",
    quantity: 0,
    name: "Fanta",
    size: [{
        size: "35cl",
        price: "120",
        crate: "35cl-Crate",
        cprice: "1200"
      },
      {
        size: "50cl",
        price: "150",
        crate: "50cl-Crate",
        cprice: "1500"
      }
    ],
    description: "about drink"
  },
  {
    category: "soft drink",
    id: "2",
    quantity: 0,
    name: "Sprite",
    size: [{
        size: "35cl",
        price: "120",
        crate: "35cl-Crate",
        cprice: "1200"
      },
      {
        size: "50cl",
        price: "150",
        crate: "50cl-Crate",
        cprice: "1500"
      }
    ],
    description: "about drink"
  },
  {
    category: "soft drink",
    id: "3",
    quantity: 0,
    name: "Pepsi",
    size: [{
        size: "35cl",
        price: "120",
        crate: "35cl-Crate",
        cprice: "1200"
      },
      {
        size: "50cl",
        price: "150",
        crate: "50cl-Crate",
        cprice: "1500"
      }
    ],
    description: "about drink"
  },
  {
    category: "soft drink",
    id: "4",
    quantity: 0,
    name: "RC",
    size: [{
        size: "35cl",
        price: "120",
        crate: "35cl-Crate",
        cprice: "1200"
      },
      {
        size: "50cl",
        price: "150",
        crate: "50cl-Crate",
        cprice: "1500"
      }
    ],
    description: "about drink"
  },
  {
    category: "soft drink",
    id: "5",
    quantity: 0,
    name: "Limca",
    size: [{
        size: "35cl",
        price: "120",
        crate: "35cl-Crate",
        cprice: "1200"
      },
      {
        size: "50cl",
        price: "150",
        crate: "50cl-Crate",
        cprice: "1500"
      }
    ],
    description: "about drink"
  },
  {
    category: "soft drink",
    id: "6",
    quantity: 0,
    name: "Lacasara",
    size: [{
        size: "35cl",
        price: "120",
        crate: "35cl-Crate",
        cprice: "1200"
      },
      {
        size: "50cl",
        price: "150",
        crate: "50cl-Crate",
        cprice: "1500"
      }
    ],
    description: "about drink"
  },
  {
    category: "beer",
    id: "7",
    quantity: 0,
    name: "Star",
    size: [{
      size: "33cl",
      price: "120",
      crate: "33cl-Crate",
      cprice: "1200"
    }],
    description: "about drink"
  },
  {
    category: "beer",
    id: "8",
    quantity: 0,
    name: "Heineken",
    size: [{
      size: "33cl",
      price: "120",
      crate: "33cl-Crate",
      cprice: "1200"
    }],
    description: "about drink"
  },
  {
    category: "beer",
    id: "9",
    quantity: 0,
    name: "Hero",
    size: [{
      size: "33cl",
      price: "120",
      crate: "33cl-Crate",
      cprice: "1200"
    }],
    description: "about drink"
  },
  {
    category: "beer",
    id: "10",
    quantity: 0,
    name: "Guinness",
    size: [{
      size: "33cl",
      price: "120",
      crate: "33cl-Crate",
      cprice: "1200"
    }],
    description: "about drink"
  },
  {
    category: "water",
    id: "11",
    quantity: 0,
    name: "Eva",
    size: [{
        size: "50ml",
        price: "100",
        crate: "50ml-Crate",
        cprice: "1000"
      },
      {
        size: "75ml",
        price: "120",
        crate: "75ml-Crate",
        cprice: "1200"
      },
      {
        size: "1.5L",
        price: "150",
        crate: "1.5L-Crate",
        cprice: "1500"
      }
    ],
    description: "about drink"
  },
  {
    category: "water",
    id: "12",
    quantity: 0,
    name: "Estizam",
    size: [{
        size: "50ml",
        price: "100",
        crate: "50ml-Crate",
        cprice: "1000"
      },
      {
        size: "75ml",
        price: "120",
        crate: "75ml-Crate",
        cprice: "1200"
      },
      {
        size: "1.5L",
        price: "150",
        crate: "1.5L-Crate",
        cprice: "1500"
      }
    ],
    description: "about drink"
  },
  {
    category: "water",
    id: "13",
    quantity: 0,
    name: "George",
    size: [{
        size: "50ml",
        price: "100",
        crate: "50ml-Crate",
        cprice: "1000"
      },
      {
        size: "75ml",
        price: "120",
        crate: "75ml-Crate",
        cprice: "1200"
      },
      {
        size: "1.5L",
        price: "150",
        crate: "1.5L-Crate",
        cprice: "1500"
      }
    ],
    description: "about drink"
  },
  {
    category: "water",
    id: "14",
    quantity: 0,
    name: "Laseim",
    size: [{
        size: "50ml",
        price: "100",
        crate: "50ml-Crate",
        cprice: "1000"
      },
      {
        size: "75ml",
        price: "120",
        crate: "75ml-Crate",
        cprice: "1200"
      },
      {
        size: "1.5L",
        price: "150",
        crate: "1.5L-Crate",
        cprice: "1500"
      }
    ],
    description: "about drink"
  },
  {
    category: "pet",
    id: "15",
    quantity: 0,
    name: "Malt",
    size: [{
      size: "33cl",
      price: "120",
      crate: "33cl-Crate",
      cprice: "1200"
    }],
    description: "about drink"
  },
  {
    category: "pet",
    id: "16",
    quantity: 0,
    name: "Grand Malt",
    size: [{
      size: "33cl",
      price: "120",
      crate: "33cl-Crate",
      cprice: "1200"
    }],
    description: "about drink"
  },
  {
    category: "pet",
    id: "17",
    quantity: 0,
    name: "Dubic Malt",
    size: [{
      size: "33cl",
      price: "120",
      crate: "33cl-Crate",
      cprice: "1200"
    }],
    description: "about drink"
  }
];

class App extends Component {
  // Write codes here;
  state = {
    products: PRODUCTS
  };

  render() {
    const Products = this.state.products;


    return ( <
      div className = "App" >
      <
      header className = "App-header" >
      <
      Navbar / >
      <
      /header> <
      section className = "body-component" >
      <
      div className = "split left" >
      USER INFO <
      UserInfo / >
      <
      Button waves = "light"
      style = {
        {
          backgroundColor: "red",
          borderRadius: "15px"
        }
      } >
      <
      b > Check Out < /b> <
      Icon > shopping_cart < /Icon> <
      /Button> <
      /div> <
      /section> <
      div className = "split right" >
      <
      div className = "grid-row " > {
        Products.map(product => ( <
          DrinkButton key = {
            product.id
          }
          products = {
            product
          }
          />
        ))
      } <
      /div>


      <
      /div>

      <
      /div>
    );
  }
}

export default App;