import { useEffect,useState } from "react"
import UserData from "./UserData"


const PostData = () => {
  const [usersData, setUsersData] = useState(null)

  useEffect(() =>{
    getUsersData()
  },[])

  const getUsersData = async () =>{
    const response = await fetch("https://threew-technologies-backend-1.onrender.com/users")
    const result = await response.json()
    setUsersData(result)
  }

  

  if(usersData === null) return null
    return (
    <div>
      <ul className="">
        {
          usersData.map((eachItem) => (
             <UserData data={eachItem} key={eachItem._id}/>
          ))
        }
      </ul>
    </div>
  )
}

export default PostData