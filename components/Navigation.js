import Link from "next/link";
import styless from '../styles/header.module.css'

export default function Navigation({ text, href }) {
  return (
    <Link href={href} >
      <a className={styless.navMenu}>{text}</a>
    </Link>
  )
}