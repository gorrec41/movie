import { render } from '@testing-library/react'
import React from 'react'



class Search extends React.Component {
    state = {
        searchName: '',
        
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render() {

        const { searchName } = this.state;

        return <div className="nav-wrapper">
            <form className= "form">
                <div className="input-field">
                    <input
                        type="text"
                        name = "searchName"
                        placeholder="search"
                        value ={searchName}
                        onChange = {this.handleChange}
                    />
                    
                </div>
            </form>
            <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
                >
                Submit
            </button>
        </div>
    }
}
export {Search}