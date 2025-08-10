import axios from 'axios'
import useAuth from './useAuth'
import { use } from 'react'
import { HistoryContext } from '../contexts/HistoryContext'

const axiosInstance = axios.create({
  baseURL: 'https://artifact-atlas-server.vercel.app'
})

const useAxiosSecure = () => {
  const { user } = useAuth()
  const {signout}=use(HistoryContext)
  //   intercept requests
  axiosInstance.interceptors.request.use( async config => {
    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  })

  //   intercept responses
   axiosInstance.interceptors.response.use(
    res => res,
    err => {
      if (err.response?.status === 401 || err.response?.status === 403) {
        signout()
          .then(() => {
            console.log(
              `Logged out because of an error with ${err.response?.status} code.`
            )
          })
          .catch(err => console.log(err))
      }
      return Promise.reject(err)
    }
  )

  return axiosInstance
}

export default useAxiosSecure;