import React from 'react';

class Form extends React.Component{
    render(){
        return(
          <div>
            <form onSubmit={this.props.fetchTheWeather}>
                <input type="text" name="city" placeholder="City..." />
                <input type="text" name="country" placeholder="Country..." />
                <button>Check Weather</button>
            </form>
          </div>
        );
    }
}

export default Form;