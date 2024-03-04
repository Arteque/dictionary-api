import { useState, createContext, useContext } from "react";

const GlobalDataContext = createContext()


export const useGlobalData = () => useContext(GlobalDataContext)

export const GlobalDataProvider = ({children}) => {
    const [globalData, setGlobalData] = useState(
      {
        "word": "heat",
        "phonetic": "/hit/",
        "phonetics": [
          {
            "text": "/hit/",
            "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/heat-us.mp3",
            "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=589489",
            "license": {
              "name": "BY-SA 3.0",
              "url": "https://creativecommons.org/licenses/by-sa/3.0"
            }
          }
        ],
        "meanings": [
          {
            "partOfSpeech": "noun",
            "definitions": [
              {
                "definition": "Thermal energy.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "This furnace puts out 5000 BTUs of heat.   That engine is really throwing off some heat.   Removal of heat from the liquid caused it to turn into a solid."
              },
              {
                "definition": "The condition or quality of being hot.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "Stay out of the heat of the sun!"
              },
              {
                "definition": "An attribute of a spice that causes a burning sensation in the mouth.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "The chili sauce gave the dish heat."
              },
              {
                "definition": "A period of intensity, particularly of emotion.",
                "synonyms": [
                  "passion",
                  "vehemence"
                ],
                "antonyms": [
                  
                ],
                "example": "It's easy to make bad decisions in the heat of the moment."
              },
              {
                "definition": "An undesirable amount of attention.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "The heat from her family after her DUI arrest was unbearable."
              },
              {
                "definition": "The police.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "The heat! Scram!"
              },
              {
                "definition": "One or more firearms.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ]
              },
              {
                "definition": "A fastball.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "The catcher called for the heat, high and tight."
              },
              {
                "definition": "A condition where a mammal is aroused sexually or where it is especially fertile and therefore eager to mate.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "The male canines were attracted by the female in heat."
              },
              {
                "definition": "A preliminary race, used to determine the participants in a final race",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "The runner had high hopes, but was out of contention after the first heat."
              },
              {
                "definition": "One cycle of bringing metal to maximum temperature and working it until it is too cool to work further.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "I can make a scroll like that in a single heat."
              },
              {
                "definition": "A hot spell.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "The children stayed indoors during this year's summer heat."
              },
              {
                "definition": "Heating system; a system that raises the temperature of a room or building.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "I'm freezing; could you turn on the heat?"
              },
              {
                "definition": "The output of a heating system.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "During the power outage we had no heat because the controls are electric.   Older folks like more heat than the young."
              },
              {
                "definition": "In omegaverse fiction, a cyclical period in which alphas and omegas experience an intense, sometimes irresistible biological urge to mate.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ]
              }
            ],
            "synonyms": [
              "passion",
              "vehemence"
            ],
            "antonyms": [
              
            ]
          }
        ],
        "license": {
          "name": "CC BY-SA 3.0",
          "url": "https://creativecommons.org/licenses/by-sa/3.0"
        },
        "sourceUrls": [
          "https://en.wiktionary.org/wiki/heat"
        ]
      },
      {
        "word": "heat",
        "phonetic": "/hit/",
        "phonetics": [
          {
            "text": "/hit/",
            "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/heat-us.mp3",
            "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=589489",
            "license": {
              "name": "BY-SA 3.0",
              "url": "https://creativecommons.org/licenses/by-sa/3.0"
            }
          }
        ],
        "meanings": [
          {
            "partOfSpeech": "verb",
            "definitions": [
              {
                "definition": "To cause an increase in temperature of (an object or space); to cause to become hot (often with \"up\").",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "I'll heat up the water."
              },
              {
                "definition": "To become hotter.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "There's a pot of soup heating on the stove."
              },
              {
                "definition": "To excite or make hot by action or emotion; to make feverish.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ]
              },
              {
                "definition": "To excite ardour in; to rouse to action; to excite to excess; to inflame, as the passions.",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ]
              },
              {
                "definition": "To arouse, to excite (sexually).",
                "synonyms": [
                  
                ],
                "antonyms": [
                  
                ],
                "example": "The massage heated her up."
              }
            ],
            "synonyms": [
              "heat up",
              "hot",
              "hot up",
              "stoke",
              "warm up"
            ],
            "antonyms": [
              
            ]
          }
        ],
        "license": {
          "name": "CC BY-SA 3.0",
          "url": "https://creativecommons.org/licenses/by-sa/3.0"
        },
        "sourceUrls": [
          "https://en.wiktionary.org/wiki/heat"
        ]
      }
    )


    return (
        <GlobalDataContext.Provider value={{globalData, setGlobalData}}>
            {children}
        </GlobalDataContext.Provider>
    )

}