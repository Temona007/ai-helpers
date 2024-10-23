import   React      from "react";
import { useState } from "react";
import   axios      from "axios";

const JavaScriptPage = () => {
    const [ text,    setText ]    = useState("");
    const [ code,    setCode ]    = useState("");
    const [ error,   setError ]   = useState(false);
    const [ spinner, setSpinner ] = useState(false);

    const codeHandler = async (e) => {
        e.preventDefault();
        setError(false); 
        setSpinner(false);  

        // VALIDATION
        // Check if textarea is empty
        if (!text.trim()) {
            setError("Input cannot be empty.");
            return;
        }
        // Check if textarea contains less than 10 characters
        if (text.trim().length < 4) {
            setError("Input must be at least 4 characters long.");
            return;
        }
        setCode("");
        setSpinner(true);
        
        try {
            
            const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/openai/js-convert`, { text });
            setCode(data);
            console.log(data);
        } catch (err) {
            console.log(err);
            if (err.response.data.error)  {
                setError(err.response.data.error);
            } else if (err.message) {
                setError(err.message);
            }
            setTimeout(() => setError(''), 5000);
        }
        setSpinner(false);
    }

    return(
        <div className="container" id="ai-tool">
            <div className="row justify-content-md-center">
                <div class="col-sm-12 col-md-10">
                    <div class="card-block">
                        <h2 class="card-title text-center pb-3">JavaScript Converter</h2>
                        
                        <form onSubmit={codeHandler} class="row">
                            <div class="col-lg-10">
                                <textarea class="form-control" id="inputText" rows="2"
                                    onChange={(e) => setText(e.target.value)}
                                    value={text}
                                    placeholder="Enter instructions here..."
                                ></textarea>
                            </div>
                            <div class="col-lg-2">
                                <button type="submit" class="btn btn-primary btn-xl">Convert</button>
                            </div>
                            <div className="col-12" >
                                <div id="result-summary">
                                    {(!error && !code && !spinner) && 
                                        <h3>Code will appear here</h3>
                                    }
                                    <p>
                                        {code && code}
                                        {error && 'Error: ' + error}
                                    </p>
                                    {spinner &&
                                        <svg fill="rgb(25, 182, 151)" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><defs><filter id="svgSpinnersGooeyBalls20"><feGaussianBlur in="SourceGraphic" result="y" stdDeviation="1"/><feColorMatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"/><feBlend in="SourceGraphic" in2="z"/></filter></defs><g filter="url(#svgSpinnersGooeyBalls20)"><circle cx="5" cy="12" r="4" fill="currentColor"><animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="5;8;5"/></circle><circle cx="19" cy="12" r="4" fill="currentColor"><animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="19;16;19"/></circle><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>
                                    }
                                </div>
                            </div>
                        </form>
                        <p class="card-text lead">Not the tool are you were looking for? <a href="/">Go back..</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JavaScriptPage;