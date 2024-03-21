var imgArray = [
    {
        img: "/media/root/Daniel/grinrod1.png",
    },
    {
        img: "/media/root/Daniel/grinrod2.png",
    },
    {
        img: "/media/root/Daniel/grinrod3.png",
    },
    {
        img: "/media/root/Daniel/grinrod4.png",
    },
    {
        img: "/media/root/Daniel/grinrod5.png",
    },
    {
        img: "/media/root/Daniel/grinrod6.png",
    },
    {
        img: "/media/root/Daniel/grinrod7.png",
    },
    {
        img: "/media/root/Daniel/grinrod8.png",
    },
];

modelCarousel.setData(imgArray);

// Set the interval time in milliseconds
var intervalTime = 5000; // 3 seconds

// Start the interval
var interval = setInterval(function () {
    // Press the next page button
    Carousel.next();
}, intervalTime);

var boldText =
    "Our Purpose is to make a positive difference in Africa's trade with the world, touching lives of the communities in which we operate.";
Text5.setText(boldText);
// var normalText = " is to make a positive difference in Africa's trade with the world, touching lives of the communities in which we operate."
// Text6.setText(normalText);
