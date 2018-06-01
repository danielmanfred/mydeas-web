import { Project } from "./project/project.model";

export class ProjectService {
    constructor() {}

    projects: Project[] = [
        {
          id: "we-work",
          name: "WeWork",
          description: "A WeWork é uma rede global de espaços de trabalho em que empresas e pessoas crescem juntas.",
          logo: "assets/img/projects/wework.png",
          isActive: true,
          tags: ["coworking", "criatividade", "produtividade"],
          category: "Coworking",
          owner: "Arthur Dent"
        },
        {
          id: "slack",
          name: "Slack",
          description: "When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.",
          logo: "assets/img/projects/slack.png",
          isActive: true,
          tags: ["comunicação", "empresas", "negócios"],
          category: "Comunicação",
          owner: "Ford Prefect"
        }
      ]

    getProjects(): Project[] {
        return this.projects
    }
}