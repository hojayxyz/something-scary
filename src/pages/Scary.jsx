import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Typewriter from "../utils/Typewriter";

function Scary() {
  const [searchParams] = useSearchParams();
  const randomNumber = searchParams.get("h");
  const [isScarying, setIsScarying] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [scared, setScared] = useState(0);
  const [progress, setProgress] = useState(0);
  const navi = useNavigate();
  var counter = 0;

  function progress1() {
    setProgress((progress) => progress + 1.1);
  }

  function scaryCounter() {
    setIsScarying(1);
    setScared(0);
    var i = setInterval(function () {
      // do your thing
      const newRandcomNumber =
        Math.round(Math.random() * 100000000) *
        Math.round(Math.random() * 100000000);
      navi(`?h=${newRandcomNumber}`);
      counter++;
      progress1();
      console.log("% hacked");
      setCountdown((c) => c + 1);
      if (counter === 100) {
        setIsScarying(3);
        clearInterval(i);
        counter = 0;
        // setCountdown(0);
      }
    }, 80);
  }

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <h1 className="m-5 text-4xl">
        {isScarying === 1 ? (
          <>
            <span>🙄 Hacking</span>
            <Typewriter text="...." delay={300} infinite />
          </>
        ) : isScarying === 0 ? (
          <Typewriter
            text="Want something scary?"
            delay={100}
            infinite={false}
          />
        ) : (
          "👻 Hacked 👻"
        )}
      </h1>
      {scared === 0 && isScarying === 0 ? (
        <div className="m-3 flex justify-center text-sm">
          Click when you are ready
        </div>
      ) : (
        <div className="m-3">
          {isScarying === 3 ? (
            <div>
              <p className="text-sm">
                Relax
                <br /> This is just a prank
              </p>
            </div>
          ) : null}
        </div>
      )}
      {isScarying !== 0 ? (
        <div>
          <h2 className="text-xl text-red-500 m-3">{randomNumber * 2}</h2>
          <h2 className="text-xl text-red-500 m-3">{randomNumber * 3}</h2>
          <h2 className="text-xl text-red-500 m-3">{randomNumber * 4}</h2>
          {/* <p className="text-stone-500">Watch the url 🙄</p> */}
          <p className="m-2">{countdown}%</p>
        </div>
      ) : null}
      <div className="m-3">
        {isScarying === 0 ? (
          <button
            className="font-semibold"
            onClick={() => {
              scaryCounter(1);
            }}
          >
            Make it scary
          </button>
        ) : isScarying === 1 ? (
          <button
            disabled={scared >= 10}
            onClick={() => setScared((z) => z + 1)}
          >
            {scared === 0 ? "MAKE IT STOP" : null}
            {scared === 1 ? "PLZ STOP IT" : null}
            {scared === 2 ? "OH MY GOSH " : null}
            {scared === 3 ? "HELP " : null}
            {scared === 4 ? "HELP~~~" : null}
            {scared === 5 ? "OWNED 😜" : null}
            {scared === 6 ? "OWNED 😜😜" : null}
            {scared === 7 ? "😜 😜 😜" : null}
            {scared === 8 ? "😱 😱 😱" : null}
            {scared === 9 ? "🤯 🤯 🤯" : null}
            {scared >= 10 ? "🫠 🫠 🫠" : null}
          </button>
        ) : (
          <button
            className="font-semibold"
            onClick={() => {
              scaryCounter(1);
              setCountdown(0);
            }}
          >
            Retry?
          </button>
        )}
      </div>
      {isScarying === 3 ? (
        <div className="flex flex-wrap items-center mt-10 space-x-5 justify-center">
          <div className="text-white text-sm opacity-80 m-3">
            <p>Was this fun for you?</p>
            <Typewriter
              text="Share with your frenz"
              delay={100}
              infinite={false}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Scary;
