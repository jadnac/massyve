import { connect } from "react-redux"
import { Formik } from "formik"
import { useState } from "react"
import * as yup from 'yup'
import { Button, Form, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { loginUser } from "@/redux/actions/actions"
import { useRouter } from "next/router"



const Login = (props) => {
    const history = useRouter()
    const handleSubmit = async (data) => {
        props.loginUser(data).then((res) => {
            if(res?.message){
                history.push("/dashboard")
            }else{
                alert(props?.errorMessage)
            }
        })
    }

    const loginValidationSchema = yup.object().shape({
        password: yup.string().required('Password must not be empty'),
        email: yup.string().required('Username must not be empty').email('Please enter a valid email address'),
    });
    return (
        <div style={{
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Formik
                initialValues={{ password: '', email: '' }}
                onSubmit={(data) => handleSubmit(data)}
                validateOnMount={true}
                validationSchema={loginValidationSchema}>
                {({ handleChange, handleSubmit }) => (
                    <Form style={{
                        width: '50%',
                        marginTop: '10%'
                    }}>
                        <h3>Login form</h3>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor='email'>Email address</Form.Label>
                            <Form.Control
                                name='email'
                                id="email"
                                placeholder="Johndoe@example.com"
                                onChange={handleChange('email')}
                                type="email"
                                spellCheck
                            />
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control
                                name="password"
                                id="password"
                                onChange={handleChange('password')}
                                type="password"
                                placeholder="Password"
                            />

                            <Button style={{ width: '100%', marginTop: '5%' }} variant='primary' onClick={handleSubmit} >
                                {!props.loading ? 'Login' : <Spinner />}
                            </Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    isLoggedIn: state.auth.isLoggedIn,
    currentUser: state.auth.currentUser,
    errorMessage: state.auth.errorMessage
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (data) => dispatch(loginUser(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);