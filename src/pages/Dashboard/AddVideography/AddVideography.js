import React from 'react';

const AddVideography = () => {
    return (
        <div className='addProductBox'>
        <h1>Add Videography</h1>
         <form>
         <div class="addProductRow">
             <label for="Description">Description</label>
             <input type="text" name="Description" autocomplete="off" placeholder="Description"/>
         </div>
         <div class="addProductRow">
             <label for="video">Video Link</label>
             <input type="text" name="video" autocomplete="off" placeholder="Video Link"/>
         </div>
         <div class="addProductRow">
             <label for="Date">Date</label>
             <input type="date" name="Date" autocomplete="off" placeholder="Date"/>
         </div>
         <button type="submit">Post</button>
         </form>
     </div>
    );
};

export default AddVideography;