import { client } from '@root/apollo'
import {
  meQuery,
  reviewsQuery,
  reviewQuery,
  ticketsActiveQuery,
  ticketsCompleteQuery,
  ticketsMessagesQuery,
  creditsQuery,
  transactionsQuery,
  paymentMethodsQuery,
  packagesQuery,
} from '../queries'
import {
  updateProfileMutation,
  updatePasswordMutation,
  updatePhoneMutation,
  createCarNumberMutation,
  setDefaultCarNumberMutation,
  deleteCarNumberMutation,
  sendMessageToSupportMutation,
  addPaymentMethodMutation,
  choosePaymentMethodMutation,
  deletePaymentMethodMutation,
  addCreditsMutation,
  choosePackageMutation,
} from '../mutations'

export const me = () =>
  new Promise((resolve, reject) => {
    client
      .query({ fetchPolicy: 'no-cache', query: meQuery })
      .then((result) => {
        resolve(result.data.me)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const updateProfile = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: updateProfileMutation, variables: payload })
      .then((result) => {
        resolve(result.data.updateProfile)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const updatePassword = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: updatePasswordMutation, variables: payload })
      .then((result) => {
        resolve(result.data.updatePassword)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const updatePhone = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: updatePhoneMutation, variables: payload })
      .then((result) => {
        resolve(result.data.updatePhone)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const addCarNumber = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: createCarNumberMutation, variables: payload })
      .then((result) => {
        resolve(result.data.createCarNumber)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const setDefaultCarNumber = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: setDefaultCarNumberMutation, variables: payload })
      .then((result) => {
        resolve(result.data.setDefaultCarNumber)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const deleteCarNumber = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: deleteCarNumberMutation, variables: payload })
      .then((result) => {
        resolve(result.data.deleteCarNumber)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchReviews = () =>
  new Promise((resolve, reject) => {
    client
      .query({ fetchPolicy: 'no-cache', query: reviewsQuery })
      .then((result) => {
        resolve(result.data.reviews)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchReview = (payload) =>
  new Promise((resolve, reject) => {
    console.log(payload)
    client
      .query({
        fetchPolicy: 'no-cache',
        query: reviewQuery,
        variables: payload,
      })
      .then((result) => {
        resolve(result.data.review)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const messageToSupport = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: sendMessageToSupportMutation, variables: payload })
      .then((result) => {
        resolve(result.data.sendMessageToSupport)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const ticketsActive = () =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: ticketsActiveQuery,
      })
      .then((result) => {
        resolve(result.data.ticketsActive)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const ticketsComplete = () =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: ticketsCompleteQuery,
      })
      .then((result) => {
        resolve(result.data.ticketsComplete)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const ticketMessages = (payload) =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: ticketsMessagesQuery,
        variables: payload,
      })
      .then((result) => {
        resolve(result.data.ticketMessages)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchCredits = () =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: creditsQuery,
      })
      .then((result) => {
        resolve(result.data.credits)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchTransactions = () =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: transactionsQuery,
      })
      .then((result) => {
        resolve(result.data.transactions)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchPaymentMethods = () =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: paymentMethodsQuery,
      })
      .then((result) => {
        resolve(result.data.paymentMethods)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const addPaymentMethod = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: addPaymentMethodMutation, variables: payload })
      .then((result) => {
        resolve(result.data.addPaymentMethod)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const choosePaymentMethod = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: choosePaymentMethodMutation, variables: payload })
      .then((result) => {
        resolve(result.data.choosePaymentMethod)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const deletePaymentMethod = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: deletePaymentMethodMutation, variables: payload })
      .then((result) => {
        resolve(result.data.deletePaymentMethod)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const addCredits = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: addCreditsMutation, variables: payload })
      .then((result) => {
        resolve(result.data.addCredits)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const packages = () =>
  new Promise((resolve, reject) => {
    client
      .query({
        fetchPolicy: 'no-cache',
        query: packagesQuery,
      })
      .then((result) => {
        resolve(result.data.packages)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const choosePackage = (payload) =>
  new Promise((resolve, reject) => {
    client
      .mutate({ mutation: choosePackageMutation, variables: payload })
      .then((result) => {
        resolve(result.data.choosePackage)
      })
      .catch((error) => {
        reject(error)
      })
  })
