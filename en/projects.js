import { createClient } from '@/utils/supabase/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


async function fetchProjects() {
    let { data: projects, error } = await supabase.from('project').select('*');

    if (error) {
        console.error("Error fetching projects:", error);
        return;
    }

    const container = document.querySelector('.container');
    container.innerHTML = ""; // Clear existing projects

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = `project ${project.category.toLowerCase()}`;

        projectDiv.innerHTML = `
            <a href="projects/${project.page_url}">
                <img src="${project.image_url}" id="post-img" alt="${project.title}">
            </a>
            <h3 id="post-title">${project.title}</h3>
            <span id="post-date">${new Date(project.date).toLocaleDateString()} 
                <span style="font-size:x-small;">•</span> ${project.tech}
            </span>
        `;

        container.appendChild(projectDiv);
    });
}

async function testSupabase() {
    let { data, error } = await supabase.from('project').select('*');
    console.log("Projects:", data, "Error:", error);
}

testSupabase();


// Call fetchProjects when the page loads
document.addEventListener("DOMContentLoaded", fetchProjects);
