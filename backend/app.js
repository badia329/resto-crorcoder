const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://127.0.0.1:27017/restDB');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Chef = require("./models/chefs")
const Menu = require("./models/menu")
const User = require("./models/user")
// Business Logic: Get All Chefs 
app.get("/chefs", (req, res) => {
    console.log("Business Logic: Get All Chefs")
    Chef.find().then(
        (data) => {
            console.log("Business Logic: Get All Chefs")
            res.json({ tab: data, nbr: data.length })
        }
    )
});
app.get("/menu", (req, res) => {
    console.log("Business Logic: Get All Menus")
    Menu.find().then(
        (data) => {
            console.log("Business Logic: Get All Chefs")
            res.json({ tab: data, nbr: data.length })
        }
    )
})
// Business Logic: Get Chef By Id
app.get("/chefs/:id", (req, res) => {
    console.log("Business Logic: Get Chef By Id");
    let chefId = req.params.id;
    console.log("Here is Id", chefId, "Type:", typeof chefId);
    Chef.findById(chefId).then(
        (data) => {
            console.log("Here is data Chefs collection", data);
            if (data) {
                res.json({ obj: data })
            } else {
                res.json({ msg: "Chef not found" })
            }
        })
})
// Business Logic: Get Menu By Id
app.get("/menu/:id", (req, res) => {
    console.log("Business Logic: Get menu By Id");
    let menuId = req.params.id;
    console.log("Here is Id", menuId);

    Menu.findById(menuId).then((data) => {
        console.log("Here is data menu collection", data);
        if (data) {
            res.json({ obj: data });
        } else {
            res.json({ msg: "menu not found" });
        }
    });
});
// Business Logic:: Delete chef By Id
app.delete("/chefs/:id", (req, res) => {
    console.log("Business Logic: Delete Chef By Id", req.params.id);
    Chef.deleteOne({ _id: req.params.id }).then((deleteRes) => {
        console.log("Here is response from successfully!", deleteRes);
        if (deleteRes.deletedCount == 1) {
            res.json({ msg: "Chef deleted successfully!", isDeleted: true });
        } else {
            res.json({
                msg: `Chef N°${req.params.id} not found`,
                isDeleted: false,
            });
        }
    });
});
// Business Logic: Delete Menu By Id
app.delete("/menu/:id", (req, res) => {
    console.log("Business Logic: Delete Chef By Id", req.params.id);
    Menu.deleteOne({ _id: req.params.id }).then((deleteRes) => {
        console.log("Here is response from successfully!", deleteRes);
        if (deleteRes.deletedCount == 1) {
            res.json({ msg: "Chef deleted successfully!", isDeleted: true });
        } else {
            res.json({
                msg: `Menu N°${req.params.id} not found`,
                isDeleted: false,
            });
        }
    });
});
// Business Logic: Edit Chef By Id
app.put("/Chefs", (req, res) => {
    console.log("Business Logic: Edit Match", req.body);
    let newChef = req.body;
    Chef.updateOne({ _id: newChef._id }, newChef).then(
        (updateRes) => {
            if (updateRes.modifiedCount == 1) {
                res.json({ msg: "Edited with success!" });
            } else {
                res.json({ msg: "Not Edited!" });
            }
        });
});
// Business Logic: Edit Chef By Id
app.put("/menu", (req, res) => {
    console.log("Business Logic: Edit Menu", req.body);
    let newMenu = req.body;
    Menu.updateOne({ _id: newMenu._id }, newMenu).then(
        (updateRes) => {
            if (updateRes.modifiedCount == 1) {
                res.json({ msg: "Edited with success!" });
            } else {
                res.json({ msg: "Not Edited!" });
            }
        });
});
// Busines Logic: Add Chef
app.post("/chefs", (req, res) => {
    console.log("Business Logic: Add Chef")
    console.log("Request body:", req.body);
    let chefObj = new Chef(req.body);
    chefObj.save();
    res.json({ msg: "Added with success!" });
});
// Busines Logic: Add Menu
app.post("/menu", (req, res) => {
    console.log("Business Logic: Add Menu");
    console.log("Request Body:", req.body);
    let menuObj = new Menu(req.body);
    menuObj.save();
    res.json({ msg: "Added with success!" })
})
// Busine Logic: edit Chef
app.put("/chefs", (req, res) => {
    console.log("Busine Logic: edit Chef")
    let newChef = req.body;
    for (let i = 0; i < chefsTab.length;) {
        if (chefsTab[i].id == newChef.id) {
            chefsTab[i] = newChef;
            break
        }
    }
    res.json({ msg: "Edited with succes!" })
})
// Busine Logic: Signup (Add user)
app.post("/users/signup", (req, res) => {
    console.log("Busines Logic: Signup Add User", req.body)
    let user = req.body;
    // search user by email to check email uniqueness
    User.findOne({ email: user.email }).then(
        // data : null or user object | data == search result
        (data) => {
            console.log("Here is data after search user by email", data);
            if (data) {
                res.json({ msg: "Email already exists", isAdded: false })
            } else {
                bcrypt.hash(req.body.password, 10).then(
                    (cryptedPassword) => {
                        console.log("Here is crypted password", cryptedPassword);
                        req.body.password = cryptedPassword;
                        let userObj = new User(req.body);
                        userObj.save();
                        res.json({ msg: "user added successfully!", isAdded: true })
                    }
                )
            }
        }
    )
});

app.post("/users/login", (req, res) => {
    console.log("Business Logic: Login", req.body);
    let newUser = req.body;
    let foundUser = users.find(user => user.email == newUser.email && user.password == newUser.password);
    if (foundUser) {
        return res.json({ msg: "Welcome" });
    }
    return res.json({ msg: "Email or password is not correct" });

});


module.exports = app;

