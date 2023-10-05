import Logo from "./shared/logo";

const Navbar = () => {
    return ( 
        <div className="shadow-md h-[80px] px-10 flex justify-between items-center">
            <Logo/>
        </div>
     );
}
 
export default Navbar;