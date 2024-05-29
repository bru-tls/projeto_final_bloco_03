import { FirstAid, ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
             
        <div className='
            w-full 
            bg-slate-800  
            text-white 
            flex 
            justify-center 
            py-4
        '>
            <div className="
                container 
                flex 
                justify-between 
                text-lg
            ">
                <Link to='/home'><FirstAid size={48} color="#ff3838" weight="bold" /></Link>

        
            <div className='flex gap-4 py-4'>
                <Link to='/categorias' className='hover:underline'>Categorias</Link>
                <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                <User size={32} weight='bold' />
                <ShoppingCart size={32} weight='bold' />
            </div>
            </div>
            </div>
                )
}
export default Navbar;