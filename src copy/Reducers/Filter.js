const INITIAL_STATE = {
    city: "",
    category: "",
    ads: [
        {
            id:1,
            image: "hair.jpg",
            title: "Hair Stylist",
            location: "Marrakech",
            description: "Providing trendy haircuts and styling services.",
            price: "150 DH", // Haircut and styling
            categorie: 'skincare',
            datePoster:'2024-12-24'
        },
        {
            id:2,
            image: "shoes.jpg",
            title: "Footwear Designer",
            location: "Tangier",
            description: "Crafting innovative and stylish shoe designs.",
            price: "800 DH", // Designer shoes
            categorie: 'shoes',
             datePoster:'2024-11-22'
        },
        {
            id:3,
            image: "watch.jpg",
            title: "Watchmaker",
            location: "Rabat",
            description: "Expert in repairing and creating luxury watches.",
            price: "2000 DH", // Luxury watch service
              datePoster:'2025-01-24'
        },
        {
            id:4,
            image: "jacket.png",
            title: "Fashion Designer",
            location: "Tangier",
            description: "Designing elegant and modern outerwear.",
            price: "600 DH", // Fashionable jacket
            categorie: 'clothes',
             datePoster:'2025-01-24'
            
        }
    ], // Initial ads state
    profils: [
        {
            id:1,
            image: "laptop.jpg",
            title: "Software Engineer",
            location: "Casa",
            description: "Specialized in building scalable web applications.",
            price: "4000 DH", // Professional services
            categorie: 'Electronique',
              datePoster:'2024-11-22'
        },
        {  id:2,
            image: "hair.jpg",
            title: "Hair Stylist",
            location: "Marrakech",
            description: "Providing trendy haircuts and styling services.",
            price: "150 DH", // Haircut and styling
            categorie: 'skincare',
            datePoster:'2025-01-24'
        },
        {
            id:3,
            image: "shoes.jpg",
            title: "Footwear Designer",
            location: "Tangier",
            description: "Crafting innovative and stylish shoe designs.",
            price: "800 DH", // Designer shoes
            categorie: 'shoes',
            datePoster:'2025-01-11'
        },
        {
            id:4,
            image: "watch.jpg",
            title: "Watchmaker",
            location: "Rabat",
            description: "Expert in repairing and creating luxury watches.",
            price: "2000 DH", // Luxury watch service
             datePoster:'  2024-11-22'
          
        },
        {
            id:5,
            image: "jacket.png",
            title: "Fashion Designer",
            location: "Tangier",
            description: "Designing elegant and modern outerwear.",
            price: "600 DH", // Fashionable jacket
            categorie: 'clothes',
              datePoster:'2024-11-22'
            
        },
        {
            id:6,
            image: "glasses.png",
            title: "Optometrist",
            location: "Agadir",
            description: "Specialized in creating and adjusting eyewear.",
            price: "500 DH", // Eyewear products
              datePoster:'2025-01-22'
        },
        {
            id:7,
            image: "auto.png",
            title: "Automobile Engineer",
            location: "Casablanca",
            description: "Designing and improving car performance.",
            price: "10000 DH", // High-end engineering services
            categorie: 'Cars',
            datePoster:'2025-01-10'
        },
        {
            id:8,
            image: "phone.png",
            title: "Mobile Technician",
            location: "Tangier",
            description: "Expert in repairing and optimizing smartphones.",
            price: "200 DH", // Phone repair
            categorie: 'Electronique',
            datePoster:'2025-01-05'
        },
        {
            id:9,
            image: "bag.png",
            title: "Bag Designer",
            location: "Chefchaouen",
            description: "Creating unique and trendy bag designs.",
            price: "350 DH", // Designer bag
            categorie: 'clothes',
             datePoster:'2025-01-01'
        },
        {
            id:10,
            image: "gym.png",
            title: "Fitness Trainer",
            location: "Meknes",
            description: "Providing personalized fitness training sessions.",
            price: "300 DH", // Fitness sessions
            categorie: 'clothes',
             datePoster:'2025-01-30'
        },
        {
            id:11,
            image: "toy.png",
            title: "Toy Maker",
            location: "Essaouira",
            description: "Crafting creative and fun toys for kids.",
            price: "100 DH", // Handmade toy
             datePoster:'2025-01-03'
        },
        {
            id:12,
            image: "dacia.png",
            title: "Car Salesperson",
            location: "Kenitra",
            description: "Selling affordable and reliable vehicles.",
            price: "120000 DH", // Car price
            categorie: 'Cars',
             datePoster:'2025-01-05'
        }
    ]
};
export { INITIAL_STATE };



export default function Filter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_CITY":
            return { ...state, city: action.payload };

        case "SET_CATEGORY":
            return { ...state, category: action.payload };

            case "UPDATE_AD": {
                const updatedProfiles = state.profils.map((ad) =>
                  ad.id === action.payload.id ? { ...ad, ...action.payload.data } : ad
                );
                return { ...state, profils: updatedProfiles };
              }
              
              case "DELETE_AD": {
                const filteredProfiles = state.profils.filter((ad) => ad.id !== action.payload.id);
                return { ...state, profils: filteredProfiles };
              }
              

        default:
            return state;
    }
}

