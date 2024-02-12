import clsx from 'clsx';
import css from '../TransactionHistory/TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.columnName}>Type</th>
          <th className={css.columnName}>Amount</th>
          <th className={css.columnName}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.bodyContainer}>
        {items.map((item, index) => (
          <tr
            className={clsx(css.box, index % 2 === 0 ? css.first : css.second)}
            key={item.id}
          >
            <td className={css.columnValue}>{item.type}</td>
            <td className={css.columnValue}>{item.amount}</td>
            <td className={css.columnValue}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
