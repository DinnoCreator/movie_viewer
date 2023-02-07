import { useEffect, useCallback, useState } from "react";
import axios from "axios";

const Home = () => {
  const [error, setError] = useState("A new QrCode would be generated in");
  const [qrcode, setQrcode] = useState("");

  let [timer, setTimer] = useState(10);

  const interval = setInterval(function () {
    if (timer > 0)
    return setTimer(--timer);

    if (timer === 0) window.location.reload();
  }, 1000);

  const getQrcode = useCallback(async () => {
    try {
      await fetch(`http://localhost:3333/qrcode`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status !== 200) {
            return setError("Error");
          } else {
            return res.json();
          }
        })
        .then(function (jsonData) {
          setQrcode(jsonData.qrcode);
        });
      // await axios.get('http://localhost:3333/qrcode')
      //   .then(function (response) {
      //     setQrcode(response.data.qrcode);
      //   })
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  useEffect(() => {
    getQrcode();
  }, [getQrcode]);

  return (
    <>
      <h1>{error}</h1>
      <h1>{timer} sec</h1>
      <img src={qrcode} alt="qr" />
    </>
  );
};

export default Home;
