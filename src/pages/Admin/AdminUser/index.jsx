import Header from '../../commom/Header'
import './style.css'
import { getUserListAction } from '../../../redux/actions'
import { connect } from 'react-redux'
import ItemUser from './ItemUser'
import { useEffect } from 'react'

function AdminUser({userList, getUserList}) {

  useEffect(() => {
    getUserList()
  },[])

  function renderUser() {
    return userList.data.map((item) => {
      return <ItemUser key={item.id} id={item.id} name={item.userName} des={item.email}/>
    })
  }


  return (
  <>
    <Header/>
    <div className='user-container'>
      <div className='user-box'>
        <table>
          <tr className='header-table'>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          {renderUser()}
        </table>
      </div>
    </div>
  </>
  )
}
const mapStateToProps = (state) => {
  const { userList } = state.userReducer
  return {
    userList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserList: (params) => dispatch(getUserListAction(params))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (AdminUser);