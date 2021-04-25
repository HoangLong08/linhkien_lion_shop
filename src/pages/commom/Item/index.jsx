import React from 'react'
import { Card, Col} from 'antd';
const { Meta } = Card;
function index() {
	return (
		<Col md={6}>
			<a href="#">
				<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt="example" src="https://lh3.googleusercontent.com/T3osX9Kh8ESsdiXB3bN1SSvbP5lCta7ZpXrySQ_9bzzwX_a4hqXk35cDrgALyRriKzzl3AEf-J_GHQ2J2m8=w500-rw" />}
			>
				<Meta title="Europe Street beat" description="www.instagram.com" />
			</Card>,
			</a>

		</Col>
	)
}

export default index
