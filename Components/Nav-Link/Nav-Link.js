'use client'
import { usePathname } from 'next/navigation'
import Classes from '../../Layout/Header.module.css'
const { default: Link } = require("next/link")

const NavLink = ({ pathname, classNameVal, children}) => {
    const path = usePathname()
    return <Link href={`/${pathname}`} className={path.startsWith(`/${pathname}`) &&  Classes[`${classNameVal}`]}>{children}</Link>

}

export default NavLink