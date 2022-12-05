import type { CityListJSON } from "@/interfaces/CityListJSON"

//都市情報の取得
export const getCityInfo = async (): Promise<CityListJSON> => {
  const urlFull = "https://hal.architshin.com/wa/getCityList.php"
  const response = await fetch(urlFull)
  const json= await response.json()
  return json
}

