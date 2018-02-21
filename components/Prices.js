export default class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    let bpiValue = this.props.bpi;
    let keys = Object.keys(bpiValue);
    const rows = [];
    keys.forEach(key => {
      rows.push(
          <li className="list-group-item" key={bpiValue[key].code}>
          Bitcoin rate for {bpiValue[key].description} :
          <span className="badge badge-primary">{bpiValue[key].code}</span>
          <strong>{bpiValue[key].rate}</strong>Í
        </li>
      );
    });

    return (
      <div>
        <ul className="list-group">
          {rows}
          {/* <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.USD.description} :
                        <span className="badge badge-primary">{this.props.bpi.USD.code}</span>
                        <strong>{this.props.bpi.USD.rate}</strong>Í
                    </li> */}
        </ul>
      </div>
    );
  }
}
