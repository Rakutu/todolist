import React from 'react';
import styles from './AppHeader.module.css';

const AppHeader = ({todo, done}) => {
	return (
		<div className={styles.appContainer}>
			<h1 className={styles.appHeader}>My ToDo list</h1>
			<div className={styles.leftTodo}>
				<span>
					{todo} more to do, {done} done
				</span>
			</div>
		</div>
		)
}

export default AppHeader;