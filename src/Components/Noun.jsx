import { Fragment } from "react";
function Noun({ items, term }) {
    const nouns = items.map((element, index) => {
        if (element.partOfSpeech === term) {
            return (
                <Fragment key={`${element}-${index}` }>
                    {element.definitions.map((definition, b) => (
                        <li key={`${definition}-${b}`}>{definition.definition}</li>
                    ))}
                    {(element.synonyms.length > 0 && term !== "verb") && (
                        <div className="synonym-container">
                            <h4>Synonyms</h4>
                            <ul>
                                {element.synonyms.map((synonym,j) => (
                                    <li key={`${synonym}-${j}`}>
                                        <button>
                                            {synonym}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {term === "verb" && (
                        element.definitions.map((example, c) => (
                            example && (
                                    <Fragment key={`${example}-${c}`}>
                                        <p className="example">"{example.example}"</p>
                                    </Fragment>
                            )
                        ))
                    )}
                </Fragment>
            );
            
        }

    });

    return <>{nouns}</>;
}

export default Noun;
