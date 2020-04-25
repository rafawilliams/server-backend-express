const {Router} = require("express");
const faker = require('faker');
const router = Router();
const User = require("./../models/user.js");


router.get("/api/users", async (req,res) => {
    const users = await User.find();

    res.json({users});
}),


router.get("/api/users/create", async (req, res) => {
 
    for(let i=0; i<4; i++){
        await User.create({
            firstName: faker.name.firstName(),
            lastName:faker.name.lastName(),
            avatar:faker.image.avatar()
        });
    }
    res.json({message:"5 users was created"})
});

module.exports = router;