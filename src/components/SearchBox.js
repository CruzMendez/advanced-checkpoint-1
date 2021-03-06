import React, {Component} from "react";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {searchTerm:""}; //ASSIGN STATE PROPERTY WITH OBJECT
  }
  render() {
    return (
      <div id="search" className="Search">
        <input 
          onKeyUp={
            (e) => {
              /* this is so th search will only be done on enter key */
              if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
                this.props.loadSearch(this.state.searchTerm);
                // console.log(this.state.searchTerm) //SEARCH TERM IS LOGGING TO CONSOLE;
              }
            }
          } 
          onChange = { e => this.setState({searchTerm:e.target.value})
          } //SET STATE OF SEARCH TERM TO VALUE FROM IMPUT
          type="search" 
          placeholder="Search for a title..." />
      </div>
    );
  }
}
export default SearchBox;

