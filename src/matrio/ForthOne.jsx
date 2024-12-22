import React from 'react'

const ForthOne = () => {
  return (
    <>
    <div className="container-fluid p-5 bg-white">
        <div className="container">
            <div className="col-lg-5 text-center mx-auto">
                <h5><b className='fs-4'>Everything you need </b> to start your next project</h5>
                <p className='text-secondary'>Not just a set of tools, the package includes ready-to-deploy conceptual application.</p>
            </div>

            <div className=" my-5 mt-2 mx-auto">
                <input type="range" className='w-75 mx-auto d-block' />
            </div>

            <div className="row">
                <div className="col-lg-4 mx-auto mt-3">
                    <div className="card p-3" style={{backgroundColor:'#F4F5FA', border:"1.4px solid #8C57FF"}} >
                        <h3 className='text-center p-3'>Basic Plan</h3>
                        <div className="d-flex gap-3 align-items-center">
                            <div className="d-flex">
                                <i class="bi bi-currency-dollar"></i>
                                <h1 className='' style={{fontSize:'300%'}}>20</h1>
                            </div>
                            <div className="">
                                <h6 className='m-0'>Per month</h6>
                                <p>10% off for yearly subscription</p>
                            </div>
                        </div>
                        <div className="d-flex mt-4 gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Timeline</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Basic search</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Live chat widget</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Email marketing</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Custom Forms</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Traffic analytics</h5>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="">
                                <h6 className='m-0'>Basic Support</h6>
                                <p>Only Email</p>
                            </div>
                            <h6 className='rounded-pill  m-0' style={{ color:'#8C57FF'}}>AVG. Time: 24h</h6>
                        </div>
                        <button className="btn w-75 mx-auto d-block mt-3" style={{color:'#8C57FF', border:"1.6px solid #8C57FF"}}>Get Started</button>
                    </div>
                </div>
                
                <div className="col-lg-4 mx-auto mt-3">
                    <div className="card p-3" style={{backgroundColor:'#F4F5FA', border:"1.4px solid #8C57FF"}} >
                        <h3 className='text-center p-3'>Favourite Plan</h3>
                        <div className="d-flex gap-3 align-items-center">
                            <div className="d-flex">
                                <i class="bi bi-currency-dollar"></i>
                                <h1 className='' style={{fontSize:'300%'}}>51</h1>
                            </div>
                            <div className="">
                                <h6 className='m-0'>Per month</h6>
                                <p>10% off for yearly subscription</p>
                            </div>
                        </div>
                        <div className="d-flex mt-4 gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Timeline</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Basic search</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Live chat widget</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Email marketing</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Custom Forms</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Traffic analytics</h5>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="">
                                <h6 className='m-0'>Standard Support</h6>
                                <p>Only Email</p>
                            </div>
                            <h6 className='rounded-pill  m-0' style={{ color:'#8C57FF'}}>AVG. Time: 24h</h6>
                        </div>
                        <button className="btn w-75 mx-auto d-block mt-3" style={{color:'white', border:"1.6px solid #8C57FF", backgroundColor:'#8C57FF'}}>Get Started</button>
                    </div>
                </div>
                
                <div className="col-lg-4 mx-auto mt-3">
                    <div className="card p-3" style={{backgroundColor:'#F4F5FA', border:"1.4px solid #8C57FF"}} >
                        <h3 className='text-center p-3'>Standard Plan</h3>
                        <div className="d-flex gap-3 align-items-center">
                            <div className="d-flex">
                                <i class="bi bi-currency-dollar"></i>
                                <h1 className='' style={{fontSize:'300%'}}>99</h1>
                            </div>
                            <div className="">
                                <h6 className='m-0'>Per month</h6>
                                <p>10% off for yearly subscription</p>
                            </div>
                        </div>
                        <div className="d-flex mt-4 gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Timeline</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Basic search</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Live chat widget</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Email marketing</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Custom Forms</h5>
                        </div>
                        <div className="d-flex gap-3">
                            <i class="bi bi-arrow-right" style={{color:'#8C57FF'}}></i>
                            <h5>Traffic analytics</h5>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="">
                                <h6 className='m-0'>Exclusive Support</h6>
                                <p>Only Email</p>
                            </div>
                            <h6 className='rounded-pill  m-0' style={{ color:'#8C57FF'}}>AVG. Time: 24h</h6>
                        </div>
                        <button className="btn w-75 mx-auto d-block mt-3" style={{color:'#8C57FF', border:"1.6px solid #8C57FF"}}>Get Started</button>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    </div>
    </>
  )
}

export default ForthOne