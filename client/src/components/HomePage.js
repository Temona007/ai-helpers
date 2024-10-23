import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    return(
        <div className="container-fluid">
            <div className="row"> 
                <header class="masthead bg-primary text-white text-center">
                    <div class="container d-flex align-items-center flex-column">
                        <h1 class="masthead-heading text-uppercase mb-0">Boost productivity</h1>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                        </div>
                        <p class="masthead-subheading font-weight-light mb-0 advantage-text">with AI-powered tools</p>
                    </div>
                </header>

                {/* <!-- Tools Section--> */}
                <section class="page-section portfolio" id="portfolio">
                    <div class="container">

                        <br /><br />
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0" id="text-gnrtr">Text Generation</h2>
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-md-4">
                                <div onClick={() => navigate("/summary")} class="card-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="100" height="100">
                                        <path fill="rgb(25, 182, 151)" d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/>
                                    </svg>
                                    <h5 class="card-title lead">Text Summarizer</h5>
                                    <p class="card-text lead">Summarize long and tedious articles into just a few sentences!</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4">
                                <div onClick={() => navigate("/paragraph")} class="card-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="100" height="100">
                                        <path fill="rgb(25, 182, 151)" d="M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                                    </svg>
                                    <h5 class="card-title lead">Paragraph Generator</h5>
                                    <p class="card-text lead">Generate an informative blurb about any topic!</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4">
                                <div onClick={() => navigate("/chatbot")} class="card-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="100" height="100">
                                        <path fill="rgb(25, 182, 151)"  d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"/>
                                    </svg>
                                        <h5 class="card-title lead">Yoda Chatbot</h5>
                                    <p class="card-text lead">Gain insights from a Yoda-like virtual assistant!</p>
                                </div>
                            </div>
                        </div>

                        <br /><br />
                        <br />
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Image, Audio, Code Converters</h2>
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-md-4">
                                <div onClick={() => navigate("/img-generator")} class="card-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100" height="100">
                                        <path fill="rgb(25, 182, 151)" d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
                                    </svg>
                                    <h5 class="card-title lead">Italian image Generator</h5>
                                    <p class="card-text lead">Create an Italian version of any image concept!</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4">
                                <div onClick={() => navigate("/text-to-speech")} class="card-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="100" height="100">
                                        <path fill="rgb(25, 182, 151)" d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/>
                                    </svg>
                                    <h5 class="card-title lead">Text to Speech</h5>
                                    <p class="card-text lead">Convert written text into human-like audio directly within the app!</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4">
                                <div onClick={() => navigate("/js-convert")} class="card-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="100" height="100">
                                        <path fill="rgb(25, 182, 151)" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
                                    </svg>
                                    <h5 class="card-title lead">JavaScript Converter</h5>
                                    <p class="card-text lead">Translate English text <br />into JS code!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* <!-- About Section--> */}
                <section class="page-section bg-primary text-white mb-0" id="about">
                    <div class="container">

                        <h2 class="page-section-heading text-center text-uppercase text-white">AI advantages</h2>

                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 ms-auto text-center"><p class="lead advantage-text">AI helps you streamline tasks, save time, and stay ahead in an AI-driven world</p></div>
                        </div>

                        <div class="text-center mt-4">
                            <a class="btn btn-xl btn-outline-light" target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01efeb701886987874">
                                <i class="fas fa-download me-2"></i>
                                Get Started!
                            </a>
                        </div>
                    </div>
                </section>  
            </div>
        </div>
    );
}

export default HomePage;