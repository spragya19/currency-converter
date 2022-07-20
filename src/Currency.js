import React, { useState, useEffect } from "react";
import "./App.css";

const Currency = () => {
  const [rate, setRate] = useState(0);
  const [usdPrice, setUsdPrice] = useState("");
  const [ethPrice, setEthPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT")
      .then((data) => data.json())
      .then((resp) => {
        setRate(+resp.price);
        setLoading(false);
      })
      .catch((err) => {
        alert("Something wrong occured!!");
        setLoading(false);
      });
  }, []);

  const ethHandler = (e) => {
    setEthPrice(e.target.value);
    let usdEquivalent = rate * e.target.value;
    setUsdPrice(usdEquivalent);
  };

  const usdHandler = (e) => {
    setUsdPrice(e.target.value);
    let ethEquivalent = e.target.value / rate;
    setEthPrice(ethEquivalent);
  };
  const swapHandler = () => {
    setSwap((oldValue) => !oldValue);
  };

  return (
    <>
      {!loading && (
        <div className="sc-16r8icm-0 kjciSH">
          <h3 color="text" className="sc-1q9q90x-0 bAxvyt">
            ETH to USD Converter
          </h3>
          <div className="sc-19zk94m-4 eYCtRS">
            <div className="sc-16r8icm-0 sc-19zk94m-7 grSGYV">
              <section data-hydration-on-demand="true">
                <div className="sc-19zk94m-0 fVBBJq">
                  <div
                    className={
                      swap
                        ? "sc-16r8icm-0 sc-1etv19d-0 reverseStyle"
                        : "sc-16r8icm-0 sc-1etv19d-0 fYbKeE"
                    }
                    style={{ overflow: " hidden" }}
                  >
                    <div
                      className="sc-16r8icm-0 sc-1etv19d-1 jBYVsP"
                      style={{ order: "1" }}
                    >
                      <img
                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                        alt=""
                        className="sc-1etv19d-2 fMHov"
                      />
                      <div className="sc-16r8icm-0 kjciSH">
                        <p
                          fontSize="11px"
                          color="text2"
                          className="sc-1eb5slv-0 dGjdeQ"
                        >
                          ETH
                        </p>
                        <p
                          fontSize="1"
                          fontWeight="500"
                          className="sc-1eb5slv-0 kZlTnE converter-item-name"
                          color="text"
                        >
                          Ethereum
                        </p>
                      </div>
                      <div className="sc-16r8icm-0 sc-1etv19d-4 iQGGZq">
                        <input
                          pattern="/^-?d+.?d*$/"
                          placeholder="0"
                          className="sc-1etv19d-3 dAedrQ"
                          name="eth"
                          onChange={ethHandler}
                          value={ethPrice}
                        />
                      </div>
                    </div>

                    <div
                      className="sc-16r8icm-0 sc-1etv19d-1 gzsCUI"
                      style={{ order: "2" }}
                    >
                      <img
                        src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg"
                        alt=""
                        className="sc-1etv19d-2 fMHov"
                      />
                      <div className="sc-16r8icm-0 kjciSH">
                        <p
                          fontSize="11px"
                          color="text2"
                          className="sc-1eb5slv-0 dGjdeQ"
                        >
                          USD
                        </p>
                        <p
                          fontSize="1"
                          fontWeight="500"
                          className="sc-1eb5slv-0 kZlTnE converter-item-name"
                          color="text"
                        >
                          United States Dollar
                        </p>
                      </div>
                      <div className="sc-16r8icm-0 sc-1etv19d-4 iQGGZq">
                        <input
                          pattern="/^-?d+.?d*$/"
                          placeholder="0"
                          className="sc-1etv19d-3 dAedrQ"
                          name="usd"
                          value={usdPrice}
                          onChange={usdHandler}
                        />
                      </div>
                    </div>
                    <img
                      src="https://s2.coinmarketcap.com/static/cloud/img/converter.png?_=d75d917"
                      alt="swap"
                      className={swap ? "img reverse" : "img"}
                      onClick={swapHandler}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Currency;
