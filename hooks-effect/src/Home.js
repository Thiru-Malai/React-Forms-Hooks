import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            website: "Geeks For Geeks",
        }
    }
    handleSubmit = () =>{
        this.setState({website: "YouTube"})
    }
    render() {
        return (
            <>
                <p>Hi</p>
                <p>{this.props.message}</p>
                <p>{this.state.website}</p>
                <input type='button' value="Submit" onClick={this.handleSubmit}/>
            </>
        )
    }
}


export default Home;