
export default class Body extends React.Component { //body
  render() {
    return (
      <div>
      	<HeaderBox />
      	<Minbox />
      </div>
    );
  }
}


class HeaderBox extends React.Component{ //头部
	render(){
		return(
			<header className="navbar navbar-static-top bs-docs-nav">
				<div className="container-fluid">
					<NavHeader />
					<Navbar />
				</div>
			</header>
		);
	}
}

class Minbox extends React.Component{ //主体内容区块
	render() {
		return (
			<div className="container-fluid no-pd">
				<Sidebar />
				<MinContent />
			</div>
		);
	}
}
class MenuText extends React.Component{//菜单子项
	constructor(){
		super();
		this.state = {
			open: false
		}
	}
	handleClick(e){
		e.stopPropagation();
		this.setState({
			open: this.state.open!==true ? true : false
		});
		this.props.onOpen(!this.state.open)
	}
	render(){
		var nodeText = this.props.type ? <div data-open={this.state.open} onClick={::this.handleClick} style={this.props.style} className="sidebar-menu-sub-title" >
			<span className={cn('glyphicon',this.props.type)}></span>{this.props.children}
		</div> : <div data-open={this.state.open} onClick={::this.handleClick} style={this.props.style} className="sidebar-menu-sub-title" >{this.props.children}</div>
		return nodeText;
		
	}
}

class MenuItem extends React.Component{//菜单列表
	constructor(){
		super();
		this.state = {
			open: false
		}
	}
	handleClick(e){
		const id = e.target.id
		e.stopPropagation();
		this.props.activeClick(id)
	}
	handleOpen(boole){
		this.setState({
			open: boole
		});
	}
	render(){
		const {menu} 		 = this.props
			var active 		 = this.props.activeId==this.props.dataId ? 'active' : '',
					open       = this.state.open ? 'open' : '',
					activeId   = this.props.activeId,
					pdleft     = this.props.pdleft,
					itemstyle  = {paddingLeft: pdleft+'px'},
					menuNode 	 = menu.children ? <li
						id={this.props.dataId}
						className={cn('sidebar-menu-sub',open,active)}>
						<MenuText  type={this.props.type} onOpen={::this.handleOpen} style={itemstyle} className="sidebar-menu-sub-title">{menu.title}</MenuText>
						<SidebarMenu pdleft={pdleft} body={menu.children} activeClick={this.props.activeClick} activeId={this.props.activeId}/>
					</li> : <li
						id={this.props.dataId}
						className={cn('sidebar-menu-sub',active)}
						onClick={::this.handleClick}
						style={itemstyle}>
						{menu.title}
					</li>;
		return menuNode;
	}
}
class SidebarMenu extends React.Component{//ul
	constructor(){
		super();
		this.state = {
			open: false,
			activeId: ""
		}
	}

	handleOpen(boole){
		this.setState ({
			open: boole
		});
	}
	
	render() {
		const { body, type, activeId, activeClick, open} = this.props;
		var pdleft = this.props.pdleft+24,
		nodeArr=[];
		body.map((m,i)=>{
			nodeArr.push(
			<MenuItem
				pdleft={pdleft}
				key={'m'+i}
				dataId={m.id}
				menu={m}
				activeId={activeId}
				activeClick = {activeClick}
				onOpen={::this.handleOpen}
				open={open}
				type={type?type[i]:false}
			/>
		)}
				);
		return (
			<ul className="sidebar-menu">
				{nodeArr}
			</ul>
		);
	}
}

class Sidebar extends React.Component{ //菜单边栏
	constructor(){
		super();
		this.state = {
			activeId:''
		}
	}
	handleActive(id){//选中项
		this.setState({
			activeId: id
		});
	}
	render() {
		let menu2 = [
			{
				id:'yy',
				title: '运营系统',
				children: [
					{
						id: '1_1',
						title:'m1-1'
					},{
						id: '1_2',
						title:'m1-2',
						children: [
							{
								id: '1_2_1',
								title:'m1-2-1'
							}
						]
					},{
						id:'1_3',
						title:'m1-3'
					},
				]
			},{
				id:'xxx',
				title: '财务系统',
				children: [
					{
						id:'2_1',
						title: 'm2_1'
					}
				]
			},{
				id:'b',
				title: '客服系统',
			},
			{
				id:'a',
				title: '系统管理',
			}
		];
		return (
			<div className="col-xs-12 col-sm-3 col-md-2 col-lg-2 no-pd-left">
				<div className="sidebar-box">
					<SidebarMenu type={['glyphicon-envelope', 'glyphicon-glass', 'glyphicon-heart']} open={false} pdleft={0} body={menu2} activeClick={::this.handleActive} activeId={this.state.activeId}/>
				</div>
			</div>
		);
	}
}
class MinContent extends React.Component{ //主内容区域
	render() {
		return (
			<div className="col-md-9">
				<h3>主内容</h3>
			</div>
		);
	}
}

class NavHeader extends React.Component{ //LOGO
	render(){
		return(
			<div className="navbar-header">
				<button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar">
					<span className="sr-only"> Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a href="#" className="navbar-brand"> 聚乐付 | 后台管理系统</a>
			</div>
		);
	}
}

class Navbar extends React.Component{//用户信息
	render(){
		return (
			<nav className="collapse navbar-collapse ">
				<ul className="nav navbar-nav navbar-right">
				  <li className="dropdown">
				  	<a href="#" classNmae="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">管理员<span className="caret"></span></a>
					  <ul className="dropdown-menu">
					  	<li><a href="#">Action</a></li>
	            <li><a href="#">Another action</a></li>
	            <li><a href="#">Something else here</a></li>
	            <li role="separator" className="divider"></li>
	            <li><a href="#">Separated link</a></li>
					  </ul>
				  </li>
				</ul>
			</nav>
		);
	}
}