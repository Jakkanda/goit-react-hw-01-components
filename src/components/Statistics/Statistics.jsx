import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statlist}>
        {stats.map(stat => (
          <li className={styles.item} key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.node,
};
