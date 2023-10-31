require("dotenv").config()

const express = require("express")
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:5173/",
    })
)

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const calculateOrderAmount = (items) => {
    const totalPrice = items.reduce((acc, item) => {

        const itemTotal = item.price * item.quantity
        return acc + itemTotal
    }, 0)
    return totalPrice
}

app.post("/create-payment-intent", async (req, res) => {

    const { items } = req.body

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: 'CNY',
        automatic_payment_methods: {
            enabled: true,
        },
    })

    res.send({
        clientSerect: paymentIntent.client_secret,
    })


    // try {
    //     const session = await stripe.checkout.sessions.create({
    //         payment_method_types: ["card"],
    //         mode: 'payment',
    //         line_items: req.body.items.map(item => {
    //             return {
    //                 price_data: {
    //                     currency: "CNY",
    //                     product_data: {
    //                         name: item.name
    //                     },
    //                     unit_amount: (item.price),
    //                 },
    //                 quantity: item.quantity
    //             }
    //         }),
    //         success_url: 'http://localhost:5173/success',
    //         cancel_url: 'http://localhost:5173/cancel'
    //     })
    //     res.json({ url: session.url })
    // } catch (error) {
    //     res.status(500).json({ error: error.message })
    // }
})