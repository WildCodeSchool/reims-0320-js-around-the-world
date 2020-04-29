import React from "react";
import Axios from "axios";
import NavBarMB from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords1: null,
      webcam: false,
      images: ""
    };
  }
  setKeywords1 = keywords1 => this.setState({ keywords1 });

  SearchCam = () => {
    Axios.get(
      `https://api.windy.com/api/webcams/v2/list/webcam=${
        this.state.keywords1
      }?show=webcams:image,location,player&key=FVKqXhuTWBoicKC5bzKgJW9re2xjxNtN`
    )
      .then(response => response.data)
      .then(data => {
        const image = data.result.webcams[0].image.current.preview;
        this.setState({
          images: image
        });
      });
  };

  render() {
    return (
      <>
        <div className="App">
          <NavBarMB />
          <SearchBar
            setKeywords={this.setKeywords1}
            onSearch={this.SearchCam}
            className="test"
          />
          <div>
            <img src={this.state.images}/>
          </div>
        </div>
        <div />
      </>
    );
  }
}

export default App;
