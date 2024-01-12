import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [routeAnimationState],
})
export class HomeComponent {
  readonly javaDescription: string = 'Picked up Java from the start of college, in 2021. I have been using it in the majority of my Object-Oriented Programs (OOP). Throughout my experience with it, I have enhanced the internal workings of Java to utilize it to its fullest potential, while improving my Object-Oriented thinking alongside it. I had the opportunity to greatly enhance my skills during my work experience in 2023.';
  readonly angularDescription: string = 'During my work experience, I worked on a full-stack application for seven months, where I was introduced to Angular. Since then, I have learned about the behavior and use cases of Angular and the powerful applications it supports. This portfolio is created using Angular, and I aim to continually improve upon it. Future plans include making the site mobile-responsive.';
  readonly sourceControlDescription: string = 'Good grasp on source control and how the branching system behaves. Can confidently use git and provide support for others. Looking forward using Git in my future projects and returning to college with this crucial skill.';
  readonly cppDescription: string = 'Created a UI application with Qt, using C++. Besides that project, I\'ve used C++ within the Computer Graphics and Data Structures and Algorithm modules. Really enjoyed exploring the concepts of low-level programming like pointers, references and allocating data in the heap or stack. Keeping track of memory management in my Qt application made me be more careful when developing the application and be more considerate on how I am using the different functionalities.';
  readonly gitHubDescription: string = 'Experience with GitHub, GitLab and Azure repositories. Familiarity with the structure and features of these sites; pipelines, task boards, pull requests, etc. ';
  readonly cicdDescription: string = 'Familiar with the concept of Agile development. Hands-on experience in developing and deploying a full-stack application within a team during a previous internship. Aware of the process of stand-ups, backlog refinement, sprint review, and retrospective.';
  readonly teamworkDescription: string = 'Engaged in numerous group projects; research, presentation and coding based, during college. During my cooperative work-placement, I collaborated within a dynamically changing team, welcoming new members from different countries. Played a key role in supporting the onboarding process for these new team members onto the project. ';
  readonly researchDescription: string = 'Extensive experience in conducting research when needed, supported by a solid conceptual foundation. This enables me to effectively utilize various tools and articulate my goal even when I\'m not familiar with the specific terminology. An excellent example of research-based development is evident in this portfolio, made possible by my proficiency in utilizing search engines.';

  // Keeping these comments as a note for self
  // @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}
