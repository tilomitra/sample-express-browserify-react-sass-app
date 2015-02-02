var React   = require('react/addons');
var Profile = require('./Profile.jsx');

var App = React.createClass({
    render: function () {
        return (
            <Profile
                username="Tilo"
                bio="My name is Tilo. I write code."
                avatar="https://pbs.twimg.com/profile_images/551547373130768384/HNrsw8YD_400x400.png"
            />
        );
    }
});

module.exports = App;