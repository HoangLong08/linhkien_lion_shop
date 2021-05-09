import './style.css'
import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { removeUserAction } from '../../../redux/actions'
import { connect } from 'react-redux';

function ItemUser(props) {
  const { name, des, key, id, removeUser } = props;

  
  return (
    <tr>
      <td>{name}</td>
      <td>{des}</td>
      <td><Button type="primary" 
      shape="circle" 
      icon={< DeleteOutlined />} 
      size='middle' 
      onClick={() => removeUser({id})}/></td>
    </tr>
  );
  
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: (params) => dispatch(removeUserAction(params)),
  }
}
export default connect(null,mapDispatchToProps)(ItemUser);