import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/api.php' }),
  endpoints: (builder) => ({
    getAllQuiz: builder.query({
      query: (lvl) => {
        // const lvl = localStorage.getItem('Trivia_level')
        // console.log(lvl)
        console.log('The api was consumed')
        return `?amount=10&difficulty=${lvl}&type=boolean&encode=url3986`
      },
      keepUnusedDataFor: 0
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllQuizQuery } = quizApi

// https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean