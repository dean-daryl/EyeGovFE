import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';

type Props = {};

function SocialMediaComponents({}: Props) {
  return (
    <div className="flex justify-center items-center gap-5">
      <img src={instagram} alt="instagram" className="w-4 h-4 cursor-pointer" />
      <img src={facebook} alt="facebook" className="w-4 h-4 cursor-pointer" />
      <img src={twitter} alt="twitter" className="w-4 h-4 cursor-pointer" />
    </div>
  );
}

export default SocialMediaComponents;
