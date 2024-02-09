import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Typewriter from "../utils/Typewriter";

function Scary() {
  const [searchParams] = useSearchParams();
  const randomNumber = searchParams.get("hacking");
  const [isScarying, setIsScarying] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [scared, setScared] = useState(0);
  const [progress, setProgress] = useState(0);
  const navi = useNavigate();
  //   const { id } = useParams();
  //   console.log(id);
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
      navi(`?hacking=${newRandcomNumber}`);
      counter++;
      progress1();
      console.log("% hacked");
      setCountdown((c) => c + 1);
      if (counter === 100) {
        setIsScarying(2);
        clearInterval(i);
        counter = 0;
        setCountdown(0);
        // setScared(10);
        navi("/");
      }
    }, 100);
  }

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <h1 className="m-5">
        {isScarying === 1 ? (
          <>
            <span>Hacking</span>
            <Typewriter text="..." delay={300} infinite />
          </>
        ) : isScarying === 0 ? (
          "Want something scary?"
        ) : (
          "👻 Hacked 👻"
        )}
      </h1>
      {isScarying === 1 ? (
        <div>
          <h2 className="text-xl text-red-500 m-3">{randomNumber * 2}</h2>
          <h2 className="text-xl text-red-500 m-3">{randomNumber * 3}</h2>
          <h2 className="text-xl text-red-500 m-3">{randomNumber * 4}</h2>
          <p className="text-stone-500">Watch the url 🙄</p>
          <p className="m-2">{countdown}%</p>
          <button className="m-2" onClick={() => setScared((z) => z + 1)}>
            Make it stop
          </button>
        </div>
      ) : (
        <button onClick={scaryCounter}>Make it scary</button>
      )}
      {scared === 0 && isScarying === 0 ? (
        <div className="m-2 flex justify-center">Are you Ready?</div>
      ) : (
        <div className="m-2 flex flex-col justify-between">
          {scared > 0 ? <div className="m-2">Hehe</div> : null}
          {scared > 1 ? <div className="m-2">Scared?</div> : null}
          {scared > 2 ? <div className="m-2">Hahahaha</div> : null}
          {scared > 3 ? <div className="m-2">OWNED 😜</div> : null}
          {scared > 4 ? (
            <div>
              <p className="text-sm m-2 text-stone-500">
                Relax
                <br /> This is just a prank
              </p>
            </div>
          ) : null}
          {scared > 5 ? <div className="m-2 text-3xl">😇</div> : null}
        </div>
      )}
    </div>
  );
}

export default Scary;
