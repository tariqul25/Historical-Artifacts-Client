import axios from 'axios'
import useAuth from './useAuth'

const axiosInstance = axios.create({
  baseURL: 'https://histoic-artifacts-server.vercel.app'
})

const useAxiosSecure = () => {
  const { user, logOut } = useAuth()
  const token = user?.accessToken
  //   intercept requests
  axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`

    return config
  })

  //   intercept responses
  axiosInstance.interceptors.response.use(
    res => res,
    err => {
      if (err.status === 401 || err.status === 403) {
        logOut()
          .then(() => {
            console.log(
              `Logged out because of an error with ${err.status} code.`
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