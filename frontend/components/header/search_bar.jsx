import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchBusinesses(this.state);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.fetchBusinesses(this.state);
    this.props.history.push('/businesses');
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handlSearch}>
        <label id="searchbarLabel">Find:</label>
        <input
          id="searchbarInput"
          value = {this.state.query}
          placeholder = "Restaurant name"
          onChange = {this.handleChange}
        />

      <button onClick={this.handleSearch}>
        <i className="fa fa-search"></i>
      </button>
      </form>
  );
  }
}

export default SearchBar;
