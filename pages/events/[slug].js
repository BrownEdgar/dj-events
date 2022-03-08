import { useRouter } from "next/router"
import MainLayouts from "@/components/MainLayouts";


export default function EventPage() {
	const router =	useRouter();
	console.log(router)
	return (
		<MainLayouts>
			<h1>My Event</h1>
			<h3>{router.query.slug}</h3>
			<button onClick={()=> router.push("/")}>ghome page</button>
		</MainLayouts>
	)
}
