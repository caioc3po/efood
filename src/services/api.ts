import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../pages/Perfil'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedProduct: builder.query<Produto[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetFeaturedProductQuery } = api

export default api
