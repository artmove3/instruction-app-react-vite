import { useState } from 'react';
import styles from './App.module.css';
import data from './assets/data.json';
import { addClasses } from './functions/addClasses';

function App() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [item, setItem] = useState(data);

	const isLastStep = data.length - 1 === activeIndex;
	const isFirstStep = activeIndex === 0;

	const handlePrev = () => {
		setActiveIndex((prev) => prev - 1);
	};
	const handleNext = () => {
		setActiveIndex((prev) => (isLastStep ? 0 : prev + 1));
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{item[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{item.map((dataArr, i) => {
							return (
								<li
									className={
										styles['steps-item'] +
										' ' +
										styles[
											addClasses(item[activeIndex].id, dataArr.id)
										]
									}
									key={dataArr.id}
								>
									<button
										className={styles['steps-item-button']}
										id={dataArr.id}
										onClick={() => setActiveIndex(i)}
									>
										{i + 1}
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
							onClick={handlePrev}
						>
							Назад
						</button>
						<button className={styles.button} onClick={handleNext}>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
