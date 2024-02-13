import React from 'react';
import "./AddPhotography.css"

const AddPhotography = () => {
    return (
        <div className='addProductBox'>
           <h1>Add Photography</h1>
            <form>
            <div class="addProductRow">
                <label for="img_1">Image 1</label>
                <input type="text" name="img_1" autocomplete="off" placeholder="Image 1"/>
            </div>
            <div class="addProductRow">
                <label for="img_2">Image 2</label>
                <input type="text" name="img_2" autocomplete="off" placeholder="Image 2"/>
            </div>
            <div class="addProductRow">
                <label for="Description">Description</label>
                <input type="text" name="Description" autocomplete="off" placeholder="Description"/>
            </div>
            <div class="addProductRow">
                <label for="Date">Date</label>
                <input type="date" name="Date" autocomplete="off" placeholder="Date"/>
            </div>
            {/* <div class="addProductRow">
                <label for="email">Email</label>
                <input type="email" name="email" autocomplete="off" placeholder="email@example.com"/>
            </div>
            <div class="addProductRow">
                <label for="password">Password</label>
                <input type="password" name="password"/>
            </div> */}
            <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default AddPhotography;