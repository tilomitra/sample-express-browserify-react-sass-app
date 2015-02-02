/** @jsx React.DOM */

var React = require('react/addons');

var Bio = React.createClass({
    getInitialState: function () {
        return {
            time: 0
        }
    },
    componentDidMount: function () {
        var that = this;
        setInterval(function () {
            that.setState({
                time: that.state.time + 1
            });
        }, 1000);
    },
    render: function() {
        return (
            <div className="Bio">
                <p className="Bio-text">{this.props.text}</p>
                <p className="Bio-text">The timer is at {this.state.time} seconds.</p>
            </div>
        )
    }
});

module.exports = Bio;