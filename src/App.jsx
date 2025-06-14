import { useState } from 'react';
import styles from './App.module.css';
import data from './assets/data.json';
import { addClasses } from './functions/addClasses';
import { forwardButtonHandler } from './functions/forwardButtonHandler';

function App() {
	const [activeIndex, setActiveIndex] = useState(data[2].id);

	const isLastStep = data[data.length - 1].id === activeIndex;
	const isFirstStep = data[0].id === activeIndex;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{
							data.find((dataArr) => {
								return dataArr.id === activeIndex;
							}).content
						}
					</div>
					<ul className={styles['steps-list']}>
						{data.map((dataArr) => {
							return (
								// не знаю, как избавиться от класса undefined
								<li
									className={
										styles['steps-item'] +
										' ' +
										styles[addClasses(activeIndex, dataArr.id)]
									}
									key={dataArr.id}
								>
									<button
										className={styles['steps-item-button']}
										id={dataArr.id}
										onClick={() => setActiveIndex(dataArr.id)}
									>
										{dataArr.id.substring(2, 3)}
									</button>
									{dataArr['title']}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={isFirstStep}
							onClick={() =>
								setActiveIndex(
									(activeIndex) => data[Number(activeIndex) - 2].id,
								)
							}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={() =>
								forwardButtonHandler(
									isLastStep,
									data,
									activeIndex,
									setActiveIndex,
								)
							}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
