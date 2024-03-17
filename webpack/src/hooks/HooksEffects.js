import { useEffect, useState } from "react";
import axios from 'axios'

export const HookEffects = (url, callback, setLoading) => {
  const urlBase = `http://localhost:9000/${url}`

  const request = async () => {
    const { data } = await axios.get(urlBase)
    setLoading && setLoading(false)
    callback(data)
  }

  useEffect(() => {
    setLoading && setLoading(true)
    request()
  }, [])
}