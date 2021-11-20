import React, { useEffect, useState} from 'react'
import Layout from '../layouts/index'
import firebase from "./firebase";

import {
	Article,
	ArticleContent,
	ArticleMedia,
} from '../components/layout/Article'

export default function AboutPage() {
	const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState([false]);

	const ref = firebase.firestore().collection("locations"); //change variable names and data source

	function getData2()  {
        setLoading(true);
        ref.get(),then((items) => {
            const items = items.docs.map((doc) => doc.data());
            setLocations(items);
            setLoading(false);
        });
    }

	useEffect(() => {
        // getData();
        getData2();
    }, [])

	if(loading) {
        return <h1>Loading...</h1>;
    }

	return (
		<Layout>
			<Article>
				<ArticleContent title="About">
				<div>
        			<h1>Schools</h1>
        			{locations.map((location) => (
            			<div key={location.id}>
                			<h2>{school.title}</h2>
                			<p>{location.decs}</p>
            			</div>
            			))}
    			</div>
    			);
					<p>
						Holly is a free HTML/CSS landing page designed and developed by
						@pacovitiello and @DavidePacilio!
					</p>
					<p>
						Holly is suitable for all kind of startups, it's easily
						customizable, and it's downloadable for personal and commercial use.
					</p>
					<p>This template is distributed under the MIT License.</p>
				</ArticleContent>

				<ArticleMedia>
					<img
						src="https://picsum.photos/420/640?grayscale"
						alt="Lorem Picsum"
					/>
				</ArticleMedia>
			</Article>
		</Layout>
	)
}
