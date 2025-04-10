import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
export default class categoriList extends Component {
    constructor(props) {
        //propslar veriyi çağrılırken alır
        super(props);
        //state'ler ise kendi içindeki değeri yine kendi içine taşımaya yarar
        this.state = {
            counter: 1,
            categories: [
                { catergoryId: 1, catergoryName: "Beverages" },
                { catergoryId: 2, catergoryName: "Condiments" }
            ],
        };
    };



    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>  {/*Çağırıldığı yerden (app.js) info değerinin içindekini yansıt  */}


                <p>Hatta sayımız da {this.state.counter}</p>
                <ListGroup>

                    {/*Map bir arrowlu fonkisondur ve içine yazıldığı değerin içindeki bütün elemanları gezer.
                    Yanına yazıldığı değeri kullanarak yapar tabii bunu. */

                        this.state.categories.map(catergory => (
                            <ListGroupItem onClick={() => this.props.changeCatergory(catergory)} key={catergory.catergoryId}>
                                {catergory.catergoryName}
                            </ListGroupItem>))

                    }
                </ListGroup>
                <h4>{this.props.currentCatergory}</h4>
            </div>

        )
    }
}
