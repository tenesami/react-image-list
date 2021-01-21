import React, { Component } from 'react'

class SearchBar extends Component {

    state = {term: ''}
   

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.props.userInput(this.state.term)

        //console.log(this.state.term)
    }

    render(){
        
        return (
            <div className="ui segment">
                <form onSubmit={this.handleFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value}) }></input>
                    </div>
                </form>
                
            </div>
        )
    }
}
export default SearchBar;