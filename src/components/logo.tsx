import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" className="relative">
      <Image
        src="/images/aden.png"
        alt="aden-logo"
        width={50}
        height={50}
        className="object-cover"
      />
    </Link>
  );
};

export default Logo;
