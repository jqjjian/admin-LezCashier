class  ProductName extends React.Component {
  render() {
    return (
    	<tr>
    		<th colSpan="2">{this.props.category}</th>
    	</tr>
    );
  }
}
class  ProductRow extends React.Component {
  render() {
  	const product = this.props.product;
  	var name = product.stocked ? product.name : <span style={{color:'red'}} >{product.name}</span>;
    return (
    	<tr>
    		<td>{name}</td>
    		<td>{product.price}</td>
    	</tr>
    );
  }
}
class Listbox extends React.Component {
  render() {
  	var lastCategory  = null,
  			rows =[];
  	const products = this.props.products,
  				fText = this.props.filterText;
  	products.map(product => {
  		const name = product.name;
  		if((name.indexOf(fText) === -1  && name.indexOf(fText.toUpperCase()) === -1 && product.price.indexOf(fText) === -1) || (!product.stocked && this.props.inStockOnly)){
  			return;
  		}
  		if(product.category!==lastCategory ){
  			rows.push(<ProductName category={product.category} key={product.category}/>);
  		}
  		rows.push(<ProductRow product={product} key={product.name}/>);
  		lastCategory  = product.category;
  	});
    return (
    	<table>
    		<thead>
    			<tr>
	    			<th>Name</th>
	    			<th>Price</th>
    			</tr>
    		</thead>
    		<tbody>
    			{rows}
    		</tbody>
    	</table>
    );
  }
}

class Searchbar extends React.Component {
	handleChange(){
		this.props.onUserInput(
			this.refs.filterTextInput.value,
			this.refs.inStockOnlyInput.checked
		);
	}
  render() {
    return (
    	<form>
    		<input
    			type="text"
    			placeholder="Search..."
    			value={this.props.filterText}
    			ref="filterTextInput"
    			onChange={::this.handleChange}
    		/>
    		<p>
    			<input
    				type="checkbox"
    				checked={this.props.inStockOnly}
    				ref="inStockOnlyInput"
    				onChange={::this.handleChange}
    			/>
    			{' '}
    			Only show products in stock
    		</p>
    	</form>
    );
  }
}

export default class TabBox extends React.Component { //body
	constructor() {
		super();
		this.state = {
			filterText: '',
      inStockOnly: false
		}
	}

	handleUserInput(filterText, inStockOnly){
		this.setState({
			filterText: filterText,
      inStockOnly: inStockOnly
		});
	}
	// componentDidMount() {
	// 	this.handleUserInput();
	// }
  render() {
    return (
      <div>
      	<Searchbar
	      	filterText={this.state.filterText}
	      	inStockOnly={this.state.inStockOnly}
	      	onUserInput={::this.handleUserInput}
      	/>
      	<Listbox
      		products={this.props.products}
      		filterText={this.state.filterText}
	      	inStockOnly={this.state.inStockOnly}
      	/>
      </div>
    );
  }
}


