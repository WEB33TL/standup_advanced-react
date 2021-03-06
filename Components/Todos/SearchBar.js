import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchbar: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.formPreventDefault = this.formPreventDefault.bind(this)
  }
  handleChange(event) {
    this.props.handleSearchBar(event.target.value)
    this.setState({ searchbar: event.target.value })
  }
  formPreventDefault(event) {
    event.preventDefault()
  }
  render() {
    return (
      <div className="search-bar">
        <p>Search Todo List:</p>
        <form onSubmit={this.formPreventDefault}>
          <input type="text" value={this.state.searchbar} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default SearchBar