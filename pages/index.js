import React from 'react'
import Link from 'next/link'
import MainLayouts from '@/components/MainLayouts'
import { API_URL } from '@/config/index'
export default function Homepage() {
	return (
		<MainLayouts>
			<h1>Home page s</h1>
		</MainLayouts>
	
	)
}
export async function getServerSideProps() {
	const res = await fetch(`${API_URL}/api/events`);
	const events = await res.json();
	console.log(events);
	return {
		props:{}
	}

}