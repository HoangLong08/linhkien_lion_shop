import React from 'react'
import { Row, Col } from 'antd';
import '../Footer/style.css'

function index() {
	return (
		<>
			<footer>
				<Row gutter={[16, 16]}>
					<Col md={8} sm={24} xs={24}>
						<ul class="footer-list-top">
							<li>
								<h4 class="footer-list-header">About</h4></li>
							<li><a href='/shop/about-mission' class="generic-anchor footer-list-anchor" itemprop="significantLink">GET TO KNOW US</a></li>
							<li><a href='/promos.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">PROMOS</a></li>
							<li><a href='/retailers/new-retailers.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">BECOME A RETAILER</a></li>

							<li><a href='/job-openings.html' itemprop="significantLink" class="generic-anchor footer-list-anchor">JOB OPENINGS</a></li>

							<li><a href='/shop/about-show-schedule' class="generic-anchor footer-list-anchor" itemprop="significantLink">EVENTS</a></li>
						</ul>
					</Col>
				
					<Col md={8} sm={24} xs={24}>
					<ul class="footer-list-top">
						<li>
							<h4 class="footer-list-header">The Gift Selection</h4></li>


						<li><a href='/Angels/cat/id/70' class="generic-anchor footer-list-anchor">ANGEL FIGURINES</a></li>
						<li><a href='/Home-Decor/cat/id/64' class="generic-anchor footer-list-anchor">HOME DECOR</a></li>
						<li><a href='/Mugs/cat/id/32' class="generic-anchor footer-list-anchor">MUGS</a></li>
						<li><a href='/Pet-Lover/cat/id/108' class="generic-anchor footer-list-anchor">PET LOVER</a></li>
						<li><a href='/Ladies-Accessories/cat/id/117' class="generic-anchor footer-list-anchor" target="_blank">HANDBAGS & JEWELRY</a></li>
					</ul>
					
					</Col>
					<Col  md={8} sm={24} xs={24}>
						<ul class="footer-list-top">
							<li id='help'>
								<h4 class="footer-list-header">Thông tin liên hệ</h4></li>
							<li><a href='/shop/about-contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">CONTACT</a></li>
							<li><a href='/faq.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">FAQ</a></li>
							<li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor" itemprop="significantLink">STORE LOCATOR</a></li>
							<li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor" itemprop="significantLink">NEW USERS</a></li>
							<li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink" class="generic-anchor footer-list-anchor">ORDER STATUS</a></li>
						</ul>
					</Col>
				</Row>
			</footer>
		</>
	)
}

export default index
