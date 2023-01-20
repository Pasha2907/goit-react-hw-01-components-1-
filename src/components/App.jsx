import css from './App.module.css';
import { Profile } from './Profile/Profile';
import user from './Files/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Files/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './Files/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './Files/transactions.json';
export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
