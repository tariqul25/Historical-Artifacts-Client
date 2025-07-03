import axios from 'axios'
import useAuth from './useAuth'

const axiosInstance = axios.create({
  baseURL: 'https://historical-artifacts.vercel.app'
})

const useAxiosSecure = () => {
  const { user, logOut } = useAuth()
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
        logOut()
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