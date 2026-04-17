import { Suspense } from "react";
import CallbackClient from "./CallbackClient";


export default function CallbackPage() {
    return (
        <Suspense fallback={<div>로딩중 ..</div>}>
            <CallbackClient />
        </Suspense>
    )
}