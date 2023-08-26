import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import VerifyPasswordHook from '../../hook/auth/verify-password-hook'

export default function UserVerifyCode() {
    const [code, ChangCode, onSupmt] = VerifyPasswordHook()

    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">ادخل كود التفعيل</label>
                    <input
                        value={code}
                        onChange={ChangCode}
                        placeholder="ادخل كود التفعيل"
                        type="text"
                        className="user-input my-3 text-center mx-auto"
                    />

                    <button onClick={onSupmt} className="btn-login mx-auto mt-4"> تاكيد</button>
                </Col>


            </Row>
            <ToastContainer></ToastContainer>

        </Container>)
}
