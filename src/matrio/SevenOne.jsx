import React from 'react'

const SevenOne = () => {
  return (
    <>
    <div className="container-fluid py-5" style={{backgroundColor:'#2C2237'}}>
        <div className="container">
            <div className="row text-white">
                <div className="col-lg-4">
                <img width={100} src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/landing-page/img/bg-img/logo.png" alt="" />
                <p >Most Powerful & Comprehensive 🤩 React NextJS Admin Template with Elegant Material Design & Unique Layouts.</p>
                <button className="btn text-white w-25 mt-3 px-3" style={{backgroundColor:'#8C57FF'}}>Subscribe</button>
                </div>
                <div className="col-lg-6 mx-auto">
                    <div className="d-flex gap-5 new">
                        <div className="" >
                            <ul className='d-flex flex-column gap-3' style={{listStyle:'none'}}>
                                <li><b>Page</b></li>
                                <li>Pricind</li>
                                <li>Payment</li>
                                <li>Maintenance</li>
                                <li>Comming Soon</li>
                            </ul>
                        </div>
                        <div className="" >
                            <ul className='d-flex flex-column gap-3' style={{listStyle:'none'}}>
                                <li><b>Page</b></li>
                                <li>Pricind</li>
                                <li>Payment</li>
                                <li>Maintenance</li>
                                <li>Comming Soon</li>
                            </ul>
                        </div>
                        <div className="d-flex flex-column gap-3">
                            <h6>Download Our App</h6>
                            <img src="https://cheezious.com/_next/static/media/google.9b9b10ed.svg"  alt="" className='w-100 oiu' />
                            <img src="https://cheezious.com/_next/static/media/apple.50cebbed.svg" alt="" className='w-100 oiu' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SevenOne