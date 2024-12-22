import React from 'react'

const Navbars = () => {
  return (
    <>
    <div className="conta w-75 mx-auto fixed-top" >
        <nav className='shadow df p-2 rounded bg-white '>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex gap-5 align-items-center">
                    <div className="d-flex gap-1">.
                        <button class="btn dfg d-none m-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="bi bi-list fs-1"></i></button>

                        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>

                                
                                
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul className='d-flex flex-column list-unstyled gap-4'>
                                    <li className='nav-menu'>Home</li>
                                    <li className='nav-menu'>Features</li>
                                    <li className='nav-menu'>Team</li>
                                    <li className='nav-menu'>FAQ</li>
                                    <li className='nav-menu'>Contant Us</li>
                                    
                                </ul>
                            </div>
                        </div>
                        
                        <img width={100} src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/landing-page/img/bg-img/logo.png" alt="" />
                    </div>
                    <ul className='d-flex nav-li m-0 list-unstyled gap-4'>
                        <li className='nav-menu'>Home</li>
                        <li className='nav-menu'>Features</li>
                        <li className='nav-menu'>Team</li>
                        <li className='nav-menu'>FAQ</li>
                        <li className='nav-menu'>Contant Us</li>
                        <li className="d-flex nav-menu mi align-items-center position-relative">
                            <li>Page</li>
                            <i class="bi bi-chevron-down">
                                <div className=" p-3 dropdown position-absolute shadow" style={{backgroundColor:'whitesmoke'}}>
                                    <div className="">
                                    <div className="d-flex align-items-center gap-2">
                                        <i class="bi bi-grid-3x3-gap"></i>
                                        <h6 className='m-0'>Page</h6>
                                    </div>
                                    <ul>
                                        <li>Pricing</li>
                                        <li>Payment</li>
                                        <li>Checkout</li>
                                        <li>Help Center</li>
                                    </ul>
                                    </div>

                                    <div className="">
                                    <div className="d-flex gap-2 align-items-center">
                                        <i class="bi bi-lock"></i>
                                        <h6 className='m-0'>Auth Demo</h6>
                                    </div>
                                    <ul>
                                        <li>Login (Basic)</li>
                                        <li>Login (Cover)</li>
                                        <li>Register (Basic)</li>
                                        <li>Register (Cover)</li>
                                        <li>Register (Multi-steps)</li>
                                        <li>Forgot Password (Basic)</li>
                                        <li>Forgot Password (Cover)</li>
                                        <li>Reset Password (Basic)</li>
                                        <li>Reset Password (Cover)</li>
                                    </ul>
                                    </div>

                                    <div className="">
                                    <div className="d-flex gap-2 align-items-center">
                                    <i class="bi bi-image"></i>
                                        <h6 className='m-0'>Auth Demo</h6>
                                    </div>
                                    <ul>
                                        <li>Under Maintenance</li>
                                        <li>Coming Soon</li>
                                        <li>Not Authorized</li>
                                        <li>Verify Email (Basic)</li>
                                        <li>Verify Email (Cover)</li>
                                        <li>Two Steps (Basic)</li>
                                        <li>Two Steps (Cover)</li>
                                    </ul>
                                    </div>
                                    <img src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/dropdown-image-light.png" className='drop-image' width={100} alt="" />
                                </div>
                            </i>
                        </li>
                        <li>Admin</li>
                    </ul>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <i class="bi bi-brightness-high"></i>
                    <button className="btn text-white d-flex gap-2" style={{backgroundColor:'#8C57FF'}}>
                        <i class="bi bi-cart"></i>
                        <p className='m-0 mk'>Purchease Now</p>
                    </button>
                </div>
            </div>
        </nav>
    </div>


    
    </>
  )
}

export default Navbars