import React from 'react';
import './styling/cards.css';

const Card = ({ id, title, name, tag }) => {
    // Function to create initials from the user's name
    const createInitials = (name) => {
        // Check if the name is a valid string
        if (typeof name !== 'string' || !name.trim()) {
            return ""; // Return an empty string for invalid names
        }
        // Split the name into parts by space (first name and last name)
        const nameParts = name.split(' ');
        // Generate initials from the first character of the first and second names
        const initials = nameParts.length > 1 
            ? nameParts[0].charAt(0) + nameParts[1].charAt(0) // If there are two name parts
            : nameParts[0].charAt(0); // If there is only one name part (single name)
        return initials.toUpperCase(); // Convert initials to uppercase
    };

    return (
        <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
            {/* Card heading with ID and user initials */}
            <div className="cardHeading flex-sb">
                <span style={{ textTransform: "uppercase" }} className='color-grey'>{id}</span>
                <div className="imageContainer relative">
                    {/* Display the initials created from the user's name */}
                    {createInitials(name)}
                </div>
            </div>

            {/* Card title displaying the ticket or task title */}
            <div className="cardTitle" style={{ fontWeight: 100 }}>
                <p>{title}</p>
            </div>

            {/* Display tags associated with the card if any exist */}
            <div className="cardTags">
                <div className="tags color-grey"> ... </div>
                {tag?.map((elem, index) => (
                    <div key={index} className="tags color-grey">
                        <span>•</span> {elem}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
