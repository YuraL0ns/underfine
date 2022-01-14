import Link from "next/link";
import styless from '../styles/header.module.css'

export default function Logo() {
  return (
    <Link href="/" >
      <a className={styless.logotype}>awdesing</a>
    </Link>
  )
}