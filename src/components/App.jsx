import { data } from './data/users';
import { User } from './user/User';
import { UserList } from './user-list/user-list';
import { Section } from './section/section';

export const App = () => {
  return (
    <>
      <Section>
        <User user={data[0]}/>
      </Section>
      <Section ttile="List Of Users">
        <UserList users={data}/>
      </Section>
    </>
  );
};