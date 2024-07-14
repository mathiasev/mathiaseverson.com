import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export type BlogPost = {
    id: string,
    title: string,
    date: Date,
    excerpt: string
};
export type FullBlogPost = BlogPost & {
    content: string,
}
export async function getPostById(id: string): Promise<FullBlogPost> {
    const fileContents = fs.readFileSync(path.join(postsDirectory, `${id}.md`), 'utf8');
    const matterResult = matter(fileContents, { excerpt: true });

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        id,
        ...matterResult.data,
        content: contentHtml,
        excerpt: matterResult.excerpt,
        date: new Date(Date.parse(matterResult.data.date)),
    } as FullBlogPost;
}

export async function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents, { excerpt: true });

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
            excerpt: matterResult.excerpt,
            date: new Date(Date.parse(matterResult.data.date)),
        };
    }) as BlogPost[];
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
export async function getLatestPost(): Promise<BlogPost> {
    let posts = await getSortedPostsData();
    return posts.shift() as BlogPost;
}