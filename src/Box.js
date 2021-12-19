import React, { useState } from 'react';
import Poem from './Poem.js'; 

function Box () {
    const [userInput, setUserInput] = useState('');
    const [generatePoem, setGeneratePoem] = useState(false);
    const [truePoem, setTruePoem] = useState('');
    const [randomSeed, setRandomSeed] = useState(0);
    const [userPretentiousness, setUserPretentiousness] = useState(1);
    const [truePretense, setTruePretense] = useState(-1);

    const updateInputState = (e) => {
        if (e.target.value !== userInput){
            setUserInput(e.target.value);
        }
    };

    const updatePretentiousness = (e) => {
        if (e.target.value !== userPretentiousness){
            setUserPretentiousness(e.target.value);
        }
    };

    const updateGenerateState = (e) => {
        if (e !== generatePoem){
            setGeneratePoem(e);
        }
        setTruePoem(userInput);
        setTruePretense(userPretentiousness)
        setRandomSeed(Math.random() * 1025);
    };

    const getLabel = (pretense) => {
        switch(pretense) {
            default:
            case "0":
            case "1":
            case "2":
                return "Sensible";
            case "3":
            case "4":
            case "5":
                return "Silly";
            case "6":
                return "Whimsical";
            case "7":
                return "Frivolous";
            case "8":
                return "Fragrantly Flippant";
            case "9": 
                return "Preposterously Pretentious";
            case "10":
                return "Literally Ludicrous";
        }
    };

    return (
        <div>
            <div>
                <label>
                    Title:{' '}
                    <input value={userInput} onInput={e => updateInputState(e)}/>
                </label>
                <br />
                <label>
                    Pretentiousness:{' '}
                    <input type="range" min="0" max="10" value={userPretentiousness} onChange={e => updatePretentiousness(e)} />
                </label>
                <br />
                {truePretense > -1 ? "Level: " + getLabel(userPretentiousness) + "\n": null}
                <input type="button" value="Generate!" onClick={() => updateGenerateState(true)}/>
            </div>
            <br />
            <br />
            {generatePoem && truePoem?.length > 0 ? <Poem userInput={truePoem} randomSeed={randomSeed} italics={truePretense} /> : null}
        </div>
    );
};

export default Box;