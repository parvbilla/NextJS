import { saveClientContact } from "../clientcontact/action";


function ClientContact(){
    return(
        <>
        <form action={saveClientContact}>
            <label>Name :- </label>
            <input 
            type="text" 
            required
            placeholder="enter your name"
            name="name"
            />
             <label>Email :- </label>
            <input
            type="email" 
            required
            placeholder="enter your email"
            name="email"
            />
             <label>Msg :- </label>
            <textarea 
            name="message" 
            required 
            placeholder="enter your message"
            rows={5}
            />
            <button>Submit</button>
        </form>
        </>
    )
}

export default ClientContact;