import Link from 'next/link'
import MainLayouts from '@/components/MainLayouts'
import styles from "@/styles/404.module.css"
import { FaExclamationTriangle } from "react-icons/fa"

export default function NotFoundPage() {
	return (
		<MainLayouts>
			<div className={styles.error}>
				<h1> <FaExclamationTriangle></FaExclamationTriangle>404</h1>
				<h4>Sorry, there is nothing here</h4>
				<Link href="/">
					Go Back home
				</Link>
			</div>
		</MainLayouts>
	)
}
