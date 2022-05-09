// import asyncHandler from 'express-async-handler'

import { categories } from "../config/db";

// export const deleteUser = asyncHandler(async (req, res) => {
//   const categ = await categories.deleteOne();
//   if (categ) {
//     await categ.remove();
//     res.json({ message: 'User removed' });
//   } else {
//     res.status(404);
//     throw new Error('User not found');
//   }
// });

const borrarpost= async () => {
    await categories.deleteOne({
        category1:'carnes'
    })
   
}

export default borrarpost;