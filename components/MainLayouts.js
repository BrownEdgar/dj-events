import Head from 'next/head'
import styles from "@/styles/Layout.module.css"
import { useRouter } from 'next/router'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'

function MainLayouts({children}) {
	const router = useRouter()
  return (
	<>

		  <Head>
			  <title>Next Title </title>
		  </Head>
			<Header/ >
			{router.pathname === "/" && <Showcase />}
			<div className={styles.container}>{children}</div>
			<Footer/>
	</>
  )
}

export default MainLayouts