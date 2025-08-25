function Home() {
    return (
        <section className="vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                        <div>
                            <h1 className="text-light display-3 fw-bold">Hi!</h1>
                            <h1 className="text-light display-3 fw-bold">
                                I'M <span className="fw-bold" style={{ color: '#3A6152'}}>LEANDRO ÁGUA</span>
                            </h1>
                            <h2 className="display-5 fw-semibold mt-4" style={{ color: '#3A6152' }}>
                                DEVELOPER
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-6 d-flex justify-content-center">
                        <svg
                            width="300"
                            height="300"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <style>
                                {`
                                    .blinking-underline {
                                        animation: blink 1s infinite;
                                    }
                                    
                                    @keyframes blink {
                                        0%, 50% { opacity: 1; }
                                        51%, 100% { opacity: 0; }
                                    }
                                `}
                            </style>
                            <path
                                d="M9.49997 12.4L5 17.7999"
                                stroke="#3A6152"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.49997 12.4L5 7"
                                stroke="#3A6152"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <line
                                className="blinking-underline"
                                x1="18"
                                y1="18"
                                x2="10"
                                y2="18"
                                stroke="#3A6152"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
