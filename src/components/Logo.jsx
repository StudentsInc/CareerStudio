import { Link } from "react-router-dom";

const Logo = ({ txt1, txt2, imgUrl, imgStyle, txtStyle }) => {
	return (
		<Link className='logo hidden md:flex items-center gap-2' to='/'>
			<img className={imgStyle} src={imgUrl} alt='logo' />
			<span className={`logoTitle font-bold ${txtStyle}`}>
				{txt1} <span className={`text-thin font-thin`}>{txt2}</span>
			</span>
		</Link>
	);
};

export default Logo;
