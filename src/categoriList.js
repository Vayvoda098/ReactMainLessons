import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class categoriList extends Component {
  constructor(props) {
    //propslar veriyi çağrılırken alır
    super(props);
    //state'ler ise kendi içindeki değeri yine kendi içine taşımaya yarar
    this.state = {
      categories: [],
    };
  }

  componentDidMount = () => {
    //Component yerleştirdiğinde çalıştırması için bir fonkisyon
    this.getCategory();
  };

  getCategory = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        {/*Çağırıldığı yerden (app.js) info değerinin içindekini yansıt  */}
        <p>Hatta sayımız da {this.state.counter}</p>
        <ListGroup>
         
             {/*Map bir arrowlu fonkisondur ve içine yazıldığı değerin içindeki bütün elemanları gezer.
                    Yanına yazıldığı değeri kullanarak yapar tabii bunu. */

            this.state.categories.map((category) => (
              <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
                onClick={() => this.props.changeCategory(category)}
                key={category.id}
              >
                {category.categoryName}
              </ListGroupItem>
            ))}
        
        </ListGroup>
      </div>
    );
  }
}
