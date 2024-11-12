import express from "express";
import googleNewsScraper from "google-news-scraper";

const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
	const getData = async () => {
		const articles = await googleNewsScraper({
			searchTerm: "mantova",
			queryVars: {
				gl: "it",
				// ceid: "ES:es",
			},
			limit: 10,
		});

		res.send(articles);
	};

	getData();
});

app.listen(port, () => {
	console.log(`the server is runnig on http://localhost:${port}`);
});
