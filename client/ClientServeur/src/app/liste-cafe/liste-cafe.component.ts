import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Cafe} from '../interface/cafe';

@Component({
  selector: 'app-liste-cafe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-cafe.component.html',
  styleUrl: './liste-cafe.component.scss'
})
export class ListeCafeComponent {
  @Input() Cafe!: Cafe;
}