import ReachOut from "./Footer";
import Logo from "/Eagleslogo.png";
import Image from "next/image";
function FooterMini() {
  return (
    <>
      <div className="bg-inherit w-full justify-center gap-2 py-2 ">
        <h5 className="text-xs text-center">&copy; 2024 Yaseen Mussalh</h5>
        <span className="separator hidden ">•</span>
        <div className="flex text-xs place-content-center gap-x-2">
          <h5>Designed by: Eagles Development Team</h5>
          <Image
            src="/images/Eagleslogo.png"
            alt="Logo"
            width={200}
            height={100}
            className="w-5 h-5"
          />
        </div>
      </div>
    </>
  );
}
export default FooterMini;
