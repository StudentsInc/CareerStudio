import Button from "../../Button";
import "../../../pages/pagesStyle.css";
import { google, facebook } from "../../../assets/images";
// import {google} from "../../../assets/images"
const SignUpOptions = (props) => {
  // const validateEmail = () => {};
  return (
    <div
      className={`md:w-full relative left-1/2 -translate-x-1/2 flex flex-col gap-3 mt-5 max-[640px]:w-full`}
    >
      <Button
        text='Sign Up'
        func={props.onSubmitHandler}
        type={"submit"}
        className={`w-full h-[52px] bg-[#3D3BFF] text-white shadow-[0_0_15px_rgba(0,0,0,0.7)_inset] font-bold rounded-xl`}
      />

      <button className='flex items-center justify-center w-full font-bold max-w-full h-[52px] bg-[#2D3748] text-white rounded-xl'>
        <img src={google} alt='Google' className='mr-3' />
        Signup with Google
      </button>
      <button className='flex items-center justify-center w-full font-bold max-w-full h-[52px] bg-[#2D3748] text-white rounded-xl'>
        <img src={facebook} alt='Facebook' className='mr-3' />
        Signup with Facebook
      </button>
    </div>
  );
};
export default SignUpOptions;
