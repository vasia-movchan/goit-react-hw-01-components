import { Profile } from 'components/Profile/Profile';
import user from 'data/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import stat from 'data/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'data/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '36px',
        paddingBottom: '36px',
        gap: '50px',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" data={stat} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
