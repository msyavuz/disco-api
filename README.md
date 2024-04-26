# Disco API

Public API for actors and dialogue entries of the game Disco Elysium.

> [!NOTE] 
> You can also clone and run the repo yourself. `disco.db` file is included, you just have to point the app to it as the datasource. Currently i run this on free instances of both Koyeb and Supabase so downtime is inevitable.

## Endpoints

Base url: `https://disco-msyavuz.koyeb.app/api/v1`

### Actors

- Get a random actor
    - `/actors`
    ```json
    {
        "id": 216,
        "name": "Coin-Operated Viewer",
        "description": "A mounted telescope on the plaza.:0:0",
        "talkativeness": 13
    }
    ```

- Get an actor with id
    - `/actors/2`
    ```json
    {
      "id": 3,
      "name": "Kim Kitsuragi",
      "description": "::",
      "talkativeness": 11289
    }
    ```

- Search for an actor with name or description with respective query parameters
    - `/actors?name=electro&description=party`
    ```json
    [
        {
            "id": 405,
            "name": "Electrochemistry",
            "description": ":Go to party planet. Love and be loved by drugs.:COOL FOR: HIGH-FLIERS. PARTY ENTHUSIASTS. COPS WHO NEED LIGHTNING.\n\nElectrochemistry is the animal within you, the beast longing to be unleashed to indulge and enjoy. It enables you to take drugs with fewer negative side-effects. It also enables you to better investigate lurid matters – if you need to understand a chemical breakdown, or talk to someone blasted out of their mind, or understand sexual dynamics, Electrochemistry is there to guide you.\n\nAt high levels, Electrochemistry makes you a man of unrestrained pleasure – an unrepentant lothario who leers at people with a bottle of speed and a plastic bendy straw in either hand. But with a low Electrochemistry, you’ll be too innocent to be effective. Without a working knowledge of drugs and sex, the city will be difficult to understand.",
            "talkativeness": 656
        }
    ]
    ```

### Dialogue Entries

- Get a random dialogue entry
    - `/dentries`
    ```json
    {
        "id": 503,
        "title": "Noid: \"\"Right.\" He takes a bolt from the t...\"",
        "dialoguetext": "\"Right.\" He takes a bolt from the toolbox and spits on it before shining it.",
        "actor": 28,
        "conversant": 387,
        "conversationid": 566
    }
    ```

- Get one by id
    - `/dentries/5`
    ```json
    {
        "id": 5,
        "title": "Volition: \"You feel uncertain, like a child wh...\"",
        "dialoguetext": "You feel uncertain, like a child who's lost his mother in the crowd.",
        "actor": 397,
        "conversant": 387,
        "conversationid": 142
    }
    ```
- Search for a dialogue entries with parameters: title, dialoguetext, actor, conversant, conversationid
    - `/dentries?text=detective&actor=397`
    ```json
    [
        {
            "id": 381,
            "title": "Volition: \"I wouldn't be so sure, detective.\"",
            "dialoguetext": "I wouldn't be so sure, detective.",
            "actor": 397,
            "conversant": 387,
            "conversationid": 459
        },
        {
            "id": 200,
            "title": "Volition: \"You're no tiger, though, detective....\"",
            "dialoguetext": "You're no tiger, though, detective. You're a man. It's your curse to have to choose.",
            "actor": 397,
            "conversant": 0,
            "conversationid": 505
        }
    ]
    ```
