import { useState, useEffect } from 'react';

const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
};

const SpellCheck = () => {
    const [text, setText] = useState('');
    const [correction, setCorrection] = useState('');

    useEffect(() => {
        const words = text.split(' ');
        for (let word of words) {
            const lowerCaseWord = word.toLowerCase();
            if (customDictionary.hasOwnProperty(lowerCaseWord)) {
                const correctedWord = customDictionary[lowerCaseWord];
                setCorrection(`Did you mean: ${correctedWord}?`);
                return;
            }
        }
        setCorrection('');
    }, [text]);

    return (
        <div style={{ marginLeft: "15px" }}>
            <h1>Spell Check and Auto-Correction</h1>
            <textarea style={{ width: "250px", height: "100px" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text..."
            />
            {correction && <p>{correction}</p>}
        </div>
    );
};

export default SpellCheck;