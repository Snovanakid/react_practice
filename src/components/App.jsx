import { data } from './data/users';
import { User } from './user/User';
import { UserList } from './user-list/user-list';
import { Section } from './section/section';
import { Component } from 'react';

import { Button } from './Button/Button';

// export const App = () => {
//   return (
//     <>
//       <Section>
//         <User user={data[0]}/>
//       </Section>
//       <Section ttile="List Of Users">
//         <UserList users={data}/>
//       </Section>
//     </>
//   );
// };


export class App extends Component {
    state = {
      isListShown: false,
      users: data,
    }
  showList = () => {
      this.setState({isListShown: true})
  }
  deleteUser = (id) => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== id)
      }
    })
  }
  render() {
    const {isListShown, users} = this.state
    return (
      <>
        <Section ttile="List Of Users">
          {!isListShown ? <Button text="Show list of users" clickHandler={this.showList} /> : <UserList users={users} deleteUser={this.deleteUser} />}
        </Section>
      </>
    )
  }
}