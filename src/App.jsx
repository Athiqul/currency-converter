import { InputField } from "./components/InputField";
import { Switch } from "./components/Switch";
function App() {



  return (
   <div className="w-full h-full bg-[#F5F5F5]" >
        <div className="h-screen flex items-center justify-center flex-col">
            <div className='bg-[#F0F5FF] py-10 px-10 w-full flex  justify-center relative overflow-visible'>
              <div className='lg:mb-16 mb-36 '>
              <h1 className='text-3xl font-extrabold py-8 text-center'>Currency Converter</h1>
              <p className='text-sm text-center'>Need to make an international business payment? Take a look at our live foreign exchange rates.</p>
              </div>

              <div className='bg-[#FFFFFF] flex justify-center flex-col py-10 px-8  absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-[100%] w-[80%]'>
               <div className="info flex flex-col justify-center">
               


                    {/* For converter infput */}
                   
            <div className='w-full lg:flex justify-between items-center gap-2'>
             <InputField/>
             <Switch/>
             <InputField/>
            </div>

               </div>


             
            </div>

           
            </div>
            <div className='bg-[#FFFFFF] h-full w-full'>
             
            </div>
           
        </div>
   </div>
  )
}

export default App
