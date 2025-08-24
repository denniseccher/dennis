import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Navbar } from '../../components/navbar/navbar';
import { LinkBox } from '../../components/boxes/link-box/link-box';
import { LinkBoxInterface } from '../../interfaces/boxes/link-box';
import { BoxInterface } from '../../interfaces/boxes/box';
import { DefaultBox } from '../../components/boxes/default-box/default-box';
import { LoadingBox } from '../../components/boxes/loading-box/loading-box';
import { Grid } from '../../components/grid/grid';

@Component({
  selector: 'den-test',
  standalone: true,
  imports: [CommonModule, Navbar, CommonModule, Grid],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {

  gridItems: any[] = [
    { cols: 2, rows: 1 },

    {  cols: 1, rows: 2 },

    { cols: 1, rows: 1 },
    { cols: 1, rows: 2 },
    { cols: 2, rows: 1 },
    { cols: 1, rows: 1 },
    {  cols: 2, rows: 1 },
    {  cols: 2, rows: 1 },
    {
      cols: 2,
      rows: 1,
      type: 'link',
      colors: ['#5C44E4', '#8514F5', '#E90464', '#F11653'],
      imgSrc: 'assets/icons/angular.svg',
      link: 'x.com/DennisEccher',
      title: 'google'
    },
    {
      cols: 1,
      rows: 1,
      type: 'link',
      colors: ['#1a1a1a'],
      imgSrc: 'assets/icons/supabase.svg',
    },

    {
      cols: 1,
      rows: 1,
      type: 'link',
      colors: ['#1a1a1a'],
      imgSrc: 'assets/icons/figma.svg',
    },
    {
      cols: 1,
      rows: 1,
      type: 'link',
      colors: ['#1a1a1a'],
      imgSrc: 'assets/icons/github.svg',
      link: 'github.com/denniseccher',
      // title: 'GitHub'
    },
    {
      imgSrc: 'assets/icons/flutter.svg',
      cols: 1,
      rows: 1,
      type: 'link',
      colors: ['#0553B1'],
    },
    {
      cols: 1,
      rows: 1,
      type: 'link',
      colors: ['#d9e2ed'],
      imgSrc: 'assets/icons/postgres.png',
    },
    {
      cols: 1,
      rows: 1,
      type: 'link',
      colors: ['#f0f0f0'],
      imgSrc: 'assets/icons/firebase.svg',
    },

    {
      cols: 1,
      rows: 1,
      type: 'link',
      colors: ['#f0f0f0'],
      imgSrc: 'assets/icons/html.svg',
    },
    {
      cols: 1,
      rows: 1,
      type: 'link',
      colors: ['#f0f0f0'],
      imgSrc: 'assets/icons/css.svg',
    },
    {
      cols: 1,
      rows: 1,
      type: 'link',
      colors: ['#f0f0f0'],
      imgSrc: 'assets/icons/photoshop.svg',
    },
    {
      cols: 1,
      rows: 1,
      type: 'link',
      colors: ['#f0f0f0'],
      imgSrc: 'assets/icons/git.svg'
    },
    {
      cols: 2,
      rows: 1,
      type: 'link',
      colors: ['#f0f0f0'],
      imgSrc: 'assets/icons/linkedin.svg',
      link: 'linkedin.com/in/dennis-eccher-96602a2a7',
      title: 'linkedin'
    },
    {
      cols: 2,
      rows: 2,
      type: 'project',
      colors: ['#f0f0f0'],
      imgSrc: 'assets/icons/linkedin.svg',
      link: 'linkedin.com/in/dennis-eccher-96602a2a7',
      title: 'linkedin'
    },
  ];
}
