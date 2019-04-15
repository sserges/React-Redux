import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      placeHolder: "Tapez votre film..."
    };
  }

  handleChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control input-lg"
            onChange={this.handleChange.bind(this)}
            placeholder={this.state.placeHolder}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
