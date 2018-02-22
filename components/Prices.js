export default class Prices extends React.Component {
  render() {
    let keys = Object.keys(this.props.bpi);
    const rows = [];
    keys.forEach(key => {
      rows.push(
          <li className="list-group-item" key={this.props.bpi[key].code}>
          {this.props.bpi[key].description}  &nbsp; 
          <span className="badge badge-primary">{this.props.bpi[key].code}</span> &nbsp; 
          <strong>{this.props.bpi[key].rate}</strong>
        </li>
      );
    });

    return (
      <div>
        <ul className="list-group">
          {rows}
        </ul>
      </div>
    );
  }
}
