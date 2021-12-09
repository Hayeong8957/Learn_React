const React = require('react');
// 분리할 때마다 npm에서 react를 불러와야한다.
const { Component } = React;

class WordRelay extends Component {
    state = {
        text: 'Hello, webpack',

    };

    render() {
        return <h1>{this.state.text}</h1>

    }
}

module.exports = WordRelay;