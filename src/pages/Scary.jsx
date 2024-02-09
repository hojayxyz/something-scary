import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function Scary() {
  const [searchParams] = useSearchParams();
  const randomNumber = searchParams.get("rn");
  const [isScarying, setIsScarying] = useState(false);
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
    setIsScarying(true);
    setScared(0);
    var i = setInterval(function () {
      // do your thing
      const newRandcomNumber =
        Math.round(Math.random() * 100000000) *
        Math.round(Math.random() * 100000000);
      navi(`?rn=${newRandcomNumber}`);
      counter++;
      progress1();
      console.log("% hacked");
      setCountdown((c) => c + 1);
      if (counter === 100) {
        setIsScarying(false);
        clearInterval(i);
        counter = 0;
        setCountdown(0);
        // setScared(10);
      }
    }, 50);
  }

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <h1 className="m-5">
        {isScarying ? "Hacking...👻" : "Want something scary?"}
      </h1>
      {isScarying ? (
        <div>
          <h2 className="text-xl text-red-500 m-5">{randomNumber}</h2>
          <p className="text-stone-500">Watch the url 🙄</p>
          <p className="m-2">{countdown}%</p>
          <button className="m-2" onClick={() => setScared((z) => z + 1)}>
            Make it stop
          </button>
        </div>
      ) : (
        <button onClick={scaryCounter}>Make it scary</button>
      )}
      {scared === 0 && !isScarying ? (
        <div className="m-2 flex justify-center">Are you Ready?</div>
      ) : (
        <div className="flex flex-col justify-between">
          {scared > 0 ? <div className="m-2">Hehe</div> : null}
          {scared > 1 ? <div className="m-2">Scared?</div> : null}
          {scared > 3 ? <div className="m-2">Hahahaha</div> : null}
          {scared > 5 ? <div className="m-2">OWNED 😜</div> : null}
        </div>
      )}
    </div>
  );
}

export default Scary;
