import React, {Component} from 'react';


class Pet extends React.Component {
    render() {
        return (<div className="card">
        <h2 className="name">Moxie</h2>
        <img src="" placeholder="Photo"/>
        <h5>Hobbies: </h5>
        </div>);
    }
}

export default Pet;