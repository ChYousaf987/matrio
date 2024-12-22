import React from 'react'

const SisOne = () => {
  return (
    <>
    <div className="container ">
        <div className="row mt-5">
            <div className="col-lg-5 mx-auto mt-5">
                <h2 style={{color:'#8C57FF', fontWeight:'bold'}}>Ready to Get Started?</h2>
                <p>Start your project with a 14-day free trial</p>
                <button className="btn text-white px-3" style={{backgroundColor:'#8C57FF'}}>Get Started</button>
            </div>
            <div className="col-lg-5 my-3">
                <img src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/crm-dashboard.png" alt="" className="w-100" />
            </div>
        </div>
    </div>



    <div className="container-field py-5" style={{backgroundColor:'#F4F5FA'}}>
        <div className="container">
            <div className="col-lg-5 mt-3 text-center mx-auto">
                <h5><b className='fs-4'>Lets work</b> together</h5>
                <p className='text-secondary'>Any question or remark? just write us a message.</p>
            </div>
            <div className="row">
                <div className="col-lg-5 mx-auto">
                    <div className="card p-3 shadow" style={{backgroundColor:'#8C57FF'}}>
                        <h6 className='text-white'>Let's contact with us</h6>
                        <h4 className='text-white'>Share your ideas or requirement with our experts.</h4>
                        <div className="d-flex">
                            <img src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/chat.png" alt="" className="w-100" />
                        </div>
                        <p className='text-white'>Looking for more customisation, more features, and more anything? Don't worry, We've provide you with an entire team of experienced professionals.</p>
                    </div>
                </div>
                <div className="col-lg-6 mt-3">
                    <div className="card p-3 ">
                        <h5 className='p-2'>Share your ideas</h5>
                        <form >
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="field mt-4">
                                        <input type="text" id='username' className='form-control' placeholder='' />
                                        <label htmlFor="" for="username" className='text-'>Full Name</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="field mt-4">
                                        <input type="text" id='username' className='form-control' placeholder='' />
                                        <label htmlFor="" for="username" className='text-'>Email Address </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" fields mt-5">
                                <textarea type="text"id='username'  className='form-control my-3'style={{height:150}}  placeholder='' />
                                <label htmlFor="" for="username" className='text-'>Enter Your Name</label>
                            </div>
                            
                        </form>
                        <button className="btn text-white w-50 mt-3 px-3" style={{backgroundColor:'#8C57FF'}}>Send Inquiry</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

    </>
  )
}

export default SisOne