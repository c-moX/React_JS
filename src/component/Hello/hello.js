import React, { Component } from 'react';

class Hello extends Component {
        render() {
          return (
             <div>
             <h1>WOW! I AM READY FOR YOU</h1>
             
                <h3>Name: {this.props.name}</h3>
                <p>Education: {this.props.edu}</p>
                <p>Email: {this.props.email}</p>
             </div>
          );
        }
}

export default Hello;
