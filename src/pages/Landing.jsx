import React from 'react'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
        <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-dark mb-2">Turn chaos into checkmarks</h1>
                                <p className="lead fw-normal text-dark-50 mb-4">Stay organized and get more done with our easy-to-use task manager, designed to help you streamline your workflow effortlessly.</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <Link to={`/Home`}  className="btn btn-primary btn-lg px-4 me-sm-3">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="https://img.lovepik.com/element/45010/3105.png_860.png" alt="..." /></div>
                    </div>
                </div>
    </>
  )
}

export default Landing