import { useEffect  } from "react";
import axios from 'axios'

export const HookEffects = ({ url, callbackSuccess, callbackLoading, callbackError }) => {
  const urlBase = `http://localhost:9000/${url}`

  const request = async () => {
    try {
      const { data } = await axios.get(urlBase)
      callbackLoading && callbackLoading(false)
      callbackSuccess(data)
    } catch(error) {
      callbackLoading && callbackLoading(false)
      callbackError && callbackError(error)
      console.log(error)
    }
  }

  useEffect(() => {
    callbackLoading && callbackLoading(true)
    request()
  }, [])
}