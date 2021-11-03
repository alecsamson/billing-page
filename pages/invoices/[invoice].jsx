import { useRouter } from "next/router"

export default function Invoice() {
    const router = useRouter();
    return <h1>
        This is your invoice number: {router.query.invoice}.
    </h1>
}