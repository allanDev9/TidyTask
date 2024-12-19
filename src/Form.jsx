import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';
import './Form.scss'

export function Form() {
  return (
    <main className='body'>
      <div style={{ background: 'rgba(37, 37, 37, 0.765)'  }} className="container-form">
        <form action="" method='POST' className='form'>
          <h1>Login</h1>
          <div className="flex flex-wrap align-items-center mb-3 gap-2">
            <label htmlFor="username" className="p-sr-only">Username</label>
            <InputText id="username" placeholder="Username" className="p-invalid mr-2" />
            <Message severity="error" text="Username is required" />
          </div>
          <div className="flex flex-wrap align-items-center gap-2">
            <label htmlFor="email" className="p-sr-only">Email</label>
            <InputText id="email" placeholder="Email" className="p-invalid mr-2" />
            <Message severity="error" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default Form;
