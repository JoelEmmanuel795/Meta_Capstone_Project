import restaurant from "../Content/restaurant.jpg";

function Head(props) {
    return (
        <head>
            <title>Little Lemon Restaurant</title>
            <meta name="description" content="Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day."/>
            <meta property="og:title" content="Little Lemon Restaurant"/>
            <meta property="og:description" content="Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day."/>
            <meta property="og:image" content={restaurant}/>
            <meta property="og:url" content="https://joelemmanuel795.github.io/-little-lemon-html-css/index.html"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:site_name" content="en_US"/>
            <meta charset="UTF-8"></meta>
            <meta property="viewport" content="width=device-width, initial-scale=1.0"></meta>
            {props.children}
        </head>
    )
}

export default Head