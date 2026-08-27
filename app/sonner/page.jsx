import DocotorForm from "./doctorForm";
import { Toaster } from "sonner";

function Sonner(){

    return(
        <>
        <DocotorForm/>
        <Toaster richColors position="top-right" />
        </>
    )
}

export default Sonner;