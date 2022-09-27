import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { burgerAtom } from "../../atoms";
import { NavLink } from "../../meta/nav";
import { cls } from "../../utils";
import Burger from "./UIelements/burger";

const Header = () => {
  const router = useRouter();
  //   const [isOpenSideDrawer, setIsOpenSideDrawer] = useRecoilState(burgerAtom);
  return (
    <header className="fixed top-0 m-auto max-w-2xl w-full h-12 bg-[#18181B] z-3">
      <nav className="flex items-center h-full">
        <Burger />
        {NavLink.map((link, i) => (
          <div
            key={i}
            className={cls(
              router.pathname === link.path ? "text-cyan-400" : "text-white",
              "flex justify-center items-center h-full font-thin text-[14px] uppercase px-4"
            )}
          >
            <Link href={link.path}>{link.title}</Link>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
