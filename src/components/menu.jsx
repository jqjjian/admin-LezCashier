//import React from 'react'
// import jQuery from 'jquery'
//import '../ace/assets/js/bootstrap.min'
export default class Menu extends React.Component{
	render() {
		return(
			<div>
				<div className ="navbar navbar-default">
					<div className="navbar-container">
						<button type="button" className="navbar-toggle menu-toggler pull-left" id="menu-toggler">
							<span className="sr-only">Toggle sidebar</span>

							<span className="icon-bar"></span>

							<span className="icon-bar"></span>

							<span className="icon-bar"></span>
						</button>
						<div className="navbar-header pull-left">
							<a href="#" className="navbar-brand">
								<small>
									<i className="fa fa-leaf"></i>
									Ace Admin
								</small>
							</a>
						</div>
						<div className="navbar-buttons navbar-header pull-right" role="navigation">
							<ul className="nav ace-nav">
								<li className="light-blue">
									<a data-toggle="dropdown" href="#" className="dropdown-toggle">
										<img className="nav-user-photo" src=""/>
										<span className="user-info">
											<small>Welcome,</small>
											1111
										</span>
										<i className="ace-icon fa fa-caret-down"></i>
									</a>
									<ul className="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
										<li>
											<a href="#">
												<i className="ace-icon fa fa-cog"></i>
												Settings
											</a>
										</li>
										<li>
											<a href="#">
												<i className="ace-icon fa fa-user"></i>
												Profile
											</a>
										</li>
										<li className="divider"></li>
										<li>
											<a href="#">
												<i className="ace-icon fa fa-power-off"></i>
												Logout
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="main-container">
					<div id="sidebar" className="sidebar responsive">
						<ul className="nav nav-list">
							<li className="active">
								<a href="#">
									<i className="menu-icon fa fa-tachometer"></i>
									<span className="menu-text"> Dashboard </span>
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-desktop"></i>
									<span className="menu-text"> UI &amp; Elements </span>

									<b className="arrow fa fa-angle-down"></b>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
										<a href="#" className="dropdown-toggle">
											<i className="menu-icon fa fa-caret-right"></i>

											Layouts
											<b className="arrow fa fa-angle-down"></b>
										</a>

										<b className="arrow"></b>

										<ul className="submenu">
											<li className="">
												<a href="top-menu.html">
													<i className="menu-icon fa fa-caret-right"></i>
													Top Menu
												</a>

												<b className="arrow"></b>
											</li>

											<li className="">
												<a href="mobile-menu-1.html">
													<i className="menu-icon fa fa-caret-right"></i>
													Default Mobile Menu
												</a>

												<b className="arrow"></b>
											</li>

											<li className="">
												<a href="mobile-menu-2.html">
													<i className="menu-icon fa fa-caret-right"></i>
													Mobile Menu 2
												</a>

												<b className="arrow"></b>
											</li>

											<li className="">
												<a href="mobile-menu-3.html">
													<i className="menu-icon fa fa-caret-right"></i>
													Mobile Menu 3
												</a>

												<b className="arrow"></b>
											</li>
										</ul>
									</li>

									<li className="">
										<a href="typography.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Typography
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="elements.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Elements
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="buttons.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Buttons &amp; Icons
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="treeview.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Treeview
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="jquery-ui.html">
											<i className="menu-icon fa fa-caret-right"></i>
											jQuery UI
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="nestable-list.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Nestable Lists
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="#" className="dropdown-toggle">
											<i className="menu-icon fa fa-caret-right"></i>

											Three Level Menu
											<b className="arrow fa fa-angle-down"></b>
										</a>

										<b className="arrow"></b>

										<ul className="submenu">
											<li className="">
												<a href="#">
													<i className="menu-icon fa fa-leaf green"></i>
													Item #1
												</a>

												<b className="arrow"></b>
											</li>

											<li className="">
												<a href="#" className="dropdown-toggle">
													<i className="menu-icon fa fa-pencil orange"></i>

													4th level
													<b className="arrow fa fa-angle-down"></b>
												</a>

												<b className="arrow"></b>

												<ul className="submenu">
													<li className="">
														<a href="#">
															<i className="menu-icon fa fa-plus purple"></i>
															Add Product
														</a>

														<b className="arrow"></b>
													</li>

													<li className="">
														<a href="#">
															<i className="menu-icon fa fa-eye pink"></i>
															View Products
														</a>

														<b className="arrow"></b>
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</li>

							<li className="">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-list"></i>
									<span className="menu-text"> Tables </span>

									<b className="arrow fa fa-angle-down"></b>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
										<a href="tables.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Simple &amp; Dynamic
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="jqgrid.html">
											<i className="menu-icon fa fa-caret-right"></i>
											jqGrid plugin
										</a>

										<b className="arrow"></b>
									</li>
								</ul>
							</li>

							<li className="">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-pencil-square-o"></i>
									<span className="menu-text"> Forms </span>

									<b className="arrow fa fa-angle-down"></b>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
										<a href="form-elements.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Form Elements
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="form-wizard.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Wizard &amp; Validation
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="wysiwyg.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Wysiwyg &amp; Markdown
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="dropzone.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Dropzone File Upload
										</a>

										<b className="arrow"></b>
									</li>
								</ul>
							</li>

							<li className="">
								<a href="#">
									<i className="menu-icon fa fa-list-alt"></i>
									<span className="menu-text"> Widgets </span>
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="#">
									<i className="menu-icon fa fa-calendar"></i>

									<span className="menu-text">
										Calendar
										<span className="badge badge-transparent tooltip-error" title="2 Important Events">
											<i className="ace-icon fa fa-exclamation-triangle red bigger-130"></i>
										</span>

									</span>
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="#">
									<i className="menu-icon fa fa-picture-o"></i>
									<span className="menu-text"> Gallery </span>
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-tag"></i>
									<span className="menu-text"> More Pages </span>

									<b className="arrow fa fa-angle-down"></b>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
										<a href="profile.html">
											<i className="menu-icon fa fa-caret-right"></i>
											User Profile
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="inbox.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Inbox
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="pricing.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Pricing Tables
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="invoice.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Invoice
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="timeline.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Timeline
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="email.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Email Templates
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="login.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Login &amp; Register
										</a>

										<b className="arrow"></b>
									</li>
								</ul>
							</li>

							<li className="">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-file-o"></i>

									<span className="menu-text">
										Other Pages

										<span className="badge badge-primary">5</span>

									</span>

									<b className="arrow fa fa-angle-down"></b>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
										<a href="faq.html">
											<i className="menu-icon fa fa-caret-right"></i>
											FAQ
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="error-404.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Error 404
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="error-500.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Error 500
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="grid.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Grid
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="blank.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Blank Page
										</a>

										<b className="arrow"></b>
									</li>
								</ul>
							</li>
						</ul>
						<div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
							<i className="ace-icon fa fa-angle-double-left" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}