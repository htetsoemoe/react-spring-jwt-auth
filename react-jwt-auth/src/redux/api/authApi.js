// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/auth' }),
    tagTypes: ["auth"], // for auto refetching

    endpoints: (builder) => ({
        login: builder.mutation({
            query: (user) => ({
                url: "/signin",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["auth"]
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = authApi
