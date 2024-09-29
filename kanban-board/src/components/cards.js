// import React from 'react';
// import './styling/cards.css';

// const createInitialsIcon(name) {
//     if (typeof name !== 'string' || !name.trim()) {
//         console.error("Invalid name input:", name);
//         return; // Exit the function if name is invalid
//     }
    
//     // Split the name and extract initials
//     const nameParts = name.split(' ');
//     const initials = nameParts.length > 1 
//         ? nameParts[0].charAt(0) + nameParts[1].charAt(0)
//         : nameParts[0].charAt(0); // Handle single name

//     initialsIcon.textContent = initials.toUpperCase(); // Set initials to uppercase
// }

// const Card = ({id, title, name, tag}) => {
//   return (
//     <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
//         <div className="cardHeading flex-sb">
//             <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
//             {/* <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
//                 <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://i.ibb.co/t4YBFkm/logo.webp" alt="UserImage" />
//                 <div className="showStatus"></div>
//             </div> */}
//             createInitialsIcon(name)
//         </div>
//         <div className="cardTitle" style={{fontWeight : 100}} >
//             <p>{title}</p>
//         </div>
//         <div className="cardTags">
//         <div className="tags color-grey"> ... </div>
//             {
//                 tag?.map((elem, index) => {
//                     return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default Card;

import React from 'react';
import './styling/cards.css';

const Card = ({ id, title, name, tag }) => {
    // Function to create initials
    const createInitials = (name) => {
        if (typeof name !== 'string' || !name.trim()) {
            return ""; // Return an empty string for invalid names
        }
        const nameParts = name.split(' ');
        const initials = nameParts.length > 1 
            ? nameParts[0].charAt(0) + nameParts[1].charAt(0)
            : nameParts[0].charAt(0); // Handle single name
        return initials.toUpperCase(); // Return initials in uppercase
    };

    return (
        <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
            <div className="cardHeading flex-sb">
                <span style={{ textTransform: "uppercase" }} className='color-grey'>{id}</span>
                <div className="imageContainer relative">
                    {createInitials(name)}
                </div>
            </div>
            <div className="cardTitle" style={{ fontWeight: 100 }}>
                <p>{title}</p>
            </div>
            <div className="cardTags">
                <div className="tags color-grey"> ... </div>
                {tag?.map((elem, index) => (
                    <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                ))}
            </div>
        </div>
    );
};

export default Card;
