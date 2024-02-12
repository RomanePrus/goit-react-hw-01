import { FriendList } from '../FriendList/FriendList';
import { Profile } from '../Profile/Profile';
import userData from '../userData.json';
import friends from '../friends.json';
import transaction from '../transactions.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};
