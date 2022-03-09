import React from 'react'
import Link from 'next/link'
import MainLayouts from '@/components/MainLayouts'
import { API_URL } from '@/config/index'
export default function Homepage({events}) {
	return (
		<MainLayouts>
			<h1>Home page s</h1>
			{events.length === 0 && <h3>No Events Show</h3>}
			{events.map((elem => {
				return  (
					<h3 key={elem.id}>{elem.name}</h3>
				)
			}))}
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