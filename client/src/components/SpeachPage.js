import React, { useState } from 'react';
import axios from 'axios';

const SpeachPage = () => {
    const [text,     setText]     = useState('');
    const [error,    setError]    = useState('');
    const [audioSrc, setAudioSrc] = useState('');
    const [spinner,  setSpinner]  = useState(false);

    const textToSpeechHandler = async (e) => {
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
        setAudioSrc("");
        setSpinner(true);

        try {
            // Send text to backend API for TTS conversion
            const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/openai/text-to-speech`, { text });
            
            // Set audio source to returned speech file path
            setAudioSrc(`${process.env.REACT_APP_URL}/speech.mp3`);
            setError('');
        } catch (err) {
            // Handle errors
            console.log(err);
            setError(err.response?.data?.error || err.message);
            setTimeout(() => setError(''), 5000);
        }
        setSpinner(false);
    };

    return (
        <div className="container" id="ai-tool">
            <div className="row justify-content-md-center">
                <div class="col-sm-12 col-md-10">
                    <div class="card-block">
                        <h2 class="card-title text-center pb-3">Text to Speech Converter</h2>
                        
                        <form onSubmit={textToSpeechHandler} class="row" id='audio-form'>
                            <div class="col-lg-10">
                                <textarea class="form-control" id="inputText" rows="2"
                                    onChange={(e) => setText(e.target.value)}
                                    value={text}
                                    placeholder="Enter your text here.."
                                ></textarea>
                            </div>
                            <div class="col-lg-2">
                                <button type="submit" class="btn btn-primary btn-xl">Convert</button>
                            </div>
                            <div className="col-12" >
                                <div id="result-summary">
                                    {(!error && !audioSrc && !spinner) && 
                                        <>
                                        <h3 className='d-block'>Generate the audio</h3><br />
                                        <audio className='d-block' controls src={audioSrc}></audio>
                                        </>
                                    }
                                    <p>
                                        {audioSrc && 
                                            <>
                                            <h3 className='d-block'>Play the audio result</h3><br />
                                            <audio className='d-block' controls src={audioSrc}></audio>
                                            </>
                                        }
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
};

export default SpeachPage;
