import React from 'react'
import axios from 'axios'
import './App.css'
import ProfileCard from './components/ProfileCard'
import FormSearch from './components/FormSearch'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      githubAccount: [],
      githubSearchAccount: ''
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/deG3nt3lm4n')
      .then(res => {
        this.setState({
          githubAccount: res.data
        })
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState,){

    if(this.state.githubSearchAccount !== ''){
      axios.get(`https://api.github.com/users/${this.state.githubSearchAccount}`)
      .then(res => {
        this.setState({
          githubAccount: res.data
        })
      })
      .catch(err => console.log(err))
    }
  }

  handleSearchName = (letter) => {
    console.log(letter)
    this.setState({
      githubSearchAccount: letter
    })
  }


  render(){
    return(
      <div className="App">
          <h1>Geto Github User Card</h1>
          <FormSearch handleSearchName={this.handleSearchName} />
          {/* Profile card */}
          {
            this.state.githubAccount.length === 0 ? 'loading' : <ProfileCard data={this.state.githubAccount} searchName={this.state.githubSearchAccount} />
          }
      </div>
    )
  }

}

export default App