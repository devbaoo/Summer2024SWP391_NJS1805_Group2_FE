export const BASE_URL = 'https://suame88.azurewebsites.net/api'

export const loginEndpoint = `${BASE_URL}/auth`
export const registerEndpoint = `${BASE_URL}/customers`

export const changePasswordEndpoint = `${BASE_URL}/Auth/change-password`

//User
export const getUserProfileEndpoint = `${BASE_URL}/Users/profile`
export const getAllUsersEndpoint = `${BASE_URL}/User/users`

//category
export const getAllCategoriesEndpoint = `${BASE_URL}/categories`
export const getCategoryByIdEndpoint = `${BASE_URL}/categories`
export const createCategoryEndpoint = `${BASE_URL}/categories`
export const updateCategoryEndpoint = `${BASE_URL}/categories`

//getAll product
export const getAllProductsEndpoint = `${BASE_URL}/products`
export const getProductByIdEndpoint = `${BASE_URL}/products`
export const createProductEndpoint = `${BASE_URL}/products`
export const updateProductEndpoint = `${BASE_URL}/products`

//Feedback Endpoints
export const getFeedbackByProductId = `${BASE_URL}/feedbacks/filter`

export const createFeedbackEndpoint = `${BASE_URL}/feedbacks`
//Order
export const CreateOrder = `${BASE_URL}/orders`
export const UpdateOrder = `${BASE_URL}/orders`


