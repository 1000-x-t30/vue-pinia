//天気情報取得のAPI
export const getWeatherInfo = async (q: string): Promise<any> => {
  const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather"
  const params: {
    lang: string
    q: string
    appId: string
  } = {
    lang: "ja",
    q: q,
    appId: import.meta.env.VITE_APP_ID
  }
  const queryParams = new URLSearchParams(params)
  const urlFull = `${weatherInfoUrl}?${queryParams}`
  const response = await fetch(urlFull)
  const json = await response.json()
  return json
}