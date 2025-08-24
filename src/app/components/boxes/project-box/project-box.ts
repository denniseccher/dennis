import { Component } from '@angular/core';
import { BoxBase } from '../box-base';
import { ProjectBoxInterface } from '../../../interfaces/boxes/project-box';

@Component({
  selector: 'den-project-box',
  imports: [],
  templateUrl: './project-box.html',
  styleUrl: './project-box.scss'
})
export class ProjectBox extends BoxBase<ProjectBoxInterface>{
  
}
