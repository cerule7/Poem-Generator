import React, { useState, useEffect, memo } from 'react';
import './Poem.css';

function splitLines(poem){
    poem = poem.replace(/[^A-Za-z0-9\s!?]/g, '').toLowerCase();
    const words = poem.split(" ");
    const lines = [];
    while (words.length > 0) {
        let line = '';
        let i = Math.random() * 8;
        while (i > 0 && words.length > 0){
            line = words.pop() + ' ' + line;
            if(line.length > 30) {
                i = -1;
            }
            i--;
        }
        lines.push(line);
    }
    return lines.reverse();
}

const getShuffledArr = arr => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
};

const getRandomPunctuation = (arr, level) => {
    const newArr = [];
    const randomPunctuation = "!?,~-;:—…";
    for (let i = 0; i < arr.length; i++) {
        if (Math.random() * 10 < level) {
            newArr.push(arr[i] + randomPunctuation.charAt(Math.random() * randomPunctuation.length - 1));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

const Poem = memo((input) => {
    // eslint-disable-next-line
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [poem, setPoem] = useState([]);

    useEffect(() => {
        fetch(`https://api.quotable.io/random?minLength=10&maxLength=200`)
          .then(res => res.json())
          .then(
            (result) => {
              if(result['statusCode'] === 404) {
                  result['content'] = 'ugh this is way too difficult for a drunk man';
              }
              let lines = splitLines(result['content']);
              if (input.italics > 2) {
                  lines = getRandomPunctuation(lines, input.italics);
                  if (input.italics > 8) {
                    lines = getShuffledArr(lines);
                  }
              }
              setIsLoaded(true);
              setPoem(lines);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [input]);

    return (
        <div className='poem'>
            <div className='image'>
                <img src={`https://picsum.photos/600/600?grayscale&random=${input.randomSeed}`} alt="some random thing"/>
            </div>
            <div className="text">
                <h3>{input.userInput}</h3>
                {isLoaded ? poem.map((line) => {
                    if ((Math.random() * 10) < input.italics) {
                        return (<i><p>{line}</p></i>);
                    } else {
                        return (<p>{line}</p>);
                    }
                }) : 'Loading...'}
            </div>
        </div>
    );
});

export default Poem;