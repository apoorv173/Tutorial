var
    React = require('react');
var NavControls = React.createClass({

    handlePrevClick: function(e) {
        var parent = $('#myCarousel');
        if (parent.find('.carousel-inner .item.active').prev().length) {
            var currentIndex = parent.find('.carousel-inner .item.active').removeClass('active').prev().addClass('active').attr('data-index');
            parent.find('.carousel-indicators li[data-slide-to=' + currentIndex + ']').addClass('active').siblings().removeClass('active');
        } else {
            parent.find('.carousel-inner .item:last-child').addClass('active').siblings().removeClass('active');
            parent.find('.carousel-indicators li:last-child').addClass('active').siblings().removeClass('active');
        }
        console.log(currentIndex);
    },
    handleNextClick: function(e) {
        var parent = $('#myCarousel');
        //currentTarget.addClass('active').siblings().removeClass('active');
        if (parent.find('.carousel-inner .item.active').next().length) {
            var currentIndex = parent.find('.carousel-inner .item.active').removeClass('active').next().addClass('active').attr('data-index');
            console.log(currentIndex);
            parent.find('.carousel-indicators li[data-slide-to=' + currentIndex + ']').addClass('active').siblings().removeClass('active');
        } else {
            parent.find('.carousel-inner .item:first-child').addClass('active').siblings().removeClass('active');
            parent.find('.carousel-indicators li:first-child').addClass('active').siblings().removeClass('active');
        }
    },

    render: function() {
        return ( < div className = "carousel-controls" >
            < a className = "left carousel-control"
            role = "button" >
            < span onClick = {
                this.handlePrevClick
            }
            className = "glyphicon glyphicon-chevron-left"
            aria - hidden = "true" > < /span> < span className = "sr-only" > Previous < /span> < /a> < a className = "right carousel-control"
            role = "button" >
            < span onClick = {
                this.handleNextClick
            }
            className = "glyphicon glyphicon-chevron-right"
            aria - hidden = "true" > < /span> < span className = "sr-only" > Next < /span> < /a> < /div>
        )
    }
});
module.exports = NavControls;