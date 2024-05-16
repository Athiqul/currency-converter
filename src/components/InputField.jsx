

export  const InputField = () => {
  return (
    <div className="left-div flex py-4 lg:w-[45%] w-ful">
    <div className="amount-portion flex justify-between border rounded border-gray-300 w-full   ">
     
      <input type="text" className='focus:outline-none py-3  outline-none w-[79%] px-2' placeholder='Amount' />

      <div className="border-l border-gray-300 p-0 m-0 h-full"></div>
      <select name="" id="" className='focus:outline-none  outline-none py-3 text-center w-[20%] bg-[#f7fafc]' >
        <option value="usa">USA</option>
      </select>
   
    </div>
   
  </div>
  )
}
