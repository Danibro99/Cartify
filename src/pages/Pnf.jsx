import React, { useState, useEffect, useRef } from "react";

function Pnf() {
  const [command, setCommand] = useState("");
  const [messages, setMessages] = useState([
    "The page you requested cannot be found right meow. Try typing 'kittens'.",
  ]);
  const [kittens, setKittens] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleClick = () => inputRef.current?.focus();
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const val = command.toLowerCase().trim();

    if (val === "kittens") {
      showKittens();
    } else {
      addMessage("Sorry, that command is not recognized.");
    }

    setCommand("");
  };

  const addMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  const showKittens = async () => {
    const kittenArt = [
      "                               ,----,         ,----,                                          ,---,",
      "       ,--.                ,/   .`|       ,/   .`|                     ,--.              ,`--.' |",
      "   ,--/  /|    ,---,     ,`   .'  :     ,`   .'  :     ,---,.        ,--.'|   .--.--.    |   :  :",
      ",---,': / ' ,`--.' |   ;    ;     /   ;    ;     /   ,'  .' |    ,--,:  : |  /  /    '.  '   '  ;",
      ":   : '/ /  |   :  : .'___,/    ,'  .'___,/    ,'  ,---.'   | ,`--.'`|  ' : |  :  /`. /  |   |  |",
      "|   '   ,   :   |  ' |    :     |   |    :     |   |   |   .' |   :  :  | | ;  |  |--`   '   :  ;",
      "'   |  /    |   :  | ;    |.';  ;   ;    |.';  ;   :   :  |-, :   |   \\ | : |  :  ;_     |   |  '",
      "|   ;  ;    '   '  ; `----'  |  |   `----'  |  |   :   |  ;/| |   : '  '; |  \\  \\    `.  '   :  |",
      ":   '   \\   |   |  |     '   :  ;       '   :  ;   |   :   .' '   ' ;.    ;   `----.   \\ ;   |  ;",
      "'   : |.  \\ |   |  '     '   :  |       '   :  |   '   :  ;/| '   : |  ; .'  /  /`--'  /  `--..`;  ",
      "|   | '_\\.' '   :  |     ;   |.'        ;   |.'    |   |    \\ |   | '`--'   '--'.     /  .--,_   ",
      "'   : |     ;   |.'      '---'          '---'      |   :   .' '   : |         `--'---'   |    |`.  ",
      ";   |,'     '---'                                  |   | ,'   ;   |.'                    `-- -`, ; ",
      "'---'                                              `----'     '---'                        '---`'",
    ];

    setKittens(kittenArt);

    try {
      const res = await fetch(
        "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kittens"
      );
      const data = await res.json();
      addMessage("Huzzah Kittehs!");
      setKittens((prev) => [...prev, data.data.image_url]);
    } catch {
      addMessage("Could not load kitten GIF 😿");
    }
  };

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "black",
      color: "#1ff042",
      fontFamily: "monospace",
      padding: "2rem",
    },
    terminal: {
      position: "relative",
      padding: "4rem",
    },
    prompt: {
      display: "block",
      textTransform: "uppercase",
      fontSize: "0.9em",
      letterSpacing: "0.15em",
      textShadow: "0 0 2px rgba(31, 240, 66, 0.75)",
      marginBottom: "0.75em",
      whiteSpace: "pre-wrap",
    },
    input: {
      opacity: 0,
      position: "fixed",
      top: 0,
      left: 0,
    },
    kittenGif: {
      margin: "20px",
      maxWidth: "300px",
      display: "block",
    },
  };

  return (
    <div style={styles.page}>
      {/* Invisible input to capture user typing */}
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          style={styles.input}
        />
      </form>

      <div style={styles.terminal}>
        {messages.map((msg, i) => (
          <p key={i} style={styles.prompt}>
            {"> " + msg}
          </p>
        ))}

        {kittens.length > 0 && (
          <div>
            {kittens.map((line, i) =>
              line.startsWith("http") ? (
                <img
                  key={i}
                  src={line}
                  alt="kitten gif"
                  style={styles.kittenGif}
                />
              ) : (
                <p key={i} style={styles.prompt}>
                  {"> " + line}
                </p>
              )
            )}
          </div>
        )}

        <p style={styles.prompt}>
          {"> " + command}
          <span
            style={{
              display: "inline-block",
              width: "0.75em",
              height: "1em",
              marginLeft: "5px",
              background: "#1ff042",
              animation: "blink 1.25s steps(1) infinite",
            }}
          ></span>
        </p>

        {/* Inline keyframes */}
        <style>
          {`
            @keyframes blink {
              0%, 100% { opacity: 0; }
              50% { opacity: 1; }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Pnf;
