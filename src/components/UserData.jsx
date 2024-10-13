/* eslint-disable react/prop-types */




const UserData = ({data}) => {
  return (
    <li className="bg-slate-200 m-2">
      <p className="text-center">{data.name}</p>
      <p className="text-center">{data.socialMediaHandle}</p>
      <div className="flex flex-wrap">
      {
        data.images.map((image,index) => (
          <img src={`https://threew-technologies-backend-1.onrender.com/${image}`} alt="images" key={index} className="w-[200px] h-[200px] m-2"/>
        ))
      }
      </div>
    </li>
  )
}

export default UserData