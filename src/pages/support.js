import React from 'react'
import Layout from '../layouts/index'
import {
	Article,
	ArticleContent,
	ArticleMedia,
} from '../components/layout/Article'

export default function SupportPage() {
	return (
		<Layout>
			<Article>
				<ArticleContent title="Support Local Involvment">
					<p><span>Want to get paid for being outside?</span>
					<span>Become a certified local guide for specific fields of interest.</span>
					<span>Share your interests with the world and grow community involvment with the outdoors.</span></p>
				</ArticleContent>

				<ArticleMedia>
					<img src="https://picsum.photos/420/640" alt="Lorem Picsum" />
				</ArticleMedia>
			</Article>
		</Layout>
	)
}
