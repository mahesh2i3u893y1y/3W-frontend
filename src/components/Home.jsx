import { useState } from "react"
import { useNavigate } from "react-router-dom" 




const Home = () => {
    const [name,setName] = useState("")
    const [socialMediaHandle,setSocial] = useState("")
    const [password,setPassword] = useState("")
    const [images ,setImages] = useState(null) 
    const [adminDash,setAdminDash] = useState(false)
    const [error,setError] = useState("")
    // console.log(images)
    const navigate = useNavigate()
    
    
    const handleSubmit = async (e) =>{
        e.preventDefault()

        const formdata = new FormData() 
        formdata.append('name',name)
        formdata.append('socialMediaHandle', socialMediaHandle)
        if(images){
            for(let i=0 ;i<images.length;i++){
                formdata.append('images', images[i]);
            }
        }
        const options = {
            method: 'POST',
            body : formdata
        }
        try{
            const response = await fetch("https://threew-technologies-backend-1.onrender.com/submit", options)

            const result = response.json()
            if(result){
                alert("submitted succesfully")
            }

        }catch(err){
            console.log(err)
        }

        setName("")
        setSocial("")
        setImages(null)

    }

    const onAdminLogin = async (e) =>{
        e.preventDefault()
        const data ={
            name:name,
            password:password
        }

        let options ={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
            
        }

        const response = await fetch("https://threew-technologies-backend-1.onrender.com/admin-login",options) 
        if(response.ok === true){
           navigate("/postData")
        }else{
            setError("*Invalid Credentials")
        }
    }

  return (
    <div className="bg-blue-200 flex justify-center items-center h-screen" >
        {
            !adminDash && (
                <form className="flex flex-col bg-black p-10 rounded-md w-[400px]" onSubmit={handleSubmit}>
            <input type="text" className="py-2 px-2 my-2 outline-none" placeholder="Enter your name"
             value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" className="py-2 px-2 my-2 outline-none" placeholder=" social connection"
            value={socialMediaHandle} onChange={(e) => setSocial(e.target.value)} />
            <input type="file" multiple className="white"  onChange={(e) => setImages(e.target.files)}/>
             <button className="bg-blue-500 text-white font-sans font-semibold py-2 px-3 my-2 " type="submit" >Submit</button>
            <p className="text-white font-sans font-semibold underline cursor-pointer" onClick={() => setAdminDash(!adminDash)}>{adminDash ? "User Upload" : "Admin Login"}</p>
            </form>
            )
        }
        {
            adminDash && (
                <form className="flex flex-col bg-black p-10 rounded-md w-[400px]" onSubmit={onAdminLogin}>
                     <input type="text" className="py-2 px-2 my-2 outline-none" placeholder="Enter your name"
                    value={name} onChange={(e) => setName(e.target.value)} />
                    
                <input type="text" className="py-2 px-2 my-2 outline-none" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)} /> 
                 <button className="bg-blue-500 text-white font-sans font-semibold py-2 px-3 my-2 " type="submit" >Login</button>
                 {error && <p className="text-red-500">{error}</p>}
                 <p className="text-white font-sans font-semibold underline cursor-pointer" onClick={() => setAdminDash(!adminDash)}>{adminDash ? "User Upload" : "Admin Login"}</p>
                </form>
            )
        }
    </div>
  )
}

export default Home