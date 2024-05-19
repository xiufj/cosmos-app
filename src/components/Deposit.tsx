import { Space, Button } from "./index";
import "../styles/deposit.css";

export const Deposit = () => {
  return (
    <div className="deposit-container">
      <div className="deposit-header">
        <div className="header">
          <p className="from">From Umee</p>
          <div className="input-key">
            <img
              alt="Umee"
              src="https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg"
              width="27"
              height="28"
            />
            <p className="input-key-text">umee1l…xdaxk</p>
          </div>
        </div>
        <p className="deposit-to">→</p>
        <div className="header">
          <p className="from">To Osmosis</p>
          <div className="input-key">
            <img
              alt="Umee"
              src="https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
              width="27"
              height="28"
            />
            <p className="input-key-text">osmo1l…trj5k</p>
          </div>
        </div>
      </div>
      <div className="deposit-content">
        <div className="content-title">
          <label>Select amount</label>
          <Space>
            <p>Available</p>
            <p style={{ fontWeight: 600 }}>25.89</p>
            <p style={{ fontWeight: 600 }}>UMEE</p>
          </Space>
        </div>
        <div className="input-field">
          <div className="input-content">
            <div className="input-left">
              <img
                alt="Umee"
                src="https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg"
                width="40"
                height="40"
              />
            </div>
            <input />
            <p className="input-right">UMEE</p>
          </div>
        </div>
        <div className="amout">
          <Space>
            <span className="amount-set">Max</span>
            <span className="amount-set">1/2</span>
            <span className="amount-set">1/3</span>
          </Space>
        </div>
        <div className="estimated">
          Estimated time:<span style={{ fontWeight: 600 }}> 20 seconds</span>
        </div>
        <Button text="Transfer" type="primary" />
        <Button text="Cancel" type="text" />
      </div>
    </div>
  );
};
