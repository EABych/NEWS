const express = require('express');
const router = express.Router();
const User = require('../db/models/User');


router.put('/', async (req, res) => {

    return User.create({
            "email": req.body.email,
            "password": req.body.password,
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
        })
        // return User.create({
        //         "email": req.body.email,
        //         "password": req.body.password,
        //         "firstName": req.body.firstName,
        //         "lastName": req.body.lastName,
        //     })
        // Мне нужно время поэтому подожди пока я добавлю новый элемент и верну в твою фунцию
        .then((newUser) => {
            // я добавил и отправил тебе новый элемент на клиент
            console.log(newUser);
            return res.send({
                newUser
            });
        })
        .catch((err) => {
            return res.status(500).send({
                err
            })
        });
});
// router.get('/', function (req, res, next) {
//     // Я ToDo я могу помочь тебе с твоими списками, тут я нахожу все твои туду
//     SignIn.find({})
//         // Мне нужно подумать поэтому подожди пока я найду их все и верну в твою фунцию
//         .then((SignIn) => {
//             // я нашел все твои туду и назвал их toDo так же я отправил их на твой клиент
//             res.status(200).send({
//                 SignIn
//             });
//         })
// });



// router.delete('/11111', async (req, res) => {
//     try {
//         await SignIn.deleteMany({
//             "checkbox": true
//         });
//         console.log('ok');
//         res.sendStatus(200);
//     } catch (err) {
//         res.sendStatus(400);
//         console.log('err', err);
//     };
// });



// // Я роут я добавляю в твой список новые элементы
// router.post('/', (req, res) => {

//     ToDo.create({
//             "text": req.body.text,
//             "checkbox": req.body.checkbox,
//         })
//         // Мне нужно время поэтому подожди пока я добавлю новый элемент и верну в твою фунцию
//         .then((newToDo) => {
//             // я добавил и отправил тебе новый элемент на клиент
//             console.log(newToDo);
//             res.send({
//                 newToDo
//             });
//         })
//         .catch((err) => {
//             console.log(err)
//         });



// });

// router.delete('/', async (req, res) => {
//     try {
//         await ToDo.deleteMany();
//         res.sendStatus(200);
//     } catch (err) {
//         res.sendStatus(400);
//         console.log('err', err);
//     }
// });

// router.delete('/:_id', async (req, res) => {
//     try {
//         await ToDo.deleteOne(
//             req.params
//         );
//         console.log('ok');
//         res.sendStatus(200);
//     } catch (err) {
//         res.sendStatus(400);
//         console.log('err', err);
//     }
// });

// router.put('/333333', async (req, res) => {
//     try {
//         await ToDo.find({
//             _id: req.body._id
//         }).updateOne({
//             "text": req.body.text
//         });
//         console.log('ok');
//         res.sendStatus(200);
//     } catch (err) {
//         res.sendStatus(400);
//         console.log('err', err);
//     }
// });


// router.put('/:_id', async (req, res) => {
//     try {
//         await ToDo.find(req.params).updateOne({
//             "checkbox": req.body.checkbox
//         });
//         console.log('ok');
//         res.sendStatus(200);
//     } catch (err) {
//         res.sendStatus(400);
//         console.log('err', err);
//     }
// })







module.exports = router;