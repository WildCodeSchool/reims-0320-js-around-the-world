import React from "react";
import Axios from "axios";
import NavBarMB from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords1: null,
      images: "",
      cam : [],
      cam2 : [],
    };
  }
  setKeywords1 = keywords1 => this.setState({ keywords1 });

  SearchCam = () => {
    Axios.get(
      `https://api.windy.com/api/webcams/v2/list/country=${this.state.keywords1}?show=webcams:image,location,player&key=FVKqXhuTWBoicKC5bzKgJW9re2xjxNtN`
    )
      .then(response => {
         this.setState({cam : response.data.result.webcams})
         this.setState({cam2  : response.data.result.webcams})
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
            return <p>{e.title}</p>
          })}
          
          {this.state.cam2.map(i => {
            return <img src={i.image.current.preview} alt="Malik" />
          })}

        </div>
        <div />
      </>
    );
  }
}

export default App;


 // .then(data => {
      //   const image = data.result.webcams[1].image.current.preview;
      //   this.setState({
      //     images: image
      //   });
      // });