import React from "react";
import './components.styles.scss'


const CollectionItem = ({name, price, imageUrl, id}) => {
    return(
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}> </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
           
        </div>
    )
}

export default CollectionItem