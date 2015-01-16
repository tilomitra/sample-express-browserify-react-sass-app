/** @jsx React.DOM */

var React  = require('react');
var Avatar = require('./Avatar.jsx');
var Bio    = require('./Bio.jsx');

var Profile = React.createClass({
    render: function() {
        return (
            <div className="Profile">
                <Avatar imgSrc={this.props.avatar} />
                <h2 className="Profile-title">{this.props.username}</h2>
                <div className="Profile-body">
                <Bio text={this.props.bio} />
                </div>
            </div>
        );
    }
});

module.exports = Profile;