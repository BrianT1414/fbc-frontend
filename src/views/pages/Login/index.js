import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory, Redirect } from 'react-router-dom';
import Loading from '../../components/Loading';

const Login = (props) => {
	const [values, setValues] = React.useState({email: '', password: ''});

	let history = useHistory();
	
	React.useEffect(() => {
		if (props.loginMeta.success) {
			history.push('/');
			props.resetLoginMeta();
		}
	}, [props.loginMeta]);

	const submit = (e) => {
		e.preventDefault();
		props.login(values);
  }
  
  if (!props.allowLogin) {
    return <Redirect to="/" />
	}

	return (
		<form onSubmit={submit} style={{ textAlign: 'center' }}>
			<Loading show={props.loginMeta.loading} />
			<div>
				<TextField
					label="Email"
					type="email"
					value={values.email}
					onChange={(e) => setValues({...values, email: e.target.value })}
				/>
			</div>
			<div>
				<TextField
					label="Password"
					type="password"
					value={values.password}
					onChange={(e) => setValues({...values, password: e.target.value })}
				/>
			</div>
			{props.loginMeta.failure ?
				<div style={{ color: 'red' }}>{props.loginMeta.message}</div>
			: null}
			<div style={{ marginTop: 10 }}>
				<Button variant="outlined" type="submit">Login</Button>
			</div>
		</form>
	);
}

export default Login;
