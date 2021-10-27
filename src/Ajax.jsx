import { useState, useEffect } from "react";
import React from 'react';
import App from "./App";

const Ajax = () => {
	const url = 'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0';
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then(
				(result) => {
					setItems(result.data.o);
					setIsLoaded(true);
				}, (error) => {
					setError(error);
					setIsLoaded(true);
				}
			)
	}, [])

	if (error) {
		return <div>Ошибка: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Загрузка...</div>;
	} else {
		return (
			<div>
				<App devices={items} />
			</div>
		);
	}
};

export default Ajax;