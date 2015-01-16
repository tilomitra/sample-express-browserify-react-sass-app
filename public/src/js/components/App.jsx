var React   = require('react');
var Profile = require('./Profile.jsx');

React.renderComponent(
    <Profile
        username="Tilo"
        bio="My name is Tilo. I write code."
        avatar="https://pbs.twimg.com/profile_images/551547373130768384/HNrsw8YD_400x400.png"
    />,
    document.getElementById('react-container')
);