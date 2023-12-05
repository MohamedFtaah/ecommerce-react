import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import ResetPasswordHook from '../../hook/auth/reset-password-hook'

export default function ResetPassword() {
    const [confirmPass, newPass, , ChangConfirmPass, ChangNewPass, onSupmt] = ResetPasswordHook()

    return (
        <div>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">   تغير كلمه السر</label>
                    <input
                        value={confirmPass}
                        onChange={ChangConfirmPass}
                        placeholder="تاكيد كلمه السر الجديده.."
                        type="password"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                        value={newPass}
                        onChange={ChangNewPass}
                        placeholder="كلمه السر الجديده..."
                        type="password"
                        className="user-input text-center mx-auto"
                    />
                    <button onClick={onSupmt} className="btn-login mx-auto mt-4"> تاكيد</button>





                </Col>

            </Row>

            <ToastContainer></ToastContainer>

        </div>
    )
}
