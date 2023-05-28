const UserModel = require('../model/user_model');

const register = async (req, res) => {
    try {
        const { name, last_name, phone_number } = req.body;

        if (!(name || last_name || phone_number)) {
            res.json({
                "status": false,
                "message": "All inputs required"
            });
        }

        let oldUser = await UserModel.findOne({ phone_number });

        if (oldUser) {
            res.json({
                "status": false,
                "isRegistered": true,
                "message": "Already in use"
            });
        }

        const user = UserModel.create({
            name: name,
            last_name: last_name,
            phone_number: phone_number
        });

        (await user).save((err, data) => {
            if (err) {
                res.json({
                    "status": false,
                    "data": "",
                    "message": err
                });
            } else {
                res.status(201).json({
                    "status": true,
                    "data": data,
                    "message": "Successfully registered"
                });
            }
        });

    } catch (error) {
        res.json({
            "status": false,
            "message": "Error"
        });
    }
}

const getUser = async (req, res) => {
    try {
        // to get entire data
        await UserModel.find({}, (err, data) => {
            if (err) {
                res.json({
                    "status": false,
                    "data": [],
                    "message": err
                });
            }
            else {
                res.json({
                    "status": true,
                    "data": data,
                    "message": "Users successfully found"
            });
            }
        });
    } catch (error) {

    }
}

module.exports = {register,getUser};