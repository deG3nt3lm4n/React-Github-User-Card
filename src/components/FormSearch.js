import React from 'react'

class FormSearch extends React.Component{
  constructor(){
    super()
    this.state = {
      inputValue: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearchName(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  render(){
    return(
      <form className="formSearch" onSubmit={this.onSubmit}>
        <input type="text" placeholder="Search" onChange={this.handleChange} value={this.state.inputValue} />
        <button>Search</button>
      </form>
    )
  }
}

export default FormSearch