import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/login-hook'
import { ToastContainer } from 'react-toastify'
import EnvelopeInput from '../../Components/Uitily/EnvelopeInput'

const LoginPage = () => {
    const [mail, pass, loading, ChangMail, ChangPass, onSupmt] = LoginHook()

    return (
        <div>
            <EnvelopeInput>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login"> نسيت كلمه السر</label>
                        <input
                            value={mail}
                            onChange={ChangMail}
                            placeholder="الايميل..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <input
                            value={pass}
                            onChange={ChangPass}
                            placeholder="كلمه السر..."
                            type="password"
                            className="user-input text-center mx-auto"
                        />
                        <button onClick={onSupmt} className="btn-login mx-auto mt-4">تسجيل الدخول</button>
                        <Link to="/user/forget-password" className="mx-auto mt-4" style={{ textDecoration: 'none' }}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                                هل نسيت كلمه السر
                            </span>
                        </Link>
                        <label className="mx-auto mt-2">
                            ليس لديك حساب ؟{" "}
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>



                    </Col>

                </Row>

            </EnvelopeInput>
            <ToastContainer></ToastContainer>

        </div>
    )
}

export default LoginPage
