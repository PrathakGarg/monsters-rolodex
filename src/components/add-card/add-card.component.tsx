import { useState } from "react";

import Add from "../../assets/add.svg";

import "./add-card.styles.scss"

const AddCard = () => {
    const [toggleAdd, setToggleAdd] = useState(true);

    const toggleAddMonster = () => setToggleAdd(!toggleAdd)
    const addMonster = () => toggleAddMonster()

    return (
        <div className="add-card-container">
            {toggleAdd && <div className="add-card-image" onClick={toggleAddMonster}>
                <img src={Add} alt={"Add monster"} />
            </div>}
            {!toggleAdd && <div className="add-card-content">
                <input placeholder="Name" className="name" />
                <input placeholder="Email" className="email" />
                <div className="buttons">
                    <input type="button" className="button cyan" value="Add" onClick={addMonster}/>
                    <input type="button" className="button cyan" value="Cancel" onClick={toggleAddMonster}/>
                </div>
            </div>}
        </div>
    )
}

export default AddCard;