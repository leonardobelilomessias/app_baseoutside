import { AxiosApi } from "../HandleData/ProvideServices/axios";

const stripe = require('stripe')('sk_test_51MgFSIIB8NKyA3w4cAfaUdO7duTvbJNGLp4gH5VgKqrBOHQaOJcQ2AHtOGAXoKuVavqBeix0Jw6rW6sSzwX1Z8x600VlYGDF7d');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

AxiosApi.post('/payment-sheet', async (req:any, res:any) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51MgFSIIB8NKyA3w4Ge7g5d5jK5SxIFe1OKZDb2A4J2rzdtNnMicR7t9k5xEcT6EamoRGAnyHBadKKvEwHoIpYjOw00anlfE2aQ'
  });
});