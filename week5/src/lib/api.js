import axios from "axios"; 
export const getApi = async (name) => { // name은 깃허브 아이디
  try {
    // const { data } = await client.get(name); -> baseURL을 사용할 경우
		const {data} = await axios.get('https://api.github.com/users/'+name);
    console.log("[SUCCESS] GET user data", data);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
		return null;
  }

};
