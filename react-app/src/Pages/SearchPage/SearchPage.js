import React, { useEffect, useState } from "react";

import Loader from "../../components/Loader";
import Button from "../../components/Button";
import HouseTile from "./HouseTile";

import { getSearchResults } from "./modules/api";

import "./SearchPage.css";

const SearchPage = () => {
	const [searchData, setSearchData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		setError(false);
		try {
			const data = await getSearchResults();
			setSearchData(data.listings);
		} catch {
			setError(true);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const renderLoading = () => (
		<div className="search-page__loading">
			<p>Loading homes in Berlin...</p>
			<Loader />
		</div>
	);

	const renderError = () => (
		<div className="search-page__error">
			<div className="search-page__error__title">
				<img src="./error-icon.svg" alt="" />
				<p>Something went wrong...</p>
			</div>
			<p>Please retry by clicking the button below</p>
			<Button onClick={fetchData}>Try again</Button>
		</div>
	);

	return (
		<div className="search-page">
			{loading ? (
				renderLoading()
			) : error ? (
				renderError()
			) : (
				<>
					<div className="search-page__title">
						<h1>Homes in Berlin</h1>
						<h2>More than 200 homes found</h2>
						<Button onClick={fetchData}>Reload results</Button>
					</div>
					<div className="houses-list">
						{searchData.map((item) => (
							<HouseTile {...item} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default SearchPage;
