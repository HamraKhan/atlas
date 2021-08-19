function renderMenu() {
    const menu = [
        {
            sectionHeading: 'PIZZA / PASTA',
            items: [
                {
                    imgSrc: './mainMenu/mainIcons/pizza.png',
                    imgAlt: 'pizza',
                    name: 'MARGHERITA PIZZA (V)',
                    price:'£10.95',
                    description: `tomato sauce base with 
                    cheese and choice of toppings: 
                    (£1 meat topping): chicken, ham, mince beef, salami. 
                    (75p veg topping): peppers, tomatoes, mushrooms,
                    jalapenos, olives, pineapple, artichoke,
                    onion.`
                }, {
                    imgSrc: './mainMenu/mainIcons/shrimp.png',
                    imgAlt: 'shrimp',
                    name: 'FRUTTI DIMARE PIZZA',
                    price:'£13.95',
                    description: `pizza with
                    tomato, basil, tiger prawns, squid, and
                    mussels.`
                }, {
                    imgSrc: './mainMenu/mainIcons/penne.png',
                    imgAlt: 'penne',
                    name: 'TOMATO AND BASIL PENNE (V)',
                    price:'£8.25',
                    description: `classic
                    penne pasta with tomato sauce and basil
                    garnish. Served with garlic bread.`
                }, {
                    imgSrc: './mainMenu/mainIcons/lasagne.png',
                    imgAlt: 'lasagne',
                    name: 'LASAGNE/VEGGIE (V)',
                    price:'£12.95/10.95',
                    description: `beef
                    lasagne / vegetable lasagne made with
                    roasted sweet potato, peppers, courgette
                    and spinach. Served with garlic bread and salad.`
                }, {
                    imgSrc: './mainMenu/mainIcons/ravioli.png',
                    imgAlt: 'ravioli',
                    name: 'PUMPKIN RAVIOLI (V)',
                    price:'£8.95',
                    description: `pumpkin
                    ravioli topped with olive oil and pine
                    nuts garnished with thyme.`
                }
            ]
        },{
            sectionHeading: 'BURGERS',
            items: [
                {
                    imgSrc: './mainMenu/mainIcons/burger.png',
                    imgAlt: 'burger',
                    name: 'CHILLI CHEESEBURGER',
                    price:'£13.95',
                    description: `1/4 beef
                    patty, house made chilli sauce with
                    tomato, onions, pickles, mustard and
                    choice of cheddar or american cheese. 
                    Served with potato fries.`
                }, {
                    imgSrc: './mainMenu/mainIcons/plant-based.png',
                    imgAlt: 'veg',
                    name: 'VEGGIE BURGER',
                    price:'£10.95',
                    description: `potatoes
                    and mix veg double patty, vegan thousand
                    island dressing and jalapenos.
                    Served with potato fries.`
                }, {
                    imgSrc: './mainMenu/mainIcons/chicken-leg.png',
                    imgAlt: 'chicken',
                    name: 'CHICKEN BURGER',
                    price:'£12.95',
                    description: `crispy
                    breast fillet, tomato, onion, lettuce,
                    cheese and mayo. Served with potato fries.`
                }, {
                    imgSrc: './mainMenu/mainIcons/plant-based.png',
                    imgAlt: 'veg',
                    name: 'TOFU AND MUSHROOM BURGER',
                    price:'£11.95',
                    description: `herbed
                    mushroom and tofu patty, caramelised
                    onion and relish. Served with potato fries.`
                }, {
                    imgSrc: './mainMenu/mainIcons/hamburger.png',
                    imgAlt: 'burger',
                    name: 'SINGLE/DOUBLE BEEF BURGER',
                    price:'£13.95/£14.95',
                    description: `1/4 or 1/2
                    beef patty with lettuce, onion, tomato,
                    pickles, cheese and thousand island.
                    Served with potato fries.`
                }, {
                    imgSrc: './mainMenu/mainIcons/plant-based.png',
                    imgAlt: 'veg',
                    name: 'MEDITERRANEAN BURGER',
                    price:'£11.95',
                    description: `falafel,
                    hummus, spinach, beetroot and house made
                    garlic vegan mayo. Served with potato 
                    fries.`
                }
            ]
        },{
            sectionHeading: 'CURRIES',
            items: [
                {
                    imgSrc: './mainMenu/mainIcons/chicken-leg.png',
                    imgAlt: 'chicken',
                    name: 'CHICKEN MADRAS',
                    price:'£11.25',
                    description: `chicken
                    breast pieces cooked in a dark red thick
                    spicy madras sauce, topped with
                    coriander. Accompanied with naan bread
                    or rice.`
                }, {
                    imgSrc: './mainMenu/mainIcons/plant-based.png',
                    imgAlt: 'veg',
                    name: 'CAULIFLOWER AND POTATO CURRY',
                    price:'£8.95',
                    description: `cauliflower
                    and potato cooked in spices topped with
                    coriander. Accompanied with naan bread.`
                }, {
                    imgSrc: './mainMenu/mainIcons/lamb.png',
                    imgAlt: 'lamb',
                    name: 'LAMB BHUNA',
                    price:'£13.25',
                    description: `tender lamb
                    in a thick sauce of tomatoes, onion,
                    ginger & garlic finished with spring
                    onions. Accompanied with naan bread.`
                }, {
                    imgSrc: './mainMenu/mainIcons/fish.png',
                    imgAlt: 'fish',
                    name: 'THAI FISH CURRY',
                    price:'£11.95',
                    description: `fish gently
                    poached in a flavorful, coconut curry
                    sauce bursting with delicious Thai
                    flavors.`
                }, {
                    imgSrc: './mainMenu/mainIcons/chinese-food.png',
                    imgAlt: 'noodles',
                    name: 'CHIANG MAI CURRY NOODLE CHICKEN SOUP',
                    price:'£12.95',
                    description: `one-bowl
                    meal of egg noodles, a rich, oily
                    coconut cream-infused stock, and a leg
                    or thigh of bone-in chicken, topped with
                    more crunchy noodles.`
                }, {
                    imgSrc: './mainMenu/mainIcons/katsu.png',
                    imgAlt: 'katsu',
                    name: 'CHICKEN/PORK KATSU',
                    price:'£13.95',
                    description: `comprised
                    of fried breaded meat (chicken or pork)
                    drizzled with a thick curry sauce.
                    Accompanied with rice and salad.`
                } 
            ]
        }
    ]
    let htmlOutput='';

    menu.forEach(menu => {
        htmlOutput += `
        <div class="course-heading">
        <h1 class="menu-group-heading">${menu.sectionHeading}</h1> 
        <div class="menu-group">`
        menu.items.forEach(item => {
            htmlOutput +=  `<div class="menu-item">
            <img class="menu-item-image"
                src="${item.imgSrc}"
                alt="${item.imgAlt}" />
            <div class="menu-item-text">
                <h3 class="menu-item-heading">
                    <span class="menu-item-name">${item.name}</span>
                    <span
                        class="menu-item-price">${item.price}</span>
                </h3>
                <p class="menu-item-description">${item.description}</p>
            </div>
        </div>`
        })        
        htmlOutput += `
        </div>
        </div>`
    })
    document.getElementById('mainMenu').innerHTML = htmlOutput;
}

