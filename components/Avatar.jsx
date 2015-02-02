/** @jsx React.DOM */

var React = require('react/addons');
var Avatar = React.createClass({
    render: function() {
        return (
            <div className="Avatar">
                <img className="Avatar-img" src={this.props.imgSrc} alt="" />
            </div>
        )
    }
});

module.exports = Avatar;