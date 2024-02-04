import fs from 'fs';
import path from "path";
import matter from 'gray-matter';

type RouteType = 'whitePaper' | 'mileStone' | 'about' | 'contact'

const POST_PATH_MAP = {
    'whitePaper': 'Uniting AI and Blockchain for Transformative Solutions',
    'mileStone': `Alpha Release of OpenLand's AI-Blockchain Integration Platform`,
    'about': 'Introducing OpenSand',
    'contact': 'Contact Us',
}

export const getPostData = (route: RouteType) => {
    const postSlug = POST_PATH_MAP[route];
    const postsDirectory = path.join(process.cwd(), 'src/posts');
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}