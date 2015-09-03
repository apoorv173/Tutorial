var
    React = require('react');
var ListControls = React.createClass({

    handleClick: function(e) {
        var currentTarget = $(e.target),
            currentIndex = $(e.target).attr('data-slide-to');
        var parent = $('#myCarousel');
        currentTarget.addClass('active').siblings().removeClass('active');
        parent.find('.carousel-inner .item[data-index=' + currentIndex + ']').addClass('active').siblings().removeClass('active');
    },
    render: function() {
        var that = this;
        var ControlElements = this.props.data.items.map(function(item, i) {
            if (i == 0) {
                return ( < li data - target = "#myCarousel"
                    onClick = {
                        that.handleClick
                    }
                    data - slide - to = {
                        i
                    }
                    className = "active" > < /li>
                );
            } else {
                return ( < li data - target = "#myCarousel"
                    onClick = {
                        that.handleClick
                    }
                    data - slide - to = {
                        i
                    } > < /li>
                );
            }

        });
        return ( < ol className = "carousel-indicators" > {
            ControlElements
        } < /ol>)
    }
});
module.exports = ListControls;