import './login.css'

export default function Login(){
    return(
        <div>
            <form action="post">
                <label htmlFor="email" className='label'>Endereço de e-mail</label><br />
                <input type="email" name="email" id="input" /><br />
                <label htmlFor="password" className='label'>Sua senha</label><br />
                <input type="password" name="password" id="input" /><br />
                <input type="button" value="Entrar" className='button' />
            </form>
        </div>
    )
}