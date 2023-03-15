//console.log('today is a good day');
const DB = [
    {
        name: "Chili & Lime Flavored Rolled Corn Tortilla Chips", 
        description: 'spicy little scrolls made from stone ground corn masa',
        price: 2.99,
        sku: 1,
    },
    {
        name: "Hashbrowns", 
        description: 'Basically M******ds Hashbrowns...but obviously superior',
        price: 2.99,
        sku: 2,
    },{
        name: "Steamed Chicken Soup Dumplings", 
        description: 'Chicken dumplings made of soup. That are steamed.',
        price: 2.99,
        sku: 3,
    },{
        name: "Everything but the Bagel Sesame Seasoning Blend", 
        description: 'Lots of seasonings and stuff',
        price: 2.99,
        sku: 4,
    },{
        name: "4 Chocolate Croissants", 
        description: 'Pan Au Chocolat or Chocolatine if vous prefer',
        price: 2.99,
        sku: 5,
    },
]


function search(itemSku){
    // console.log(typeof itemSku)
    const match = DB.find(item => item.sku === itemSku);
//   console.log(match);
  return match;  
}

