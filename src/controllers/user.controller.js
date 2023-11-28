import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message:'USER REGISTERED SUCCESSFULLY!'
    })
})

export {registerUser}