import { useRouter } from "next/router"

export default function Invoice() {
    const router = useRouter();
    return (
    <>
        <h1>
         October   
        </h1>
        <div>
            Invoice number 
            {router.query.invoice}
            Due Date
            21/10/2020
        </div>
        <div>
            <h3>
                Plan Details 
            </h3>
            <h3>
                Amount
            </h3>
        </div>
        <div>
            <h4>
                ILIMITADA 30
            </h4>
            <p>
                21/09/2020 - 21/10/2020
            </p>
            <p>
                49,99
            </p>
            <hr />
        </div>
        <h2>
            Sub Total
        </h2>
        <h2>
            49,99
        </h2>
        <h3>
            VIEW INVOICE AS PDF
        </h3>
    </>
    )
}