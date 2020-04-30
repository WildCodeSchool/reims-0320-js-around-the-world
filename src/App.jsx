import React from "react";
import Axios from "axios";
import NavBarMB from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import { Card, CardImg, CardText, CardBody } from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords1: null,
      images: "",
      cam: [],
      cam2: [],
    };
  }
  setKeywords1 = keywords1 => this.setState({ keywords1 });

  SearchCam = () => {
    Axios.get(
      `https://api.windy.com/api/webcams/v2/list/country=${this.state.keywords1}?show=webcams:image,location,player&key=FVKqXhuTWBoicKC5bzKgJW9re2xjxNtN`
    )
      .then(response => {
        this.setState({ cam: response.data.result.webcams })
      })
  };

  render() {
    console.log(this.state.cam2)
    return (
      <>
        <div className="App">
          <NavBarMB />
          <SearchBar
            setKeywords={this.setKeywords1}
            onSearch={this.SearchCam}
            className="test"
          />
          {this.state.cam.map(e => {
            return (
              <div>
                <Card>
                  <CardBody>
                    <CardText>
                      {e.title}
                    </CardText>
                  </CardBody>
                  <CardImg
                    top
                    width="100%"
                    src={e.image.current.preview}
                    alt="Card image cap"
                  />
                </Card>
              </div>)
          })}
        </div>
      </>
    );
  }
}
export default App;