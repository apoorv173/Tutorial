var
    React = require('react'),
    ListControls = require('./list-controls.jsx'),
    NavControls = require('./nav-controls.jsx');

var Carousel = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        }
    },
    myCustomMethod: function(e) {
        var count = this.state.count;
        count++;
        this.setState({
            count: count
        });

        e.preventDefault();
    },
    componentDidMount: function() {
        var parent = $('#myCarousel');
        setInterval(function() {
            if (parent.find('.carousel-inner .item.active').next().length) {
                parent.find('.carousel-inner .item.active').removeClass('active').next().addClass('active');
                parent.find('.carousel-indicators li.active').next().addClass('active').siblings().removeClass('active');
            } else {
                parent.find('.carousel-inner .item:first-child').addClass('active').siblings().removeClass('active');
                parent.find('.carousel-indicators li:first-child').addClass('active').siblings().removeClass('active');
            }

        }, 2000);
    },
    render: function() {


        var listItems = this.props.data.items.map(function(item, i) {
            if (i == 0) {
                return ( < div className = "item active"
                    data - index = {
                        i
                    } > < img src = {
                        item.img
                    } > < /img> < div className = "carousel-caption" >
                    < h3 > {
                        item.caption
                    } < /h3> < /div> < /div>
                );
            } else {
                return ( < div className = "item"
                    data - index = {
                        i
                    } > < img src = {
                        item.img
                    } > < /img> < div className = "carousel-caption" >
                    < h3 > {
                        item.caption
                    } < /h3> < /div> < /div>
                );
            }
        });
        return ( < div id = "myCarousel"
            className = "carousel slide"
            data - ride = "carousel" >
            < div className = "carousel-inner"
            role = "listbox" > {
                listItems
            } < /div> < NavControls data = {
                this.props.data
            }
            /> < ListControls data = {
                this.props.data
            }
            /> < /div>
        );

    }

});

module.exports = Carousel;