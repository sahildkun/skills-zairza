
import './App.css';

function App() {
  return (
    <div className="  pt-28" id='bgpic'>
      <div className='bg-white h-auto mx-auto md:mx-auto w-80 md:w-96 rounded-xl shadow-xl'  >
      
      <form action="" className='flex flex-col p-10 space-y-7 '>
        <div className='flex flex-col gap-y-1 '>
            <label className='font-bold'>NAME:</label>
            <input type="text"  className='w-full border border-gray-600   px-1 py-2 rounded-lg shadow-sm focus:outline-none
            focus:border-blue-700 focus:ring-1
            ' placeholder='Enter your name here'/>
       </div>
       <div className='flex flex-col  gap-y-1'>
            <label className='font-bold'>EMAIL:</label>
            <input type="text"  className='w-full border border-gray-600   px-1 py-2 rounded-lg shadow-sm focus:outline-none
            focus:border-blue-700 focus:ring-1' placeholder='Enter your email address'/>
        </div>
       <div className='flex flex-col  gap-y-1'>
            <label className='font-bold'>AGE:</label>
            <input type="text"  className='w-full border border-gray-600   px-1 py-2 rounded-lg shadow-sm focus:outline-none
            focus:border-blue-700 focus:ring-1' placeholder='Enter your age'/>
       </div>

       <div className='flex flex-col  gap-y-1'>
       <label for="" className='font-bold'>Which option best describes your current role?</label>

            <select name="roles" className='border border-gray-600  px-1 py-2 rounded-lg shadow-sm focus:outline-none
                  focus:border-blue-700 focus:ring-1' >
                  <option value="student" >Student</option>
                  <option value="fulltime">Full time job</option>
                  <option value="parttime">Part Time Job</option>
                  <option value="Freelance">Freelance</option>
                  
            </select>
       </div>

<div className='flex flex-col gap-y-1' >
        <div className='font-bold'>
              Would you recommend  <a href="https://zairza.in/" className='text-blue-600'>ZAIRZA</a>  to a friend?
        </div>
        <div className='flex text-center space-x-2'>
            <input type="radio" name="sdxsd" id="" />
            <label className='mb-1'>Definetly</label>
        </div>
        <div  className='flex text-center space-x-2'>
            <input type="radio" name="sdxsd" id="" />
            <label htmlFor="" className='mb-1'>Maybe</label>
        </div>
        <div  className='flex text-center space-x-2'>
            <input type="radio" name="sdxsd" id="" />
            <label htmlFor="" className='mb-1'>Not Sure</label>
        </div>
</div>


<div className='flex flex-col gap-y-1' >
      <div className='font-bold'>
         What would you like to see improved?
         (Check all that apply)
      </div>
      <div className='flex text-center space-x-2'>
        <input type="checkbox" name="" id="" />
        <label htmlFor=""  className='mb-1'>Frontend projects</label>
      </div>
      <div className='flex text-center space-x-2'>
        <input type="checkbox" name="" id="" />
        <label htmlFor=""  className='mb-1'>Backend projects</label>
      </div>
      <div className='flex text-center space-x-2'>
        <input type="checkbox" name="" id="" />
        <label htmlFor=""  className='mb-1'>Challenges </label>
      </div>
</div>



<div className='flex flex-col gap-y-3' >
    <div className='font-bold'>
      Any comments or suggestions ?
    </div> 
   <textarea name="" id="" cols="30" rows="15" className='h-32 p-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none
   focus:border-blue-700 focus:ring-1'>
   </textarea>
</div>

    
    <button type="submit" className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-2 rounded-full w-28'>SUBMIT</button>


      </form>
  
      </div>
   
    </div>
  );
}

export default App;
