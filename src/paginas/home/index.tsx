import { Link } from 'react-router-dom';
import farmhome from '../../assets/farmhome.png'

function Home() {
    return (
        <>
        <div className="bg-slate-800 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Nosso compromisso é com a sua saude!</p>
  
              <div className="flex justify-around gap-4">
              
                <Link to='/categorias'><button className='rounded bg-white text-blue-800 py-2 px-4'> Ver categorias </button></Link>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={farmhome} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
   
      </>
    );
}

export default Home;