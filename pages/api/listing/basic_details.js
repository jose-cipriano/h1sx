import { ObjectId } from 'mongodb'
import dbConnect from '../../../lib/mongodb'
import Listing from '../../../models/Listing'

async function handler(req, res) {
    await dbConnect()
    try {
        const method = await req.method
        switch (method) {
            case 'POST':
                const {
                    listingName,
                    age,
                    gender,
                    code,
                    listingPicture,
                    aboutMe,
                    contactMethods,
                    locationCountry,
                    locationCity,
                } = req.body

                try {
                    const oneUser = await Listing.find({ listingName: listingName })
                    if (oneUser.length) {
                        res.status(200).json({
                            success: false,
                            message: 'This listing is already existed.',
                        })
                        return
                    } else {
                        try {
                            const savedListing = await Listing.insertMany({
                                listingName,
                                age,
                                gender,
                                code,
                                listingPicture,
                                aboutMe,
                                contactMethods,
                                locationCountry,
                                locationCity,
                            })
                            console.log(savedListing)
                            res.status(200).json({
                                success: true,
                                message: 'Add listing Successfully',
                                data: savedListing[0]._id,
                            })
                            return
                        } catch (err) {
                            res.status(400).json({
                                success: false,
                                message: `There was an error when saving the listing information. ${err.message}`,
                            })
                            return
                        }
                    }
                } catch (err) {
                    res.status(400).json({ success: false, message: "can't add listing" })
                }
            default:
                res.status(404).json({
                    success: false,
                    message: `Unexpected request: Can't handle the request for saving an user. ${err.message} `,
                })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal ServerError',
            data: error.message,
        })
        return
    }
}
export default handler
